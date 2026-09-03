---
name: face-model-training-vs-img2img
description: "Use when someone asks to train the assistant on a person's face, teach an image model a likeness, or wants portraits of a specific real person — decides between LoRA fine-tuning and per-photo img2img by dataset size, and corrects the belief that showing the assistant photos or running more agents improves likeness."
metadata:
  origin: auto-extracted
---

# Likeness comes from data or conditioning — never from "studying"

**Extracted:** 2026-08-03
**Context:** A family-portrait project: "train you on my grandparents' faces", "deploy agents that continuously study their faces".

## Problem
Two intuitive but false beliefs waste large amounts of effort:
1. **"Train *you* on these faces."** The assistant is not fine-tunable by the user, and it is not the thing that draws the picture. The image model is a separate artifact.
2. **"Deploy agents to study the faces to perfection."** LLM agents reason over text; they build no face embedding and change no image-model weights. A swarm "studying" photos improves likeness by exactly zero. Say so plainly — it looks busy and achieves nothing.

## Solution — choose by dataset size
| Photos available per person, per era | Use | Why |
|---|---|---|
| **1–2 clear photos** | **img2img** (FLUX Kontext) | Works *from* the real photo each time. A LoRA on 1–2 images overfits into a stiff, distorted clone — worse than doing nothing. |
| **~5–10** | Marginal | A small LoRA is possible but risks overfitting. Usually still prefer img2img. |
| **15–25+** | **LoRA / DreamBooth** | Enough to learn the invariants of a face across angles/expressions, so it generalises to *new* poses and styles. |

## Non-obvious rules
- **One LoRA = one look.** Train separate LoRAs per era; mixing age 40 and age 75 in one dataset confuses the model.
- **Training needs a paid GPU** — ZeroGPU's short slices cannot train. Use HF Jobs (e.g. a LoRA-trainer Space) and flag the cost *before* the user gathers 20 photos.
- What *does* help likeness without training: a faithful **restoration** as a clean base, plus a written **likeness guide** (per-person cues — "sparse grey side hair, do not thicken"; "dark rounded glasses, eyes visible") woven verbatim into every prompt, plus a "do not beautify or invent" guard.

## When to Use
Any request to train on / learn / remember a person's appearance, or to generate images of a specific real individual — especially before quoting effort or cost.
