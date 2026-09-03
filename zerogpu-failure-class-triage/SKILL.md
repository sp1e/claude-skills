---
name: zerogpu-failure-class-triage
description: "Use when a Hugging Face Space call fails with a GPU-sounding error — three classes look alike but need opposite responses: transient queue (retry works), account quota exhausted (retrying cannot help), and Space has no GPU assigned (only the owner can fix). Also covers why training cannot run on ZeroGPU at all."
metadata:
  origin: auto-extracted
---

# ZeroGPU: three failure classes, three different answers

**Extracted:** 2026-08-03
**Context:** Calling HF Spaces via gradio_client (image gen, img2img, upscalers).

## Problem
Every failure mentions "GPU", so a naive handler retries all of them. Two of the three cannot be beaten by retrying, and one cannot be beaten by *anything* the caller does — so blind retry wastes minutes and produces a false "just try again later".

## Solution — classify on the message text, then act
| Message contains | Class | Correct response |
|---|---|---|
| `No GPU was available after 60s` | **Transient queue** | Bounded retry (4 attempts, ~10s backoff). Usually wins on attempt 2. |
| `exceeded your free ZeroGPU quota (Xs requested vs. 0s left)` | **Account quota, time-gated** | **Fail fast — do NOT retry.** Only a long idle period or HF PRO restores it. |
| `requires GPU hardware. Assign a GPU in Space settings` | **Space has no GPU attached** | Nobody's retry/quota/PRO fixes it. Only the Space owner assigning paid hardware — or you duplicate the Space onto your own GPU. |
| `AppError: <anything else>` | **Space's own code raised** | Server-side bug, not your request. Retry later or point `--space` at a mirror. |

**Ordering matters:** check the specific phrases BEFORE a generic `AppError` branch. `AppError` is the *wrapper* for quota and no-GPU messages too, so an AppError-first branch mislabels them as "Space bug".

## Hard-won facts
- Free quota does **not** refill on a short timescale after heavy use — confirmed empty across multiple sessions and many hours. Never promise "it'll be back in an hour"; say a long idle period or PRO.
- **Training is impossible on ZeroGPU**, not merely slow: per-call time slices are far too short for a LoRA run. Training needs HF Jobs / a paid GPU Space / rented cloud.
- Adding more HF Spaces does **not** add capacity — every Space draws on the same per-account ZeroGPU pool. Only a non-HF GPU (PRO, RunComfy, Replicate/fal) escapes the wall.
- `Client(src, token=...)` — NOT `hf_token=` — in gradio_client 2.x.
- Connecting and calling `view_api()` costs **no GPU**, so signatures can always be inspected even when quota is dead.

## When to Use
Any gradio_client / HF Space failure, when writing retry logic for one, or when telling a user how long until they can generate again.
