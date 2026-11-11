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
