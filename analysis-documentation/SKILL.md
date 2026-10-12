---
name: analysis-documentation
description: >-
  Structured, reproducible analysis documentation across the whole analysis lifecycle. Use when
  documenting analysis findings, creating analysis notebooks, ensuring reproducibility, or building
  analysis archives for future reference. Also use to structure the analysis approach before starting
  work (new analysis requests, breaking complex questions into steps, planning iterative analysis
  workflows); to track and document analytical assumptions, decisions and trade-offs (transparency,
  audit trails); to explain analysis methodology to diverse audiences ("how we did this" sections,
  building trust through transparency, teaching analytical approaches to stakeholders); and for
  post-analysis learning (retrospectives, lessons learned, improving team analytical practices).
---

# Analysis Documentation

# When to use
- Finalising an analysis before sharing it with stakeholders
- Handing off an analysis to another team member or to a future self
- Archiving recurring analyses so they can be run again consistently
- Preparing for peer review or a formal audit
- Converting an exploratory notebook into a reference document

# Process
1. **Confirm audience and scope** — determine whether the primary reader is technical (data team), business (stakeholders), or both. For mixed audiences, use a tiered structure. See `references/audience_depth_guide.md` for calibration.
2. **Write the business context section** — state the business question, the stakeholders who requested the analysis, the decisions it informs, and the success criteria.
3. **Document data sources** — for each source, record the table or file, date range, row count, key columns, and any known quality issues or exclusions applied.
4. **Write the methodology section** — describe the analytical approach, tools and library versions, key assumptions, and important decisions made (and alternatives considered). Reference the assumptions log if one exists.
5. **Record results** — include key metrics and statistics, embed or link visualisations with descriptive captions, and present findings in order of importance.
6. **Write the insights, recommendations, and reproducibility section** — connect each finding to a business implication and a next action. Document the steps required to reproduce the analysis (data access, environment, execution order). Use `assets/analysis_doc_template.md` as the structure.

# Inputs the skill needs
- Final code (SQL, Python, notebook) and outputs (charts, tables)
- Business question and stakeholder context
- Key findings and recommendations already identified
- Data source details (tables, date ranges, sample sizes)
- Library and tool versions used

# Output
- `assets/analysis_doc_template.md` — completed analysis document covering context, data, methodology, results, and reproducibility
- Linked or embedded visualisations and code references

# Lifecycle stages (merged 2026-10-12)

The skills analysis-planning, analysis-assumptions-log, methodology-explainer and analysis-retrospective were merged into this one. Their files live under `references/<old-name>/`.

## Before the analysis: plan (was analysis-planning)
Use after requirements are gathered and before any data is touched, especially with several steps, uncertain data availability or a tight deadline.
1. Break the business question into sub-questions, each answerable with one data pull or calculation (`references/analysis-planning/references/scoping_framework.md`).
2. Per sub-question, list required tables and their availability (confirmed / likely / unknown); flag blockers early.
3. Sequence the work so each output feeds the next; mark steps that can run in parallel.
4. Estimate effort per step and compare the total to the deadline (`references/analysis-planning/references/effort_estimation.md`).
5. Log risks and dependencies (`references/analysis-planning/references/risks_dependencies.md`).
6. Fill in `references/analysis-planning/assets/analysis_plan_template.md`; for a stakeholder kickoff also `kickoff_doc_template.md`.

## During the analysis: assumptions log (was analysis-assumptions-log)
Use when making scope, method or data-quality choices, before peer review or sign-off, in audited work, or when handing off.
1. Start a structured JSON log: `references/analysis-assumptions-log/scripts/assumptions_tracker.py`.
2. Record data, business-logic and statistical assumptions, each with rationale, alternatives considered and confidence (high/medium/low). Taxonomy: `references/analysis-assumptions-log/references/assumption_categories.md`.
3. For every low-confidence, high-impact assumption, write a validation plan. `assumptions_tracker.py --report` lists the critical ones.
4. Update the log as validation happens; export `references/analysis-assumptions-log/assets/assumptions_log_template.md` for sign-off. Step 4 of the main process references this log.

## Explaining the method (was methodology-explainer)
Use whenever the audience must trust the method (A/B tests, attribution, forecasts, statistics). Write it before the results go out.
1. Pick the audience tier: executive (why/what), business analyst (what/how), technical peer (full detail). See `references/methodology-explainer/references/audience_depth_guide.md`.
2. Pick a pattern: narrative, layered (summary + appendix) or Q&A, and use its plain-language translation table (`references/methodology-explainer/references/methodology_explanation_patterns.md`).
3. Cover the question, data, method, assumptions and the key limitation. Every explanation states at least one honest limitation and what it means for the conclusions.
4. Deliver with `references/methodology-explainer/assets/methodology_writeup_template.md` or, for a presentation, `methodology_slide_template.md`.

## After the analysis: retrospective (was analysis-retrospective)
Use within a week of finishing a major analysis, after one that went wrong (late, rejected, data error found after delivery), or quarterly for a team.
1. Time-box: 30 min solo, 60 min team. Format: Start/Stop/Continue or 4Ls (`references/analysis-retrospective/references/retro_frameworks.md`).
2. Compare actual timeline, scope and effort with the plan.
3. Name at least two things that worked and should be repeated.
4. Apply 5-whys to each problem to reach the cause, not the symptom.
5. Decide where each learning belongs: template, reference doc, checklist or team norm (`references/analysis-retrospective/references/learning_capture.md`).
6. Record actions with owners and dates in `references/analysis-retrospective/assets/retrospective_template.md`; durable learnings in `learnings_log_template.md`.
