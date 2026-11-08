# Jelly Skin

`@local/dsh-jelly-skin` is a system-wide skin for the DSH Web GUI. It is the
separate home of the neutral ASCII-jellyfish material that used to live inside
`dsh-workbench`. This build targets DeepSeek Harness 0.2.2-rc.1 (Cordis 4.1).

## What it owns

- The neutral shell palette, applied through `ctx.theme.overrideTokens`, so the
  built-in light / dark / system preference remains the only appearance switch.
- The square material rules the shell cannot express through a token alone
  (menus, dialogs, tooltips, composer card, scrollbars, selection).
- One `shell`-frame canvas with six procedural ASCII species (veil, lantern,
  kelp, ghost, deep, pearl). Each animal patrols its own patch of water with a
  true two-dimensional heading: it can swim up, down, sideways or turn back. A
  quick bell contraction drives it along that heading; a long relaxation lets it
  glide and sink while the ambient current carries it between beats.
- The bell stays upright. Steering happens inside the water rather than by
  spinning the animal: course changes are slow, thrust stays low until the
  heading lines up, and the body only banks a few degrees. The bell deforms by
  about a fifth of its width on a full stroke, with an overshooting rebound.
- The skirt is split into three interleaved layers × two depth bands. A springy
  tip lag, a travelling ripple, bell flare and pointer wake all feed its shear,
  so the tentacles trail behind the stroke and react after the body has moved.
- Six animals share a light collision field: each bell has mass and a radius,
  contacts separate the bodies, exchange a damped impulse and feed a short bell
  squash plus a tentacle jolt. Close passes also release a small bubble pair.
- Pointer movement is a visible eddy with a hard outward hand and a tangential
  swirl; moving it close to an animal pushes and rolls the bell while the skirt
  streams behind. A click sends a visible pressure ring through the school,
  releasing a larger bubble burst. Reduced motion still renders a composed frame.
- Each species is rasterised once per theme into seven cached layers (one bell
  plus six tentacle bands). The animation loop composites 42 images per frame
  instead of repainting thousands of glyphs; a 120 Hz fixed-step simulation with
  interpolated paint keeps the motion continuous through frame drops.
- Its own plugin metadata, locale resources and icon.

## What it does not own

- Any page, navigation entry, board, setting or business document. It does not
  register a slot, read the workbench DOM, or change information architecture.
- The workbench's own layout. `dsh-workbench` uses native `--dsw-*` tokens; when
  this skin is enabled every page inherits the neutral palette and the left rail
  and centre stay open water, while the right sidebar keeps a solid native
  surface only while it is open (and paints nothing once collapsed), so a
  fullscreen panel never shows the conversation or the school through its
  top-left corner. When it is disabled the workbench stays native.

## Build and verify

```text
node dsh-jelly-skin/build.mjs        # rebuild client.js from src/
node _verify/probe-skin.mjs         # reads DSH_WEB_URL; pass --url to override
```

The probe drives the real app: it checks the body-level marker, the token
overrides, the six species, visible travel, pointer response, click-through and
the reduced-motion frame, and confirms that the workbench no longer owns the
global appearance marker.

## Files

| File | Role |
|---|---|
| `client.js` | Built client module: token layer, stylesheet, frame canvas. |
| `index.js` | Host half; no Host work is needed for a visual skin. |
| `src/style.js` | Palette, global material rules and tank styles. |
| `src/jelly.js` | Procedural ASCII species and canvas renderer. |
| `src/plugin.js` | Theme registration and frame attachment. |
| `cordis.patch.yml` | Inserts the one bundle row. |
