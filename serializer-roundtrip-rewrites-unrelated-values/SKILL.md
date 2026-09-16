---
name: serializer-roundtrip-rewrites-unrelated-values
description: "Use when changing one value inside a structured file that someone else's tool owns — JSON, YAML, XML, TOML — parse-modify-serialize silently rewrites values you never touched. Replace the text instead, then measure the diff to prove the edit was surgical. Triggers on 'change a field in', 'update the config file', 'patch JSON', 'visual.json', 'clean diff', 'just one line'."
metadata:
  origin: auto-extracted
---

# A serializer rewrites values you never touched

**Extracted:** 2026-09-15
**Context:** a text correction across six report-definition JSON files owned by a GUI tool.

## Problem

Changing one field in a structured file looks like three obvious steps: `json.load` → modify →
`json.dump`. The flaw is that the serializer rewrites the **whole** file from its own in-memory
representation, not from the original's text.

One of six elements picked up an unrequested change:

    - "x": 912.00000000000011
    + "x": 912.0000000000001

The same IEEE-754 double. Python emits only the shortest repr that round-trips to the identical
bit pattern; the original was written by another tool following a different rule. No warning, no
error, no value actually changed — just a byte difference in a file that is version-controlled
and reviewed.

The same class of silent rewrite exists anywhere you do not own the format:

| Format | What a round-trip does |
|---|---|
| JSON | float repr, `\/` escapes, indentation, key order under `sort_keys` |
| YAML | quote style, anchors dropped, `yes`/`on` become `true`, block scalars flattened |
| XML | attribute order, self-closing tags, namespace prefixes, whitespace |
| TOML | comments disappear entirely |

For YAML and TOML the loss is substantive, not cosmetic: comments and anchors are information.

## Solution

**Replace text in the original. Do not re-serialize.** And prove the edit was surgical by
counting the diff lines — never assume it.

1. Read the file as text, in binary (`open(p, 'rb').read().decode('utf-8')`).
2. Use the parser only to **locate and validate**, never to write.
3. Swap exact string for exact string.
4. Write back in binary.
5. **Diff against the original and print the number of changed lines.** If it is more than the
   change requires, back out and redo it — starting from the original, not from the file you
   have already rewritten.
6. Re-parse from disk afterwards, as a check that the file is still valid.

Step 5 is what makes the pattern worth anything. Without the measurement, a rewritten file looks
exactly as correct as a surgically edited one.

## Example

```python
import difflib, json

REPLACEMENTS = {"'old text'": "'new text'"}

t = open(p, "rb").read().decode("utf-8")       # the ORIGINAL text
json.loads(t)                                   # parser validates, never writes

new = t
for old, replacement in REPLACEMENTS.items():
    new = new.replace(old, replacement)
if new == t:
    return                                      # nothing to do - do not touch the file

open(p, "wb").write(new.encode("utf-8"))

changed = [x for x in difflib.unified_diff(t.splitlines(), new.splitlines(), lineterm="")
           if x[:1] in "+-" and x[:3] not in ("+++", "---")]
print("%d changed lines" % len(changed))        # expect 2 per replaced string
json.loads(open(p, "rb").read().decode("utf-8"))    # still valid after writing
```

If you have already rewritten the file: redo the replacement **from the backup**, not from the
rewritten copy. Otherwise the unrequested change is inherited forward.

## When to Use

- One or a few values must change in a file that another tool owns and rewrites — report
  definitions, lock files, IaC templates, editor settings, manifests.
- The file is version-controlled and a human will review the diff.
- The format carries information the parser drops: comments, anchors, ordering.
- A generated file will be compared against a hand-edited one and the difference is meant to
  mean something.

## Related

Keep a fix separate from incidental cleanup; write files in binary mode so line endings survive
a repo's newline convention; and remember that a spot-check of a diff is not full verification
of it.
