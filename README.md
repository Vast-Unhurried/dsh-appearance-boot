# Appearance & Boot

`@local/dsh-appearance-boot` (display name **Appearance & Boot** / **外观与启动**)
bundles the system-wide still-water skin, the **550C boot animation** and a
**task-completion sound**. All three are configured from one page:
**设置 → 外观与启动**.

## Requirements

DeepSeek Harness 0.2.2-rc.5 (Cordis 4.1) or a compatible build. The skin covers
the card, hover-card, notification, menu and chat-code tokens added by rc.2 and
keeps the rc.5 token surface fully covered.

## Settings

The page has three tab-filtered chapters. Clicking **01 开机动画** shows only the
boot animation, **02 皮肤** only the skin, and **03 提示音** only the completion
sound.

| Chapter | What it does |
|---|---|
| **01 开机动画** | Plays the 550C terminal takeover once per page load, then reveals the app. Preview plays it on demand without changing the startup switch. |
| **02 皮肤** | Applies the neutral palette, square materials and the shared ASCII-jellyfish canvas to the whole Harness. Preview applies it to the live interface for seven seconds, then restores the previous state. |
| **03 提示音** | Plays a short tone when an Agent turn finishes. Four built-in tones are synthesised locally; volume is adjustable, and one custom audio file can be uploaded, replaced or removed. |

The skin and boot switches are stored in `localStorage`
(`dsh-appearance-boot:boot` and `dsh-appearance-boot:skin`) and default to on.
The sound switch, volume and selected tone use their own keys and default to on,
60% and the drop tone. They survive a refresh and never touch page layout or
information architecture.

## 550C boot animation

The animation comes from [Voidpocket/html_550c](https://github.com/Voidpocket/html_550c)
(MIT). This build starts after the original logo-drawing opening — the first few
seconds with the SVG 550C mark are omitted — and then follows the source's
terminal takeover as-is: access authorization, link monitor, signal pollution,
firmware injection, the 47-node rewrite, and the final `SYSTEM IS REWRITTEN`
card. It runs about ten seconds, can be skipped by clicking the frame or
pressing `Esc`, and is played inside an isolated same-origin iframe so its
stylesheet and script never touch the Harness shell. The final `SYSTEM IS
REWRITTEN` frame is held just long enough to read, then the terminal glitches
and collapses toward the CRT point without drawing a central singular point or
radial light rays. A white-hot flash, shockwave rings, and a final scanline
sweep hand the screen over to the already-loaded Harness interface.

The Host half also injects a solid `#050403` first frame into every index
response while the animation is enabled, so DSH's own "HARNESS / Loading
plugins…" card never flashes underneath. The client replaces that cover with the
real iframe on the first frame.

## The skin

- The neutral shell palette is applied through `ctx.theme.overrideTokens`, so
  the built-in light / dark / system preference remains the only appearance
  switch.
- Square material rules cover the shapes a token cannot express (menus, dialogs,
  tooltips, composer card, scrollbars, selection).
- One `shell`-frame canvas holds six procedural ASCII species (veil, lantern,
  kelp, ghost, deep, pearl). Each animal swims with a true two-dimensional
  heading, pulsing, gliding, banking slightly and trailing a layered skirt.
- Pointer movement is a visible eddy; a click sends a pressure ring through the
  school. Reduced motion holds a composed static frame.
- Each species is rasterised once per theme into seven cached layers; the
  animation loop composites sprites rather than repainting thousands of glyphs.

## The completion sound

- The trigger is `ctx.uiSession.sessionStatus`: a main Session that goes from
  running to idle raises one completion edge. Host list baselines and
  `api-session/status` events are already reconciled by that service, so the
  plugin never polls and never touches Remote internals.
- Subagent Sessions are separate tasks and are filtered out; only the parent
  Session's final completion plays, so one task produces one sound.
- The four built-in tones (`drop`, `chime`, `glass`, `signal`) are synthesised
  with Web Audio envelopes; there are no audio assets, fetches or licences.
- `03 提示音` owns the switch, a 0–100 volume slider, the tone picker and one
  custom upload. The custom file is decoded and stored in IndexedDB
  (`dsh-appearance-boot:sounds`) and never leaves the machine; a browser
  without IndexedDB keeps it in memory for the current page only.
- A user gesture primes the `AudioContext`. If the browser still refuses
  autonomous playback, the completion attempt stays silent instead of raising
  an error; the Settings preview always works from its own click.
- Volume uses a perceptual curve over a near-full-scale master; a limiter keeps
  100% loud without clipping, while custom audio takes a unity-style path.

## Files

| File | Role |
|---|---|
| `client.js` | Built Client module: settings page, skin runtime, boot controller, completion sound. |
| `index.js` | Host half: serves `boot/550c.html` and injects the first frame. |
| `boot/550c.html` | Self-contained 550C page (logo opening removed). |
| `src/style.js` | Palette, skin rules and Settings page styles. |
| `src/jelly.js` | Procedural ASCII jellyfish renderer. |
| `src/plugin.js` | Switches, settings UI, completion sound, skin and boot runtimes. |
| `cordis.patch.yml` | Inserts the one bundle row. |
| `THIRD-PARTY-NOTICES.md` | Source and licence note for the 550C animation. |

## Build and verify

```text
node dsh-appearance-boot/build.mjs   # rebuild client.js from src/
node _verify/probe-tabs.mjs          # drives the live app; uses DSH_GUI_URL or --url
node _verify/probe-sound.mjs         # checks the completion player in a mocked VM
node _verify/probe-sound-upload.mjs  # uploads a WAV through the live Settings page
node _verify/dead-code-appearance.mjs # dead declarations, CSS rules, locale keys
node _verify/shot-shell.mjs          # captures the active skin on the shell
node _verify/boot-timing.mjs         # measures the standalone boot page
```

## Credits

- 550C animation and original HTML: [Voidpocket](https://github.com/Voidpocket),
  MIT. The plugin adaptation keeps the source's palette, panels and timeline
  after the omitted logo opening.
- The water skin, Appearance & Boot settings page and plugin engineering: this
  workspace.
