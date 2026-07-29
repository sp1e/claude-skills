/**
 * ui-reachability-probe.js — paste into the browser console or an eval tool.
 *
 * WHY THIS EXISTS
 * ---------------
 * `el.click()` dispatches straight to a node and bypasses hit-testing entirely,
 * so a full-surface overlay is INVISIBLE to a DOM-driven test. A page once shipped
 * with a pause overlay permanently covering the board — unplayable with a mouse —
 * while 286 assertions stayed green.
 *
 * A control is only usable if hit-testing at its centre lands on it. That is what
 * this measures, together with viewport overflow and elements that are painted
 * despite carrying [hidden].
 *
 * USAGE
 *   __probe()                      // current viewport
 *   __probe({ verbose: true })     // list every offender
 * Resize between calls; check 1280x720, 1366x768, 1024x768 and a non-maximised
 * 900x700 at minimum.
 *
 * KNOWN NON-DEFECTS (do not report these as bugs)
 *   - skip links: deliberately off-screen until focused (excluded below)
 *   - anything inside a scroll container: the probe does not model scrolling, so a
 *     tab in a horizontally-scrollable strip is flagged while working correctly
 *   - a modal backdrop legitimately blocking the page behind it while open
 *   - an overlay that blocks on purpose, e.g. a pause veil over a game board
 */
globalThis.__probe = (opts = {}) => {
  const reach = el => {
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return 'zero-size';
    const x = Math.round(r.left + r.width / 2), y = Math.round(r.top + r.height / 2);
    if (y < 0 || y > innerHeight || x < 0 || x > innerWidth) return 'off-screen';
    const hit = document.elementFromPoint(x, y);
    if (!hit) return 'nothing-there';
    if (el === hit || el.contains(hit)) return 'ok';
    return 'blocked-by:' + hit.tagName + (hit.id ? '#' + hit.id : '.' + (hit.className || '').split(' ')[0]);
  };

  const controls = [...document.querySelectorAll(
    'button:not([hidden]):not(:disabled), a[href], input:not([type=hidden]), select, textarea, [tabindex]:not([tabindex="-1"])'
  )].filter(el => el.getClientRects().length && !/skip-?link/i.test(el.className + ' ' + el.id));

  const bad = {};
  for (const el of controls) {
    const v = reach(el);
    if (v !== 'ok') (bad[v] ||= []).push(el.id || (el.className || el.tagName).split(' ')[0]);
  }

  // Elements the code believes are hidden but that still paint. Author CSS setting
  // `display` beats the UA stylesheet's `[hidden] { display: none }`, which is the
  // bug class that caused the overlay catastrophe above. Cheap, so always check.
  const paintedWhileHidden = [...document.querySelectorAll('[hidden]')]
    .filter(el => getComputedStyle(el).display !== 'none')
    .map(el => el.tagName + (el.id ? '#' + el.id : '.' + (el.className || '').split(' ')[0]));

  const de = document.documentElement;
  return {
    viewport: innerWidth + 'x' + innerHeight,
    controlsChecked: controls.length,
    unreachable: Object.values(bad).flat().length,
    blocked: Object.keys(bad).filter(k => k.startsWith('blocked')).length,
    offScreen: (bad['off-screen'] || []).length,
    overflowY: de.scrollHeight - innerHeight,
    overflowX: de.scrollWidth - de.clientWidth,
    paintedWhileHidden: [...new Set(paintedWhileHidden)],
    verdict:
      Object.values(bad).flat().length === 0 &&
      de.scrollHeight <= innerHeight &&
      de.scrollWidth <= de.clientWidth &&
      paintedWhileHidden.length === 0 ? 'PASS' : 'FAIL',
    detail: opts.verbose || Object.keys(bad).length ? bad : undefined,
  };
};
__probe();
