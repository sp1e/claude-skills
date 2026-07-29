---
name: web-ui-verification
description: >
  This skill should be used when the user asks to "verify the UI works", "check
  if this is clickable", "the layout breaks", "hidden isn't hiding", "it still
  looks old after deploying", or when a UI "should work but doesn't". Covers why
  el.click() in a test proves nothing about whether a user can click, a
  reachability probe that catches invisible overlays, the bug class where author
  CSS silently defeats [hidden] and disabled, and the four ways a measuring
  instrument lies to you.
---

# Verifying a web UI

This exists because a game shipped where **the board was never clickable with a
mouse** — and 286 assertions stayed green the whole time. Everything here is
hard-won rather than theoretical.

## Rule 1 — `el.click()` proves nothing about reachability

A programmatic `.click()` **dispatches straight to the node and bypasses
hit-testing entirely**. An overlay covering the whole surface is therefore
invisible to that kind of test. A green DOM test means "the handler works", never
"the user can reach the element".

Run **`ui-reachability-probe.js`** (in this folder) in the browser after any UI
change. It measures three things at once:

1. Every control is reachable — `document.elementFromPoint()` at its centre lands
   on it (or a descendant).
2. The page does not overflow the viewport (`scrollHeight - innerHeight`, both axes).
3. Nothing carrying `[hidden]` is still being painted.

Test at least **1280×720, 1366×768, 1024×768 and a non-maximised 900×700**. That
last one exposed a breakpoint set 200px too high: "desktop" is not a width, it is
a window someone may have dragged smaller.

**Known non-defects the probe flags:** skip links (deliberately off-screen until
focused) · anything inside a **scroll container** (the probe does not model
scrolling, so a tab in a horizontally-scrollable strip is flagged while working) ·
a modal backdrop legitimately blocking the page behind it · an overlay that blocks
on purpose — pausing a game *should* make the board unclickable.

## Rule 2 — author CSS silently defeats attributes like `[hidden]`

`[hidden]` is `display: none` in the **UA** stylesheet. Any author rule setting
`display` on the same element **wins**. Write `.veil { display: grid }` and the
element is permanently visible no matter how often the code sets `hidden = true` —
while the code is certain it is hidden.

One line fixes it, and immunises everything current and future:

```css
[hidden] { display: none !important; }
```

Same family, worth hunting for in any UI:

- classes the JS toggles that the CSS never defines (a dead toggle — state
  changes, nothing shows)
- `disabled` set on elements whose CSS does not indicate it, or visually disabled
  elements that are still clickable
- `aria-modal="true"` **without** `inert` or a focus trap, so one Shift+Tab leaves
  the dialog and lands on a control behind the backdrop: invisible but activatable
- `position: fixed` overlays without `pointer-events: none`, eating clicks on
  whatever sits beneath them
- several elements sharing the **same `z-index`** in one stacking context, so DOM
  order decides — and a dialog opened *on top of* another can land underneath it
- keyboard shortcuts that duplicate a button's disabled rule instead of reading the
  button's own `disabled`; the two will diverge

## Rule 3 — the instrument lies in four ways

Each of these cost real time, and three produced wrong conclusions.

**1. `getComputedStyle` returns base values in a hidden tab.** Chrome throttles
style recalculation when `visibilityState === 'hidden'`, so a rule that *is*
winning reads as though it is not. **Control for it** by injecting a rule that must
win and re-reading:

```js
el.classList.add('__probe');
const st = document.createElement('style');
st.textContent = '.__probe{border-color:rgb(1,2,3) !important}';
document.head.appendChild(st);
// if the value does NOT move, the pipeline is throttled, not the code broken
```

Still trustworthy in a throttled tab: DOM state, layout and geometry, and the
**CSSOM** (`document.styleSheets → cssRules`), which is read upstream of recalc. To
claim "no rule of shape X exists", enumerate the CSSOM — not computed styles.

**2. Cached assets show old code after a successful deploy.** Always compare what
the page *loaded* against what the server *returns* before concluding anything:

```js
performance.getEntriesByType('resource')   // transferSize === 0 => served from cache
await fetch(url, { cache: 'no-store' })    // what the server actually sends
```

To measure the deployed bytes: fetch with `no-store`, remove the
`<link rel=stylesheet>`, and inject them into a `<style>`. Note that on some static
hosts (Cloudflare Pages among them) `Cache-Control` in a headers file is **ignored
for static assets**, so that is not the fix it appears to be. Versioned URLs only
solve CSS, not JS: ES modules import each other relatively, so a query string on
the entry file is not inherited by the rest of the graph.

**3. `decodedBodySize` is BYTES; `String.length` is CHARACTERS.** Comparing them
made a current module look stale. Four em dashes are eight bytes of difference. Use
`new TextEncoder().encode(text).length`.

**4. `textContent` does not care about visibility.** A hidden element still has its
text. That made a working undo look broken, and nearly earned a fix for a bug that
did not exist. Read visibility-aware:

```js
const visible = getComputedStyle(box).display !== 'none'
  && span.textContent.trim() === expected;
```

**And when model and view seem to disagree, split the measurement.** Read the state
from the model (or from persisted storage) *and* from the DOM. Model right, DOM
wrong is a render bug; both wrong is the logic. That answer arrived in one step once
guessing stopped.

## Rule 4 — layout traps that look like mysteries

- **Auto margins on a grid item** (`margin: 0 auto`) override `stretch` and shrink
  it to **fit-content**. That collapsed a wrapper to 164px inside a 680px column.
  Use `margin-inline: 0` or a definite width.
- **`aspect-ratio` on buttons** makes height a function of column width. A keypad at
  full column width became 413px tall and pushed half the UI off-screen.
- **`\bdvh\b` does not match inside `100dvh`** — `0`→`d` is not a word boundary. Two
  assertions failed against correct CSS because of it. Use
  `/\d+(?:\.\d+)?d?vh\b/`.
- **Measure overflow, not just width.** "375px with no horizontal scroll" says
  nothing about whether the layout is *reachable* on a laptop.

## Rule 5 — an assertion that cannot fail is worthless

Negative-control every new assertion: break the invariant in a copy of the source
and confirm it fails. Two of these controls were themselves wrong — one mutated a
different CSS rule than intended, because `String.replace` takes the **first**
match. And put the offender's name in the failure message; an assertion that says
"something is wrong" forces the next person to re-derive the list by hand.
