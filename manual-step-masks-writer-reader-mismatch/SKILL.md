---
name: manual-step-masks-writer-reader-mismatch
description: >-
  Use when a tool is about to read a file its own pipeline produced, or when a script that has
  worked for months suddenly fails on data nobody changed.
metadata:
  origin: auto-extracted
---

# A manual step can be load-bearing without anyone knowing

**Extracted:** 2026-09-15
**Context:** recurring pipelines where a job's output later becomes its own input

## Problem

A tool writes a file. Later, the same tool reads that file back as input. Between the two, a
human sometimes opens it in an editor — Excel, an IDE, a GUI — and saves it. That save
normalises the file: it fills in optional elements and rewrites it in the editor's canonical
form.

Nobody records that step, because it isn't a step. It's a habit.

The writer and the reader can then disagree about the format indefinitely and it never shows,
because the editor repairs every file in between. The day the habit lapses, the tool fails on
data it wrote itself — and the failure presents as a new bug in code that has not changed.

The dangerous version is quieter than a crash: if the mismatch merely drops or misreads a field
instead of raising, the pipeline keeps running and silently degrades its own output, once per
cycle, compounding.

## Solution

1. **Read the failure as a question about the input's provenance, not about the code.**
   Ask what is different about *this file*, not what is wrong with *this run*. Code that worked
   yesterday and fails today on an unchanged codebase is an input-shape story.
2. **Find a fingerprint separating "went through the manual step" from "did not."**
   Editors leave structural traces. Compare the failing input against several known-good
   historical copies and look for a structural marker, not a content difference.
3. **Confirm the hypothesis against real vintages before acting on it.** Two or three old copies
   turn a plausible story into a measured one. The intuitive explanation ("the file is corrupt")
   is wrong here and sends you the wrong way — so measure rather than assert.
4. **Make the repair explicit and executable.** Whatever the editor was silently doing becomes a
   required pipeline step with its own script — never a comment saying "remember to open it in
   Excel once." A step that depends on somebody's habit is not a step.
5. **Fix both halves.** Harden the reader *and* reproduce what the editor used to supply.
   Patching only the crash leaves the pipeline quietly shedding whatever else the editor had
   been restoring for free.

## Example

A build script read its own previous output and crashed with `IndexError`. openpyxl omits
*trailing* empty cells in read-only mode, so rows came back 7 wide instead of 8 wherever the
last column was blank. The reader assumed 8 and indexed straight into the gap.

The bug had existed since the script was written. Every earlier input had passed through Excel,
which writes empty cells out explicitly. The fingerprint was `sharedStrings.xml`:

| Vintage | zip entries | sharedStrings | row width |
|---|---|---|---|
| older, Excel-touched | 20-21 | present | 8 |
| newest, machine-only | 19 | absent | **7 and 8 mixed** |

The one-line reader fix — pad to header width before indexing:

    row = list(r) + [None] * (len(hdr) - len(r))

And the second half: a separate script now restores the document metadata and column width that
Excel used to restore for free, because nothing opens the file by hand any more.

## When to Use

- A recurring job's output becomes a later run's input
- A script that has worked for months fails on unchanged code
- Migrating a workflow from "a human runs it and tidies up" to fully automated
- Any generated file that people also open by hand
- Reviewing a pipeline for what breaks when the last human drops out of it

Two adjacent failure modes worth telling apart from this one. A sync or install step that silently
*undoes* your change is the opposite direction: there the automation overwrites you, here it was
quietly repairing you. And a parse-modify-serialize round-trip that rewrites values you never
touched casts the editor as the thing that corrupts your data — the mirror image of the editor as
the thing that was holding the pipeline together.
