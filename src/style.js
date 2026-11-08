    const CSS = `
/* ── Jelly Skin · a system-wide still-water skin ──────────────────────────
   The skin is not a page: it owns the application's neutral materials and one
   shared school of ASCII jellyfish behind the whole frame. Light is paper;
   dark is graphite. The shell keeps every behaviour and every control. */

/* ── palette ─────────────────────────────────────────────────────────────── */
body[data-dsh-jelly-skin]{
  --jelly-skin-ground:#f9fafb;
  --jelly-skin-sheet:#ffffff;
  --jelly-skin-sheet-2:#f1f3f5;
  --jelly-skin-paper:#ffffff;
  --jelly-skin-ink:#0f1115;
  --jelly-skin-ink-2:#61666b;
  --jelly-skin-ink-3:#81858c;
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
body[data-dsh-jelly-skin][data-ds-dark-theme]{
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
body[data-dsh-jelly-skin]{
  background-color:var(--jelly-skin-ground);
  color:var(--jelly-skin-ink);
  font-family:var(--jelly-skin-text);
}
body[data-dsh-jelly-skin] header{
  border-bottom:1px solid var(--jelly-skin-rule);
  background:transparent!important;
  box-shadow:none;
}
body[data-dsh-jelly-skin] button,
body[data-dsh-jelly-skin] input,
body[data-dsh-jelly-skin] textarea,
body[data-dsh-jelly-skin] select{font-family:var(--jelly-skin-text);border-radius:0}
body[data-dsh-jelly-skin] [data-composer-card],
body[data-dsh-jelly-skin] [data-composer-card] *,
body[data-dsh-jelly-skin] [role="dialog"],
body[data-dsh-jelly-skin] [role="menu"],
body[data-dsh-jelly-skin] [role="listbox"],
body[data-dsh-jelly-skin] [role="alertdialog"],
body[data-dsh-jelly-skin] [class*="card"],
body[data-dsh-jelly-skin] [class*="Card"],
body[data-dsh-jelly-skin] [class*="badge"],
body[data-dsh-jelly-skin] [class*="Badge"],
body[data-dsh-jelly-skin] [class*="pill"],
body[data-dsh-jelly-skin] [class*="Pill"],
body[data-dsh-jelly-skin] [class*="tag"],
body[data-dsh-jelly-skin] [class*="Tag"]{border-radius:0}
body[data-dsh-jelly-skin] [role="menu"],
body[data-dsh-jelly-skin] [role="listbox"],
body[data-dsh-jelly-skin] [role="dialog"],
body[data-dsh-jelly-skin] [role="alertdialog"]{
  background:var(--jelly-skin-paper)!important;color:var(--jelly-skin-ink)!important;
  border:1px solid var(--jelly-skin-rule-2)!important;box-shadow:0 18px 44px -26px rgba(15,17,21,.32)!important;
  backdrop-filter:none!important
}
body[data-dsh-jelly-skin] [role="menu"],
body[data-dsh-jelly-skin] [role="listbox"]{background:var(--jelly-skin-sheet-2)!important}
body[data-dsh-jelly-skin] [role="menubar"]{background:var(--jelly-skin-sheet-2)!important;color:var(--jelly-skin-ink)!important;border-bottom:1px solid var(--jelly-skin-rule)!important;border-radius:0!important}
body[data-dsh-jelly-skin] [role="menubar"] button{color:var(--jelly-skin-ink);border-radius:0}
body[data-dsh-jelly-skin] [role="menu"] [role="menuitem"],
body[data-dsh-jelly-skin] [role="menu"] button,
body[data-dsh-jelly-skin] [role="listbox"] [role="option"],
body[data-dsh-jelly-skin] [role="listbox"] button{color:var(--jelly-skin-ink);border-radius:0}
body[data-dsh-jelly-skin] [role="menu"] [role="menuitem"]:hover,
body[data-dsh-jelly-skin] [role="menu"] button:hover,
body[data-dsh-jelly-skin] [role="listbox"] [role="option"]:hover,
body[data-dsh-jelly-skin] [role="listbox"] button:hover{background:var(--jelly-skin-accent-soft)!important;color:var(--jelly-skin-ink)!important}
body[data-dsh-jelly-skin] [role="tooltip"]{
  background:var(--jelly-skin-paper)!important;color:var(--jelly-skin-ink)!important;
  border:1px solid var(--jelly-skin-rule-2)!important;border-radius:6px!important;
  box-shadow:0 8px 22px -16px rgba(15,17,21,.4)!important;
  font-family:var(--jelly-skin-text)!important;font-size:12px!important;line-height:18px!important
}
body[data-dsh-jelly-skin] [data-composer-card] button[class*="primary"],
body[data-dsh-jelly-skin] [data-composer-card] button[type="submit"]{
  color:var(--jelly-skin-window-ink)!important
}
body[data-dsh-jelly-skin] [data-composer-card] button[class*="primary"] svg,
body[data-dsh-jelly-skin] [data-composer-card] button[type="submit"] svg{color:inherit!important}
body[data-dsh-jelly-skin] [data-composer-card] button[class*="primary"][disabled],
body[data-dsh-jelly-skin] [data-composer-card] button[type="submit"][disabled]{
  background:var(--jelly-skin-sheet-2)!important;color:var(--jelly-skin-ink-3)!important;opacity:1!important
}
body[data-dsh-jelly-skin] [data-composer-card]{border:1px solid var(--jelly-skin-rule-2);background:var(--jelly-skin-sheet);box-shadow:none}
body[data-dsh-jelly-skin] [data-composer-card]:focus-within{border-color:var(--jelly-skin-accent)}
body[data-dsh-jelly-skin] [data-composer-input]{caret-color:var(--jelly-skin-accent)}
body[data-dsh-jelly-skin] ::selection{background:var(--jelly-skin-accent-soft);color:var(--jelly-skin-ink)}
body[data-dsh-jelly-skin] [role="dialog"]>nav{border-right:1px solid var(--jelly-skin-rule)}
body[data-dsh-jelly-skin] *{scrollbar-width:thin;scrollbar-color:var(--jelly-skin-rule-2) transparent}
body[data-dsh-jelly-skin] *::-webkit-scrollbar{width:8px;height:8px}
body[data-dsh-jelly-skin] *::-webkit-scrollbar-thumb{background:var(--jelly-skin-rule-2);border:2px solid transparent;background-clip:padding-box}
body[data-dsh-jelly-skin] *::-webkit-scrollbar-track{background:transparent}

/* One cheap shadow keeps text legible over the moving water. Large multi-layer
   halos forced the whole shell to repaint blurred glyphs on every water frame. */
body[data-dsh-jelly-skin] :where(header, nav, main, [data-shell-overlay]) {
  text-shadow:0 1px 2px var(--jelly-skin-ground);
}

/* ── one shared school for the whole frame ──────────────────────────────── */
/* The rail and the centre stay open water. The right panel keeps the native
   solid tab surface; the panel element itself must stay transparent, because it
   stays in the frame while its dock slides out on collapse. */
body[data-dsh-jelly-skin] [data-jelly-skin-frame]{background:transparent!important}
body[data-dsh-jelly-skin] [data-jelly-skin-side],
body[data-dsh-jelly-skin] [data-jelly-skin-center]{
  background:transparent!important;
  --dsw-alias-bg-base:transparent;
}
body[data-dsh-jelly-skin] [data-jelly-skin-right]{
  --dsw-alias-bg-base:var(--jelly-skin-ground);
}
body[data-dsh-jelly-skin] [data-jelly-skin-frame] > .jelly-skin-tank{
  position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;contain:strict;opacity:.8;
}
body[data-dsh-jelly-skin] .jelly-skin-canvas{
  display:block;width:100%;height:100%;mix-blend-mode:multiply;opacity:.98;pointer-events:none;
}
body[data-dsh-jelly-skin][data-ds-dark-theme] .jelly-skin-canvas{
  mix-blend-mode:screen;
}
`;
