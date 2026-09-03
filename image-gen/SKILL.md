---
name: image-gen
description: Generate images from a text prompt via Hugging Face. Use WHENEVER the user asks to create/generate/make/render an image, picture, illustration, artwork, logo, or visual from a description (e.g. "generate an image of...", "make a picture of...", "render...", "/image-gen"), AND whenever you yourself decide an image would help. ALWAYS asks which engine to use (krea-official, sdxl, qwen-image, flux.1-krea-dev, higgsfield) before generating. Requires the Hugging Face MCP server (authenticated) for the MCP engine and HF_TOKEN for the official gradio_client engines; higgsfield additionally spends PAID credits and must be price-flagged before use.
---

# image-gen

Generate images from text prompts using Hugging Face. Works both when the user explicitly asks and when you decide an image would help.

## HARD RULE — always ask the engine first

**Before generating anything, you MUST ask the user which engine to use via `AskUserQuestion`.** This applies on EVERY invocation — including when you triggered the skill yourself, autonomously. Never silently pick an engine. The only exception: the user named a specific engine in their request (then use that one and skip the question).

Present these four options every time:

| Engine | Route | Token? | Notes |
|--------|-------|--------|-------|
| `krea-official` | `generate_image.py` (gradio_client) → `black-forest-labs/FLUX.1-Krea-dev` | **HF_TOKEN** | The literal official Krea Space. Highest fidelity — the default/primary. |
| `sdxl` | `generate_image.py` (gradio_client) → `hysts/SDXL` | **HF_TOKEN** | Stability **SDXL base 1.0 + refiner** (from Stability-AI/generative-models). Photoreal; may need a retry under ZeroGPU load (script auto-retries). |
| `qwen-image` | `generate_image.py` (gradio_client) → `Qwen/Qwen-Image` | **HF_TOKEN** | Official Qwen-Image. Best at text-in-image (Space occasionally broken upstream). |
| `flux.1-krea-dev` | MCP `dynamic_space` → `prithivMLmods/FLUX-REALISM` | none | Krea-dev via the authenticated MCP session; photoreal lean. No token needed. |
| `higgsfield` | MCP `higgsfield` (OAuth) → 30+ models incl. Nano Banana Pro, Seedance, Kling, Flux, GPT Image 2 | OAuth | **COSTS REAL MONEY (credits, not quota).** The only non-ZeroGPU engine — immune to the HF quota wall. Also the only one that does **video** (up to 15 s) and **character training** (Soul ID). Up to 4K. |

(`z-image-turbo` was removed from the roster per the user's preference — do not offer it.)

If you want, also ask for a resolution/aspect ratio in the same `AskUserQuestion` call (optional — default 1024×1024).

## Quota flag (state it before the first generation of a session)

The four HF engines run on Hugging Face **ZeroGPU**, which is quota-metered, not money-billed. **`higgsfield` is the exception: it burns purchased credits — real money.** Say the credit cost out loud and get an explicit go-ahead before the first higgsfield generation of a session; never fall back to it silently when an HF engine fails. Free tier = small daily allowance; PRO ≈ 25× more. When quota is spent you get a "quota exceeded / GPU busy" error — not a charge. The `flux.1-krea-dev` MCP engine spends the authenticated session's quota; the two official (script) engines spend the `HF_TOKEN` owner's quota.

## Procedure

### 1. Ask the engine (HARD RULE above). Then generate by route:

**MCP route — `flux.1-krea-dev`:** call `mcp__plugin_huggingface-skills_huggingface-skills__dynamic_space` with:
```json
{"operation":"invoke","space_name":"prithivMLmods/FLUX-REALISM",
 "parameters":"{\"prompt\":\"<PROMPT>\",\"model_choice\":\"flux.1-krea-dev\",\"use_negative_prompt\":false,\"negative_prompt\":\"\",\"num_images\":1,\"num_inference_steps\":28,\"guidance_scale\":4.5,\"width\":1024,\"height\":1024,\"randomize_seed\":true,\"style_name\":\"Style Zero\",\"zip_images\":false}"}
```
> `negative_prompt` MUST be present even though it's marked optional, or the call errors.

The MCP route (`flux.1-krea-dev`) returns a Gradio file **URL** that is **ephemeral** (lives on the Space replica's `/tmp/gradio/`). You MUST download it immediately — see step 2.

**MCP route — `higgsfield` (PAID):** the `higgsfield` MCP server (`https://mcp.higgsfield.ai/mcp`, OAuth). State the credit cost and get an explicit yes FIRST. Its tools cover text→image (up to 4K), image→video (up to 15 s), Soul ID character training, and generation history. Discover the exact tool names with `ListMcpResourcesTool` / the live tool list rather than guessing — they are not hardcoded here because the roster changes.
> Free tier = watermarked output, no monthly credit allowance, 1 image / 1 video at a time. Subscription credits **expire at the end of each billing cycle with no rollover**, and credit packs require an active subscription — so do not stockpile.

**gradio_client route — `krea-official` / `sdxl` / `qwen-image`:** run the script with the venv Python (PowerShell):
```powershell
& "C:\Users\simon.pettersson\Claude\tools\image-gen\.venv\Scripts\python.exe" `
  "C:\Users\simon.pettersson\.claude\skills\image-gen\scripts\generate_image.py" `
  --engine <krea-official|sdxl|qwen-image> --prompt "<PROMPT>"
```
The script reads `HF_TOKEN` from the environment, downloads the result, and prints `[OK] Saved: <path>`. If it reports a missing/expired token or ZeroGPU error, tell the user to set/refresh `HF_TOKEN` (a Read token from https://huggingface.co/settings/tokens). Add `--list-api` to debug a changed endpoint, `--out <path>` to choose the destination.

### 2. Save locally (MCP routes only)

The gradio_client script already saves. For the MCP routes, download the returned URL to `C:\Users\simon.pettersson\Claude\generated-images\` with a `YYYYMMDD-HHMMSS-<slug>-<engine>.png` name (PowerShell `Invoke-WebRequest -Uri <url> -OutFile <path>`). Create the folder if needed.

### 3. View and describe

`Read` the saved PNG so you can actually see it, then give the user the local path (as a clickable link) and a 1–2 sentence description of what was produced. Note the seed if returned (useful for reproducing).

## Setup (one-time per machine — only needed for the gradio_client engines)
The script lives in this skill at `scripts\generate_image.py` (so it travels via the claude-skills repo). The venv lives OUTSIDE the skill folder so `sync-skills.ps1` doesn't delete it. To (re)create it on a fresh machine:
```powershell
py -3.12 -m venv "C:\Users\simon.pettersson\Claude\tools\image-gen\.venv"
& "C:\Users\simon.pettersson\Claude\tools\image-gen\.venv\Scripts\python.exe" -m pip install -r `
  "C:\Users\simon.pettersson\.claude\skills\image-gen\scripts\requirements.txt"
```
Then set a Read token: `setx HF_TOKEN "hf_..."` and restart the app so child processes inherit it.

## Notes
- MCP engines require the `huggingface-skills` MCP server to be authenticated (OAuth as the HF user). If its tools aren't loaded, the user must authenticate it first. MCP engines do NOT use HF_TOKEN — they ride the authenticated session.
- The official Space ids can change ownership; `generate_image.py` accepts `--space <author/name>` to override, and `--list-api` to discover the current endpoint signature.
- Script flags: `--seed --steps --guidance --aspect --width --height` (each applied only if the Space exposes that parameter) and `--enhance` (default OFF — `prompt_enhance` is disabled for more literal output and to dodge broken enhancer steps). The script is param-aware: it reads the endpoint's parameter list and fills each slot with the Space's own default unless overridden.
- If the script prints `AppError: <X>`, the failure is INSIDE the Space (server-side) — not your request. Retry later or use `--space` to point at a mirror. Known: on 2026-06-14 the official `Qwen/Qwen-Image` Space returned `AppError: NameError` (broken upstream); `krea-official`, `flux.1-krea-dev`, and `z-image-turbo` all worked.
- Canonical script: `~\.claude\skills\image-gen\scripts\generate_image.py`. Venv: `~\Claude\tools\image-gen\.venv`. Output: `~\Claude\generated-images\`.

## Companion scripts
- `scripts\stylize.py` — img2img repaint/edit (FLUX.1-Kontext-Dev), preserves faces. `--image --prompt --label --out`. The route for "turn this photo into a painting in style X".
- `scripts\upscale.py` — enlarge/sharpen for print. `--method lanczos` (default, FREE, no GPU — best for paintings, no face hallucination) or `--method pasd|superface` (GPU). `--image` or `--dir` (batch), `--scale`.

## Additional engines researched (2026-06-24) — addable when needed
- **More img2img/edit (HF, share the same ZeroGPU quota):** `linoyts/Qwen-Image-Edit-2511-Fast` (4-step; input is a *gallery list* `[{image:handle_file(p),caption:None}]`, tiny 256 default dims — must override), `prithivMLmods/FireRed-Image-Edit-1.0-Fast` (input is *base64-JSON* string — awkward). Kontext remains primary (cleanest single-image API).
- **Upscale/restore (HF):** `fffiloni/PASD` (`/super_resolve_image`, filepath in, `upscale` factor), `leonelhs/superface` (`/predict`, face restore — dead simple), `prithivMLmods/PiD-Image-Upscaler`. Wired into upscale.py (pasd, superface).
- **Beating the ZeroGPU quota wall** needs NON-HF GPUs. As of 2026-09-03 the wired-up option is **`higgsfield`** (OAuth MCP, paid credits) — see the engine table. Other candidates: HF PRO (same account, $9/mo, 40min/day), RunComfy (CLI+token+credits — NOT installed here), or Replicate/fal.ai/Stability API (need keys — none set here). Adding more HF Spaces does NOT help; they share sipen's pool.
