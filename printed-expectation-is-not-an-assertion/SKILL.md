---
name: printed-expectation-is-not-an-assertion
description: >-
  Use when writing or reviewing a verification script, smoke test or release gate that prints
  a computed value next to an expected one.
metadata:
  origin: auto-extracted
---

# A printed expectation is not an assertion

**Extracted:** 2026-09-15
**Context:** verification scripts, smoke checks, release gates — anything whose output gets read as proof

## Problem

A check computes a value and prints it beside what it should be:

    print(f"SUMIF for July ... {total:,.0f} kr  (expected 4 812 300)")

This line can never fail. It emits something that *looks* like evidence, goes green forever, and
gets cited as "verified." Two independent defects hide inside it:

1. **No comparison.** Nothing reads the two numbers and disagrees. The exit code is 0 whatever
   happens. A reviewer scanning the output sees two numbers side by side and assumes the code
   compared them — the formatting does the persuading, not the logic.
2. **A frozen expectation.** The constant was right for the run it was written in. The moment the
   subject moves on — next month, next release, next dataset — the check filters on a stale key
   and compares against a stale target. It is now asserting something about data that is no
   longer under test, which is worse than asserting nothing, because it still reads as a pass.

Both failures point the same way: toward false confidence, never toward a red light. That
asymmetry is what makes this worth hunting for — a check that can only ever agree with you is
indistinguishable from a check that works, right up until it matters.

## Solution

- **Compare in code and exit non-zero.** If a human has to notice the discrepancy, it is not a
  check — it is a log line.
- **Take the identifier and the expected value as arguments.** Anything naming *which* instance
  is under test — period, version, release tag, month, row count — belongs on the command line,
  not in a constant. The caller knows what it is verifying; the script should not guess.
- **Derive the expectation from an independent source**, not from an earlier run of the thing
  being checked. An expected value copied out of the subject's own output only proves the
  subject is self-consistent.
- **Negative-test the check.** Feed it a deliberately wrong argument and confirm it goes red.
  A check never observed failing is a hypothesis about a check.
- **Close known-defect entries when you touch the file.** If a list already flags the constant,
  fixing the code and leaving the entry open guarantees someone re-discovers it later.

Shape to aim for:

    if len(sys.argv) != 4:
        sys.exit("Usage: check.py <file> <period> <expected>")
    path, PERIOD, EXPECTED = sys.argv[1], sys.argv[2], float(sys.argv[3])
    ...
    if abs(actual - EXPECTED) >= 1:
        print(f"FAIL — off by {abs(actual - EXPECTED):,.0f}")
        sys.exit(1)

## Example

A verification script printed a SUMIF total beside `(expected 4 812 300)` with no comparison.
Because the month was hardcoded too, a later run summed a month that was no longer the one being
delivered, and printed it against a figure from a superseded extract. The line was decorative in
two independent ways at once, and its output had been quoted as evidence that the delivery
checked out.

It had been flagged in a known-errors list as "just an echo, no check" more than a month earlier
and stayed open, because nobody read that list while editing the script.

## When to Use

- Writing any verification, smoke-test or release-gate script
- Reviewing a check whose output is quoted as evidence that something passed
- A check that has never once failed
- Any script holding a literal date, period, version or row count from the run it was written in
- Before citing a green log as proof

Three neighbouring ways a check can be green without being a check, all distinct from this one.
The criterion may be *restated* from the rule rather than derived from the mechanism, so the gate
agrees with the spec instead of with reality. The comparison may be real but cover only the subset
you already suspected. Or it may be real and complete yet algebraically guaranteed — an identity
dressed up as an independent cross-check. This skill is the flattest case of all: there is no
comparison in the code at all.
