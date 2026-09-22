---
name: identity-is-not-validation
description: >-
  Use when a cross-check reproduces a figure to near-zero deviation, when a ratio between two
  columns is constant across every period.
metadata:
  origin: auto-extracted
---

# A reproduction to 1e-9 is suspicious, not reassuring

**Extracted:** 2026-09-09
**Context:** Validating a derived figure against a "governed" or "official" measure; using
a ratio of two columns as an instrument; combining two aggregate measures.

## Problem

Independent corroboration and algebraic identity look identical in the output. Both print a
difference of zero. Only one is evidence.

Three instances from one analysis, all of which reached a deliverable before being caught:

**1. The circular validation.** Discount share was computed by hand as
`Disc / (Net + Disc)` and checked against the model's own governed discount-share measure:
*"66 months compared, largest deviation 0.0000 pp."* That became the analysis's headline
verification. But `GrossExcl_model ≡ Net_hand + Disc_hand` to 9e-8 kr and
`Net_model ≡ Net_hand` to 1e-7 kr — the governed measure is the *same arithmetic on the
same inputs*. It could not have disagreed.

**2. The derived column used as an instrument.** A national statistics table carried a
*deduction* column and a *market value* column; their ratio was to date policy changes, since
a rule change should move the effective rate. The ratio was **identical to the decimal in all
68 months**. The market column is the deduction column multiplied by a fixed grossing-up
factor — a convention, not a measurement. The instrument was dead before the first test, and
the constant ratio is the tell.

**3. The subtraction that assumed nesting.** A measure counting *new customers from
acquisitions* looks like a subset of one counting *new customers from subscriptions*, so
organic new customers "must" be the difference. They are different populations — over the
same window the first counted more than twice the number of actual acquisition starts — and
the second measure is *already* net of acquisitions. The subtraction removed them twice,
produced **negative customer counts** in four months, and manufactured a confident positive
result at z above +2.5 which became a negative one below −1.5 when built correctly.
The sign flipped.

## Solution

Test for identity explicitly, and let the result decide whether the check counts.

```python
# 1. Is the "independent" reference just my own inputs recombined?
worst = max(abs(ref[m] - (mine_a[m] + mine_b[m])) for m in months)
if worst < 1e-3:
    print("IDENTITY, not validation")

# 2. Constant ratio => one column is derived from the other.
r = [a[m] / b[m] for m in months if b.get(m)]
print("ratio spread: %.10f" % (max(r) - min(r)))      # ~0 => unusable as an instrument

# 3. Verify nesting before subtracting.
assert all(sub[m] <= tot[m] for m in months), "not nested - do not subtract"
same = sum(1 for m in months if abs(tot[m] - other[m]) < 1e-9)
print("months where tot == other: %d of %d" % (same, len(months)))   # 68/68 => already net
```

Then get a genuinely independent check. What worked here: rebuilding the series from **raw
columns** instead of from measures, and confirming it reproduced the governed monthly count
exactly (0 deviation, 68 months). That one *is* evidence — the two paths share no
arithmetic.

## The tell in each case

| Symptom | What it means |
|---|---|
| Deviation ~1e-7 or exact zero in every period | Same arithmetic, not agreement |
| Ratio identical to several decimals in every period | One column is derived from the other |
| An impossible value: negative count, share > 100 %, rate above 1 | The combination is invalid |

**Impossible values are the highest-value alarm in this family.** The negative
new-customer count is what exposed instance 3; nothing else had.

## When to Use

Writing "verified against X" in a deliverable; using a ratio of two stored columns as a
measure or instrument; subtracting, netting or differencing two aggregate measures;
reviewing a validation section whose deviations are all zero. Related:
`spot-check-is-not-full-verification`, `scope-claims-need-value-enumeration`,
`reimplemented-key-is-not-the-key`.
