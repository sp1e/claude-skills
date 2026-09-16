---
name: spot-check-is-not-full-verification
description: "Use when about to claim two artifacts are equivalent or that something doesn't exist, based on checking only the parts expected to matter — before asserting it, enumerate the full set the claim covers and verify every part, not just the suspect ones."
metadata:
  origin: auto-extracted
---

# Spot-check is not full verification

**Extracted:** 2026-09-08
**Context:** Verifying a comparison claim (binary/file equivalence, "no backup exists",
"nothing else changed") during a takeover, audit, or handover task.

## Problem

Twice in one session, a narrow check got silently promoted to a broader claim:

1. Compared only the `.text` and `.rdata` sections of a rebuilt executable against the
   official base runtime, found them identical, and wrote "the 512-byte difference is the
   resource section" — without ever measuring the resource section. Plausible, but
   unverified; it read as a measurement when it was a guess.
2. Ran `git remote -v`, got an empty result, and concluded "this project exists only on this
   machine" — without checking whether the `.git` directory itself lived inside a
   cloud-synced folder. It did: the worktree's `.git` pointed into a OneDrive-synced path,
   and every object file carried a `ReparsePoint` attribute (the OneDrive Files-On-Demand
   marker). The repository was already replicated off-machine; the absence of a *remote*
   said nothing about the absence of a *copy*.

Both errors have the same shape: check subset S of what a claim covers, find S consistent
with the claim, then assert the claim about the full scope — without checking the rest, or
without checking a different-but-related surface the claim actually depends on.

## Solution

Before writing a claim of the form "X and Y match", "nothing else changed", or "Z doesn't
exist":

1. Write down what the claim actually covers — enumerate it if enumerable (every section of
   a binary, every place a resource could be replicated, every file a diff should show as
   unchanged), not just the parts that seem likely to matter.
2. Check whether the check you already ran covers that full enumeration, or only a
   representative/expected-to-differ slice of it.
3. If it's a slice, either check the rest before writing the claim, or scope the claim down
   to what was actually checked ("the two sections I compared are identical" is true and
   useful; "the files are equivalent" is not yet earned).
4. For "doesn't exist" claims specifically, distrust a single negative signal (empty remote
   list, no config entry, no visible reference) — a related surface may satisfy the same
   need through a different mechanism (cloud-sync replication instead of a git remote, a
   cache instead of a database row, a symlink instead of a copy).

## Example

Binary comparison, done right — enumerate every section instead of checking the two
expected to match:

```python
# Wrong: only checks the sections you expect to be unchanged, then guesses about the rest
text_a, text_b = section(file_a, '.text'), section(file_b, '.text')
assert hash(text_a) == hash(text_b)
print("difference must be in the resource section")  # unverified

# Right: enumerate all sections, let the diff show you what actually changed
sections_a, sections_b = all_sections(file_a), all_sections(file_b)
for name in sorted(set(sections_a) | set(sections_b)):
    if hash(sections_a.get(name)) != hash(sections_b.get(name)):
        print(f"{name}: differs")   # now it's a measurement, not an assumption
```

"No backup" claim, done right:

```bash
git remote -v                      # empty — proves no git *remote*, nothing more
# check whether .git resolves into a folder under OneDrive/Dropbox/iCloud sync (on Windows,
# check file attributes for ReparsePoint/Offline); a repo can be fully replicated off-machine
# with zero git remotes configured
```

## When to Use

- About to write a comparison/equivalence claim ("identical", "matches", "no drift") after
  checking only some of what the claim implies.
- About to write a non-existence claim ("no backup", "not used anywhere", "never
  referenced") from a single negative signal, especially during a takeover, audit, security
  review, or handover where the reader will act on the claim without re-checking it.
- Any time the phrase forming in the draft is "X must be Y" or "the rest is probably Z"
  instead of "X is Y" backed by an actual check.
