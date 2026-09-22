# claude-skills

A curated collection of **120 [Claude Agent Skills](https://agentskills.io)**. Each skill is a folder with a `SKILL.md` plus any supporting `references/`, `scripts/`, or `assets/`.

## Install

**Claude Code** — copy a skill folder into your skills directory, then restart Claude Code:

```bash
git clone https://github.com/simonpsson/claude-skills.git
cp -r claude-skills/<skill-name> ~/.claude/skills/
```

**Claude chat / Cowork** — zip a skill folder and upload it at claude.ai → Settings → Capabilities → Skills:

```bash
cd claude-skills && zip -r <skill-name>.zip <skill-name>
```

## Skills

120 skills, grouped by area. Click a name for its `SKILL.md`. Regenerate this list with `python scripts/gen_readme.py`.

### Analysis, BI & general (50)

| Skill | Description |
| --- | --- |
| [ab-test-analysis](ab-test-analysis/SKILL.md) | Rigorous A/B test statistical analysis. |
| [analysis-assumptions-log](analysis-assumptions-log/SKILL.md) | Track and document analytical assumptions and decisions. |
| [analysis-documentation](analysis-documentation/SKILL.md) | Structured, reproducible analysis documentation. |
| [analysis-planning](analysis-planning/SKILL.md) | Structure analysis approach before starting work. |
| [analysis-qa-checklist](analysis-qa-checklist/SKILL.md) | Pre-delivery quality assurance for analysis work. |
| [analysis-retrospective](analysis-retrospective/SKILL.md) | Post-analysis learning and process improvement. |
| [browser-automation](browser-automation/SKILL.md) | This skill should be used when the user asks to "build web automation scripts", "check browser automation for detection", "generate web scraping code", "create form filling automation", or "build anti-detection browse... |
| [business-metrics-calculator](business-metrics-calculator/SKILL.md) | Standard business metric calculation with industry benchmarks. |
| [chat-attachment-is-not-a-file](chat-attachment-is-not-a-file/SKILL.md) | Use when a task must read, edit, upscale, composite or train on an image or document the user pasted into chat. |
| [claude-code-mastery](claude-code-mastery/SKILL.md) | Använd vid arbete med Claude Codes egen konfiguration: skriva eller optimera en CLAUDE.md, skapa en ny skill. |
| [codex-cli-specialist](codex-cli-specialist/SKILL.md) | OpenAI Codex CLI and cross-platform skill authoring. |
| [cohort-analysis](cohort-analysis/SKILL.md) | Time-based cohort analysis with retention and behaviour tracking. |
| [dashboard-specification](dashboard-specification/SKILL.md) | Design specifications for effective dashboards. |
| [data-catalog-entry](data-catalog-entry/SKILL.md) | Create standardized metadata for data assets. |
| [data-narrative-builder](data-narrative-builder/SKILL.md) | Build compelling data-driven narratives. |
| [data-quality-audit](data-quality-audit/SKILL.md) | Comprehensive data quality assessment against business rules, schema constraints, and freshness expectations. |
| [executive-summary-generator](executive-summary-generator/SKILL.md) | Create concise executive summaries from detailed analysis. |
| [focused-fix](focused-fix/SKILL.md) | This skill should be used when the user asks to "fix a bug with minimal changes", "analyze change scope for a bugfix", "find the minimal set of files to change", "do a focused bugfix", or "scope a minimal repair". |
| [funnel-analysis](funnel-analysis/SKILL.md) | Conversion funnel analysis with drop-off investigation. |
| [gate-must-derive-its-criterion](gate-must-derive-its-criterion/SKILL.md) | Use when writing or reviewing a check that verifies another mechanism — a CI gate, a contract check, a lint rule, a guard over a build or sync script, a structural assertion. |
| [google-workspace-cli](google-workspace-cli/SKILL.md) | This skill should be used when the user asks to "audit Google Workspace", "check GWS security settings", "set up Google Workspace authentication", "diagnose Workspace issues", or "review Google admin configurations". |
| [identity-is-not-validation](identity-is-not-validation/SKILL.md) | Use when a cross-check reproduces a figure to near-zero deviation, when a ratio between two columns is constant across every period. |
| [image-gen](image-gen/SKILL.md) | Generate images from a text prompt via Hugging Face. |
| [impact-quantification](impact-quantification/SKILL.md) | Estimate and communicate business impact of insights. |
| [insight-synthesis](insight-synthesis/SKILL.md) | Transform data findings into compelling insights. |
| [manual-step-masks-writer-reader-mismatch](manual-step-masks-writer-reader-mismatch/SKILL.md) | Use when a tool is about to read a file its own pipeline produced, or when a script that has worked for months suddenly fails on data nobody changed. |
| [methodology-explainer](methodology-explainer/SKILL.md) | Explain analysis methodology to diverse audiences. |
| [metric-reconciliation](metric-reconciliation/SKILL.md) | Cross-source metric validation and discrepancy investigation. |
| [planning-with-files](planning-with-files/SKILL.md) | Implements Manus-style file-based planning to organize and track progress on complex tasks. |
| [printed-expectation-is-not-an-assertion](printed-expectation-is-not-an-assertion/SKILL.md) | Use when writing or reviewing a verification script, smoke test or release gate that prints a computed value next to an expected one. |
| [programmatic-eda](programmatic-eda/SKILL.md) | Systematic exploratory data analysis. |
| [query-validation](query-validation/SKILL.md) | SQL query review for correctness, performance, and best practices. |
| [removing-from-a-synced-copy-is-temporary](removing-from-a-synced-copy-is-temporary/SKILL.md) | Use when deleting or editing something in a directory that an install or sync script populates — installed skills, vendored dependencies, dotfiles, a deploy target, a generated config tree. |
| [root-cause-investigation](root-cause-investigation/SKILL.md) | Systematic investigation of metric changes and anomalies. |
| [segmentation-analysis](segmentation-analysis/SKILL.md) | Customer/user segmentation with actionable insights. |
| [semantic-model-builder](semantic-model-builder/SKILL.md) | Build structured semantic layer documentation for metrics, dimensions, and entities. |
| [senior-backend](senior-backend/SKILL.md) | Backend development with Node.js/Express/Fastify and PostgreSQL. |
| [serializer-roundtrip-rewrites-unrelated-values](serializer-roundtrip-rewrites-unrelated-values/SKILL.md) | Use when changing one value inside a structured file that someone else's tool owns — JSON, YAML, XML, TOML — parse-modify-serialize silently rewrites values you never touched. |
| [skill-security-auditor](skill-security-auditor/SKILL.md) | Security audit and vulnerability scanning for AI agent skills before install. |
| [skill-tester](skill-tester/SKILL.md) | Validate and score Claude Code skill packages for quality, completeness, and best-practice compliance. |
| [spot-check-is-not-full-verification](spot-check-is-not-full-verification/SKILL.md) | Use when about to claim two artifacts are equivalent or that something doesn't exist, based on checking only the parts expected to matter. |
| [stakeholder-requirements-gathering](stakeholder-requirements-gathering/SKILL.md) | Structured requirements elicitation for analysis requests. |
| [sv3d](sv3d/SKILL.md) | Stable Video 3D (SV3D) — turn a SINGLE image of an object into an orbital novel-view VIDEO (image→video/3D). |
| [technical-to-business-translator](technical-to-business-translator/SKILL.md) | Translate technical analysis into business language. |
| [time-series-analysis](time-series-analysis/SKILL.md) | Temporal pattern detection and forecasting. |
| [visualization-builder](visualization-builder/SKILL.md) | Create effective, publication-ready data visualizations. |
| [web-artifacts-builder](web-artifacts-builder/SKILL.md) | Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). |
| [web-ui-verification](web-ui-verification/SKILL.md) | This skill should be used when the user asks to "verify the UI works", "check if this is clickable", "the layout breaks", "hidden isn't hiding", "it still looks old after deploying", "it says it's loading but nothing... |
| [write-a-skill](write-a-skill/SKILL.md) | Author, lint, and publish skill packages that satisfy the library authoring standard. |
| [zerogpu-failure-class-triage](zerogpu-failure-class-triage/SKILL.md) | Use when a Hugging Face Space call fails with a GPU-sounding error — three classes look alike but need opposite responses. |

### Power BI (3)

| Skill | Description |
| --- | --- |
| [pbi-report-builder](pbi-report-builder/SKILL.md) | [power-bi] Power BI PBIR Report Builder with IBCS Visuals. |
| [pbi-requirements-gathering](pbi-requirements-gathering/SKILL.md) | [power-bi] Power BI Requirements Gathering — a structured, conversation-driven skill that captures everything needed before building a Power BI solution. |
| [pbip-dependency-analyzer](pbip-dependency-analyzer/SKILL.md) | Power BI PBIP Dependency Analyzer. |

### Video & motion (1)

| Skill | Description |
| --- | --- |
| [cut-the-curve](cut-the-curve/SKILL.md) | Teknikkatalogen: fem velocity-matchade SEAMS (zoom-through, inverse zoom-through, cut-the-curve, waterfall cut, rack-focus blur-cut) plus waterfall ENTRY och nudge-kurvan. |

### GSD project workflow (66)

| Skill | Description |
| --- | --- |
| [gsd-add-tests](gsd-add-tests/SKILL.md) | Generate tests for a completed phase based on UAT criteria and implementation |
| [gsd-ai-integration-phase](gsd-ai-integration-phase/SKILL.md) | Generate an AI-SPEC.md design contract for phases that involve building AI systems. |
| [gsd-audit-fix](gsd-audit-fix/SKILL.md) | Autonomous audit-to-fix pipeline — find issues, classify, fix, test, commit |
| [gsd-audit-milestone](gsd-audit-milestone/SKILL.md) | Audit milestone completion against original intent before archiving |
| [gsd-audit-uat](gsd-audit-uat/SKILL.md) | Cross-phase audit of all outstanding UAT and verification items |
| [gsd-autonomous](gsd-autonomous/SKILL.md) | Run all remaining phases autonomously — discuss→plan→execute per phase |
| [gsd-capture](gsd-capture/SKILL.md) | Capture ideas, tasks, notes, and seeds to their destination |
| [gsd-cleanup](gsd-cleanup/SKILL.md) | Archive accumulated phase directories from completed milestones |
| [gsd-code-review](gsd-code-review/SKILL.md) | Review source files changed during a phase for bugs, security issues, and code quality problems |
| [gsd-complete-milestone](gsd-complete-milestone/SKILL.md) | Archive completed milestone and prepare for next version |
| [gsd-config](gsd-config/SKILL.md) | Configure GSD settings — workflow toggles, advanced knobs, integrations, and model profile |
| [gsd-debug](gsd-debug/SKILL.md) | Systematic debugging with persistent state across context resets |
| [gsd-discuss-phase](gsd-discuss-phase/SKILL.md) | Gather phase context through adaptive questioning before planning. |
| [gsd-docs-update](gsd-docs-update/SKILL.md) | Generate or update project documentation verified against the codebase |
| [gsd-eval-review](gsd-eval-review/SKILL.md) | Audit an executed AI phase's evaluation coverage and produce an EVAL-REVIEW.md remediation plan. |
| [gsd-execute-phase](gsd-execute-phase/SKILL.md) | Execute all plans in a phase with wave-based parallelization |
| [gsd-explore](gsd-explore/SKILL.md) | Socratic ideation and idea routing — think through ideas before committing to plans |
| [gsd-extract-learnings](gsd-extract-learnings/SKILL.md) | Extract decisions, lessons, patterns, and surprises from completed phase artifacts |
| [gsd-fast](gsd-fast/SKILL.md) | Execute a trivial task inline — no subagents, no planning overhead |
| [gsd-forensics](gsd-forensics/SKILL.md) | Post-mortem investigation for failed GSD workflows — diagnoses what went wrong. |
| [gsd-graphify](gsd-graphify/SKILL.md) | Build, query, and inspect the project knowledge graph in .planning/graphs/ |
| [gsd-health](gsd-health/SKILL.md) | Diagnose planning directory health and optionally repair issues |
| [gsd-help](gsd-help/SKILL.md) | Show available GSD commands and usage guide |
| [gsd-import](gsd-import/SKILL.md) | Ingest external plans with conflict detection against project decisions before writing anything. |
| [gsd-inbox](gsd-inbox/SKILL.md) | Triage and review open GitHub issues and PRs against project templates and contribution guidelines. |
| [gsd-ingest-docs](gsd-ingest-docs/SKILL.md) | Bootstrap or merge a .planning/ setup from existing ADRs, PRDs, SPECs, and docs in a repo. |
| [gsd-manager](gsd-manager/SKILL.md) | Interactive command center for managing multiple phases from one terminal |
| [gsd-map-codebase](gsd-map-codebase/SKILL.md) | Analyze codebase with parallel mapper agents to produce .planning/codebase/ documents |
| [gsd-milestone-summary](gsd-milestone-summary/SKILL.md) | Generate a comprehensive project summary from milestone artifacts for team onboarding and review |
| [gsd-mvp-phase](gsd-mvp-phase/SKILL.md) | Plan a phase as a vertical MVP slice — user story, SPIDR splitting, then plan-phase |
| [gsd-new-milestone](gsd-new-milestone/SKILL.md) | Start a new milestone cycle — update PROJECT.md and route to requirements |
| [gsd-new-project](gsd-new-project/SKILL.md) | Initialize a new project with deep context gathering and PROJECT.md |
| [gsd-ns-context](gsd-ns-context/SKILL.md) | codebase intelligence \| map graphify docs learnings |
| [gsd-ns-ideate](gsd-ns-ideate/SKILL.md) | exploration capture \| explore sketch spike spec capture |
| [gsd-ns-manage](gsd-ns-manage/SKILL.md) | config workspace \| workstreams thread update ship inbox |
| [gsd-ns-project](gsd-ns-project/SKILL.md) | project lifecycle \| milestones audits summary |
| [gsd-ns-review](gsd-ns-review/SKILL.md) | quality gates \| code review debug audit security eval ui |
| [gsd-ns-workflow](gsd-ns-workflow/SKILL.md) | workflow \| discuss plan execute verify phase progress |
| [gsd-pause-work](gsd-pause-work/SKILL.md) | Create context handoff when pausing work mid-phase |
| [gsd-phase](gsd-phase/SKILL.md) | CRUD for phases in ROADMAP.md — add, insert, remove, or edit phases |
| [gsd-plan-phase](gsd-plan-phase/SKILL.md) | Create detailed phase plan (PLAN.md) with verification loop |
| [gsd-plan-review-convergence](gsd-plan-review-convergence/SKILL.md) | Cross-AI plan convergence loop — replan with review feedback until no HIGH concerns remain. |
| [gsd-pr-branch](gsd-pr-branch/SKILL.md) | Create a clean PR branch by filtering out .planning/ commits — ready for code review |
| [gsd-profile-user](gsd-profile-user/SKILL.md) | Generate developer behavioral profile and create Claude-discoverable artifacts |
| [gsd-progress](gsd-progress/SKILL.md) | Check progress, advance workflow, or dispatch freeform intent — the unified GSD situational command |
| [gsd-quick](gsd-quick/SKILL.md) | Execute a quick task with GSD guarantees (atomic commits, state tracking) but skip optional agents |
| [gsd-resume-work](gsd-resume-work/SKILL.md) | Resume work from previous session with full context restoration |
| [gsd-review](gsd-review/SKILL.md) | Request cross-AI peer review of phase plans from external AI CLIs |
| [gsd-review-backlog](gsd-review-backlog/SKILL.md) | Review and promote backlog items to active milestone |
| [gsd-secure-phase](gsd-secure-phase/SKILL.md) | Retroactively verify threat mitigations for a completed phase |
| [gsd-settings](gsd-settings/SKILL.md) | Configure GSD workflow toggles and model profile |
| [gsd-ship](gsd-ship/SKILL.md) | Create PR, run review, and prepare for merge after verification passes |
| [gsd-sketch](gsd-sketch/SKILL.md) | Sketch UI/design ideas with throwaway HTML mockups, or propose what to sketch next (frontier mode) |
| [gsd-spec-phase](gsd-spec-phase/SKILL.md) | Clarify WHAT a phase delivers with ambiguity scoring; produces a SPEC.md before discuss-phase. |
| [gsd-spike](gsd-spike/SKILL.md) | Spike an idea through experiential exploration, or propose what to spike next (frontier mode) |
| [gsd-stats](gsd-stats/SKILL.md) | Display project statistics — phases, plans, requirements, git metrics, and timeline |
| [gsd-thread](gsd-thread/SKILL.md) | Manage persistent context threads for cross-session work |
| [gsd-ui-phase](gsd-ui-phase/SKILL.md) | Generate UI design contract (UI-SPEC.md) for frontend phases |
| [gsd-ui-review](gsd-ui-review/SKILL.md) | Retroactive 6-pillar visual audit of implemented frontend code |
| [gsd-ultraplan-phase](gsd-ultraplan-phase/SKILL.md) | [BETA] Offload plan phase to Claude Code's ultraplan cloud; review in browser and import back. |
| [gsd-undo](gsd-undo/SKILL.md) | Safe git revert. |
| [gsd-update](gsd-update/SKILL.md) | Update GSD to latest version with changelog display |
| [gsd-validate-phase](gsd-validate-phase/SKILL.md) | Retroactively audit and fill Nyquist validation gaps for a completed phase |
| [gsd-verify-work](gsd-verify-work/SKILL.md) | Validate built features through conversational UAT |
| [gsd-workspace](gsd-workspace/SKILL.md) | Manage GSD workspaces — create, list, or remove isolated workspace environments |
| [gsd-workstreams](gsd-workstreams/SKILL.md) | Manage parallel workstreams — list, create, switch, status, progress, complete, and resume |

## Attribution & license

Skills retain their original `license` and `author` frontmatter. The full-stack development skills come from [Jeffallan/claude-skills](https://github.com/Jeffallan/claude-skills) (MIT) — full text in [`LICENSE-fullstack-dev-skills`](LICENSE-fullstack-dev-skills) and [`ATTRIBUTION.md`](ATTRIBUTION.md).
