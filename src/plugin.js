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
