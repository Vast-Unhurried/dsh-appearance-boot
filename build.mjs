/**
 * Build this bundle's client.js from the readable fragments in src/.
 *
 *   node dsh-appearance-boot/build.mjs
 */
import { readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';

const ROOT = new URL('.', import.meta.url);
const OUTPUT = fileURLToPath(new URL('client.js', ROOT));
const TEMP = `${OUTPUT}.tmp-${process.pid}.js`;
const read = (name) => readFileSync(new URL(name, ROOT), 'utf8').replace(/\r\n/g, '\n');
const files = ['src/style.js', 'src/jelly.js', 'src/plugin.js'];

const header = `window.__ModuleLoader__.load({
  id: '@local/dsh-appearance-boot',
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

`;
const footer = `  },
});
`;

const body = files.map((file) => read(file)).join('\n');
const asset = `${header}${body}\n${footer}`;

// Validate the generated artifact before replacing client.js: a broken source
// fragment must never leave the installed bundle truncated or invalid.
const cssStart = asset.indexOf('const CSS = `');
if (cssStart < 0) throw new Error('stylesheet block not found');
const cssEnd = asset.indexOf('`;', cssStart + 11);
if (cssEnd < 0) throw new Error('stylesheet terminator not found');
const css = asset.slice(cssStart + 13, cssEnd);
let depth = 0;
for (const char of css) {
  if (char === '{') depth += 1;
  if (char === '}') depth -= 1;
}
if (depth !== 0) throw new Error(`stylesheet braces unbalanced: ${depth}`);
if (css.includes('${')) throw new Error('stylesheet contains an interpolation');
if (css.includes('`')) throw new Error('stylesheet contains a stray backtick');
try {
  new Script(asset);
} catch (error) {
  throw new Error(`client.js does not parse: ${error.message}`);
}

// Write to a temporary file, run Node's own syntax check on it, then replace
// client.js in one rename so a failed build never damages the installed copy.
try {
  writeFileSync(TEMP, asset, 'utf8');
  execFileSync(process.execPath, ['--check', TEMP], { stdio: 'pipe' });
  renameSync(TEMP, OUTPUT);
} catch (error) {
  try {
    rmSync(TEMP, { force: true });
  } catch {
    /* best effort */
  }
  throw error;
}

console.log(`built client.js · ${Buffer.byteLength(asset)} bytes · stylesheet ${Buffer.byteLength(css)} bytes`);
