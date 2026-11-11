window.__ModuleLoader__.load({
  id: '@local/dsh-appearance-boot',
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

    const CSS = `
/* ── Appearance & Boot · the still-water skin ─────────────────────────────
   The skin is not a page: it owns the application's neutral materials and one
   shared school of ASCII jellyfish behind the whole frame. Light is paper;
   dark is graphite. The shell keeps every behaviour and every control. */

/* ── palette ─────────────────────────────────────────────────────────────── */
body[data-dsh-appearance-boot],
.jelly-settings{
  --jelly-skin-ground:#f9fafb;
  --jelly-skin-sheet:#ffffff;
  --jelly-skin-sheet-2:#f1f3f5;
  --jelly-skin-paper:#ffffff;
  --jelly-skin-ink:#0f1115;
  --jelly-skin-ink-2:#61666b;
  --jelly-skin-ink-3:#6b7076;
  --jelly-skin-rule:rgba(15,17,21,.08);
  --jelly-skin-rule-2:rgba(15,17,21,.16);
  --jelly-skin-window:#0f1115;
  --jelly-skin-window-ink:#f9fafb;
  --jelly-skin-accent:#2c2c2e;
  --jelly-skin-accent-soft:rgba(44,44,46,.06);
  --jelly-skin-verm:#d92d20;
  --jelly-skin-ok:#2e7d4f;
  --jelly-skin-today:#9a6700;
  --jelly-skin-focus:#0f1115;
  --jelly-skin-bubble:rgba(15,17,21,.05);
  --jelly-skin-hover:rgba(15,17,21,.045);
  --jelly-skin-jelly-red:#b23a2e;
  --jelly-skin-jelly-red-bright:#8e251c;
  --jelly-skin-jelly-orange:#b25a1b;
  --jelly-skin-jelly-orange-bright:#8d3d0d;
  --jelly-skin-jelly-yellow:#8d6a12;
  --jelly-skin-jelly-yellow-bright:#6e510a;
  --jelly-skin-jelly-green:#2f714f;
  --jelly-skin-jelly-green-bright:#1e5638;
  --jelly-skin-jelly-blue:#345b8c;
  --jelly-skin-jelly-blue-bright:#23446f;
  --jelly-skin-jelly-purple:#5c4583;
  --jelly-skin-jelly-purple-bright:#453066;
  --jelly-skin-jelly-bubble:rgba(60,110,130,.38);
  --jelly-skin-jelly-teal:#2f6b7d;
  --jelly-skin-text:system-ui,-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;
}
body[data-dsh-appearance-boot][data-ds-dark-theme],
body[data-ds-dark-theme] .jelly-settings{
  --jelly-skin-ground:#151517;
  --jelly-skin-sheet:#1b1b1c;
  --jelly-skin-sheet-2:#232324;
  --jelly-skin-paper:#1b1b1c;
  --jelly-skin-ink:#f9fafb;
  --jelly-skin-ink-2:#adb2b8;
  --jelly-skin-ink-3:#81858c;
  --jelly-skin-rule:rgba(249,250,251,.08);
  --jelly-skin-rule-2:rgba(249,250,251,.16);
  --jelly-skin-window:#f5f6f7;
  --jelly-skin-window-ink:#0f1115;
  --jelly-skin-accent:#ebeef2;
  --jelly-skin-accent-soft:rgba(235,238,242,.10);
  --jelly-skin-verm:#f25a5a;
  --jelly-skin-ok:#7bd39f;
  --jelly-skin-today:#f7ad31;
  --jelly-skin-focus:#f9fafb;
  --jelly-skin-bubble:rgba(245,246,247,.07);
  --jelly-skin-hover:rgba(245,246,247,.055);
  --jelly-skin-jelly-red:#ff6b5a;
  --jelly-skin-jelly-red-bright:#ffb4a8;
  --jelly-skin-jelly-orange:#ff9a4d;
  --jelly-skin-jelly-orange-bright:#ffd0a8;
  --jelly-skin-jelly-yellow:#f2cf5e;
  --jelly-skin-jelly-yellow-bright:#fff0a8;
  --jelly-skin-jelly-green:#7bc7a3;
  --jelly-skin-jelly-green-bright:#b4ffd0;
  --jelly-skin-jelly-blue:#87b4ff;
  --jelly-skin-jelly-blue-bright:#c3d8ff;
  --jelly-skin-jelly-purple:#c39cf0;
  --jelly-skin-jelly-purple-bright:#ead4ff;
  --jelly-skin-jelly-bubble:rgba(140,205,225,.4);
  --jelly-skin-jelly-teal:#7fc4d4;
}

/* ── the system shell through still water ───────────────────────────────── */
body[data-dsh-appearance-boot]{
  background-color:var(--jelly-skin-ground);
  color:var(--jelly-skin-ink);
  font-family:var(--jelly-skin-text);
}
body[data-dsh-appearance-boot] header{
  border-bottom:1px solid var(--jelly-skin-rule);
  background:transparent!important;
  box-shadow:none;
}
body[data-dsh-appearance-boot] button,
body[data-dsh-appearance-boot] input,
body[data-dsh-appearance-boot] textarea,
body[data-dsh-appearance-boot] select{font-family:var(--jelly-skin-text);border-radius:0}
body[data-dsh-appearance-boot] [data-composer-card],
body[data-dsh-appearance-boot] [data-composer-card] *,
body[data-dsh-appearance-boot] [role="dialog"],
body[data-dsh-appearance-boot] [role="menu"],
body[data-dsh-appearance-boot] [role="listbox"],
body[data-dsh-appearance-boot] [role="alertdialog"],
body[data-dsh-appearance-boot] [class*="card"],
body[data-dsh-appearance-boot] [class*="Card"],
body[data-dsh-appearance-boot] [class*="badge"],
body[data-dsh-appearance-boot] [class*="Badge"],
body[data-dsh-appearance-boot] [class*="pill"],
body[data-dsh-appearance-boot] [class*="Pill"],
body[data-dsh-appearance-boot] [class*="tag"],
body[data-dsh-appearance-boot] [class*="Tag"]{border-radius:0}
body[data-dsh-appearance-boot] [role="menu"],
body[data-dsh-appearance-boot] [role="listbox"],
body[data-dsh-appearance-boot] [role="dialog"],
body[data-dsh-appearance-boot] [role="alertdialog"]{
  background:var(--jelly-skin-paper)!important;color:var(--jelly-skin-ink)!important;
  border:1px solid var(--jelly-skin-rule-2)!important;box-shadow:0 18px 44px -26px rgba(15,17,21,.32)!important;
  backdrop-filter:none!important
}
body[data-dsh-appearance-boot] [role="menu"],
body[data-dsh-appearance-boot] [role="listbox"]{background:var(--jelly-skin-sheet-2)!important}
body[data-dsh-appearance-boot] [role="menubar"]{background:var(--jelly-skin-sheet-2)!important;color:var(--jelly-skin-ink)!important;border-bottom:1px solid var(--jelly-skin-rule)!important;border-radius:0!important}
body[data-dsh-appearance-boot] [role="menubar"] button{color:var(--jelly-skin-ink);border-radius:0}
body[data-dsh-appearance-boot] [role="menu"] [role="menuitem"],
body[data-dsh-appearance-boot] [role="menu"] button,
body[data-dsh-appearance-boot] [role="listbox"] [role="option"],
body[data-dsh-appearance-boot] [role="listbox"] button{color:var(--jelly-skin-ink);border-radius:0}
body[data-dsh-appearance-boot] [role="menu"] [role="menuitem"]:hover,
body[data-dsh-appearance-boot] [role="menu"] button:hover,
body[data-dsh-appearance-boot] [role="listbox"] [role="option"]:hover,
body[data-dsh-appearance-boot] [role="listbox"] button:hover{background:var(--jelly-skin-accent-soft)!important;color:var(--jelly-skin-ink)!important}
body[data-dsh-appearance-boot] [role="tooltip"]{
  background:var(--jelly-skin-paper)!important;color:var(--jelly-skin-ink)!important;
  border:1px solid var(--jelly-skin-rule-2)!important;border-radius:6px!important;
  box-shadow:0 8px 22px -16px rgba(15,17,21,.4)!important;
  font-family:var(--jelly-skin-text)!important;font-size:12px!important;line-height:18px!important
}
body[data-dsh-appearance-boot] [data-composer-card] button[class*="primary"],
body[data-dsh-appearance-boot] [data-composer-card] button[type="submit"]{
  color:var(--jelly-skin-window-ink)!important
}
body[data-dsh-appearance-boot] [data-composer-card] button[class*="primary"] svg,
body[data-dsh-appearance-boot] [data-composer-card] button[type="submit"] svg{color:inherit!important}
body[data-dsh-appearance-boot] [data-composer-card] button[class*="primary"][disabled],
body[data-dsh-appearance-boot] [data-composer-card] button[type="submit"][disabled]{
  background:var(--jelly-skin-sheet-2)!important;color:var(--jelly-skin-ink-3)!important;opacity:1!important
}
body[data-dsh-appearance-boot] [data-composer-card]{border:1px solid var(--jelly-skin-rule-2);background:var(--jelly-skin-sheet);box-shadow:none}
body[data-dsh-appearance-boot] [data-composer-card]:focus-within{border-color:var(--jelly-skin-accent)}
body[data-dsh-appearance-boot] [data-composer-input]{caret-color:var(--jelly-skin-accent)}
body[data-dsh-appearance-boot] ::selection{background:var(--jelly-skin-accent-soft);color:var(--jelly-skin-ink)}
body[data-dsh-appearance-boot] [role="dialog"]>nav{border-right:1px solid var(--jelly-skin-rule)}
body[data-dsh-appearance-boot] *{scrollbar-width:thin;scrollbar-color:var(--jelly-skin-rule-2) transparent}
body[data-dsh-appearance-boot] *::-webkit-scrollbar{width:8px;height:8px}
body[data-dsh-appearance-boot] *::-webkit-scrollbar-thumb{background:var(--jelly-skin-rule-2);border:2px solid transparent;background-clip:padding-box}
body[data-dsh-appearance-boot] *::-webkit-scrollbar-track{background:transparent}

/* One cheap shadow keeps text legible over the moving water. Large multi-layer
   halos forced the whole shell to repaint blurred glyphs on every water frame. */
body[data-dsh-appearance-boot] :where(header, nav, main, [data-shell-overlay]) {
  text-shadow:0 1px 2px var(--jelly-skin-ground);
}

/* ── one shared school for the whole frame ──────────────────────────────── */
/* The rail and the centre stay open water. The right panel keeps the native
   solid tab surface; the panel element itself must stay transparent, because it
   stays in the frame while its dock slides out on collapse. */
body[data-dsh-appearance-boot] [data-jelly-skin-frame]{background:transparent!important}
body[data-dsh-appearance-boot] [data-jelly-skin-side],
body[data-dsh-appearance-boot] [data-jelly-skin-center]{
  background:transparent!important;
  --dsw-alias-bg-base:transparent;
}
body[data-dsh-appearance-boot] [data-jelly-skin-right]{
  --dsw-alias-bg-base:var(--jelly-skin-ground);
}
body[data-dsh-appearance-boot] [data-jelly-skin-frame] > .jelly-skin-tank{
  position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;contain:strict;opacity:.8;
}
body[data-dsh-appearance-boot] .jelly-skin-canvas{
  display:block;width:100%;height:100%;mix-blend-mode:multiply;opacity:.98;pointer-events:none;
}
body[data-dsh-appearance-boot][data-ds-dark-theme] .jelly-skin-canvas{
  mix-blend-mode:screen;
}

/* ── settings · 外观与启动 ──────────────────────────────────────────────
   The page is a specimen sheet, not a second application: two numbered
   chapters, exact rules, one live tank. It uses the skin's own palette even
   when the skin switch is off, so the page always previews the material it
   is configuring. */
.jelly-settings{
  box-sizing:border-box;display:flex;flex-direction:column;width:100%;max-width:none;min-width:0;min-height:100%;
  padding:22px 26px 38px;background:var(--jelly-skin-ground);color:var(--jelly-skin-ink);
  font:400 12.5px/1.65 var(--jelly-skin-text);container-type:inline-size;
}
.jelly-settings *{box-sizing:border-box}
.jelly-settings ::selection{background:var(--jelly-skin-accent-soft);color:var(--jelly-skin-ink)}
.jelly-settings :where(a,button):focus-visible{outline:2px solid var(--jelly-skin-focus);outline-offset:2px}
.jelly-masthead{padding:0 0 14px;border-bottom:1px solid var(--jelly-skin-rule)}
.jelly-title-row{display:flex;align-items:baseline;gap:12px;min-width:0}
.jelly-settings h1{margin:0;font:600 31px/1.02 var(--jelly-skin-text);letter-spacing:-.04em}
.jelly-lede{margin:10px 0 0;max-width:64ch;color:var(--jelly-skin-ink-2);font-size:12.5px;line-height:1.8}
.jelly-index{display:flex;align-items:stretch;margin-top:16px;border-top:1px solid var(--jelly-skin-rule);border-bottom:1px solid var(--jelly-skin-rule)}
.jelly-index-item{display:flex;flex:1 1 0;align-items:baseline;gap:8px;min-width:0;padding:11px 12px 10px;border-bottom:2px solid transparent;color:var(--jelly-skin-ink-2);text-decoration:none;font:500 13px/1.2 var(--jelly-skin-text)}
.jelly-index-item + .jelly-index-item{border-left:1px solid var(--jelly-skin-rule)}
.jelly-index-item:hover{color:var(--jelly-skin-ink);background:var(--jelly-skin-hover)}
.jelly-index-no{flex:none;color:var(--jelly-skin-accent);font:500 11px/1 "Cascadia Mono",Consolas,monospace;letter-spacing:.04em}
.jelly-index-name{min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.jelly-index-meta{margin-left:auto;color:var(--jelly-skin-ink-3);font:500 10px/1 "Cascadia Mono",Consolas,monospace;letter-spacing:.12em}
.jelly-block{margin-top:30px;scroll-margin-top:18px}
.jelly-block-head{display:flex;align-items:baseline;gap:9px;padding:0 0 7px;border-bottom:1px solid var(--jelly-skin-rule)}
.jelly-block-no{flex:none;color:var(--jelly-skin-accent);font:600 10.5px/1.2 "Cascadia Mono",Consolas,monospace;letter-spacing:.05em}
.jelly-block-head h2{margin:0;font:600 15px/1.3 var(--jelly-skin-text);letter-spacing:.02em}
.jelly-block-rule{flex:1;min-width:10px;height:1px;margin-left:2px;background:var(--jelly-skin-rule)}
.jelly-block-hint{margin:8px 0 0;max-width:66ch;color:var(--jelly-skin-ink-3);font-size:11.5px;line-height:1.7}
.jelly-card{margin-top:13px;display:flex;flex-direction:column;align-items:stretch;border:1px solid var(--jelly-skin-rule-2);background:var(--jelly-skin-sheet)}
.jelly-card-main{min-width:0;padding:18px 20px 16px}
.jelly-card-title-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;min-width:0}
.jelly-card-title-row h3{margin:0;font:600 17px/1.25 var(--jelly-skin-text);letter-spacing:-.01em}
.jelly-status{display:inline-flex;align-items:center;gap:5px;flex:none;padding:2px 7px;border:1px solid var(--jelly-skin-rule-2);color:var(--jelly-skin-ink-3);font:500 10px/1.5 "Cascadia Mono",Consolas,monospace;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}
.jelly-status.is-on{color:var(--jelly-skin-ok);border-color:var(--jelly-skin-ok)}
.jelly-status-dot{width:5px;height:5px;background:currentColor}
.jelly-card-copy{margin:9px 0 0;max-width:52ch;color:var(--jelly-skin-ink-2);font-size:12px;line-height:1.78}
.jelly-card-actions{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:16px}
.jelly-card-inline-note{color:var(--jelly-skin-ink-3);font-size:10.5px;line-height:1.6}
.jelly-switch{position:relative;flex:none;width:40px;height:22px;padding:0;border:1px solid var(--jelly-skin-rule-2);background:var(--jelly-skin-sheet-2);cursor:pointer;transition:background .18s ease,border-color .18s ease}
.jelly-switch[aria-checked="true"]{background:var(--jelly-skin-ink);border-color:var(--jelly-skin-ink)}
.jelly-switch-knob{position:absolute;top:3px;left:3px;width:14px;height:14px;background:var(--jelly-skin-ink-3);transition:transform .18s ease,background .18s ease}
.jelly-switch[aria-checked="true"] .jelly-switch-knob{transform:translateX(18px);background:var(--jelly-skin-window-ink)}
.jelly-button{display:inline-flex;align-items:center;gap:7px;height:29px;padding:0 12px;border:1px solid var(--jelly-skin-rule-2);background:transparent;color:var(--jelly-skin-ink);font:500 11px/1 var(--jelly-skin-text);cursor:pointer;transition:background .15s ease,border-color .15s ease}
.jelly-button:hover:not(:disabled){background:var(--jelly-skin-accent-soft);border-color:var(--jelly-skin-ink-3)}
.jelly-button:disabled{opacity:.45;cursor:default}
.jelly-play{flex:none;display:block;color:var(--jelly-skin-accent)}
.jelly-meta{display:flex;flex-wrap:wrap;gap:6px 14px;margin:14px 0 0;padding:10px 0 0;border-top:1px solid var(--jelly-skin-rule);list-style:none}
.jelly-meta li{display:flex;align-items:center;gap:6px;color:var(--jelly-skin-ink-3);font:500 10.5px/1.4 "Cascadia Mono",Consolas,monospace;letter-spacing:.04em}
.jelly-meta li::before{content:"";width:4px;height:4px;background:var(--jelly-skin-accent)}
.jelly-footnote{margin:10px 0 0;color:var(--jelly-skin-ink-3);font-size:10.5px;line-height:1.7}
.jelly-footnote a{color:var(--jelly-skin-ink);text-decoration:underline;text-underline-offset:3px}
.jelly-local-note{margin:28px 0 0;padding:12px 0 0;border-top:1px solid var(--jelly-skin-rule);color:var(--jelly-skin-ink-3);font:500 10.5px/1.6 "Cascadia Mono",Consolas,monospace;letter-spacing:.06em}

/* the 550C specimen: a miniature terminal, not a second iframe */
.jelly-boot-specimen{position:relative;min-height:206px;padding:12px 15px;overflow:hidden;border-top:1px solid var(--jelly-skin-rule-2);background:#050403;color:#d8c090;font:10px/1.5 "Cascadia Mono","SFMono-Regular",Consolas,monospace}
.jelly-boot-specimen::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(to bottom,rgba(232,160,32,.045) 0,rgba(232,160,32,.045) 1px,transparent 1px,transparent 3px);pointer-events:none}
.jelly-mini-top{display:flex;justify-content:space-between;gap:8px;padding:0 0 5px;border-bottom:1px solid rgba(232,160,32,.3);color:#e8a020;font-size:8.5px;letter-spacing:.1em;white-space:nowrap}
.jelly-mini-live{color:#e05030}
.jelly-mini-grid{display:grid;grid-template-columns:62px minmax(0,1fr) 54px;gap:7px;margin-top:8px}
.jelly-mini-col{display:flex;flex-direction:column;gap:4px}
.jelly-mini-col b{color:#8a7248;font-size:7px;font-weight:500;letter-spacing:.1em}
.jelly-mini-col i{height:3px;background:rgba(232,160,32,.22)}
.jelly-mini-col i:nth-child(3){width:78%}
.jelly-mini-main{display:flex;flex-direction:column;gap:3px;min-width:0;color:#a89058;font-size:7.5px;line-height:1.65;white-space:nowrap;overflow:hidden}
.jelly-mini-main .is-hot{margin-top:5px;color:#ffc043;font-size:8.5px;letter-spacing:.12em;text-shadow:0 0 10px rgba(232,160,32,.6)}
.jelly-mini-nodes{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;align-content:start}
.jelly-mini-nodes i{width:100%;aspect-ratio:1;border:1px solid rgba(184,200,64,.45);background:rgba(184,200,64,.08);animation:jellyNode 2.4s ease-in-out infinite}
@keyframes jellyNode{0%,100%{opacity:.24}50%{opacity:.82;background:rgba(184,200,64,.28)}}
.jelly-mini-bar{display:flex;align-items:center;gap:8px;margin-top:11px;color:#8a7248;font-size:8px;letter-spacing:.1em}
.jelly-mini-bar i{flex:1;height:5px;background:linear-gradient(90deg,#8a5e10,#ffc043);box-shadow:0 0 8px rgba(232,160,32,.35)}
.jelly-mini-bar b{color:#ffc043;font-weight:400}

/* the live skin specimen: a real mountJellyTank, in a small shell mock */
.jelly-stage{display:grid;grid-template-columns:112px minmax(0,1fr);min-height:252px;overflow:hidden;border-top:1px solid var(--jelly-skin-rule-2);background:var(--jelly-skin-ground)}
.jelly-stage-rail{display:flex;flex-direction:column;gap:5px;padding:13px 10px;border-right:1px solid var(--jelly-skin-rule);background:var(--jelly-skin-sheet);font:500 10px/1.4 var(--jelly-skin-text)}
.jelly-stage-brand{margin-bottom:8px;color:var(--jelly-skin-ink);font:600 8.5px/1.3 "Cascadia Mono",Consolas,monospace;letter-spacing:.1em;white-space:nowrap}
.jelly-stage-row{padding:5px 7px;color:var(--jelly-skin-ink-3)}
.jelly-stage-row.is-active{background:var(--jelly-skin-sheet-2);color:var(--jelly-skin-ink)}
.jelly-stage-rail-foot{margin-top:auto;color:var(--jelly-skin-ink-3);font:500 7.5px/1.3 "Cascadia Mono",Consolas,monospace;letter-spacing:.1em}
.jelly-stage-water{position:relative;min-width:0;overflow:hidden;padding:18px 18px 16px;background:var(--jelly-skin-ground)}
.jelly-stage-toolbar{position:relative;z-index:1;display:flex;justify-content:space-between;gap:8px;color:var(--jelly-skin-ink-3);font:500 8px/1.4 "Cascadia Mono",Consolas,monospace;letter-spacing:.13em}
.jelly-stage-title{position:relative;z-index:1;margin:27px 0 0;max-width:15ch;color:var(--jelly-skin-ink);font:500 20px/1.28 var(--jelly-skin-text);letter-spacing:-.035em;white-space:pre-line}
.jelly-stage-composer{position:absolute;z-index:2;left:18px;right:18px;bottom:14px;padding:8px 10px;border:1px solid var(--jelly-skin-rule-2);background:var(--jelly-skin-sheet);color:var(--jelly-skin-ink-3);font-size:10.5px}
.jelly-settings .jelly-skin-canvas{position:absolute;inset:0;display:block;width:100%;height:100%;mix-blend-mode:multiply;opacity:.84;pointer-events:none}
body[data-ds-dark-theme] .jelly-settings .jelly-skin-canvas{mix-blend-mode:screen}
@container (max-width:620px){
  .jelly-stage{grid-template-columns:88px minmax(0,1fr);min-height:210px}
}

/* ── frame-wide boot overlay and the temporary skin-preview pill ────────── */
.jelly-boot-frame{position:fixed;inset:0;width:100vw;height:100vh;border:0;z-index:2147483600;background:transparent;opacity:0;transition:opacity .35s ease}
.jelly-boot-frame.is-ready{opacity:1}
.jelly-boot-frame.is-leaving{opacity:0;transition:opacity .5s ease}
.jelly-skin-preview-pill{position:fixed;left:50%;bottom:26px;transform:translateX(-50%);z-index:2147483200;display:flex;align-items:center;gap:14px;padding:8px 10px 8px 14px;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);box-shadow:var(--dsw-elevation-panel);font:500 11px/1.4 var(--jelly-skin-text);white-space:nowrap}
.jelly-skin-preview-pill button{padding:3px 8px;border:1px solid var(--dsw-alias-border-l2);background:transparent;color:inherit;font:500 10px/1.4 var(--jelly-skin-text);cursor:pointer}
.jelly-skin-preview-pill button:hover{background:var(--jelly-skin-accent-soft)}
@media (prefers-reduced-motion:reduce){
  .jelly-boot-frame{transition:none}
  .jelly-mini-nodes i{animation:none;opacity:.5}
}
`;

    // ── the water column ────────────────────────────────────────────────────
    //
    // Six procedural ASCII animals share one frame-wide canvas. Their anatomy is
    // built once, baked into per-species sprites, then composed as a handful of
    // images per frame instead of repainting thousands of glyphs every tick.
    //
    // Each animal navigates a real two-dimensional heading while its bell stays
    // upright: it eases onto a course, then pulses along it, so up, down,
    // sideways and turning back are all valid swims. Between beats the body
    // glides, sinks a little and is carried by a slow current. The skirt is split
    // into two depth bands per layer, with a springy tip lag, so the tentacles
    // trail and ripple instead of swinging as one rigid sheet.

    const MONO_FONT = '"Cascadia Mono", "SFMono-Regular", Consolas, monospace';
    const SCHOOL_SIZE = 6;
    const SKIRT_GROUPS = 3;
    const SKIRT_BANDS = 2;
    const LAYERS_PER_JELLY = 1 + SKIRT_GROUPS * SKIRT_BANDS;
    const MAX_CANVAS_PIXELS = 6_000_000;
    const SIM_STEP = 1 / 120;
    const TAU = Math.PI * 2;
    const MOTE_FONT = `9px ${MONO_FONT}`;
    const CURRENT_FONT = `10px ${MONO_FONT}`;
    const SHOCK_FONT = `11px ${MONO_FONT}`;
    const BUBBLE_FONT = `10px ${MONO_FONT}`;

    /** One ramp, ordered from a breath to a body. ASCII only, by design. */
    const JELLY_GLYPHS = ['.', ':', '+', '*', 'o', 'O', '#', '%', '@'];

    /** A stable, cheap noise source for building each animal once at load. */
    function jellyHash(x, y, seed) {
      const value = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453;
      return value - Math.floor(value);
    }

    /** A cell's glyph from its weight; `bright` favours the dense end. */
    function jellyGlyph(intensity, grain, bright) {
      const floor = bright ? 0.34 : 0.12;
      const span = bright ? 0.72 : 0.9;
      const index = Math.min(
        JELLY_GLYPHS.length - 1,
        Math.max(0, Math.floor((floor + intensity * span) * (JELLY_GLYPHS.length - 1) + grain * 1.2)),
      );
      return JELLY_GLYPHS[index];
    }

    // ── a living jellyfish, drawn in very fine characters ───────────────────
    //
    // A scalloped bell, almost invisible radial canals, four frilled oral arms,
    // and a skirt of long tentacles rooted across the whole margin.

    const ANIMA_SPECIES = [
      {
        id: 'anima-veil',
        seed: 2.3,
        tint: 'yellow',
        opacity: 1,
        width: 0.64,
        height: 0.36,
        exponent: 2.1,
        rimWave: 0.026,
        wave: 4,
        ribs: 12,
        tentacles: 26,
        length: 1.36,
        sway: 0.42,
        armLength: 0.86,
        swimPeriod: 3.8,
        swimPower: 1.0,
        drag: 0.78,
      },
      {
        id: 'anima-lantern',
        seed: 5.1,
        tint: 'purple',
        opacity: 0.96,
        width: 0.54,
        height: 0.47,
        exponent: 1.75,
        rimWave: 0.03,
        wave: 3,
        ribs: 8,
        tentacles: 20,
        length: 1.62,
        sway: 0.46,
        armLength: 1.02,
        swimPeriod: 4.5,
        swimPower: 0.88,
        drag: 0.68,
      },
      {
        id: 'anima-kelp',
        seed: 8.7,
        tint: 'green',
        opacity: 1,
        width: 0.61,
        height: 0.4,
        exponent: 2.0,
        rimWave: 0.035,
        wave: 5,
        ribs: 10,
        tentacles: 24,
        length: 1.48,
        sway: 0.44,
        armLength: 0.94,
        swimPeriod: 3.2,
        swimPower: 1.12,
        drag: 0.82,
      },
      {
        id: 'anima-ghost',
        seed: 12.2,
        tint: 'blue',
        opacity: 0.78,
        width: 0.6,
        height: 0.37,
        exponent: 1.62,
        rimWave: 0.022,
        wave: 4,
        ribs: 12,
        tentacles: 16,
        length: 1.82,
        sway: 0.52,
        armLength: 1.12,
        swimPeriod: 5.2,
        swimPower: 0.76,
        drag: 0.62,
      },
      {
        id: 'anima-deep',
        seed: 16.1,
        tint: 'red',
        opacity: 1,
        width: 0.58,
        height: 0.34,
        exponent: 2.35,
        rimWave: 0.024,
        wave: 5,
        ribs: 9,
        tentacles: 22,
        length: 1.2,
        sway: 0.4,
        armLength: 0.8,
        swimPeriod: 3.0,
        swimPower: 1.18,
        drag: 0.86,
      },
      {
        id: 'anima-pearl',
        seed: 19.4,
        tint: 'orange',
        opacity: 0.92,
        width: 0.57,
        height: 0.42,
        exponent: 2.55,
        rimWave: 0.021,
        wave: 3,
        ribs: 14,
        tentacles: 18,
        length: 1.5,
        sway: 0.4,
        armLength: 0.9,
        swimPeriod: 4.0,
        swimPower: 0.96,
        drag: 0.74,
      },
    ];

    /** The tentacle sprites are cut at these depths so each band can lag. */
    const SKIRT_BAND_EDGES = [0, 0.45, 1.001];

    /** The bell's upper silhouette at a horizontal position. */
    function animaTop(species, u) {
      return -species.height * Math.pow(Math.max(0, 1 - Math.pow(Math.abs(u), species.exponent)), 0.55);
    }

    /** The bell's scalloped lower lip. */
    function animaRim(species, u) {
      return 0.025 + species.rimWave * Math.sin(u * Math.PI * species.wave + species.seed) + 0.006 * Math.cos(u * Math.PI * 9);
    }

    /** Build one animal in normalised character space. */
    function buildAnima(species) {
      const cells = [];
      const step = 0.028;
      const width = species.width;
      const push = (x, y, alpha, kind, tone, extra) => {
        cells.push({
          x,
          y,
          glyph: extra?.glyph ?? jellyGlyph(alpha, jellyHash(x * 80, y * 80, species.seed), tone === 1),
          alpha,
          kind,
          tone,
          t: extra?.t ?? 0,
          group: extra?.group ?? 0,
        });
      };

      for (let gy = -22; gy <= 30; gy += 1) {
        const y = gy * step;
        for (let gx = -24; gx <= 24; gx += 1) {
          const x = gx * step;
          const u = x / width;
          if (Math.abs(u) >= 1) continue;
          const top = animaTop(species, u);
          const rim = animaRim(species, u);
          if (y < top || y > rim) continue;
          const vertical = (y - top) / Math.max(0.001, rim - top);
          const edge = Math.pow(Math.abs(u), 8) * 0.3 + Math.pow(vertical, 7) * 0.34;
          const grain = jellyHash(gx, gy, species.seed);
          const intensity = 0.16 + edge * 0.52 + (1 - vertical) * 0.1 + grain * 0.16;
          if (grain > 0.58 + intensity * 0.3) continue;
          const bright = vertical > 0.86 || Math.abs(u) > 0.955;
          push(x, y, 0.3 + intensity * 0.55, 'bell', bright ? 1 : 0);
        }
      }

      // A continuous scalloped lip makes the silhouette read before the fill.
      for (let gx = -24; gx <= 24; gx += 1) {
        const x = gx * step;
        const u = x / width;
        if (Math.abs(u) >= 0.985) continue;
        push(x, animaRim(species, u) + 0.006, 0.62, 'rim', 1, {
          glyph: gx % 6 === 0 ? '*' : gx % 3 === 0 ? '-' : "'",
        });
      }

      // The crown: a second broken line reads as light on the top of the bell.
      for (let gx = -18; gx <= 18; gx += 1) {
        const x = gx * step;
        const u = x / width;
        if (Math.abs(u) > 0.82) continue;
        push(x, animaTop(species, u) + 0.008, 0.48, 'rim', 0, { glyph: gx % 5 === 0 ? '*' : "'" });
      }

      // Radial canals, deliberately almost lost in the grain.
      for (let rib = 0; rib < species.ribs; rib += 1) {
        const uEnd = species.ribs === 1 ? 0 : (rib / (species.ribs - 1)) * 1.7 - 0.85;
        for (let t = 0.2; t <= 0.94; t += 0.085) {
          const x = uEnd * width * Math.pow(t, 0.72);
          const u = x / width;
          const top = animaTop(species, u);
          const rim = animaRim(species, u);
          push(x, top + (rim - top) * t, 0.17, 'rib', 0, { glyph: t > 0.7 ? '.' : ':' });
        }
      }

      // Tentacles rooted across the whole rim, each with its own curve.
      for (let index = 0; index < species.tentacles; index += 1) {
        const spread = species.tentacles === 1 ? 0 : (index / (species.tentacles - 1)) * 1.88 - 0.94;
        const startX = spread * width + (jellyHash(index, 12, species.seed) - 0.5) * 0.04;
        const startY = animaRim(species, spread) + 0.014;
        const length = species.length * (0.55 + 0.65 * jellyHash(index, 3, species.seed));
        const amplitude = species.sway * (0.82 + 0.5 * jellyHash(index, 9, species.seed));
        const phase = species.seed * 1.3 + index * 0.79;
        const wave = 3.4 + jellyHash(index, 5, species.seed) * 0.9;
        const points = 30;
        for (let point = 1; point <= points; point += 1) {
          const t = point / points;
          const reach = t * (0.35 + t * 0.65);
          const x = startX + Math.sin(t * wave + phase) * amplitude * reach + Math.sin(t * 8.1 + phase * 1.4) * amplitude * 0.2 * t;
          const y = startY + t * length + Math.sin(t * 4.3 + phase) * 0.028 * t;
          push(x, y, (0.88 - t * 0.4) * (0.78 + 0.22 * jellyHash(index, point, species.seed)), 'tentacle', t > 0.92 ? 1 : 0, {
            glyph: t < 0.09 ? '|' : t < 0.34 ? "'" : t < 0.7 ? ':' : '.',
            t,
            group: index % SKIRT_GROUPS,
          });
        }
      }

      // Four oral arms: wider ribbons with a slow frill, brighter than the skirt.
      for (let arm = 0; arm < 4; arm += 1) {
        const base = [-0.36, -0.13, 0.13, 0.36][arm];
        const length = species.armLength * (0.82 + 0.26 * jellyHash(arm, 4, species.seed));
        const phase = species.seed + arm * 1.67;
        for (let strand = -1; strand <= 1; strand += 1) {
          for (let point = 1; point <= 18; point += 1) {
            const t = point / 18;
            const x = base * width + Math.sin(t * 3.8 + phase) * (0.1 + arm * 0.012) * t + strand * 0.022;
            const y = animaRim(species, base) + 0.02 + t * length + Math.sin(t * 6.2 + phase) * 0.025 * t;
            push(x, y, (0.7 - t * 0.3) * 0.9, 'arm', t > 0.8 ? 1 : 0, {
              glyph: t < 0.25 ? ';' : t < 0.65 ? ':' : "'",
              t,
              group: arm % SKIRT_GROUPS,
            });
          }
        }
      }

      // A few light organs under the bell; not a symmetrical band.
      for (const side of [-1, 1]) {
        const cx = side * width * 0.23;
        const cy = animaTop(species, cx / width) * 0.42 + 0.15;
        for (let spot = 0; spot < 3; spot += 1) {
          const angle = (spot / 3) * Math.PI * 2 + side;
          push(cx + Math.cos(angle) * 0.02, cy + Math.sin(angle) * 0.016, 0.48, 'orb', 1, {
            glyph: spot % 2 === 0 ? 'o' : '*',
          });
        }
      }
      return cells;
    }

    /**
     * The animals, built on first use in normalised character space. A small
     * tank (the Settings specimen) only pays for the species it can show; the
     * full shell later extends the same cache to all six.
     */
    const animaFields = [];

    function getAnimaFields(limit = ANIMA_SPECIES.length) {
      const count = Math.max(1, Math.min(limit, ANIMA_SPECIES.length));
      while (animaFields.length < count) {
        const species = ANIMA_SPECIES[animaFields.length];
        animaFields.push({ ...species, cells: buildAnima(species) });
      }
      return animaFields.length === count ? animaFields : animaFields.slice(0, count);
    }

    function clamp(value, low, high) {
      return Math.min(high, Math.max(low, value));
    }

    /** Wrap an angle to one turn without mutating the caller's value. */
    function wrapAngle(value) {
      if (!Number.isFinite(value)) return 0;
      // Modulo avoids the unbounded while-loop a very large accumulated turn
      // would otherwise cause; the second branch handles negative remainders.
      let angle = value % TAU;
      if (angle > Math.PI) angle -= TAU;
      else if (angle < -Math.PI) angle += TAU;
      return angle;
    }

    /** Blend two headings along the short arc, not around the back of the circle. */
    function blendAngles(from, to, amount) {
      const t = clamp(amount, 0, 1);
      return Math.atan2(
        Math.sin(from) * (1 - t) + Math.sin(to) * t,
        Math.cos(from) * (1 - t) + Math.cos(to) * t,
      );
    }

    /** Smooth 0→1 ramp. */
    function smoothstep(edge0, edge1, value) {
      const t = clamp((value - edge0) / Math.max(0.0001, edge1 - edge0), 0, 1);
      return t * t * (3 - 2 * t);
    }

    /** A quick contraction followed by a long, soft relaxation. */
    function pulseEnvelope(phase) {
      const p = phase - Math.floor(phase);
      if (p < 0.12) return smoothstep(0, 0.12, p);
      if (p < 0.68) return 1 - smoothstep(0.12, 0.68, p);
      return 0;
    }

    /** Per-cell opacity weight from the anatomy. */
    function cellWeight(kind) {
      switch (kind) {
        case 'rim':
          return 1.42;
        case 'rib':
          return 0.72;
        case 'orb':
          return 1.2;
        case 'tentacle':
          return 0.82;
        case 'arm':
          return 0.9;
        default:
          return 0.96;
      }
    }

    function toneOf(species, bright, colours) {
      const tint = species.tint;
      if (tint === 'red') return bright ? colours.redBright : colours.red;
      if (tint === 'orange') return bright ? colours.orangeBright : colours.orange;
      if (tint === 'yellow') return bright ? colours.yellowBright : colours.yellow;
      if (tint === 'green') return bright ? colours.greenBright : colours.green;
      if (tint === 'blue') return bright ? colours.blueBright : colours.blue;
      return bright ? colours.purpleBright : colours.purple;
    }

    /**
     * Rasterise one anatomy group into a transparent sprite. Coordinates stay in
     * the jelly's local pixel space; the returned `left`/`top` restore the anchor
     * when the sprite is composed on the main canvas.
     */
    function buildSprite(dom, cells, species, colours, char) {
      if (cells.length === 0) return null;
      const dark = colours.dark;
      const fontSize = char * (dark ? 1.08 : 1.22);
      const unit = char / 0.036;
      const pad = fontSize * 1.6;
      // Sprites are downscaled when composed. A 2.5× oversample stays crisp
      // after that scale and keeps the 42-layer cache bounded on high-DPI displays.
      const renderDpr = 2.5;
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      for (const cell of cells) {
        const x = cell.x * unit;
        const y = cell.y * unit;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
      const left = minX - pad;
      const top = minY - pad;
      const width = Math.max(1, Math.ceil(maxX - minX + pad * 2));
      const height = Math.max(1, Math.ceil(maxY - minY + pad * 2));

      let canvas = null;
      try {
        canvas = dom.createElement('canvas');
        canvas.width = Math.max(1, Math.ceil(width * renderDpr));
        canvas.height = Math.max(1, Math.ceil(height * renderDpr));
        const layer = canvas.getContext('2d');
        if (layer === null) {
          // A missing 2D context is a failed rasterisation, not an empty sprite:
          // returning null here would let a rebuild replace the good sprite cache
          // with a set of blanks. Release the canvas and let the caller roll back.
          throw new Error('2D canvas context unavailable');
        }
        layer.setTransform(renderDpr, 0, 0, renderDpr, 0, 0);
        layer.textBaseline = 'top';
        layer.font = `${dark ? 400 : 600} ${fontSize.toFixed(2)}px ${MONO_FONT}`;
        const baseTone = toneOf(species, false, colours);
        const brightTone = toneOf(species, true, colours);
        const themeGain = dark ? 1 : 2.1;
        let fill = '';
        for (const cell of cells) {
          const alpha = Math.min(1, cell.alpha * cellWeight(cell.kind) * themeGain);
          if (alpha <= 0.015) continue;
          const tone = cell.tone === 1 ? brightTone : baseTone;
          if (tone !== fill) {
            layer.fillStyle = tone;
            fill = tone;
          }
          const glow = dark && (cell.kind === 'rim' || cell.kind === 'orb');
          layer.shadowColor = glow ? tone : 'transparent';
          layer.shadowBlur = glow ? 6 * renderDpr : 0;
          layer.globalAlpha = alpha;
          layer.fillText(cell.glyph, cell.x * unit - left, cell.y * unit - top);
        }
        return { canvas, left, top, width, height, localTop: minY, localBottom: maxY };
      } catch (error) {
        // Any failure before a sprite is returned must release its in-flight
        // canvas; the caller only knows about sprites returned successfully.
        if (canvas !== null) {
          canvas.width = 0;
          canvas.height = 0;
        }
        throw error;
      }
    }

    /**
     * Build one body sprite plus 3 interleaved × 2 depth-band skirt sprites.
     * The bands share one cached set, so a travelling bend costs two image
     * draws per group instead of a full tentacle re-rasterisation.
     */
    function buildSpeciesSprites(dom, species, colours, char) {
      const body = [];
      const skirt = Array.from({ length: SKIRT_GROUPS }, () =>
        Array.from({ length: SKIRT_BANDS }, () => []),
      );
      for (const cell of species.cells) {
        if (cell.kind === 'tentacle' || cell.kind === 'arm') {
          let band = SKIRT_BANDS - 1;
          for (let index = 0; index < SKIRT_BANDS; index += 1) {
            if (cell.t < SKIRT_BAND_EDGES[index + 1]) {
              band = index;
              break;
            }
          }
          skirt[cell.group][band].push(cell);
        } else {
          body.push(cell);
        }
      }
      // If one layer fails to rasterise, release every canvas produced for this
      // species before rethrowing so a failed theme/resize does not leak memory.
      const built = [];
      try {
        const bodySprite = buildSprite(dom, body, species, colours, char);
        if (bodySprite !== null) built.push(bodySprite);
        const skirtSprites = skirt.map((bands) =>
          bands.map((cells) => {
            const sprite = buildSprite(dom, cells, species, colours, char);
            if (sprite !== null) built.push(sprite);
            return sprite;
          }),
        );
        return { body: bodySprite, skirt: skirtSprites };
      } catch (error) {
        for (const sprite of built) releaseSprite(sprite);
        throw error;
      }
    }

    function releaseSprite(sprite) {
      if (sprite === null) return;
      sprite.canvas.width = 0;
      sprite.canvas.height = 0;
    }

    function releaseSpriteSet(set) {
      releaseSprite(set.body);
      for (const group of set.skirt) {
        for (const sprite of group) releaseSprite(sprite);
      }
    }

    /**
     * Mount the water column into a host element.
     *
     * The host is positioned by the stylesheet; this function owns the painting,
     * the pulse physics, the pointer current, the resize/theme lifecycle and the
     * cleanup.
     */
    function mountJellyTank(wrap, options = {}) {
      const dom = globalThis.document;
      const win = globalThis.window;
      if (wrap === null || dom === undefined || win === undefined || typeof dom.createElement !== 'function') {
        return () => {};
      }
      const schoolSize =
        Number.isInteger(options.schoolSize) && options.schoolSize > 0
          ? Math.min(options.schoolSize, SCHOOL_SIZE)
          : SCHOOL_SIZE;
      const canvas = dom.createElement('canvas');
      canvas.className = 'jelly-skin-canvas';
      wrap.appendChild(canvas);
      let surface = null;
      try {
        surface = canvas.getContext('2d');
      } catch (error) {
        canvas.remove();
        throw error;
      }
      if (surface === null) {
        canvas.remove();
        throw new Error('2D canvas context unavailable');
      }

      const reduced = win.matchMedia?.('(prefers-reduced-motion: reduce)');
      const pointer = {
        x: -9999,
        y: -9999,
        active: false,
        vx: 0,
        vy: 0,
        energy: 0,
        lastX: -1,
        lastY: -1,
        lastAt: 0,
        moveX: -1,
        moveY: -1,
        moveAt: 0,
        sampleAt: 0,
      };

      /** Drop the previous position/velocity when the pointer leaves the water. */
      function resetPointerHistory() {
        pointer.lastX = -1;
        pointer.lastY = -1;
        pointer.lastAt = 0;
        pointer.moveX = -1;
        pointer.moveY = -1;
        pointer.moveAt = 0;
        pointer.sampleAt = 0;
      }

      const bubbles = [];
      const motes = [];
      const shockwaves = [];
      let width = 0;
      let height = 0;
      let boxLeft = 0;
      let boxTop = 0;
      let dpr = 1;
      let observedDpr = 1;
      let dprRetryAt = 0;
      let char = 0;
      let frame = 0;
      let last = 0;
      let accumulator = 0;
      let simTime = 0;
      let running = !dom.hidden;
      let disposed = false;
      let colours = readColours();
      let school = [];
      let orderedSchool = [];
      let positionReport = [];
      let telemetry = [];
      let spriteSets = [];
      let motesArea = 0;
      let collisionCount = 0;
      let collisionDirty = false;
      let resizeQueued = false;
      let themeQueued = false;

      function readColours() {
        const style = win.getComputedStyle(canvas);
        const value = (name, fallback) => style.getPropertyValue(name).trim() || fallback;
        return {
          red: value('--jelly-skin-jelly-red', '#ff6b5a'),
          redBright: value('--jelly-skin-jelly-red-bright', '#ffb4a8'),
          orange: value('--jelly-skin-jelly-orange', '#ff9a4d'),
          orangeBright: value('--jelly-skin-jelly-orange-bright', '#ffd0a8'),
          yellow: value('--jelly-skin-jelly-yellow', '#f2cf5e'),
          yellowBright: value('--jelly-skin-jelly-yellow-bright', '#fff0a8'),
          green: value('--jelly-skin-jelly-green', '#7bc7a3'),
          greenBright: value('--jelly-skin-jelly-green-bright', '#b4ffd0'),
          blue: value('--jelly-skin-jelly-blue', '#87b4ff'),
          blueBright: value('--jelly-skin-jelly-blue-bright', '#c3d8ff'),
          purple: value('--jelly-skin-jelly-purple', '#c39cf0'),
          purpleBright: value('--jelly-skin-jelly-purple-bright', '#ead4ff'),
          bubble: value('--jelly-skin-jelly-bubble', 'rgba(123,209,192,.44)'),
          teal: value('--jelly-skin-jelly-teal', '#1e7569'),
          dark: dom.body?.hasAttribute?.('data-ds-dark-theme') === true,
        };
      }

      /** The six homes of the one shared school, with a little jitter. */
      const homes = [
        { x: 0.06, y: 0.24 },
        { x: 0.24, y: 0.38 },
        { x: 0.5, y: 0.06 },
        { x: 0.74, y: 0.36 },
        { x: 0.38, y: 0.68 },
        { x: 0.78, y: 0.77 },
      ];

      function rebuildSprites() {
        const next = [];
        try {
          for (const species of getAnimaFields(schoolSize)) {
            next.push(buildSpeciesSprites(dom, species, colours, char));
          }
        } catch (error) {
          // Keep the previous, fully usable set when a new theme or size cannot
          // be rasterised; dispose the partially built canvases first.
          for (const set of next) releaseSpriteSet(set);
          throw error;
        }
        const previous = spriteSets;
        spriteSets = next;
        for (let index = 0; index < school.length; index += 1) {
          school[index].sprite = spriteSets[index % spriteSets.length] ?? null;
        }
        for (const set of previous) releaseSpriteSet(set);
      }

      function makeJelly(index) {
        const fields = getAnimaFields(schoolSize);
        const species = fields[index % fields.length];
        const slot = homes[index % homes.length];
        const layer = [0.88, 0.58, 0.74, 0.66, 0.96, 0.7][index % 6];
        const baseAlpha = colours.dark ? 0.84 : 0.86;
        const x = slot.x * width + Math.sin(index * 7.1) * 20;
        const y = slot.y * height + Math.cos(index * 1.9) * 14;
        const pulsePhase = (0.08 + index * 0.173 + species.seed * 0.031) % 1;
        const heading = [-2.35, -0.45, 2.75, -1.35, 0.55, 1.85][index % 6];
        const report = { id: species.id, x, y };
        const motion = {
          id: species.id,
          x,
          y,
          speed: 0,
          heading,
          pulsePhase,
          contraction: pulseEnvelope(pulsePhase),
          bellScaleX: 1,
          bellScaleY: 1,
          skirtBend: 0,
          lean: 0,
          startle: 0,
          impact: 0,
          vx: 0,
          vy: 0,
        };
        return {
          species,
          sprite: spriteSets[index % spriteSets.length] ?? null,
          home: { x: slot.x * width, y: slot.y * height },
          x,
          y,
          prevX: x,
          prevY: y,
          vx: Math.cos(heading) * 24,
          vy: Math.sin(heading) * 24,
          heading,
          turnVelocity: 0,
          turnRate: [1.05, 0.86, 1.15, 0.72, 1.0, 0.9][index % 6],
          target: { x: x + Math.cos(heading) * 120, y: y + Math.sin(heading) * 110 },
          nextTarget: 0,
          depth: 0.48 + layer * 0.52,
          collisionRadius: 44 + layer * 25,
          mass: 0.72 + layer * 0.5,
          alpha: Math.min(1, baseAlpha * (0.68 + layer * 0.52) * (species.opacity ?? 1)),
          phase: index * 1.93,
          seed: species.seed * 3.7 + index * 2.3 + 0.7,
          swimPeriod: species.swimPeriod * (0.92 + (index % 3) * 0.055),
          swimPower: species.swimPower * [0.96, 1.08, 0.9, 1.04, 1.12, 0.98][index % 6],
          drag: species.drag,
          pulsePhase,
          beatVigor: 0.9 + (index % 4) * 0.07,
          sink: 3.8 + (index % 3) * 1.4,
          lean: 0,
          leanVelocity: 0,
          skirtBend: 0,
          skirtBendVelocity: 0,
          startle: 0,
          impact: 0,
          report,
          motion,
        };
      }

      /**
       * Pick a new patch of water. Targets orbit the animal's home instead of
       * always sitting above it, so every heading — including down and back — is
       * a legitimate course. When the animal has been displaced by the pointer it
       * first steers back toward its home water.
       */
      function chooseSwimTarget(jelly, first = false) {
        const marginX = Math.min(120, width * 0.1);
        const marginY = Math.min(120, height * 0.13);
        const homeDistance = Math.hypot(jelly.home.x - jelly.x, jelly.home.y - jelly.y);
        let angle;
        if (first) {
          angle = jelly.heading + (Math.random() * 2 - 1) * 0.55;
        } else if (homeDistance > Math.min(width, height) * 0.3) {
          angle = Math.atan2(jelly.home.y - jelly.y, jelly.home.x - jelly.x) + (Math.random() * 2 - 1) * 0.7;
        } else {
          angle = Math.random() * TAU;
        }
        const distance = 90 + Math.random() * 190;
        jelly.target = {
          x: clamp(jelly.home.x + Math.cos(angle) * distance, marginX, Math.max(marginX + 1, width - marginX)),
          y: clamp(jelly.home.y + Math.sin(angle) * distance * 0.82, marginY, Math.max(marginY + 1, height - marginY)),
        };
        jelly.nextTarget = simTime + 3.8 + Math.random() * 4.8;
      }

      function makeMotes() {
        motes.length = 0;
        const count = Math.max(18, Math.min(40, Math.round((width * height) / 32000)));
        for (let index = 0; index < count; index += 1) {
          motes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            speed: 2.2 + Math.random() * 5.4,
            phase: Math.random() * 6.2,
            alpha: 0.1 + Math.random() * 0.3,
            char: Math.random() > 0.72 ? 'o' : Math.random() > 0.46 ? ':' : '.',
          });
        }
        motesArea = width * height;
      }

      function syncPositions() {
        for (let index = 0; index < school.length; index += 1) {
          const jelly = school[index];
          const report = positionReport[index];
          if (report !== undefined) {
            report.x = jelly.x;
            report.y = jelly.y;
          }
          const motion = telemetry[index];
          if (motion !== undefined) {
            const contraction = jelly.contraction ?? pulseEnvelope(jelly.pulsePhase);
            motion.x = jelly.x;
            motion.y = jelly.y;
            motion.speed = Math.hypot(jelly.vx, jelly.vy);
            motion.heading = jelly.heading;
            motion.pulsePhase = jelly.pulsePhase;
            motion.contraction = contraction;
            motion.bellScaleX = 1 - contraction * 0.19;
            motion.bellScaleY = 1 + contraction * 0.13;
            motion.skirtBend = jelly.skirtBend;
            motion.lean = jelly.lean;
            motion.startle = jelly.startle;
            motion.impact = jelly.impact;
            motion.vx = jelly.vx;
            motion.vy = jelly.vy;
          }
        }
      }

      function clearCanvas() {
        surface.clearRect(0, 0, width, height);
      }

      function resize() {
        if (disposed) return;
        const box = wrap.getBoundingClientRect();
        // A collapsed or hidden frame reports an empty box. Rebuilding at 1×1
        // would rescale the whole school and rasterise 42 sprites for a purely
        // transient state; keep the last valid backing store until it returns.
        if (box.width < 1 || box.height < 1) {
          observedDpr = win.devicePixelRatio || 1;
          dprRetryAt = 0;
          return;
        }
        const nextWidth = Math.max(1, Math.round(box.width));
        const nextHeight = Math.max(1, Math.round(box.height));
        const deviceDpr = win.devicePixelRatio || 1;
        const budgetDpr = Math.sqrt(MAX_CANVAS_PIXELS / (nextWidth * nextHeight));
        // Keep the decorative layer inside its pixel budget even on very large
        // displays; the 0.1 floor only guards against a degenerate viewport.
        const nextDpr = Math.min(2, Math.max(0.1, Math.min(deviceDpr, budgetDpr)));
        const sizeChanged = nextWidth !== width || nextHeight !== height || nextDpr !== dpr;
        const boxChanged = box.left !== boxLeft || box.top !== boxTop;
        if (school.length > 0 && !sizeChanged && !boxChanged) {
          observedDpr = deviceDpr;
          dprRetryAt = 0;
          return;
        }
        // A sidebar toggle can move the frame without changing its size. Update
        // the pointer origin without clearing a canvas whose contents are still
        // valid: assigning `canvas.width` always resets the backing store.
        if (school.length > 0 && !sizeChanged) {
          boxLeft = box.left;
          boxTop = box.top;
          observedDpr = deviceDpr;
          dprRetryAt = 0;
          pointer.active = false;
          pointer.vx = 0;
          pointer.vy = 0;
          pointer.energy = 0;
          resetPointerHistory();
          return;
        }

        const first = school.length === 0;
        const previousWidth = width || nextWidth;
        const previousHeight = height || nextHeight;
        const previousChar = char;
        const nextChar = nextWidth < 620 ? 3.7 : nextWidth < 1000 ? 4.1 : 4.4;
        // Sprite rasterisation is DPR-independent now, so only a character-size
        // breakpoint (or the first mount) needs a new sprite set. Build it before
        // committing the new canvas size: if rasterisation fails, the old frame
        // and the school's old coordinate system stay intact and a later resize
        // can retry instead of leaving `char`/width/height out of sync.
        const rebuild = first || nextChar !== char;
        char = nextChar;
        try {
          if (rebuild) rebuildSprites();
        } catch (error) {
          char = previousChar;
          throw error;
        }

        width = nextWidth;
        height = nextHeight;
        boxLeft = box.left;
        boxTop = box.top;
        dpr = nextDpr;
        canvas.width = Math.max(1, Math.round(width * dpr));
        canvas.height = Math.max(1, Math.round(height * dpr));
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        surface.setTransform(dpr, 0, 0, dpr, 0, 0);
        surface.imageSmoothingEnabled = true;
        surface.imageSmoothingQuality = 'high';
        observedDpr = deviceDpr;
        dprRetryAt = 0;

        if (first) {
          school = Array.from({ length: schoolSize }, (_, index) => makeJelly(index));
          for (const jelly of school) chooseSwimTarget(jelly, true);
          orderedSchool = school.slice().sort((left, right) => left.depth - right.depth);
          positionReport = school.map((jelly) => jelly.report);
          telemetry = school.map((jelly) => jelly.motion);
          canvas.__jellyPositions = positionReport;
          canvas.__jellyTelemetry = telemetry;
          makeMotes();
          canvas.dataset.school = String(school.length);
          canvas.dataset.layers = String(school.length * LAYERS_PER_JELLY);
          canvas.dataset.species = school.map((jelly) => jelly.species.id).join(',');
          canvas.dataset.bands = String(SKIRT_BANDS);
          canvas.dataset.motion = 'upright-pulse-current';
          canvas.dataset.collisions = '0';
        } else {
          const scaleX = width / previousWidth;
          const scaleY = height / previousHeight;
          for (const jelly of school) {
            jelly.home.x *= scaleX;
            jelly.home.y *= scaleY;
            jelly.x *= scaleX;
            jelly.y *= scaleY;
            jelly.prevX *= scaleX;
            jelly.prevY *= scaleY;
            jelly.target.x = clamp(jelly.target.x * scaleX, 0, width);
            jelly.target.y = clamp(jelly.target.y * scaleY, 0, height);
          }
          for (const mote of motes) {
            mote.x *= scaleX;
            mote.y *= scaleY;
          }
          const area = width * height;
          if (motesArea > 0 && (area > motesArea * 1.7 || area < motesArea * 0.6)) makeMotes();
          for (const bubble of bubbles) {
            bubble.x *= scaleX;
            bubble.y *= scaleY;
          }
          for (const shock of shockwaves) {
            shock.x *= scaleX;
            shock.y *= scaleY;
          }
          pointer.active = false;
          pointer.vx = 0;
          pointer.vy = 0;
          pointer.energy = 0;
          resetPointerHistory();
        }
        syncPositions();
        if (!dom.hidden && (frame === 0 || reduced?.matches)) drawStatic();
        if (school.length > 0 && !reduced?.matches) start();
      }

      /** Coalesce the many resize notifications a drag produces into one layout read. */
      function scheduleResize() {
        if (resizeQueued || disposed) return;
        resizeQueued = true;
        win.requestAnimationFrame(() => {
          resizeQueued = false;
          try {
            resize();
          } catch {
            // A decorative layer must never surface an unhandled resize error;
            // the last valid frame stays on screen and a later resize retries.
          }
        });
      }

      function drawSprite(sprite, alpha) {
        if (sprite === null) return;
        surface.globalAlpha = alpha;
        surface.drawImage(sprite.canvas, sprite.left, sprite.top, sprite.width, sprite.height);
      }

      /**
       * Keep a thrown draw (for example a lost context) from leaking the canvas
       * state stack into the next frame.
       */
      function withSurfaceState(draw) {
        surface.save();
        try {
          draw();
        } finally {
          surface.restore();
        }
      }

      function paintBody(sprite, alpha, x, y, tilt, shear, scaleX, scaleY) {
        if (sprite === null) return;
        withSurfaceState(() => {
          surface.translate(x, y);
          surface.rotate(tilt);
          surface.transform(scaleX, 0, shear, scaleY, 0, 0);
          drawSprite(sprite, alpha);
        });
      }

      function paintSkirtBand(sprite, alpha, x, y, tilt, scaleY, slope, intercept) {
        if (sprite === null) return;
        withSurfaceState(() => {
          surface.translate(x, y);
          surface.rotate(tilt);
          surface.transform(1, 0, slope, scaleY, intercept, 0);
          drawSprite(sprite, alpha);
        });
      }

      /**
       * Displacement of the skirt at depth t, expressed in the animal's local
       * sideways direction. The spring-driven bend is strongest at the tip;
       * the travelling wave and pulse flare sit on top of it.
       */
      function skirtOffset(jelly, seconds, depth, group, contraction, impactWave) {
        const amplitude = 11 + jelly.species.sway * 32;
        const phase = jelly.phase + group * 0.58;
        const wave =
          Math.sin(seconds * 1.18 - depth * 3.4 + phase) * amplitude +
          Math.sin(seconds * 0.47 + depth * 1.9 + phase * 1.8) * amplitude * 0.4 +
          Math.sin(seconds * 2.1 - depth * 6.4 + phase * 0.7) * amplitude * 0.16;
        const pulseFlare = Math.sin(seconds * 0.95 + jelly.phase) * contraction * 10;
        const tip = Math.pow(depth, 1.3);
        return clamp((jelly.skirtBend + wave + pulseFlare + impactWave * 22) * tip, -80, 80);
      }

      function paintJelly(jelly, alphaBlend) {
        const sprite = jelly.sprite;
        if (sprite === null) return;
        const contraction = jelly.contraction ?? pulseEnvelope(jelly.pulsePhase);
        const x = jelly.prevX + (jelly.x - jelly.prevX) * alphaBlend + Math.sin(simTime * 0.53 + jelly.phase) * 1.5;
        const y = jelly.prevY + (jelly.y - jelly.prevY) * alphaBlend + Math.cos(simTime * 0.47 + jelly.phase * 1.4) * 1.1;
        const impactWave = jelly.impact * Math.sin(simTime * 15.5 + jelly.phase * 1.7);
        const bob = Math.sin(simTime * 0.72 + jelly.phase) * 0.007;
        const tilt = jelly.lean + bob + contraction * 0.018 + impactWave * 0.03;
        const alpha = Math.max(0, Math.min(1, jelly.alpha * (0.95 + 0.05 * Math.sin(simTime * 1.7 + jelly.phase))));
        const bodyScaleX = 1 - contraction * 0.19 + impactWave * 0.075 + Math.sin(simTime * 1.13 + jelly.phase) * 0.008;
        const bodyScaleY = 1 + contraction * 0.13 - impactWave * 0.05;
        const bodyShear = clamp(jelly.skirtBend * 0.00032 + jelly.turnVelocity * 0.018, -0.085, 0.085);
        const relativeY = jelly.vy - (jelly.flowY ?? 0);
        const tentacleStretch =
          1 +
          clamp(-relativeY * 0.00135, -0.025, 0.1) +
          contraction * 0.02 +
          impactWave * 0.035;
        const tentaclePinch = 1 - contraction * 0.04;

        for (let group = 0; group < sprite.skirt.length; group += 1) {
          const bands = sprite.skirt[group];
          for (let band = 0; band < bands.length; band += 1) {
            const layer = bands[band];
            if (layer === null) continue;
            const topDepth = SKIRT_BAND_EDGES[band];
            const bottomDepth = Math.min(1, SKIRT_BAND_EDGES[band + 1]);
            const topOffset = skirtOffset(jelly, simTime, topDepth, group, contraction, impactWave);
            const bottomOffset = skirtOffset(jelly, simTime, bottomDepth, group, contraction, impactWave);
            const span = Math.max(0.001, layer.localBottom - layer.localTop);
            const slope = (bottomOffset - topOffset) / span;
            const intercept = topOffset - slope * layer.localTop;
            paintSkirtBand(layer, alpha, x, y, tilt, tentacleStretch, slope * tentaclePinch, intercept);
          }
        }
        paintBody(sprite.body, alpha, x, y, tilt, bodyShear, bodyScaleX, bodyScaleY);
      }

      function drawMotes(seconds) {
        const step = colours.dark ? 0.38 : 0.22;
        withSurfaceState(() => {
          surface.fillStyle = colours.teal;
          surface.textBaseline = 'middle';
          surface.font = MOTE_FONT;
          for (const mote of motes) {
            const travel = (mote.x + seconds * mote.speed * 2.4) % Math.max(1, width);
            const y = mote.y + Math.sin(seconds * 0.7 + mote.phase) * 5;
            surface.globalAlpha = mote.alpha * step * (0.7 + 0.3 * Math.sin(seconds * 1.2 + mote.phase));
            surface.fillText(mote.char, travel, y);
          }
        });
      }

      /** The pointer is a visible eddy, not just an invisible force field. */
      function drawPointerCurrent(seconds) {
        if (!pointer.active) return;
        const energy = clamp(pointer.energy, 0, 1);
        if (energy < 0.02) return;
        const pointerVx = clamp(pointer.vx, -600, 600);
        const pointerVy = clamp(pointer.vy, -600, 600);
        withSurfaceState(() => {
          surface.fillStyle = colours.teal;
          surface.textBaseline = 'middle';
          surface.font = CURRENT_FONT;
          for (let ring = 0; ring < 3; ring += 1) {
            const radius = 26 + ring * 31 + energy * (10 + ring * 6);
            const count = 20 + ring * 5;
            const rotation = seconds * (ring % 2 === 0 ? 0.5 : -0.38) + ring * 0.7;
            for (let index = 0; index < count; index += 1) {
              const angle = (index / count) * TAU + rotation;
              const wobble = 1 + Math.sin(angle * 3 + seconds * 1.8 + ring) * 0.09;
              const x = pointer.x + Math.cos(angle) * radius * wobble - pointerVx * 0.018;
              const y = pointer.y + Math.sin(angle) * radius * wobble * 0.72 - pointerVy * 0.012;
              surface.globalAlpha = (0.18 + energy * 0.52) * (1 - ring * 0.2);
              surface.fillText(index % 4 === 0 ? '+' : index % 3 === 0 ? ':' : index % 2 === 0 ? '.' : "'", x, y);
            }
          }
          const pointerSpeed = Math.hypot(pointerVx, pointerVy);
          if (pointerSpeed > 20) {
            const ux = pointerVx / pointerSpeed;
            const uy = pointerVy / pointerSpeed;
            for (let index = 0; index < 5; index += 1) {
              const distance = 18 + index * 15;
              surface.globalAlpha = energy * (0.38 - index * 0.055);
              surface.fillText(index % 2 === 0 ? ':' : '.', pointer.x - ux * distance, pointer.y - uy * distance);
            }
          }
        });
      }

      function drawShockwaves() {
        if (shockwaves.length === 0) return;
        withSurfaceState(() => {
          surface.fillStyle = colours.teal;
          surface.textBaseline = 'middle';
          surface.font = SHOCK_FONT;
          for (const shock of shockwaves) {
            const life = clamp(shock.age / shock.life, 0, 1);
            const radius = 38 + shock.age * 370;
            const count = 38;
            for (let ring = 0; ring < 2; ring += 1) {
              const r = radius * (1 - ring * 0.17);
              for (let index = 0; index < count; index += 1) {
                const angle = (index / count) * TAU + ring * 0.1;
                surface.globalAlpha = (1 - life) * (ring === 0 ? 0.48 : 0.22);
                surface.fillText(index % 5 === 0 ? ':' : index % 3 === 0 ? '.' : "'", shock.x + Math.cos(angle) * r, shock.y + Math.sin(angle) * r * 0.7);
              }
            }
          }
        });
      }

      function drawBubbles() {
        if (bubbles.length === 0) return;
        withSurfaceState(() => {
          surface.font = BUBBLE_FONT;
          surface.textBaseline = 'middle';
          surface.fillStyle = colours.bubble;
          for (const bubble of bubbles) {
            const age = clamp(bubble.age / bubble.life, 0, 1);
            surface.globalAlpha = (1 - age) * 0.48;
            surface.fillText(bubble.char, bubble.x + Math.sin(age * 6 + bubble.phase) * 4, bubble.y);
          }
        });
      }

      function paint(seconds, alphaBlend) {
        clearCanvas();
        drawMotes(seconds);
        drawPointerCurrent(seconds);
        for (const jelly of orderedSchool) paintJelly(jelly, alphaBlend);
        drawShockwaves();
        drawBubbles();
      }

      function drawStatic() {
        bubbles.length = 0;
        shockwaves.length = 0;
        try {
          paint(simTime, 1);
        } catch {
          // The water is decorative; a single failed static frame stays blank
          // instead of escaping through visibility or reduced-motion handlers.
        }
      }

      function ambientFlow(x, y, seconds) {
        const u = x / Math.max(1, width);
        const v = y / Math.max(1, height);
        const a =
          Math.sin(seconds * 0.085 + u * 2.1 + v * 2.7) * 11 +
          Math.sin(seconds * 0.21 + u * 5.3 - v * 1.4 + 1.7) * 6 +
          Math.sin(seconds * 0.043 + 0.6) * 8;
        const b =
          Math.cos(seconds * 0.072 + u * 1.6 - v * 2.2) * 4 +
          Math.cos(seconds * 0.18 + u * 2.8 + v * 3.9 + 0.8) * 2.5;
        return { x: a, y: b };
      }

      function emitWake(jelly) {
        if (bubbles.length > 24) return;
        bubbles.push({
          x: jelly.x - Math.cos(jelly.heading) * 12 + (Math.random() - 0.5) * 26,
          y: jelly.y - Math.sin(jelly.heading) * 12 + (Math.random() - 0.5) * 18,
          age: 0,
          life: 0.7 + Math.random() * 0.7,
          phase: Math.random() * TAU,
          char: Math.random() > 0.48 ? ':' : '.',
          vx: -Math.cos(jelly.heading) * 10 + (Math.random() - 0.5) * 8,
          vy: -Math.sin(jelly.heading) * 10 - 5 - Math.random() * 7,
        });
      }

      function updateBubbles(dt) {
        for (let index = bubbles.length - 1; index >= 0; index -= 1) {
          const bubble = bubbles[index];
          bubble.age += dt;
          bubble.x += bubble.vx * dt;
          bubble.y += bubble.vy * dt;
          bubble.vy -= 5 * dt;
          if (bubble.age > bubble.life) bubbles.splice(index, 1);
        }
      }

      function updateShockwaves(dt) {
        for (let index = shockwaves.length - 1; index >= 0; index -= 1) {
          const shock = shockwaves[index];
          shock.age += dt;
          if (shock.age > shock.life) shockwaves.splice(index, 1);
        }
      }

      function applyShockwaves(jelly, dt) {
        for (const shock of shockwaves) {
          const age = shock.age / shock.life;
          if (age >= 1) continue;
          const dx = jelly.x - shock.x;
          const dy = jelly.y - shock.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 0.001) continue;
          const radius = 38 + shock.age * 370;
          const front = Math.exp(-Math.pow((distance - radius) / 92, 2));
          const blast = Math.exp(-shock.age * 5.5) * Math.exp(-distance / 360);
          const force = (1 - age) * (blast * 540 + front * 220);
          jelly.vx += (dx / distance) * force * dt;
          jelly.vy += (dy / distance) * force * dt;
          jelly.startle = Math.max(jelly.startle, (1 - age) * (0.32 + 0.72 * front + 0.5 * blast));
          jelly.impact = Math.max(jelly.impact, Math.min(1.35, (1 - age) * (0.22 + 0.82 * front + 0.55 * blast)));
        }
      }

      /** A moving eddy with a hard outward hand and a soft tangential swirl. */
      function pointerInfluence(jelly) {
        if (!pointer.active) return null;
        const dx = jelly.x - pointer.x;
        const dy = jelly.y - pointer.y;
        const radius = Math.min(430, width * 0.32);
        const distance = Math.hypot(dx, dy);
        if (distance >= radius || distance < 0.001) return null;
        const weight = Math.pow(1 - distance / radius, 1.45);
        const nx = dx / distance;
        const ny = dy / distance;
        const energy = clamp(pointer.energy, 0, 1);
        const pointerVx = clamp(pointer.vx, -800, 800);
        const pointerVy = clamp(pointer.vy, -800, 800);
        const hand = weight * energy;
        return {
          flowX:
            pointerVx * weight * 0.42 +
            nx * hand * (42 + energy * 66) -
            ny * hand * (18 + energy * 36),
          flowY:
            pointerVy * weight * 0.42 +
            ny * hand * (34 + energy * 54) +
            nx * hand * (18 + energy * 36),
          pushX: nx * hand * (80 + energy * 250) + pointerVx * weight * 0.3,
          pushY: ny * hand * (62 + energy * 190) + pointerVy * weight * 0.3,
          awayAngle: Math.atan2(ny, nx),
          weight,
          energy,
        };
      }

      function updateJelly(jelly, dt) {
        jelly.prevX = jelly.x;
        jelly.prevY = jelly.y;

        if (simTime >= jelly.nextTarget || Math.hypot(jelly.target.x - jelly.x, jelly.target.y - jelly.y) < 54) {
          chooseSwimTarget(jelly);
        }

        const ambient = ambientFlow(jelly.x, jelly.y, simTime);
        const flow = { x: ambient.x, y: ambient.y };
        const pointerHit = pointerInfluence(jelly);
        if (pointerHit !== null) {
          flow.x += pointerHit.flowX;
          flow.y += pointerHit.flowY;
          jelly.vx += pointerHit.pushX * dt;
          jelly.vy += pointerHit.pushY * dt;
          const touch = pointerHit.weight * pointerHit.energy;
          jelly.startle = Math.max(jelly.startle, clamp(touch * (0.3 + pointerHit.energy * 0.8), 0, 1.2));
          jelly.impact = Math.max(jelly.impact, clamp(touch * (0.18 + pointerHit.energy * 0.7), 0, 1.1));
        }
        jelly.flowX = flow.x;
        jelly.flowY = flow.y;

        // Water drag pulls the animal toward the local current instead of
        // letting a keyframed velocity push it around like a cursor.
        jelly.vx += (flow.x - jelly.vx) * jelly.drag * dt;
        jelly.vy += (flow.y - jelly.vy) * jelly.drag * dt;
        jelly.vy += jelly.sink * dt;

        let desiredHeading = Math.atan2(jelly.target.y - jelly.y, jelly.target.x - jelly.x);
        if (pointerHit !== null) {
          const steering = clamp(pointerHit.weight * pointerHit.energy * (0.5 + pointerHit.energy * 0.85), 0, 0.94);
          desiredHeading = blendAngles(desiredHeading, pointerHit.awayAngle, steering);
        }
        const edgeX = Math.min(132, width * 0.1);
        const edgeY = Math.min(132, height * 0.14);
        let edgeEscape = 0;
        if (jelly.x < edgeX) edgeEscape = Math.max(edgeEscape, 1 - jelly.x / edgeX);
        if (jelly.x > width - edgeX) edgeEscape = Math.max(edgeEscape, 1 - (width - jelly.x) / edgeX);
        if (jelly.y < edgeY) edgeEscape = Math.max(edgeEscape, 1 - jelly.y / edgeY);
        if (jelly.y > height - edgeY) edgeEscape = Math.max(edgeEscape, 1 - (height - jelly.y) / edgeY);
        if (edgeEscape > 0) {
          const centerAngle = Math.atan2(height * 0.5 - jelly.y, width * 0.5 - jelly.x);
          desiredHeading = blendAngles(desiredHeading, centerAngle, edgeEscape * 0.86);
        }

        const headingDelta = wrapAngle(desiredHeading - jelly.heading);
        const turnLimit = jelly.turnRate * (1 + jelly.startle * 1.4);
        const turnTarget = clamp(headingDelta * 1.9, -turnLimit, turnLimit);
        jelly.turnVelocity += (turnTarget - jelly.turnVelocity) * Math.min(1, dt * 4.8);
        jelly.heading = wrapAngle(jelly.heading + jelly.turnVelocity * dt);

        const tempo =
          0.9 +
          0.17 * Math.sin(simTime * 0.067 + jelly.seed * 1.1) +
          0.07 * Math.sin(simTime * 0.203 + jelly.phase * 0.8) +
          jelly.startle * 0.55;
        const previousPhase = jelly.pulsePhase;
        jelly.pulsePhase += dt / Math.max(1.4, jelly.swimPeriod / Math.max(0.52, tempo));
        if (jelly.pulsePhase >= 1) jelly.pulsePhase -= 1;
        if (previousPhase < 0.02 && jelly.pulsePhase >= 0.02) emitWake(jelly);

        const contraction = pulseEnvelope(jelly.pulsePhase);
        jelly.contraction = contraction;
        const vigor =
          jelly.beatVigor *
          (0.78 + 0.22 * Math.sin(simTime * 0.083 + jelly.seed * 2.1)) *
          (1 + jelly.startle * 0.9);
        const alignment = Math.max(0, Math.cos(wrapAngle(desiredHeading - jelly.heading)));
        const swimAuthority = 0.08 + 0.92 * smoothstep(0.38, 0.94, alignment);
        const thrust = contraction * contraction * 205 * jelly.swimPower * vigor * swimAuthority;
        jelly.vx += Math.cos(jelly.heading) * thrust * dt;
        jelly.vy += Math.sin(jelly.heading) * thrust * dt;

        applyShockwaves(jelly, dt);

        const marginX = Math.min(92, width * 0.075);
        const marginY = Math.min(96, height * 0.105);
        if (jelly.x < marginX) jelly.vx += (marginX - jelly.x) * 1.05 * dt;
        if (jelly.x > width - marginX) jelly.vx -= (jelly.x - (width - marginX)) * 1.05 * dt;
        if (jelly.y < marginY) jelly.vy += (marginY - jelly.y) * 0.82 * dt;
        if (jelly.y > height - marginY) jelly.vy -= (jelly.y - (height - marginY)) * 0.82 * dt;

        jelly.vx = clamp(jelly.vx, -138, 138);
        jelly.vy = clamp(jelly.vy, -122, 122);
        jelly.x += jelly.vx * dt;
        jelly.y += jelly.vy * dt;

        if (jelly.x < -60) {
          jelly.x = -60;
          jelly.vx = Math.abs(jelly.vx) * 0.35;
        } else if (jelly.x > width + 60) {
          jelly.x = width + 60;
          jelly.vx = -Math.abs(jelly.vx) * 0.35;
        }
        if (jelly.y < -80) {
          jelly.y = -80;
          jelly.vy = Math.abs(jelly.vy) * 0.3;
        } else if (jelly.y > height + 70) {
          jelly.y = height + 70;
          jelly.vy = -Math.abs(jelly.vy) * 0.3;
        }

        const relativeX = jelly.vx - (jelly.flowX ?? 0);
        const impactSwing = jelly.impact * Math.sin(simTime * 13.5 + jelly.phase) * 34;
        const idleSway = Math.sin(simTime * 1.05 + jelly.phase * 1.8) * 7 + Math.sin(simTime * 0.41 + jelly.seed) * 4;
        const skirtTarget = clamp(-relativeX * 0.95 + impactSwing + idleSway, -78, 78);
        jelly.skirtBendVelocity += (skirtTarget - jelly.skirtBend) * 12 * dt;
        jelly.skirtBendVelocity *= Math.exp(-3.2 * dt);
        jelly.skirtBend = clamp(jelly.skirtBend + jelly.skirtBendVelocity * dt, -82, 82);

        const leanTarget = clamp(
          jelly.turnVelocity * 0.06 +
            Math.sin(simTime * 0.37 + jelly.phase) * 0.018 +
            jelly.impact * Math.sin(simTime * 12 + jelly.phase) * 0.06,
          -0.12,
          0.12,
        );
        jelly.leanVelocity += (leanTarget - jelly.lean) * 8.6 * dt;
        jelly.leanVelocity *= Math.exp(-5.4 * dt);
        jelly.lean = clamp(jelly.lean + jelly.leanVelocity * dt, -0.16, 0.16);
        jelly.impact = Math.max(0, jelly.impact * Math.exp(-1.9 * dt));
        jelly.startle = Math.max(0, jelly.startle - dt * 0.46);
      }

      /** Resolve overlapping bells with a positional correction and a damped impulse. */
      function collideSchool() {
        for (let left = 0; left < school.length; left += 1) {
          for (let right = left + 1; right < school.length; right += 1) {
            const one = school[left];
            const two = school[right];
            const dx = two.x - one.x;
            const dy = two.y - one.y;
            const distance = Math.hypot(dx, dy);
            const minimum = one.collisionRadius + two.collisionRadius;
            if (distance >= minimum) continue;
            let nx = 0;
            let ny = 0;
            let overlap = minimum;
            // Exactly coincident bells have no normal; give the pair a stable
            // one instead of dividing by zero and leaving them stacked forever.
            if (distance < 0.001) {
              const angle = (left + 1) * 2.399963 + right * 1.618034;
              nx = Math.cos(angle);
              ny = Math.sin(angle);
            } else {
              nx = dx / distance;
              ny = dy / distance;
              overlap = minimum - distance;
            }
            const invOne = 1 / one.mass;
            const invTwo = 1 / two.mass;
            const invTotal = invOne + invTwo;
            one.x -= nx * overlap * (invOne / invTotal);
            one.y -= ny * overlap * (invOne / invTotal);
            two.x += nx * overlap * (invTwo / invTotal);
            two.y += ny * overlap * (invTwo / invTotal);

            const relativeNormal = (two.vx - one.vx) * nx + (two.vy - one.vy) * ny;
            if (relativeNormal >= -3) continue;
            const impulse = (-(1 + 0.34) * relativeNormal) / invTotal;
            one.vx -= nx * impulse * invOne;
            one.vy -= ny * impulse * invOne;
            two.vx += nx * impulse * invTwo;
            two.vy += ny * impulse * invTwo;

            const hit = Math.min(0.95, 0.16 + Math.abs(relativeNormal) * 0.022);
            one.impact = Math.max(one.impact, hit);
            two.impact = Math.max(two.impact, hit);
            one.startle = Math.max(one.startle, hit * 0.7);
            two.startle = Math.max(two.startle, hit * 0.7);
            one.leanVelocity -= nx * hit * 0.05;
            two.leanVelocity += nx * hit * 0.05;
            if (Math.abs(relativeNormal) > 10) {
              collisionCount += 1;
              collisionDirty = true;
              const midX = (one.x + two.x) * 0.5;
              const midY = (one.y + two.y) * 0.5;
              for (let index = 0; index < 2; index += 1) {
                addBubble({
                  x: midX + (Math.random() - 0.5) * 22,
                  y: midY + (Math.random() - 0.5) * 16,
                  life: 0.6 + Math.random() * 0.4,
                  phase: Math.random() * TAU,
                  char: index === 0 ? ':' : '.',
                  vx: (Math.random() - 0.5) * 18,
                  vy: -5 - Math.random() * 9,
                });
              }
            }
          }
        }
      }

      function updateSchool(dt) {
        simTime += dt;
        pointer.vx *= Math.exp(-2.6 * dt);
        pointer.vy *= Math.exp(-2.6 * dt);
        if (pointer.active && pointer.energy < 0.02 && Math.hypot(pointer.vx, pointer.vy) < 8) pointer.active = false;
        const pointerSpeed = Math.hypot(pointer.vx, pointer.vy);
        const targetEnergy = pointer.active ? Math.min(1, pointerSpeed / 430) : 0;
        pointer.energy += (targetEnergy - pointer.energy) * Math.min(1, dt * 6.5);
        for (const jelly of school) updateJelly(jelly, dt);
        collideSchool();
        if (collisionDirty) {
          canvas.dataset.collisions = String(collisionCount);
          collisionDirty = false;
        }
        updateShockwaves(dt);
        updateBubbles(dt);
        syncPositions();
      }

      function step(time) {
        frame = 0;
        if (!running || disposed || dom.hidden) return;
        try {
          const dprNow = win.devicePixelRatio || 1;
          if (dprNow !== observedDpr && time >= dprRetryAt) {
            // A failed backing-store rebuild leaves observedDpr untouched so a
            // later frame can retry, but throttle that retry instead of
            // rebuilding on every animation frame.
            dprRetryAt = time + 1000;
            scheduleResize();
          }
          if (reduced?.matches) {
            drawStatic();
            return;
          }
          if (last === 0) {
            last = time;
            return;
          }
          const elapsed = Math.min(0.06, Math.max(0, (time - last) / 1000));
          last = time;
          accumulator = Math.min(accumulator + elapsed, SIM_STEP * 8);
          let steps = 0;
          while (accumulator >= SIM_STEP && steps < 8) {
            updateSchool(SIM_STEP);
            accumulator -= SIM_STEP;
            steps += 1;
          }
          if (steps === 8) accumulator = 0;
          paint(simTime, accumulator / SIM_STEP);
        } catch {
          // Keep the animation loop alive across one bad frame (for example a
          // lost context); a later frame can repaint the shared tank.
        } finally {
          if (!disposed && running && !dom.hidden && !reduced?.matches) {
            frame = win.requestAnimationFrame(step);
          }
        }
      }

      function start() {
        if (disposed || frame !== 0 || !running || reduced?.matches) return;
        last = 0;
        accumulator = 0;
        frame = win.requestAnimationFrame(step);
      }

      function stop() {
        if (frame !== 0) win.cancelAnimationFrame(frame);
        frame = 0;
      }

      function addBubble(bubble) {
        bubbles.push({ ...bubble, age: 0 });
        if (bubbles.length > 32) bubbles.splice(0, bubbles.length - 32);
      }

      function onPointerMove(event) {
        if (disposed || reduced?.matches) return;
        const x = event.clientX - boxLeft;
        const y = event.clientY - boxTop;
        if (x < -40 || y < -40 || x > width + 40 || y > height + 40) {
          pointer.active = false;
          pointer.vx = 0;
          pointer.vy = 0;
          resetPointerHistory();
          return;
        }
        pointer.active = true;
        const now = event.timeStamp || performance.now();
        // Pointer events can arrive far faster than the display can show them.
        // Keep the movement responsive but skip samples that collapse into one frame.
        if (pointer.sampleAt > 0 && now - pointer.sampleAt < 8) return;
        pointer.sampleAt = now;
        // Seed the wake emitter's anchor on the first accepted sample. Without
        // this, `lastAt` stays 0 forever and the bubble-trail branch below is
        // unreachable.
        if (pointer.lastAt === 0) {
          pointer.lastAt = now;
          pointer.lastX = x;
          pointer.lastY = y;
        }
        if (pointer.moveAt > 0) {
          const delta = Math.max(0.012, (now - pointer.moveAt) / 1000);
          const nextVx = (x - pointer.moveX) / delta;
          const nextVy = (y - pointer.moveY) / delta;
          pointer.vx += (nextVx - pointer.vx) * 0.32;
          pointer.vy += (nextVy - pointer.vy) * 0.32;
        }
        pointer.moveAt = now;
        pointer.moveX = x;
        pointer.moveY = y;
        if (now - pointer.lastAt > 55) {
          const travel = Math.hypot(x - pointer.lastX, y - pointer.lastY);
          if (travel > 3) {
            addBubble({
              x: x + (Math.random() - 0.5) * 18,
              y: y + (Math.random() - 0.5) * 10,
              life: 1.1 + Math.random() * 0.7,
              phase: Math.random() * TAU,
              char: Math.random() > 0.55 ? ':' : 'o',
              vx: (Math.random() - 0.5) * 9,
              vy: -13 - Math.random() * 11,
            });
          }
          pointer.lastAt = now;
          pointer.lastX = x;
          pointer.lastY = y;
        }
        pointer.x = x;
        pointer.y = y;
      }

      function onPointerLeave() {
        if (disposed) return;
        pointer.active = false;
        pointer.vx = 0;
        pointer.vy = 0;
        pointer.energy = 0;
        resetPointerHistory();
      }

      /** A click in open water sends a strong pressure ring through the school. */
      function onPointerDown(event) {
        if (disposed || event.button !== 0 || reduced?.matches) return;
        if (event.target instanceof Element && event.target.closest('button, a, input, textarea, select, [role="button"], [contenteditable="true"]') !== null) return;
        const x = event.clientX - boxLeft;
        const y = event.clientY - boxTop;
        if (x < 0 || y < 0 || x > width || y > height) return;
        pointer.active = true;
        pointer.x = x;
        pointer.y = y;
        pointer.energy = 1;
        shockwaves.push({ x, y, age: 0, life: 1.4 });
        if (shockwaves.length > 4) shockwaves.shift();
        for (let index = 0; index < 22; index += 1) {
          const angle = (index / 22) * TAU;
          const speed = 26 + (index % 4) * 10;
          addBubble({
            x: x + Math.cos(angle) * (8 + (index % 4) * 7),
            y: y + Math.sin(angle) * (4 + (index % 3) * 7),
            life: 1.0 + (index % 5) * 0.18,
            phase: angle,
            char: index % 4 === 0 ? 'o' : index % 3 === 0 ? ':' : '.',
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed * 0.7 - 10,
          });
        }
      }

      function onVisibility() {
        if (disposed) return;
        running = !dom.hidden;
        if (!running) {
          pointer.active = false;
          pointer.vx = 0;
          pointer.vy = 0;
          pointer.energy = 0;
          resetPointerHistory();
          stop();
          return;
        }
        // A hidden page can miss a viewport or DPR change; re-measure before
        // deciding whether to run the loop or paint the reduced-motion frame.
        scheduleResize();
        if (reduced?.matches) drawStatic();
        else start();
      }

      function onMotionChange() {
        if (disposed) return;
        if (reduced?.matches) {
          pointer.active = false;
          pointer.vx = 0;
          pointer.vy = 0;
          pointer.energy = 0;
          resetPointerHistory();
          stop();
          if (!dom.hidden) drawStatic();
        } else {
          start();
        }
      }

      /** Coalesce the attribute records a theme switch produces into one rebuild. */
      function refreshTheme() {
        themeQueued = false;
        if (disposed) return;
        const nextColours = readColours();
        // Theme observers also fire for redundant attribute writes; skip the
        // 42-sprite rebuild when the resolved palette did not actually change.
        const changed = Object.keys(nextColours).some((key) => nextColours[key] !== colours[key]);
        const previousColours = colours;
        colours = nextColours;
        if (changed && char > 0) {
          try {
            rebuildSprites();
          } catch (error) {
            // Keep the previous palette and sprite set paired so a later theme
            // change or resize can retry instead of painting new colours over
            // sprites baked for the old face.
            colours = previousColours;
            throw error;
          }
        }
        if (reduced?.matches && !dom.hidden) drawStatic();
      }

      function scheduleThemeRefresh() {
        if (themeQueued || disposed) return;
        themeQueued = true;
        // Keep the previous sprite set if a theme rebuild fails; the next
        // theme change (or the reduced-motion frame) will try again.
        Promise.resolve().then(refreshTheme).catch(() => {});
      }

      let resizeObserver = null;
      let themeObserver = null;
      let dprQuery = null;

      // Browser zoom and moving the window between monitors change
      // devicePixelRatio without a window resize. Watch the matching resolution
      // query so the backing store is rebuilt at the new density.
      function onDprChange() {
        if (disposed) return;
        scheduleResize();
        watchDpr();
      }
      function watchDpr() {
        if (disposed) return;
        dprQuery?.removeEventListener?.('change', onDprChange);
        dprQuery = win.matchMedia?.(`(resolution: ${win.devicePixelRatio || 1}dppx)`) ?? null;
        dprQuery?.addEventListener?.('change', onDprChange);
      }

      const cleanup = () => {
        if (disposed) return;
        disposed = true;
        running = false;
        stop();
        resizeObserver?.disconnect();
        themeObserver?.disconnect();
        win.removeEventListener('pointermove', onPointerMove);
        win.removeEventListener('pointerleave', onPointerLeave);
        win.removeEventListener('resize', scheduleResize);
        dom.removeEventListener('pointerdown', onPointerDown, true);
        dom.removeEventListener('visibilitychange', onVisibility);
        reduced?.removeEventListener?.('change', onMotionChange);
        dprQuery?.removeEventListener?.('change', onDprChange);
        for (const set of spriteSets) releaseSpriteSet(set);
        spriteSets = [];
        canvas.remove();
      };

      try {
        if (typeof ResizeObserver === 'function') {
          resizeObserver = new ResizeObserver(scheduleResize);
          resizeObserver.observe(wrap);
        }
        const themeRoot = dom.documentElement ?? dom.body;
        if (typeof MutationObserver === 'function' && themeRoot !== null && themeRoot !== undefined) {
          themeObserver = new MutationObserver(scheduleThemeRefresh);
          themeObserver.observe(themeRoot, { attributes: true, attributeFilter: ['data-ds-dark-theme'], subtree: true });
        }

        watchDpr();
        win.addEventListener('pointermove', onPointerMove, { passive: true });
        win.addEventListener('pointerleave', onPointerLeave);
        win.addEventListener('resize', scheduleResize);
        dom.addEventListener('pointerdown', onPointerDown, true);
        dom.addEventListener('visibilitychange', onVisibility);
        reduced?.addEventListener?.('change', onMotionChange);

        // First layout and sprite rasterisation are deliberately deferred to
        // the next animation frame: mounting the skin must not block the
        // shell's first paint with ~40 sprite canvases. The callback starts the
        // loop once the school exists.
        scheduleResize();
        if (school.length > 0 && !reduced?.matches) start();
      } catch (error) {
        // If setup fails after listeners or observers were installed, do not
        // leave a half-mounted tank and its window listeners behind.
        cleanup();
        throw error;
      }

      return cleanup;
    }

    // ── the plugin: a quiet skin, a loud boot, one settings page ─────────────
    //
    // Two independent features live in this bundle:
    //
    //   01 开机动画   a full-screen 550C boot sequence, played once per page load
    //   02 皮肤       the system-wide still-water skin, applied to the whole shell
    //
    // Both switches and both previews are owned by the Settings section below.
    // The skin is installed only while its switch (or its preview) is active, so
    // turning it off removes every token, rule, marker and canvas in one step.

    const React = require('react');
    const h = React.createElement;
    const { useEffect, useRef, useState } = React;

    /** Dictionary namespace owned by this plugin. */
    const NS = 'appearance-boot';
    /** Marker on <body>; every skin rule is gated by it. */
    const BODY_MARK = 'data-dsh-appearance-boot';
    /** Where the browser remembers the two switches. Defaults are ON. */
    const SKIN_KEY = 'dsh-appearance-boot:skin';
    const BOOT_KEY = 'dsh-appearance-boot:boot';
    /** Same-page notification for switch changes; storage events cover other tabs. */
    const CHANGE_EVENT = 'dsh-appearance-boot:change';
    /** Route served by the Host half. */
    const BOOT_SRC = '/dsh-appearance-boot/boot/550c.html';

    const SOURCE = '@local/dsh-appearance-boot';

    /** A token value that is the same in the daylight and night faces. */
    const both = (value) => ({ light: value, dark: value });

    /**
     * The shell's alias tokens, re-pointed at the skin palette.
     *
     * Values reference variables declared by this plugin's stylesheet on
     * `body[data-dsh-appearance-boot]` (and on the Settings page itself); the shell's
     * own `data-ds-dark-theme` switch swaps those variables, so one layer
     * serves both appearances.
     */
    const TOKEN_OVERRIDES = {
      '--dsw-alias-bg-base': both('var(--jelly-skin-ground)'),
      '--dsw-alias-bg-layer-1': both('var(--jelly-skin-sheet)'),
      '--dsw-alias-bg-layer-2': both('var(--jelly-skin-sheet-2)'),
      '--dsw-alias-bg-layer-3': both('var(--jelly-skin-sheet)'),
      '--dsw-alias-bg-overlay': both('var(--jelly-skin-paper)'),
      '--dsw-alias-bg-module-platform': both('var(--jelly-skin-sheet)'),
      '--dsw-alias-bg-document-selection': both('color-mix(in srgb, var(--jelly-skin-accent) 28%, transparent)'),
      '--dsw-alias-settings-card-fill': both('var(--jelly-skin-sheet)'),
      '--dsw-alias-settings-card-stroke': both('var(--jelly-skin-rule)'),
      '--dsw-alias-markdown-code-block': both('var(--jelly-skin-sheet-2)'),
      '--dsw-alias-markdown-code-block-banner': both('var(--jelly-skin-sheet)'),
      '--dsw-alias-markdown-inline-code': both('var(--jelly-skin-sheet-2)'),
      '--dsw-alias-markdown-tag': both('var(--jelly-skin-sheet-2)'),
      '--dsw-alias-turn-trigger-bg': both('var(--jelly-skin-hover)'),
      '--dsw-alias-turn-trigger-bg-hover': both('var(--jelly-skin-accent-soft)'),
      '--dsw-specific-sidebar-fill': both('transparent'),
      '--dsw-specific-sidebar-nav-item-active': both('var(--jelly-skin-sheet-2)'),
      // The question card's "Recommended" chip uses this token as its fill and
      // paints the label with --dsw-alias-button-info-fill (the inverse window
      // here). A full accent made both ends the same near-white in the night
      // face and near-black in the day face, so the chip read as a blank pill.
      '--dsw-specific-sidebar-nav-item-active-accent': both('var(--jelly-skin-accent-soft)'),
      '--dsw-specific-bubble': both('var(--jelly-skin-bubble)'),
      '--dsw-specific-input-major': both('var(--jelly-skin-sheet)'),
      '--dsw-specific-selector': both('var(--jelly-skin-accent-soft)'),
      '--dsw-specific-menu': both('var(--jelly-skin-paper)'),
      '--dsw-alias-toast-bg': both('var(--jelly-skin-paper)'),
      '--dsw-alias-toast-label': both('var(--jelly-skin-ink)'),
      '--dsw-alias-tooltip-bg': both('var(--jelly-skin-paper)'),
      '--dsw-alias-tooltip-key-bg': both('var(--jelly-skin-sheet-2)'),
      '--dsw-alias-border-inverted': both('var(--jelly-skin-rule)'),
      '--dsw-alias-border-inverted2': both('var(--jelly-skin-rule)'),
      '--dsw-alias-border-l1': both('var(--jelly-skin-rule)'),
      '--dsw-alias-border-l2': both('var(--jelly-skin-rule-2)'),
      '--dsw-alias-border-l3': both('var(--jelly-skin-rule-2)'),
      '--dsw-alias-border-l4': both('var(--jelly-skin-rule-2)'),
      '--dsw-alias-label-primary': both('var(--jelly-skin-ink)'),
      '--dsw-alias-label-primary-bluish': both('var(--jelly-skin-ink)'),
      '--dsw-alias-label-primary-inverted': both('var(--jelly-skin-window-ink)'),
      '--dsw-alias-label-primary-foreground': both('var(--jelly-skin-window-ink)'),
      '--dsw-alias-label-secondary': both('var(--jelly-skin-ink-2)'),
      '--dsw-alias-label-tertiary': both('var(--jelly-skin-ink-3)'),
      '--dsw-alias-label-caption': both('var(--jelly-skin-ink-3)'),
      '--dsw-alias-label-dimmed': both('var(--jelly-skin-ink-3)'),
      '--dsw-alias-brand-primary': both('var(--jelly-skin-accent)'),
      '--dsw-alias-brand-primary-invert': both('var(--jelly-skin-window)'),
      '--dsw-alias-brand-text': both('var(--jelly-skin-accent)'),
      '--dsw-alias-state-error-primary': both('var(--jelly-skin-verm)'),
      '--dsw-alias-state-success-primary': both('var(--jelly-skin-ok)'),
      '--dsw-alias-state-warn-primary': both('var(--jelly-skin-today)'),
      '--dsw-alias-state-idle-primary': both('var(--jelly-skin-ink-3)'),
      '--dsw-alias-state-business-primary': both('var(--jelly-skin-accent)'),
      '--dsw-alias-link': both('var(--jelly-skin-accent)'),
      '--dsw-alias-interactive-bg-hover': both('var(--jelly-skin-hover)'),
      '--dsw-alias-interactive-bg-hover-solid': both('var(--jelly-skin-hover)'),
      '--dsw-alias-interactive-bg-active': both('var(--jelly-skin-accent-soft)'),
      '--dsw-alias-button-primary-fill': both('var(--jelly-skin-window)'),
      '--dsw-alias-button-primary-hover': both('var(--jelly-skin-accent)'),
      '--dsw-alias-button-primary-dimmed': both('var(--jelly-skin-sheet-2)'),
      '--dsw-alias-button-info-fill': both('var(--jelly-skin-window)'),
      '--dsw-alias-button-info-hover': both('var(--jelly-skin-accent)'),
      '--dsw-alias-button-floating-fill': both('var(--jelly-skin-sheet)'),
      '--dsw-alias-button-floating-hover': both('var(--jelly-skin-sheet-2)'),
      '--dsw-alias-button-elevated-fill': both('var(--jelly-skin-sheet-2)'),
      '--dsw-alias-button-tool-bar-fill': both('var(--jelly-skin-bubble)'),
      '--dsw-alias-button-tool-bar-fill-invisible': both('transparent'),
      '--dsw-alias-scrollbar-bg-l1': both('var(--jelly-skin-rule-2)'),
      '--dsw-alias-scrollbar-bg-l2': both('var(--jelly-skin-rule-2)'),
      '--dsw-alias-scrollbar-hover-l1': both('var(--jelly-skin-ink-3)'),
      '--dsw-alias-scrollbar-hover-l2': both('var(--jelly-skin-ink-3)'),
      '--dsw-elevation-soft': both('none'),
      '--dsw-elevation-panel': both('0 0 0 1px var(--jelly-skin-rule)'),
      '--dsw-elevation-prominent': both('0 18px 44px -26px rgba(15,17,21,.32)'),
      '--dsw-shadow-lv1': both('none'),
      '--dsw-shadow-lv2': both('0 18px 44px -26px rgba(15,17,21,.32)'),
      '--dsw-shadow-lv3': both('0 30px 70px -36px rgba(15,17,21,.55)'),
      '--dsw-radius-xs': both('0px'),
      '--dsw-radius-sm': both('0px'),
      '--dsw-radius-md': both('0px'),
      '--dsw-radius-lg': both('0px'),
      '--dsw-radius-xl': both('0px'),
      '--dsw-radius-panel': both('0px'),
      // `corner-shape` only accepts shape keywords; `0` is invalid and gets
      // dropped at computed-value time. The square corners come from the zero
      // radii above, so this simply states the fallback shape explicitly.
      '--dsw-corner-shape': both('round'),
      '--dsw-focus-ring-color': both('var(--jelly-skin-focus)'),
    };

    /**
     * Put one shared tank behind the shell frame.
     *
     * `[data-shell-overlay]` is the frame's own overlay layer, so its parent is
     * exactly the frame that holds the sidebar, the center column and the right
     * track. The canvas is prepended there, never inside a page: one school can
     * swim from the rail across a conversation without being cloned.
     */
    function installJellySurface() {
      const dom = typeof globalThis !== 'undefined' && globalThis.document ? globalThis.document : null;
      if (dom === null || typeof dom.querySelector !== 'function' || typeof dom.querySelectorAll !== 'function') return () => {};
      let frame = null;
      let side = null;
      let center = null;
      let right = null;
      let tank = null;
      let tankCanvas = null;
      let disposeTank = null;
      let applyQueued = false;
      let disposed = false;

      // Use data attributes, not React-owned class names: a re-render may rewrite
      // `className` and silently drop a marker that the skin depends on.
      const mark = (node, attribute) => {
        if (node === null || node === undefined) return;
        node.setAttribute(attribute, 'true');
      };

      const unmark = (node, attribute) => {
        if (node === null || node === undefined) return;
        node.removeAttribute(attribute);
      };

      const hasShellColumns = (parent) => {
        for (const child of parent.children) {
          if (typeof child.className !== 'string') continue;
          if (child.className.includes('sidebarCol') || child.className.includes('centerCol')) return true;
        }
        return false;
      };

      // Prefer the last overlay whose parent owns the shell columns. A page or
      // message that happens to reuse `data-shell-overlay` cannot divert the
      // decorative canvas into content because it has no column siblings.
      const findFrame = () => {
        const overlays = dom.querySelectorAll('[data-shell-overlay]');
        for (let index = overlays.length - 1; index >= 0; index -= 1) {
          const parent = overlays[index].parentElement;
          if (parent !== null && hasShellColumns(parent)) return parent;
        }
        return null;
      };

      /** Direct shell children by class substring; never count the tank itself. */
      const part = (root, name) => {
        for (const child of root.children) {
          if (child !== tank && typeof child.className === 'string' && child.className.includes(name)) return child;
        }
        return null;
      };

      const childAt = (root, index) => {
        const children = [...root.children].filter((child) => child !== tank);
        return children[index] ?? null;
      };

      /** Whether the exact mounted canvas is still the tank's live child. */
      const tankAttached = () =>
        tank !== null &&
        tank.isConnected &&
        tank.parentElement === frame &&
        tankCanvas !== null &&
        tankCanvas.parentElement === tank &&
        tankCanvas.classList?.contains('jelly-skin-canvas') === true;

      const tearDownFrame = () => {
        unmark(frame, 'data-jelly-skin-frame');
        unmark(side, 'data-jelly-skin-side');
        unmark(center, 'data-jelly-skin-center');
        unmark(right, 'data-jelly-skin-right');
        try {
          disposeTank?.();
        } finally {
          disposeTank = null;
          tank?.remove();
          tank = null;
          tankCanvas = null;
          side = null;
          center = null;
          right = null;
        }
      };

      const apply = () => {
        applyQueued = false;
        if (disposed) return;
        const nextFrame = findFrame();
        if (nextFrame === null) {
          // The overlay can disappear from a still-connected frame when the
          // shell tears down its overlay layer. Do not leave a tank attached to
          // a frame that no longer exposes the skin anchor.
          if (frame !== null || tank !== null) {
            tearDownFrame();
            frame = null;
          }
          return;
        }
        if (nextFrame !== frame) {
          tearDownFrame();
          frame = nextFrame;
          mark(frame, 'data-jelly-skin-frame');
        }
        const nextSide = part(frame, 'sidebarCol') ?? childAt(frame, 0);
        const nextCenter = part(frame, 'centerCol') ?? childAt(frame, 1);
        const nextRight = part(frame, 'rightbarCol') ?? childAt(frame, 2);
        if (side !== nextSide) {
          unmark(side, 'data-jelly-skin-side');
          side = nextSide;
        }
        if (center !== nextCenter) {
          unmark(center, 'data-jelly-skin-center');
          center = nextCenter;
        }
        if (right !== nextRight) {
          unmark(right, 'data-jelly-skin-right');
          right = nextRight;
        }
        mark(side, 'data-jelly-skin-side');
        mark(center, 'data-jelly-skin-center');
        mark(right, 'data-jelly-skin-right');

        if (!tankAttached()) {
          if (tank !== null) {
            try {
              disposeTank?.();
            } finally {
              disposeTank = null;
              tank.remove();
              tank = null;
              tankCanvas = null;
            }
          }
          tank = dom.createElement('div');
          tank.className = 'jelly-skin-tank';
          tank.setAttribute('aria-hidden', 'true');
          frame.prepend(tank);
          try {
            disposeTank = mountJellyTank(tank);
            tankCanvas = tank.querySelector('.jelly-skin-canvas');
            if (tankCanvas === null) throw new Error('jelly tank did not mount a canvas');
          } catch {
            // The water is decorative: a canvas failure must never take the
            // shell down with it.
            try {
              disposeTank?.();
            } finally {
              tank.remove();
              tank = null;
              tankCanvas = null;
              disposeTank = null;
            }
          }
        }
      };

      const scheduleApply = () => {
        if (applyQueued || disposed) return;
        applyQueued = true;
        // The water is decorative: a failed DOM scan must not surface as an
        // unhandled rejection (or take the shell down with it).
        Promise.resolve().then(apply).catch(() => {});
      };

      /** Cheap structural check: text streaming must not rescan the whole shell. */
      const contains = (nodes, selector) => {
        for (const node of nodes) {
          if (node.nodeType !== 1) continue;
          if (typeof node.matches === 'function' && node.matches(selector)) return true;
          if (typeof node.querySelector === 'function' && node.querySelector(selector) !== null) return true;
        }
        return false;
      };

      try {
        apply();
      } catch {
        // The water is decorative: a failed first DOM scan must never take the
        // client module down. The observer below retries on later mutations.
      }
      const observeRoot = dom.documentElement ?? dom.body;
      const observer =
        typeof MutationObserver === 'function' && observeRoot !== null && observeRoot !== undefined
          ? new MutationObserver((records) => {
              if (disposed) return;
              let structural = !tankAttached() || frame === null || !frame.isConnected;
              if ((side !== null && !side.isConnected) || (center !== null && !center.isConnected) || (right !== null && !right.isConnected)) structural = true;
              for (const record of records) {
                if (record.type !== 'childList' || record.target === tank) continue;
                // Page content lives inside the frame; only a change at or above
                // the frame can replace the shell layer this skin is attached to.
                if (record.target !== frame && frame !== null && frame.contains(record.target)) continue;
                if (!structural && (contains(record.addedNodes, '[data-shell-overlay]') || contains(record.removedNodes, '[data-shell-overlay]'))) structural = true;
                if (structural) break;
              }
              if (structural) scheduleApply();
            })
          : null;
      if (observer !== null) {
        try {
          observer.observe(observeRoot, { childList: true, subtree: true });
        } catch {
          /* an unobservable root leaves the first frame layer attached */
        }
      }

      return () => {
        disposed = true;
        if (observer !== null) observer.disconnect();
        tearDownFrame();
        frame = null;
      };
    }



    const zh = {
      nav: '外观与启动',
      title: '外观与启动',
      lede: '一套安静的水，一次终端接管。开机动画与皮肤各自独立，随时开关或预览。',
      indexBoot: '开机动画',
      indexSkin: '皮肤',
      sectionBoot: '开机动画',
      sectionBootHint: '启动 Harness 时先播放一段终端接管，每次打开只播一次；点击画面或按 Esc 可跳过。',
      sectionSkin: '皮肤',
      sectionSkinHint: '一套覆盖整个 Harness 的中性皮肤，包含一群共享同一帧的 ASCII 水母。',
      bootTitle: '550C 开机动画',
      bootCopy: '从基站终端开始，47 个节点逐一覆写，最后定格于 SYSTEM IS REWRITTEN。约 10 秒；点击或按 Esc 随时跳过。',
      bootNotePre: '参考 Voidpocket 的',
      bootNotePost: '，已省略原片头的 logo 书写段落。',
      skinTitle: '水母皮肤',
      skinCopy: '中性纸感、直角材料与程序化 ASCII 水母。覆盖整个 Harness，明暗外观跟随 Harness 主题；不改变任何页面布局与操作。',
      skinMetaOne: '全帧水族箱',
      skinMetaTwo: '六种水母',
      skinMetaThree: '120 Hz 模拟',
      statusOn: '已开启',
      statusOff: '已关闭',
      toggleOn: '关闭',
      toggleOff: '开启',
      preview: '预览',
      previewing: '播放中…',
      previewSkin: '在界面中预览',
      previewSkinBusy: '预览中…',
      previewPill: '正在预览水母皮肤',
      previewPillEnd: '结束预览',
      skinOnHint: '已在界面中生效 · 下方为实时预览。',
      localHint: '开关保存在本机浏览器，刷新后继续生效。',
      stageLive: 'LIVE SPECIMEN',
      stageTitle: '安静的水，\n和一群会呼吸的字。',
      stageComposer: '问点什么…',
      stageRailOne: '对话',
      stageRailTwo: '文档',
      stageRailThree: '待办',
      switchAria: '切换{name}',
      previewAria: '预览{name}',
    };

    const en = {
      nav: 'Appearance & Boot',
      title: 'Appearance & Boot',
      lede: 'A quiet body of water and a terminal takeover. The boot animation and the skin are independent — switch or preview either one at any time.',
      indexBoot: 'Boot animation',
      indexSkin: 'Skin',
      sectionBoot: 'Boot animation',
      sectionBootHint: 'A terminal takeover plays once each time Harness starts; click the frame or press Esc to skip.',
      sectionSkin: 'Skin',
      sectionSkinHint: 'A neutral skin for the whole Harness, with one shared school of ASCII jellyfish behind every surface.',
      bootTitle: '550C boot animation',
      bootCopy: 'The base-station terminal opens, all 47 nodes are rewritten one by one, and the sequence settles on SYSTEM IS REWRITTEN. About 10 seconds; click or press Esc to skip.',
      bootNotePre: 'Based on',
      bootNotePost: ' by Voidpocket; the original logo-drawing opening is omitted.',
      skinTitle: 'Jelly Skin',
      skinCopy: 'Neutral paper, square materials and procedural ASCII jellyfish. It covers the entire Harness and follows the Harness light/dark appearance without changing any layout or control.',
      skinMetaOne: 'Frame-wide tank',
      skinMetaTwo: 'Six species',
      skinMetaThree: '120 Hz simulation',
      statusOn: 'On',
      statusOff: 'Off',
      toggleOn: 'Turn off',
      toggleOff: 'Turn on',
      preview: 'Preview',
      previewing: 'Playing…',
      previewSkin: 'Preview in the app',
      previewSkinBusy: 'Previewing…',
      previewPill: 'Previewing Jelly Skin',
      previewPillEnd: 'End preview',
      skinOnHint: 'Live in the app — the specimen below is a live preview.',
      localHint: 'Switches are stored in this browser and survive a refresh.',
      stageLive: 'LIVE SPECIMEN',
      stageTitle: 'Quiet water,\nand a school of breathing type.',
      stageComposer: 'Ask something…',
      stageRailOne: 'Chat',
      stageRailTwo: 'Docs',
      stageRailThree: 'To-dos',
      switchAria: 'Toggle {name}',
      previewAria: 'Preview {name}',
    };

    // ── switches ─────────────────────────────────────────────────────────────

    /**
     * Last values written by this page. They keep the UI honest when storage
     * throws (private windows, disabled site data) instead of letting the next
     * read snap a just-flipped switch back to its default.
     */
    const memoryFlags = new Map();
    let storageBlocked = false;

    /** Read one switch; an unset or unreadable key keeps the feature on. */
    function readFlag(key) {
      if (!storageBlocked) {
        try {
          const storage = globalThis.localStorage;
          if (storage === null || storage === undefined) storageBlocked = true;
          else return storage.getItem(key) !== 'off';
        } catch {
          storageBlocked = true;
        }
      }
      return memoryFlags.get(key) ?? true;
    }

    /** The complete live preference snapshot. */
    function readSettings() {
      return { skin: readFlag(SKIN_KEY), boot: readFlag(BOOT_KEY) };
    }

    const settingsListeners = new Set();

    /** Persist one switch and wake every mounted settings page. */
    function writeFlag(key, on) {
      memoryFlags.set(key, on);
      try {
        const storage = globalThis.localStorage;
        if (storage === null || storage === undefined) {
          storageBlocked = true;
        } else {
          storage.setItem(key, on ? 'on' : 'off');
          storageBlocked = false;
        }
      } catch {
        storageBlocked = true;
      }
      // One notification path: the local event reaches every subscriber added
      // by subscribeSettings. Keep the direct loop only as a fallback for a
      // page where Event or dispatchEvent is unavailable.
      let notified = false;
      try {
        if (typeof Event === 'function' && typeof globalThis.dispatchEvent === 'function') {
          globalThis.dispatchEvent(new Event(CHANGE_EVENT));
          notified = true;
        }
      } catch {
        /* fall through to the direct listener loop */
      }
      if (!notified) {
        for (const listener of settingsListeners) {
          try {
            listener();
          } catch {
            /* one broken subscriber must not stop the others */
          }
        }
      }
    }

    function subscribeSettings(listener) {
      settingsListeners.add(listener);
      const onStorage = (event) => {
        if (event.key === null) {
          memoryFlags.clear();
        } else if (event.key === SKIN_KEY || event.key === BOOT_KEY) {
          if (event.newValue === null) memoryFlags.delete(event.key);
          else memoryFlags.set(event.key, event.newValue !== 'off');
        } else {
          return;
        }
        listener();
      };
      const onLocal = () => listener();
      globalThis.addEventListener?.('storage', onStorage);
      globalThis.addEventListener?.(CHANGE_EVENT, onLocal);
      return () => {
        settingsListeners.delete(listener);
        globalThis.removeEventListener?.('storage', onStorage);
        globalThis.removeEventListener?.(CHANGE_EVENT, onLocal);
      };
    }

    /** Subscribe a React view to the two switches. */
    function useJellySettings() {
      const [state, setState] = useState(readSettings);
      useEffect(() => {
        const update = () => setState(readSettings());
        const stop = subscribeSettings(update);
        // Catch a change that landed between render and subscription.
        update();
        return stop;
      }, []);
      return state;
    }

    // ── the skin binding ─────────────────────────────────────────────────────

    /**
     * Apply or remove the skin on demand.
     *
     * The stylesheet is always mounted (the Settings page uses its palette and
     * its rule vocabulary); the body marker is the actual switch. The token
     * override and the shared canvas are created only while the skin is active,
     * and both are disposed when it goes off.
     */
    function createSkinBinding(ctx) {
      let tokenDispose = null;
      let surfaceDispose = null;
      let markedBody = null;
      let previewing = false;
      let previewTimer = 0;
      let previewEnd = null;
      let pill = null;
      let bodyObserver = null;

      const isActive = () => readFlag(SKIN_KEY) || previewing;

      const markBody = () => {
        if (!isActive()) return;
        const body = globalThis.document?.body ?? null;
        if (body === null) return;
        if (markedBody !== null && markedBody !== body) markedBody.removeAttribute(BODY_MARK);
        body.setAttribute(BODY_MARK, 'true');
        markedBody = body;
      };

      const unmarkBody = () => {
        markedBody?.removeAttribute(BODY_MARK);
        const body = globalThis.document?.body ?? null;
        if (body !== null && body !== markedBody) body.removeAttribute(BODY_MARK);
        markedBody = null;
      };

      const engage = () => {
        // Mark the body before the canvas mount: mountJellyTank reads the
        // palette from the canvas immediately, and the skin variables (and the
        // tank's positioning rule) only exist while the body is marked.
        markBody();
        if (tokenDispose === null) tokenDispose = ctx.theme.overrideTokens(SOURCE, TOKEN_OVERRIDES);
        if (surfaceDispose === null) surfaceDispose = installJellySurface();
        // A body that appeared between the first mark and the mount still gets
        // the marker without rebuilding a palette that is already correct.
        markBody();
      };

      const disengage = () => {
        try {
          surfaceDispose?.();
        } finally {
          surfaceDispose = null;
          try {
            tokenDispose?.();
          } finally {
            tokenDispose = null;
            unmarkBody();
          }
        }
      };

      const removePill = () => {
        pill?.remove();
        pill = null;
      };

      const showPill = () => {
        const doc = globalThis.document;
        if (!doc?.body || pill !== null) return;
        pill = doc.createElement('div');
        pill.className = 'jelly-skin-preview-pill';
        pill.setAttribute('role', 'status');
        const t = translate();
        const label = doc.createElement('span');
        label.textContent = t('previewPill');
        const end = doc.createElement('button');
        end.type = 'button';
        end.textContent = t('previewPillEnd');
        end.addEventListener('click', () => stopPreview());
        pill.append(label, end);
        doc.body.appendChild(pill);
      };

      const stopPreview = () => {
        if (!previewing) return;
        previewing = false;
        if (previewTimer !== 0) {
          clearTimeout(previewTimer);
          previewTimer = 0;
        }
        const end = previewEnd;
        previewEnd = null;
        removePill();
        try {
          sync();
        } finally {
          try {
            end?.();
          } catch {
            /* a preview listener must not break the teardown */
          }
        }
      };

      const sync = () => {
        if (isActive()) engage();
        else disengage();
      };

      /** Start a bounded, unpersisted skin preview. False when already on. */
      const preview = (duration = 7000, onEnd = null) => {
        if (readFlag(SKIN_KEY)) return false;
        previewing = true;
        previewEnd = typeof onEnd === 'function' ? onEnd : null;
        try {
          sync();
          showPill();
        } catch (error) {
          // A failed surface must leave no half-preview behind: clear the
          // flag and the callback so the next click retries from a clean
          // state, then let the caller report the failure.
          previewing = false;
          previewEnd = null;
          if (previewTimer !== 0) {
            clearTimeout(previewTimer);
            previewTimer = 0;
          }
          removePill();
          try {
            disengage();
          } catch {
            /* the original failure is the one worth reporting */
          }
          throw error;
        }
        if (previewTimer !== 0) clearTimeout(previewTimer);
        previewTimer = setTimeout(stopPreview, duration);
        return true;
      };

      if (typeof MutationObserver === 'function' && globalThis.document?.documentElement) {
        bodyObserver = new MutationObserver(() => markBody());
        bodyObserver.observe(globalThis.document.documentElement, { childList: true });
      }

      return {
        sync,
        preview,
        stopPreview,
        dispose() {
          try {
            stopPreview();
          } finally {
            if (previewTimer !== 0) {
              clearTimeout(previewTimer);
              previewTimer = 0;
            }
            previewEnd = null;
            bodyObserver?.disconnect();
            bodyObserver = null;
            removePill();
            disengage();
          }
        },
      };
    }

    // ── the boot controller ──────────────────────────────────────────────────

    /** Retire the Host half's solid first frame once the real show is on screen. */
    function endFirstFrame() {
      try {
        globalThis.__dshJellyBootFirstFrame?.end?.();
      } catch {
        /* the cover is best-effort */
      }
    }

    function createBootController() {
      let frame = null;
      let playing = false;
      let fallback = 0;
      let settle = null;
      let started = false;
      let listening = false;

      const clearFallback = () => {
        if (fallback !== 0) {
          clearTimeout(fallback);
          fallback = 0;
        }
      };

      /** One set of window listeners for the controller, attached on demand. */
      const attach = () => {
        if (listening) return;
        window.addEventListener('message', onMessage);
        window.addEventListener('keydown', onKeyDown);
        listening = true;
      };
      const detach = () => {
        if (!listening) return;
        window.removeEventListener('message', onMessage);
        window.removeEventListener('keydown', onKeyDown);
        listening = false;
      };

      const cleanup = () => {
        clearFallback();
        if (frame !== null) {
          frame.removeEventListener('load', onLoad);
          frame.remove();
          frame = null;
        }
        detach();
        playing = false;
        if (settle !== null) {
          settle(false);
          settle = null;
        }
        // A failed mount or a plugin teardown must not leave the Host's solid
        // first-frame cover on screen until its 6 s safety timer fires.
        endFirstFrame();
      };

      const finish = () => {
        if (!playing || frame === null) {
          cleanup();
          return;
        }
        const leaving = frame;
        leaving.classList.add('is-leaving');
        // If the iframe never loaded, there is no fade to wait for: retire the
        // host cover now instead of leaving a black screen until the 6 s net.
        if (!leaving.classList.contains('is-ready')) endFirstFrame();
        clearFallback();
        detach();
        const done = settle;
        settle = null;
        playing = false;
        // Capture this exact frame: a later play() must never be removed by
        // the leave timer of the previous animation.
        globalThis.setTimeout(() => {
          leaving.removeEventListener('load', onLoad);
          leaving.remove();
          if (frame === leaving) frame = null;
          done?.(true);
        }, 520);
      };

      const onMessage = (event) => {
        if (frame === null || event.source !== frame.contentWindow) return;
        const origin = globalThis.location?.origin;
        if (origin !== undefined && origin !== 'null' && event.origin !== origin) return;
        if (event.data?.type === 'jelly-boot:done') finish();
      };

      const onKeyDown = (event) => {
        if (event.key === 'Escape') finish();
      };

      function onLoad(event) {
        const loaded = event?.currentTarget ?? frame;
        requestAnimationFrame(() => {
          if (loaded === null || frame !== loaded) return;
          loaded.classList.add('is-ready');
          // The iframe fades in over 350 ms. Keep the opaque host cover until
          // the fade has finished, otherwise the app flashes through it.
          globalThis.setTimeout(() => {
            if (frame !== loaded) return;
            globalThis.__dshJellyBootMounted = true;
            endFirstFrame();
          }, 360);
        });
      }

      /** Play the 550C sequence; resolves true when it finished or was skipped. */
      const play = ({ preview = false } = {}) => {
        if (playing || !globalThis.document?.body) return Promise.resolve(false);
        playing = true;
        const doc = globalThis.document;
        let nextFrame = null;
        let promise = null;
        try {
          nextFrame = doc.createElement('iframe');
          nextFrame.className = 'jelly-boot-frame';
          nextFrame.title = translate()('bootTitle');
          nextFrame.name = preview ? 'jelly-boot-preview' : 'jelly-boot';
          // The page is self-contained: scripts and the same-origin handshake
          // are all it needs. Keep popups, forms, top navigation, downloads and
          // device capabilities outside its reach.
          nextFrame.sandbox = 'allow-scripts allow-same-origin';
          nextFrame.referrerPolicy = 'no-referrer';
          nextFrame.addEventListener('load', onLoad);
          promise = new Promise((resolve) => {
            settle = resolve;
          });
          nextFrame.src = `${BOOT_SRC}${preview ? '?preview=1' : ''}`;
          frame = nextFrame;
          doc.body.appendChild(nextFrame);
          attach();
          fallback = globalThis.setTimeout(finish, 45000);
          return promise;
        } catch {
          // A failed mount must not leave a half-inserted frame, listeners or
          // a pending promise behind; the next preview can retry from scratch.
          if (frame === nextFrame) frame = null;
          nextFrame?.remove();
          cleanup();
          return promise ? promise.finally(() => {}) : Promise.resolve(false);
        }
      };

      return {
        /** Play once, as soon as the body exists, when the switch is on. */
        autoStart() {
          if (started) return () => {};
          if (!readFlag(BOOT_KEY)) {
            // The Host cover is normally absent when the switch is off, but
            // the value can change between the injected head script and this
            // module; never leave the solid first frame behind.
            endFirstFrame();
            return () => {};
          }
          if (globalThis.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
            endFirstFrame();
            return () => {};
          }
          started = true;
          let cancelled = false;
          const start = () => {
            if (!cancelled) play().catch(() => endFirstFrame());
          };
          const doc = globalThis.document;
          if (!doc) return () => {};
          if (doc.readyState === 'loading') {
            doc.addEventListener('DOMContentLoaded', start, { once: true });
            return () => {
              cancelled = true;
              doc.removeEventListener('DOMContentLoaded', start);
              cleanup();
            };
          }
          start();
          return () => {
            cancelled = true;
            cleanup();
          };
        },
        preview() {
          return play({ preview: true });
        },
        dispose() {
          cleanup();
        },
      };
    }

    // ── the settings page ────────────────────────────────────────────────────

    let translateFn = (key, values) => fillText(zh[key] ?? key, values);
    let localeVersion = 0;
    const localeListeners = new Set();

    function fillText(template, values) {
      if (values === undefined) return template;
      return template.replace(/\{(\w+)\}/g, (match, name) => (values[name] === undefined ? match : String(values[name])));
    }

    function translate() {
      return translateFn;
    }

    function useLocaleVersion() {
      const [version, setVersion] = useState(localeVersion);
      useEffect(() => {
        const listener = () => setVersion(localeVersion);
        localeListeners.add(listener);
        if (localeVersion !== version) setVersion(localeVersion);
        return () => {
          localeListeners.delete(listener);
        };
        // `version` is read on mount; the listener tracks the live module value.
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      return version;
    }

    /** The compact screen-and-play mark used by the Settings navigation row. */
    function AppIcon({ size = 16, active = false }) {
      return h(
        'svg',
        {
          width: size,
          height: size,
          viewBox: '0 0 24 24',
          fill: 'none',
          'aria-hidden': 'true',
          style: { opacity: active ? 1 : 0.86 },
        },
        h('rect', {
          x: 2.8,
          y: 4.2,
          width: 18.4,
          height: 15.6,
          rx: 1,
          stroke: 'currentColor',
          strokeWidth: 1.4,
        }),
        h('path', {
          d: 'M2.8 7.7h18.4',
          stroke: 'currentColor',
          strokeWidth: 1.1,
          opacity: 0.5,
        }),
        h('path', {
          d: 'M6.3 10.4 9.3 12.5 6.3 14.6Z',
          fill: 'currentColor',
        }),
        h('rect', { x: 12.6, y: 10.5, width: 3, height: 3, fill: 'currentColor', opacity: 0.9 }),
        h('rect', { x: 16.8, y: 10.5, width: 3, height: 3, fill: 'currentColor', opacity: 0.5 }),
        h('rect', { x: 12.6, y: 14.5, width: 3, height: 3, fill: 'currentColor', opacity: 0.5 }),
        h('rect', { x: 16.8, y: 14.5, width: 3, height: 3, fill: 'currentColor', opacity: 0.9 }),
      );
    }

    function PlayGlyph() {
      return h(
        'svg',
        { className: 'jelly-play', width: 8, height: 9, viewBox: '0 0 8 9', 'aria-hidden': 'true' },
        h('path', { d: 'M0 0 8 4.5 0 9Z', fill: 'currentColor' }),
      );
    }

    function EyeGlyph() {
      return h(
        'svg',
        { className: 'jelly-play', width: 11, height: 9, viewBox: '0 0 12 9', 'aria-hidden': 'true' },
        h('path', {
          d: 'M0.8 4.5C1.9 2.1 3.8 1 6 1s4.1 1.1 5.2 3.5C10.1 6.9 8.2 8 6 8S1.9 6.9 0.8 4.5Z',
          stroke: 'currentColor',
          strokeWidth: 1.1,
          fill: 'none',
        }),
        h('circle', { cx: 6, cy: 4.5, r: 1.5, fill: 'currentColor' }),
      );
    }

    /** One labelled switch. */
    function Toggle({ checked, label, title, onChange }) {
      return h(
        'button',
        {
          type: 'button',
          className: 'jelly-switch',
          role: 'switch',
          'aria-checked': checked,
          'aria-label': label,
          title,
          onClick: () => onChange(!checked),
        },
        h('span', { className: 'jelly-switch-knob', 'aria-hidden': 'true' }),
      );
    }

    function Status({ on, t }) {
      return h(
        'span',
        { className: `jelly-status${on ? ' is-on' : ''}` },
        h('span', { className: 'jelly-status-dot', 'aria-hidden': 'true' }),
        on ? t('statusOn') : t('statusOff'),
      );
    }

    /** A miniature 550C terminal, drawn in CSS; no iframe while resting. */
    function BootSpecimen() {
      const nodes = [];
      for (let index = 0; index < 24; index += 1) {
        nodes.push(h('i', { key: index, style: { animationDelay: `${(index % 8) * 0.35}s` } }));
      }
      return h(
        'div',
        { className: 'jelly-boot-specimen', 'aria-hidden': 'true' },
        h(
          'div',
          { className: 'jelly-mini-top' },
          h('span', null, '◢ 550C // UAV-BS-07'),
          h('span', { className: 'jelly-mini-live' }, '● REC'),
        ),
        h(
          'div',
          { className: 'jelly-mini-grid' },
          h(
            'div',
            { className: 'jelly-mini-col' },
            h('b', null, 'TELEMETRY'),
            h('i', null),
            h('i', null),
            h('i', null),
            h('i', null),
          ),
          h(
            'div',
            { className: 'jelly-mini-main' },
            h('span', null, '[550C] 核心在线。'),
            h('span', null, '[550C] 链路污染：是。'),
            h('span', null, '[550C] 目标锁定：UAV-BS-07。'),
            h('span', { className: 'is-hot' }, 'SYSTEM IS REWRITTEN'),
          ),
          h('div', { className: 'jelly-mini-nodes' }, nodes),
        ),
        h(
          'div',
          { className: 'jelly-mini-bar' },
          h('span', null, 'OVERRIDE'),
          h('i', null),
          h('b', null, '100%'),
        ),
      );
    }

    /** The live skin specimen: a small shell mock with the real jelly canvas. */
    function SkinSpecimen({ t, canvasRef }) {
      return h(
        'div',
        { className: 'jelly-stage' },
        h(
          'div',
          { className: 'jelly-stage-rail' },
          h('span', { className: 'jelly-stage-brand' }, '◢ JELLY'),
          h('span', { className: 'jelly-stage-row is-active' }, t('stageRailOne')),
          h('span', { className: 'jelly-stage-row' }, t('stageRailTwo')),
          h('span', { className: 'jelly-stage-row' }, t('stageRailThree')),
          h('span', { className: 'jelly-stage-rail-foot' }, 'STILL WATER'),
        ),
        h(
          'div',
          { className: 'jelly-stage-water', ref: canvasRef },
          h(
            'div',
            { className: 'jelly-stage-toolbar' },
            h('span', null, 'STILL WATER / 01'),
            h('span', null, t('stageLive')),
          ),
          h('p', { className: 'jelly-stage-title' }, t('stageTitle')),
          h('div', { className: 'jelly-stage-composer' }, t('stageComposer')),
        ),
      );
    }

    function AppearanceBootSettings() {
      useLocaleVersion();
      const t = translate();
      const state = useJellySettings();
      const [bootBusy, setBootBusy] = useState(false);
      const [skinBusy, setSkinBusy] = useState(false);
      const canvasRef = useRef(null);
      const aliveRef = useRef(true);
      const skinBusyTimer = useRef(0);

      // Mount one real jelly tank inside the specimen card. It is a true sample
      // of the renderer, not a screenshot; when the card leaves the DOM the
      // renderer's own disposer releases its sprites and listeners.
      useEffect(() => {
        const wrap = canvasRef.current;
        if (!wrap) return undefined;
        let dispose = null;
        try {
          dispose = mountJellyTank(wrap, { schoolSize: 4 });
        } catch {
          /* the specimen is decorative; a canvas failure leaves the card calm */
        }
        return () => {
          try {
            dispose?.();
          } catch {
            /* already gone */
          }
        };
      }, []);

      // Leaving Settings ends an unfinished skin preview; a preview is a look,
      // not a saved state, and its floating pill must not outlive the page.
      // The busy timer is cleared with the component so no setState lands after
      // the page has gone.
      useEffect(() => {
        aliveRef.current = true;
        return () => {
          aliveRef.current = false;
          if (skinBusyTimer.current !== 0) clearTimeout(skinBusyTimer.current);
          skinBinding?.stopPreview?.();
        };
      }, []);

      const choose = (key) => (next) => {
        writeFlag(key, next);
        if (key === SKIN_KEY && next) skinBinding?.stopPreview();
      };

      const previewBoot = async () => {
        if (bootBusy) return;
        setBootBusy(true);
        try {
          await bootController?.preview?.();
        } catch {
          // The controller cleans up a failed mount itself; the Settings page
          // must simply become clickable again.
        } finally {
          if (aliveRef.current) setBootBusy(false);
        }
      };

      const endSkinBusy = () => {
        if (skinBusyTimer.current !== 0) {
          clearTimeout(skinBusyTimer.current);
          skinBusyTimer.current = 0;
        }
        if (aliveRef.current) setSkinBusy(false);
      };

      const previewSkin = () => {
        if (skinBusy || state.skin) return;
        let started = false;
        try {
          started = skinBinding?.preview?.(7000, endSkinBusy) === true;
        } catch {
          // A failed preview must fall back to an enabled button, never leave
          // the settings page stuck in its busy state.
          started = false;
        }
        setSkinBusy(started);
        if (started) {
          if (skinBusyTimer.current !== 0) clearTimeout(skinBusyTimer.current);
          skinBusyTimer.current = setTimeout(endSkinBusy, 7100);
        }
      };

      return h(
        'section',
        { className: 'jelly-settings', 'aria-labelledby': 'jelly-settings-title' },
        h(
          'header',
          { className: 'jelly-masthead' },
          h(
            'div',
            { className: 'jelly-title-row' },
            h('h1', { id: 'jelly-settings-title' }, t('title')),
          ),
          h('p', { className: 'jelly-lede' }, t('lede')),
        ),
        h(
          'nav',
          { className: 'jelly-index', 'aria-label': t('title') },
          h(
            'a',
            { className: 'jelly-index-item', href: '#jelly-settings-boot' },
            h('span', { className: 'jelly-index-no' }, '01'),
            h('span', { className: 'jelly-index-name' }, t('indexBoot')),
            h('span', { className: 'jelly-index-meta' }, '550C'),
          ),
          h(
            'a',
            { className: 'jelly-index-item', href: '#jelly-settings-skin' },
            h('span', { className: 'jelly-index-no' }, '02'),
            h('span', { className: 'jelly-index-name' }, t('indexSkin')),
            h('span', { className: 'jelly-index-meta' }, 'JELLY'),
          ),
        ),
        // ── 01 开机动画 ──────────────────────────────────────────────────────
        h(
          'section',
          { className: 'jelly-block', id: 'jelly-settings-boot', 'aria-labelledby': 'jelly-settings-boot-title' },
          h(
            'div',
            { className: 'jelly-block-head' },
            h('span', { className: 'jelly-block-no' }, '01'),
            h('h2', { id: 'jelly-settings-boot-title' }, t('sectionBoot')),
            h('span', { className: 'jelly-block-rule', 'aria-hidden': 'true' }),
          ),
          h('p', { className: 'jelly-block-hint' }, t('sectionBootHint')),
          h(
            'article',
            { className: 'jelly-card' },
            h(
              'div',
              { className: 'jelly-card-main' },
              h(
                'div',
                { className: 'jelly-card-title-row' },
                h('h3', null, t('bootTitle')),
                h(Status, { on: state.boot, t }),
              ),
              h('p', { className: 'jelly-card-copy' }, t('bootCopy')),
              h(
                'div',
                { className: 'jelly-card-actions' },
                h(Toggle, {
                  checked: state.boot,
                  label: fillText(t('switchAria'), { name: t('bootTitle') }),
                  title: state.boot ? t('toggleOn') : t('toggleOff'),
                  onChange: choose(BOOT_KEY),
                }),
                h(
                  'button',
                  {
                    type: 'button',
                    className: 'jelly-button',
                    onClick: previewBoot,
                    disabled: bootBusy,
                    'aria-label': fillText(t('previewAria'), { name: t('bootTitle') }),
                  },
                  h(PlayGlyph),
                  bootBusy ? t('previewing') : t('preview'),
                ),
              ),
            ),
            h(BootSpecimen),
          ),
          h(
            'p',
            { className: 'jelly-footnote' },
            t('bootNotePre'),
            ' ',
            h(
              'a',
              { href: 'https://github.com/Voidpocket/html_550c', target: '_blank', rel: 'noopener noreferrer' },
              'html_550c',
            ),
            t('bootNotePost'),
          ),
        ),
        // ── 02 皮肤 ──────────────────────────────────────────────────────────
        h(
          'section',
          { className: 'jelly-block', id: 'jelly-settings-skin', 'aria-labelledby': 'jelly-settings-skin-title' },
          h(
            'div',
            { className: 'jelly-block-head' },
            h('span', { className: 'jelly-block-no' }, '02'),
            h('h2', { id: 'jelly-settings-skin-title' }, t('sectionSkin')),
            h('span', { className: 'jelly-block-rule', 'aria-hidden': 'true' }),
          ),
          h('p', { className: 'jelly-block-hint' }, t('sectionSkinHint')),
          h(
            'article',
            { className: 'jelly-card' },
            h(
              'div',
              { className: 'jelly-card-main' },
              h(
                'div',
                { className: 'jelly-card-title-row' },
                h('h3', null, t('skinTitle')),
                h(Status, { on: state.skin, t }),
              ),
              h('p', { className: 'jelly-card-copy' }, t('skinCopy')),
              h(
                'div',
                { className: 'jelly-card-actions' },
                h(Toggle, {
                  checked: state.skin,
                  label: fillText(t('switchAria'), { name: t('skinTitle') }),
                  title: state.skin ? t('toggleOn') : t('toggleOff'),
                  onChange: choose(SKIN_KEY),
                }),
                state.skin
                  ? h('span', { className: 'jelly-card-inline-note' }, t('skinOnHint'))
                  : h(
                      'button',
                      {
                        type: 'button',
                        className: 'jelly-button',
                        onClick: previewSkin,
                        disabled: skinBusy,
                        'aria-label': fillText(t('previewAria'), { name: t('skinTitle') }),
                      },
                      h(EyeGlyph),
                      skinBusy ? t('previewSkinBusy') : t('previewSkin'),
                    ),
              ),
              h(
                'ul',
                { className: 'jelly-meta' },
                h('li', null, t('skinMetaOne')),
                h('li', null, t('skinMetaTwo')),
                h('li', null, t('skinMetaThree')),
              ),
            ),
            h(SkinSpecimen, { t, canvasRef }),
          ),
        ),
        h('p', { className: 'jelly-local-note' }, t('localHint')),
      );
    }

    // ── plugin lifetime ──────────────────────────────────────────────────────

    let skinBinding = null;
    let bootController = null;

    const inject = ['slots', 'locale', 'theme'];

    function apply(ctx) {
      ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'appearance & boot: dictionaries');
      const bind = () => {
        translateFn = ctx.locale.bind(NS);
      };
      bind();
      ctx.effect(
        () =>
          ctx.locale.subscribe(() => {
            bind();
            localeVersion += 1;
            for (const listener of localeListeners) {
              try {
                listener();
              } catch {
                /* one mounted view must not stop the rest from relabelling */
              }
            }
          }),
        'appearance & boot: locale binding',
      );

      // The stylesheet carries both the skin rules (gated by the body marker)
      // and the Settings page's own palette. Removing the tag unloads all of it.
      ctx.effect(() => {
        const doc = globalThis.document;
        if (!doc) return () => {};
        const tag = doc.createElement('style');
        tag.dataset.plugin = '@local/dsh-appearance-boot';
        tag.textContent = CSS;

        let active = true;
        let headObserver = null;
        let rootObserver = null;
        let watchedHead = null;

        const currentHead = () => doc.head ?? doc.documentElement;
        const ensureStyle = () => {
          if (!active) return;
          const head = currentHead();
          if (head && typeof head.append === 'function' && tag.parentElement !== head) head.append(tag);
        };
        const watchHead = () => {
          if (!active || typeof MutationObserver !== 'function') return;
          const head = currentHead();
          if (head === watchedHead) return;
          headObserver?.disconnect();
          watchedHead = head;
          if (!head) return;
          headObserver = new MutationObserver(() => {
            if (!active) return;
            ensureStyle();
            watchHead();
          });
          headObserver.observe(head, { childList: true });
        };

        ensureStyle();
        watchHead();
        // A replaced or temporarily removed <head> is a direct-child change of
        // <html>; the head observer alone would stay attached to the old head
        // and the stylesheet would never come back.
        if (typeof MutationObserver === 'function' && doc.documentElement) {
          rootObserver = new MutationObserver(() => {
            if (!active) return;
            ensureStyle();
            watchHead();
          });
          rootObserver.observe(doc.documentElement, { childList: true });
        }

        return () => {
          active = false;
          headObserver?.disconnect();
          rootObserver?.disconnect();
          tag.remove();
        };
      }, 'appearance & boot: stylesheet');

      const binding = createSkinBinding(ctx);
      skinBinding = binding;
      ctx.effect(() => {
        const sync = () => binding.sync();
        const stop = subscribeSettings(sync);
        sync();
        return () => {
          stop();
          try {
            binding.dispose();
          } finally {
            if (skinBinding === binding) skinBinding = null;
          }
        };
      }, 'appearance & boot: switch binding');

      const controller = createBootController();
      bootController = controller;
      ctx.effect(() => {
        const stopAuto = controller.autoStart();
        return () => {
          stopAuto();
          try {
            controller.dispose();
          } finally {
            if (bootController === controller) bootController = null;
          }
        };
      }, 'appearance & boot: boot animation');

      ctx.slots.inject('settings.section', () =>
        ctx.slots.register(
          {
            name: 'settings.section',
            id: 'appearance-boot',
            order: 13,
            locale: NS,
            label: () => translate()('nav'),
          },
          AppearanceBootSettings,
        ),
      );
      ctx.slots.inject('settings.section.icon', () =>
        ctx.slots.register(
          {
            name: 'settings.section.icon',
            id: 'appearance-boot',
            order: 13,
          },
          AppIcon,
        ),
      );
    }

    return { inject, apply };

  },
});
