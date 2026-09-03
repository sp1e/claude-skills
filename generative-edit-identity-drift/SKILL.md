---
name: generative-edit-identity-drift
description: "Use when an AI image edit or upscale must preserve a real person's or object's identity — photo restoration, face sharpening, inserting one image into another, or any img2img restyle where the subject must still be recognisably them. Generative models redraw whatever they regenerate, so the fix is deterministic compositing and opacity blending, not re-prompting."
metadata:
  origin: auto-extracted
---

# Generative edit drifts identity — composite, don't re-roll

**Extracted:** 2026-08-03
**Context:** img2img editing (FLUX Kontext, Qwen-Image-Edit) and generative upscaling (superface, PASD) on photos of real people.

## Problem
You ask a generative editor to change ONE thing — add a painting to a wall, sharpen a face, restyle a scene — and it silently redraws the subject's face too. Prompting "keep the face COMPLETELY unchanged" does not reliably prevent it: these models synthesize the whole canvas, they do not mask-and-patch. Re-rolling with a stronger prompt mostly burns GPU and returns a differently-wrong face.

## Solution
Treat "must not change" pixels as **deterministic**, and let the generator touch only the new element plus a final blend.

**Remedy A — composite (for edits that add/replace an element):**
1. Run the generative pass. Accept that it may damage the rest.
2. Crop ONLY the good new element out of that result.
3. Paste it onto the *safe* version with PIL using a feathered mask (rounded rect, inset ~25px, GaussianBlur ~18) so wall/background edges melt together.
4. Run a SHORT harmonisation pass instructed to relight/blend *that element only*, listing everything else as unchanged.

**Remedy B — blend ladder (for upscales/sharpening):**
Blend the generative result with a Lanczos-upscaled original: `Image.blend(base, ai, 0.5)` and `0.7`. Ship a ladder — safe (Lanczos) → recommended (50%) → sharper (70%) → sharpest (raw AI) — and let the human pick. Identity tolerance is theirs to set, not yours.

## Key facts
- Low-res softness is **missing data, not blur**. Lanczos can only enlarge; only a generative model can invent detail — which is exactly why identity shifts. The two are inseparable.
- Always render a **face-crop comparison sheet** (original | option A | option B | raw AI) at matched scale and show it. Let them judge likeness; never just assert "it still looks like you".
- Generative upscalers smooth skin and subtly reshape jawlines even when overall likeness survives.

## When to Use
Any request to "fix / sharpen / clean up / add something to" a photo containing a real face, logo, or artwork that must remain recognisable. Also whenever a multi-image edit returns one good element inside an otherwise degraded frame.
