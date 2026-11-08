    // ── the system skin registration ────────────────────────────────────────
    //
    // A skin is a token layer plus one frame-wide canvas. It owns no page and
    // changes no information architecture: every shipped control keeps its own
    // position, behaviour and focus contract, while the shell's materials come
    // from this palette. The layer is removed in one step when the plugin is
    // disabled.

    const SOURCE = '@local/dsh-jelly-skin';
    const BODY_MARK = 'data-dsh-jelly-skin';

    /** A token value that is the same in the daylight and night faces. */
    const both = (value) => ({ light: value, dark: value });

    /**
     * The shell's alias tokens, re-pointed at the skin palette.
     *
     * Values reference variables declared by this plugin's stylesheet on
     * `body[data-dsh-jelly-skin]`; the shell's own `data-ds-dark-theme` switch
     * swaps those variables, so one layer serves both appearances.
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

    function apply(ctx) {
      // The stylesheet owns the palette variables, the few shapes the shell
      // cannot tokenise, and the one canvas layer. Register it before the token
      // layer so the variables the overrides reference exist on first paint.
      ctx.effect(() => {
        const doc = globalThis.document;
        if (!doc) return () => {};
        const head = doc.head ?? doc.documentElement;
        if (head === null || head === undefined) return () => {};
        const tag = doc.createElement('style');
        tag.dataset.plugin = SOURCE;
        tag.textContent = CSS;
        head.append(tag);

        let markedBody = null;
        let active = true;
        let headObserver = null;
        const watchHead = () => {
          headObserver?.disconnect();
          const currentHead = doc.head ?? doc.documentElement;
          if (!active || currentHead === null || currentHead === undefined || typeof MutationObserver !== 'function') return;
          headObserver = new MutationObserver(() => {
            if (!active) return;
            const nextHead = doc.head ?? doc.documentElement;
            if (nextHead !== null && nextHead !== undefined && tag.parentElement !== nextHead) nextHead.append(tag);
            watchHead();
          });
          headObserver.observe(currentHead, { childList: true });
        };
        watchHead();
        const markBody = () => {
          if (!active) return;
          const body = doc.body;
          if (body === null) return;
          body.setAttribute(BODY_MARK, 'true');
          markedBody = body;
        };
        markBody();
        // A Client module can be evaluated before the body exists. Mark it as
        // soon as the document is parsed instead of leaving the skin unstyled.
        const onReady = () => markBody();
        if (markedBody === null) doc.addEventListener('DOMContentLoaded', onReady, { once: true });
        // A document can replace <body> while a client module stays alive. Keep
        // the marker on the live body instead of assuming the first one lasts.
        const bodyObserver =
          typeof MutationObserver === 'function' && doc.documentElement !== null && doc.documentElement !== undefined
            ? new MutationObserver(() => {
                if (!active) return;
                watchHead();
                const body = doc.body;
                if (body === null) return;
                if (body !== markedBody) markedBody?.removeAttribute(BODY_MARK);
                if (!body.hasAttribute(BODY_MARK)) body.setAttribute(BODY_MARK, 'true');
                markedBody = body;
              })
            : null;
        bodyObserver?.observe(doc.documentElement, { childList: true });
        return () => {
          active = false;
          headObserver?.disconnect();
          bodyObserver?.disconnect();
          tag.remove();
          doc.removeEventListener('DOMContentLoaded', onReady);
          markedBody?.removeAttribute(BODY_MARK);
          // Never leave the marker on the current body either.
          if (doc.body !== markedBody) doc.body?.removeAttribute(BODY_MARK);
        };
      }, 'jelly skin: stylesheet and marker');

      // The token layer is the skin. `overrideTokens` stacks it above whichever
      // built-in appearance the user chose, so light/dark/system all keep their
      // own switch and the skin follows it.
      ctx.effect(() => ctx.theme.overrideTokens(SOURCE, TOKEN_OVERRIDES), 'jelly skin: token layer');

      ctx.effect(() => installJellySurface(), 'jelly skin: shared school');
    }

    return { inject: ['theme'], apply };
