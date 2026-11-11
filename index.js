/**
 * Host half of the Appearance & Boot bundle.
 *
 * Two jobs, both before the React shell exists:
 *
 *   1. Serve the self-contained 550C boot page. It lives in an iframe for the
 *      same reason the original does: its stylesheet, its script and its
 *      full-screen layout must not leak into, or be styled by, the Harness
 *      shell.
 *   2. Inject a solid first frame into every index response while the boot
 *      animation is enabled. The client half replaces that cover with the real
 *      iframe on the same frame, so DSH's own "Loading plugins…" card never
 *      flashes between the two.
 *
 * The page keeps the 550C source's own dark palette. The first-frame cover uses
 * the same #050403 ground so the handoff is invisible.
 */
import { createHash } from 'node:crypto'
import { readFileSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

/** Same localStorage contract as src/plugin.js. Keep both sides in sync. */
const BOOT_KEY = 'dsh-appearance-boot:boot'
/** The client half's handshake; see endFirstFrame() in src/plugin.js. */
const FIRST_FRAME_GLOBAL = '__dshJellyBootFirstFrame'
const BOOT_BG = '#050403'
const FIRST_FRAME_MAX_MS = 6000
const BOOT_PATH = '/dsh-appearance-boot/boot/550c.html'

const BOOT_FILE = fileURLToPath(new URL('./boot/550c.html', import.meta.url))

/** A solid cover under the splash; the iframe above it uses the same colour. */
const FIRST_FRAME_CSS =
  'html.dsh-jelly-boot-first{background:' +
  BOOT_BG +
  '}' +
  'html.dsh-jelly-boot-first::before{content:"";position:fixed;inset:0;background:' +
  BOOT_BG +
  ';z-index:2147483000;pointer-events:none}'

/**
 * Runs while <head> is parsing, before the shell paints its loading card.
 *
 * It bows out when the switch is off, or when the user asked for reduced
 * motion. The timeout is a safety net for a client bundle that never arrives:
 * a black page must not outlive the reason for it.
 */
const FIRST_FRAME_SCRIPT =
  '(function(){' +
  'try{' +
  'if(window.localStorage.getItem(' +
  JSON.stringify(BOOT_KEY) +
  ')==="off")return;' +
  'if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;' +
  '}catch(error){}' +
  'var root=document.documentElement;' +
  'window.' +
  FIRST_FRAME_GLOBAL +
  '={end:function(){root.classList.remove("dsh-jelly-boot-first")}};' +
  'root.classList.add("dsh-jelly-boot-first");' +
  'window.setTimeout(function(){if(!window.__dshJellyBootMounted)window.' +
  FIRST_FRAME_GLOBAL +
  '.end()},' +
  String(FIRST_FRAME_MAX_MS) +
  ');' +
  '})()'

/**
 * Read the boot page once and keep it until the file changes on disk. The
 * response still revalidates every load (the page is replaced by a plugin
 * update), but a repeat navigation costs a 304 instead of re-reading and
 * re-sending 52 KB from disk.
 */
let bootPage = null

function loadBootPage() {
  const stat = statSync(BOOT_FILE)
  if (
    bootPage !== null &&
    bootPage.mtimeMs === stat.mtimeMs &&
    bootPage.ctimeMs === stat.ctimeMs &&
    bootPage.size === stat.size
  )
    return bootPage
  const body = readFileSync(BOOT_FILE)
  const html = body.toString('utf8')
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)]
  const scriptText = scripts.length === 1 ? scripts[0][1].replace(/\r\n?/g, '\n') : null
  bootPage = {
    body,
    mtimeMs: stat.mtimeMs,
    ctimeMs: stat.ctimeMs,
    size: stat.size,
    etag: `"${createHash('sha256').update(body).digest('hex').slice(0, 32)}"`,
    // The page has exactly one inline script. A SHA-256 source lets the CSP
    // drop `script-src 'unsafe-inline'` while still allowing that exact block;
    // if the page ever grows a second script, fall back to the old policy.
    // HTML parsers normalise CRLF inside script data, so hash the normalised
    // text to keep the source valid on a CRLF checkout too.
    scriptHash: scriptText === null ? null : createHash('sha256').update(scriptText, 'utf8').digest('base64'),
  }
  return bootPage
}

function sendBootPage(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { allow: 'GET, HEAD' })
    res.end()
    return
  }
  let page
  try {
    page = loadBootPage()
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
    res.end('not found')
    return
  }
  const ifNoneMatch = req.headers['if-none-match']
  const revalidated =
    typeof ifNoneMatch === 'string' &&
    ifNoneMatch.split(',').some((tag) => {
      const value = tag.trim()
      return value === '*' || value === page.etag || value === `W/${page.etag}`
    })
  if (revalidated) {
    res.writeHead(304, { etag: page.etag, 'cache-control': 'no-cache' })
    res.end()
    return
  }
  const scriptSource = page.scriptHash == null ? "'unsafe-inline'" : `'sha256-${page.scriptHash}'`
  res.writeHead(200, {
    'content-type': 'text/html; charset=utf-8',
    'cache-control': 'no-cache',
    etag: page.etag,
    'content-security-policy':
      "default-src 'none'; style-src 'unsafe-inline'; script-src " +
      scriptSource +
      "; img-src data:; base-uri 'none'; form-action 'none'; object-src 'none'; frame-ancestors 'self'",
    'permissions-policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'SAMEORIGIN',
    'referrer-policy': 'no-referrer',
  })
  res.end(req.method === 'HEAD' ? undefined : page.body)
}

/**
 * @param ctx - the plugin context.
 */
export function apply(ctx) {
  ctx.on('webserver/index-inject', (table) => {
    table.push({ kind: 'style', text: FIRST_FRAME_CSS })
    table.push({ kind: 'script', placement: 'head', text: FIRST_FRAME_SCRIPT })
  })

  // The route is optional: a carrier without webServer still gets the first
  // frame and the Settings page; only the preview iframe reports itself as
  // unavailable. It never takes the plugin down with it.
  ctx.inject(['webServer'], (webCtx) => {
    webCtx.effect(() => {
      try {
        return webCtx.webServer.register({ kind: 'exact', path: BOOT_PATH, handler: sendBootPage })
      } catch (error) {
        console.error('[dsh-appearance-boot] could not register the boot route', error)
        return () => {}
      }
    }, 'appearance & boot: boot page route')
  })
}
