---
name: data-narrative-builder
description: >-
  Build compelling data-driven narratives and turn analysis results into text decision-makers act on.
  Use when presenting analysis results, creating stakeholder reports, or transforming a set of findings
  into a story that drives a specific decision or action. Also use to transform data findings into
  compelling, actionable insights (connecting findings to business impact); to create concise executive
  summaries from detailed analysis (board decks, executive briefings, decision-ready formats for senior
  audiences); to translate technical analysis into business language (explaining statistical concepts to
  non-analysts, bridging data teams and business stakeholders); and to estimate and communicate the
  business impact of insights (sizing opportunities, ROI of recommended actions, prioritizing
  initiatives by potential impact).
---

# Data Narrative Builder

# When to use
- A presentation exists but feels like a data dump rather than a story
- The analysis has a clear finding but the team doesn't know how to make it compelling
- The audience is senior and will not read more than 5 slides
- A decision needs to be made and the data needs to make a clear, emotion-aware argument
- A recurring report needs to be restructured around a narrative rather than a metric list

# Process
1. **Identify the central message** — write the single most important thing the audience should know and do after seeing this. Everything else is supporting material. If there's more than one message, there are multiple presentations.
2. **Choose a narrative framework** — select the structure that fits the context. Situation–Complication–Resolution works for most problem/solution stories. Before–After–Bridge is strong for demonstrating impact. See `references/narrative_frameworks.md` for all patterns with examples.
3. **Assign an emotional arc** — map each section to an intended emotional state: establish comfort (Situation), introduce tension (Complication), offer confidence (Resolution). Tone and data emphasis should match the intended emotion at each stage.
4. **Draft each section with data woven in** — apply the pyramid principle: lead with the conclusion, then support it with evidence. Numbers must serve the narrative, not interrupt it. Round large numbers for recall; humanise by expressing impact in terms the audience cares about.
5. **Plan the visual sequence** — assign one key chart or visual to each narrative beat. The visual should reinforce the spoken or written message, not repeat it. See `references/data_writing_guide.md` for annotation and emphasis techniques.
6. **Write the opening hook and closing call to action** — the hook must earn attention in under 10 seconds (a surprising stat, a question, or a contrast). The CTA must name a specific decision, person, and deadline. Complete `assets/narrative_template.md`.

# Inputs the skill needs
- The central finding or insight to be communicated
- The audience (role, knowledge level, what they care about most)
- The desired action or decision at the end of the presentation
- All supporting data and charts already prepared
- Format and time constraints (slides, report, 5-minute presentation, 30-page doc)

# Output
- `references/narrative_frameworks.md` — SCR, BAB, hero journey, and sparklines patterns with data storytelling examples
- `references/data_writing_guide.md` — pyramid principle, number formatting, annotation, plain-language techniques
- `assets/narrative_template.md` — fill-in-the-blank narrative structure: hook, situation, complication, resolution, call to action

# Writing rules for Simon's deliverables
Any prose Simon will read or forward must also pass `simon-skrivstil` and `stop-slop` (required by his CLAUDE.md before every delivery). Where this skill's frameworks conflict with those two (dramatic hooks, emotional arcs, metaphors), the two writing skills win: a headline carries its number, no "not X but Y".

# Merged modes (2026-10-12)

The skills insight-synthesis, executive-summary-generator, technical-to-business-translator and impact-quantification were merged into this one. Their files live under `references/<old-name>/`.

## Findings to insights (was insight-synthesis)
Use when an analysis has many statistics but no clear "so what", or several analyses need one set of recommendations.
1. List every meaningful finding as a plain factual statement before interpreting.
2. For each: So what (why it matters), Why (likeliest explanation), Now what (specific action). See `references/insight-synthesis/references/insight_framework.md`.
3. Give each insight a magnitude (money, customers, hours). Without a number it is an observation.
4. Score impact, confidence and actionability 1–3 each and lead with the insights that score high on all three (`references/insight-synthesis/references/prioritization_guide.md`). Hold high-impact, low-confidence insights until validated.
5. Cluster related insights; where two point in opposite directions, state the tension and which data would resolve it.
6. Present the top 3–5 in `references/insight-synthesis/assets/insight_brief_template.md`.

## Executive summary (was executive-summary-generator)
Use when a detailed analysis must fit 1–2 pages for a senior reader.
1. Keep only the 3–5 findings that change or confirm a decision.
2. Every finding carries a number (revenue at risk, cost saved, customers affected, payback time); see `references/executive-summary-generator/references/executive_communication.md`.
3. One paragraph of situation: why the analysis was done and why now.
4. Conclusion first, then evidence, then detail (`references/executive-summary-generator/references/pyramid_principle_guide.md`).
5. Each recommendation names what, who, expected outcome and by when.
6. Close with the decision block: the approval needed, resources, expected return, deadline. Template: `references/executive-summary-generator/assets/executive_summary_template.md`.

## Technical to business language (was technical-to-business-translator)
Use when model output, test results or query findings go to a business reader, and to check your own draft for jargon.
1. Flag jargon: `references/technical-to-business-translator/scripts/jargon_detector.py`.
2. Score readability: `references/technical-to-business-translator/scripts/readability_scorer.py` (target grade 10 or lower for executives).
3. Pick the reader persona (`references/technical-to-business-translator/references/stakeholder_personas.md`).
4. Swap terms with `references/technical-to-business-translator/references/translation_pattern_library.md`; metaphors for hard concepts in `metaphor_bank.md` (check them against stop-slop first).
5. Produce the parallel version with `references/technical-to-business-translator/assets/translation_template.md` and keep the technical original in an appendix.

## Sizing the impact (was impact-quantification)
Use when a finding suggests an action or opportunity and stakeholders need a defensible number, or to rank a backlog by impact.
1. Classify: revenue growth, cost reduction, risk reduction or efficiency gain (`references/impact-quantification/references/impact_quantification_framework.md`).
2. Gather baseline, affected volume, expected change, time horizon and input confidence.
3. Point estimate: `references/impact-quantification/scripts/revenue_impact.py` or `cost_savings.py`.
4. Always give a low/base/high range: `references/impact-quantification/scripts/confidence_interval.py`.
5. Document every estimated input and its sensitivity (`references/impact-quantification/references/assumption_documentation.md`).
6. Package with `references/impact-quantification/assets/impact_estimate_template.md`, or `business_case_template.md` for larger decisions.
