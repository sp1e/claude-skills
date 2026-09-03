---
name: chat-attachment-is-not-a-file
description: "Use when a task must read, edit, upscale, composite or train on an image or document the user pasted into chat — attachments are visible to the model but have no path on disk, so every file-consuming tool is blocked until the user saves them. Also covers verifying which saved file is actually which."
metadata:
  origin: auto-extracted
---

# A chat attachment has no path — and its filename lies

**Extracted:** 2026-08-03
**Context:** img2img, upscaling, compositing, LoRA datasets, PDF/table parsing — anything taking a file path.

## Problem
The model can *see* a pasted image and describe it perfectly, which creates the illusion it can also *process* it. It cannot: gradio_client, PIL, and every CLI need a real path. Re-attaching the image does not help. This silently costs many round-trips if you promise work you can't start.

## Solution
**1. Search before asking.** The user may already have saved it, under a name you'd never guess. Scan the likely folders filtered by recent mtime:
```powershell
$cut = (Get-Date).AddHours(-2)
Get-ChildItem "$env:USERPROFILE\Downloads" -File -Include *.png,*.jpg,*.jpeg,*.webp |
  Where-Object { $_.LastWriteTime -gt $cut } | Sort-Object LastWriteTime
```
Widen to Desktop / Pictures / OneDrive / the project folder before concluding it's missing. Note a name filter can miss it entirely — list the newest files regardless of name.

**2. Ask once, concretely.** Give an exact folder plus suggested filenames, and explicitly accept "save it anywhere and tell me the path". Point out they already know how if they've downloaded your outputs before.

**3. Verify identity by INSPECTION, never by name or size.**
- **Bytes are not resolution.** A 58 KB 512x512 crop outweighs a 13 KB 1024x531 full image — a "largest file wins" heuristic picks the wrong source. Sort by `Image.open(f).size`, not `Length`.
- **The user's numbering is not yours.** A file called `notext-1 (2).png` turned out to be image *five*. Map files to images by dimensions/aspect ratio.
- Echo back what you matched (`name -> WxH -> which image`) so a mismatch surfaces *before* you spend GPU on the wrong input.

## When to Use
Whenever the deliverable requires consuming a user-supplied file and the only copy you've seen is in the conversation; or before selecting among several similarly named saved files.
