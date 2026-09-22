---
name: gate-must-derive-its-criterion
description: >-
  Use when writing or reviewing a check that verifies another mechanism — a CI gate, a
  contract check, a lint rule, a guard over a build or sync script, a structural assertion.
metadata:
  origin: auto-extracted
---

# A gate must derive its criterion from the mechanism it checks

**Extracted:** 2026-09-03
**Context:** verification code that guards other code — contract checks, CI gates,
guard scripts, structural lint, anything whose job is to refuse.

## Problem

A gate is trusted precisely because it is independent of the thing it checks. So
its criterion gets written separately — and a *restated* criterion drifts from the
real one silently. Drift stricter and the gate cries wolf until people wave it
through; drift looser and it passes exactly what it exists to catch. Both are one
defect: **a signal independent of what it claims to measure.**

Measured instance: a mirror-sync gate applied a **basename** rule for ownership
where the sync script itself derives ownership from the **full path**
(`/<owner-token>/i.test(path)`). Six correctly-carried files were reported as leaks. The
change was right; the gate was wrong. Two of its three reported failures were its
own error.

## Solution

**Derive, don't restate.** Read the criterion out of the mechanism — evaluate its
actual regex, import its actual constant, walk its actual list. Then prove the
derivation by running it, not by reading the source and paraphrasing:

```js
// the mechanism's own rule, evaluated
node -e 'for (const p of paths) console.log(p, /<owner-token>/i.test(p))'
```

**When a gate fails a correct change, the gate is the defect.** Fix it there, not
in the change — and then *measure the correction*: re-run and confirm the false
alarm is gone AND the real failure still fires. A corrected gate you did not re-run
is the same class of claim as the one you just removed.

**A check name that carries a number must interpolate it.**

```js
// stale the moment a seventh route lands; the prose lies before anyone notices
check('all six job routes sit below the owner gate', offenders.length === 0)

// derives from the same list the check walks
check(`all ${ROUTES.length} job routes sit below the owner gate`, offenders.length === 0)
```

Same for "exactly N modules" and "the N handlers". A count written twice is a count
that will disagree with itself. When the count is derived, adding an entry updates
the name for free — and forgetting to update the *set* fails loudly instead.

**Closed sets must grow with the code.** An enumerated allowlist decays in silence.
Either walk the tree, or derive the count so that adding an entry without updating
the set breaks the check. That break is the mechanism working, not an obstacle.

This is verifiable: the same session that fixed the basename bug then skipped
updating a closed set (a module list left at 2 while the code imported from 3), and
the check caught it immediately — `the 7 handlers are imported from the 2 modules` —
*because* both numbers were derived from their lists rather than typed.

**A closed set enumerated in EXECUTABLE form does not merely miss drift — it certifies the
wrong number, in green.** This is the worst case and it is easy to build by accident, because
the check looks like exactly the diligence you wanted:

```js
// a contract check asserting every consumer of the migration set names it
for (const [file, why] of [
  ['scripts/lib/schema-harness.mjs', "the schema suites' shared fixture"],
  ['src/server/repository.harness.ts', 'the repository harness'],
  ['orchestrator/vitest.config.ts', 'the orchestrator integration suite'],
]) {
  check(`${why} loads ${MIGRATION} (${file})`, read(file).includes(MIGRATION));
}
```

Measured: the real number of consumers was **eight**. That check passed on all three of its own
entries, so it read as authoritative — and it is why "three consumers" kept regenerating in
comments, in a plan's constraints and in later checks *after* the number had already been measured
wrong. A green check is the most persuasive source of a stale fact in a repository.

The fix is not a fourth entry. Discover the set (`fs.readdirSync` plus the runner's own family
rule, an import graph walk, a glob the build already uses), put it in ONE module, and have every
check and every count read from that. Then adding a member updates the checks and their names for
free, and forgetting to add one fails loudly.

**And do not expect one detector to find a closed set's members.** Tracking how the eight above
were actually found: eye-counting got 1–3 and was wrong; an agent working inside a file found the
4th unprompted; a reviewer *disputing the recorded number* found the 5th and 6th; a full test suite
going red found the 7th; a human reading the contract check found the 8th. **No mechanism found
more than three, and none would have found another's.** A red suite could not see the mirror-path
omission (the mirror is not built during tests); grepping for the migration name could not suggest
a redirect rule; and the enumerating check was invisible to both because it passed.

So when a count matters, expect to need several independent detectors, and write the number down as
provisional — with the instruction to re-measure — rather than as settled. A recorded count that
has been wrong twice will be wrong again.

**A green test suite is not a typecheck.** Runners that transpile (vitest, ts-node,
esbuild, swc) do not typecheck. Measured: 29/29 green co-existed with three real
`tsc --noEmit` errors — an import from the wrong module and two possibly-undefined
array reads. Run the typecheck as its own gate step; never infer it from green.

**A unit test proves the predicate; only the call graph proves the call.** A guard
can be correct, tested, and no longer invoked. Assert the CALL separately — walk
the import graph or the AST — or a deleted call site stays green forever. Measured
three times on three different rounds of one project.

**A manufactured fixture is untested surface, and its defects are reported as
defects in the code under test.** A gate that generates its own input has two
programs in it, and only one of them is being reviewed. Measured twice in one
afternoon, on the same gate.

First, it was not deterministic. The probe was noise generated with no seed, so
a two-stage pipeline passed on one run and failed on the next with identical
code. A gate that answers differently on the same code is worth nothing, and
this one cost a debugging cycle chasing a regression that did not exist.

Second, and worse, it was valid but the wrong shape. A plain sine reads as
instrumental to a vocal separator, so the isolation stage handed the next stage
digital silence, and the recipe failed on the PROBE while reporting a missing
output as if the recipe were broken. The gate was asking a different question
from the one it claimed to ask.

Three rules follow. **Commit the fixture** where you can: a seeded generator is
only reproducible against the same generator build, so the same seed on a
different CI image silently changes the question again. Seeding is the fallback
for fixtures that genuinely must be generated. **Assert the fixture's own
preconditions before the code runs**, so a bad probe fails as a bad probe
rather than as a bug. And **run a newly written gate at least twice** before
trusting it — the first green proves nothing about repeatability.

One caveat on the evidence you demand. Byte-identical output is the right bar
for the FIXTURE. It is the wrong bar for a pipeline whose stages run on a GPU,
where non-deterministic kernels make bit-reproducibility unavailable; compare
those with a tolerance, or you teach the reader to read ordinary numerical
noise as a fixture defect.

## When to Use

Whenever you add a check over another mechanism. And whenever a gate fails a change
you believe is correct — read the gate before you touch the change.
