# Attribution

## fullstack-dev-skills (66 skills)

The complete set of 66 skills from
[**Jeffallan/claude-skills**](https://github.com/Jeffallan/claude-skills)
(the `fullstack-dev-skills` pack), licensed under the **MIT License**
(© Jeffallan). The full upstream license text is in
[`LICENSE-fullstack-dev-skills`](LICENSE-fullstack-dev-skills), and each skill's
`SKILL.md` retains its original `license: MIT` and `author` frontmatter.

**API & architecture:** api-designer, architecture-designer, microservices-architect, mcp-developer, graphql-architect, websocket-engineer
**Backend:** fastapi-expert, django-expert, nestjs-expert, rails-expert, laravel-specialist, spring-boot-engineer, dotnet-core-expert
**Data & ML:** pandas-pro, spark-engineer, ml-pipeline, fine-tuning-expert, rag-architect, prompt-engineer
**Frontend:** react-expert, nextjs-developer, typescript-pro, javascript-pro, vue-expert, vue-expert-js, angular-architect
**Infrastructure:** cloud-architect, database-optimizer, kubernetes-specialist, postgres-pro, terraform-engineer
**Languages:** python-pro, sql-pro, golang-pro, rust-engineer, cpp-pro, csharp-developer, java-architect, php-pro
**DevOps & SRE:** devops-engineer, monitoring-expert, sre-engineer, chaos-engineer, cli-developer
**Quality:** code-reviewer, code-documenter, debugging-wizard, test-master, playwright-expert
**Security:** secure-code-guardian, security-reviewer, fullstack-guardian
**Platform:** atlassian-mcp, salesforce-developer, shopify-expert, wordpress-pro
**Mobile:** react-native-expert, flutter-expert, swift-expert, kotlin-specialist
**Game & embedded:** game-developer, embedded-systems
**Specialized & workflow:** legacy-modernizer, spec-miner, feature-forge, the-fool

## Data, cloud & infrastructure (18 skills)

Curated from official vendor skill repos (discovered via the
[VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)
index). Each skill retains its upstream `SKILL.md` and frontmatter; full upstream
license texts are in [`licenses/`](licenses/).

| Source repo | License | License file | Skills |
| --- | --- | --- | --- |
| [microsoft/skills](https://github.com/microsoft/skills) | MIT | `licenses/microsoft-skills-MIT.txt` | azure-storage-blob-py, azure-storage-file-datalake-py, azure-monitor-query-py, azure-mgmt-fabric-py, azure-search-documents-py, azure-identity-py, azure-keyvault-py, fastapi-router-py, pydantic-models-py, azure-ai-projects-py, azure-ai-ml-py |
| [ClickHouse/agent-skills](https://github.com/ClickHouse/agent-skills) | Apache-2.0 | `licenses/clickhouse-agent-skills-APACHE-2.0.txt` (+ `-NOTICE.txt`) | clickhouse-best-practices, clickhouse-architecture-advisor, chdb-sql, chdb-datastore |
| [neondatabase/agent-skills](https://github.com/neondatabase/agent-skills) | Apache-2.0 | `licenses/neon-agent-skills-APACHE-2.0.txt` | neon-postgres |
| [hashicorp/agent-skills](https://github.com/hashicorp/agent-skills) | MPL-2.0 | `licenses/hashicorp-agent-skills-MPL-2.0.txt` | terraform-style-guide, azure-verified-modules |

> Tinybird skills (tinybirdco/tinybird-agent-skills) were intentionally **not** included:
> that repo has no license, so redistribution terms are unclear. Install locally if needed via
> `npx skills add https://github.com/tinybirdco/tinybird-agent-skills --skill <name>`.

## Video & motion (6 skills)

The following 6 skills come from the `.claude/skills/` folder of
[**heygen-com/hyperframes**](https://github.com/heygen-com/hyperframes)
(© HeyGen), licensed under the **Apache License 2.0**. Full license text:
[`licenses/hyperframes-APACHE-2.0.txt`](licenses/hyperframes-APACHE-2.0.txt).

They are the motion-doctrine layer of HyperFrames (an HTML→MP4 renderer built for
agents) and are *not* part of its Claude Code plugin bundle, which ships a separate
set of 19 workflow skills. Load `motion-doctrine` first — it is the gateway that
routes to the others.

**Skills:** motion-doctrine (motion law / seam gate), cut-the-curve (velocity-matched seam catalog), seam-craft (render-correctness at scene seams), oversized-cursor (pointer-led motion), captions-overlay (caption overlay model), changelog-video (changelog → branded video workflow)

> **`changelog-video` is missing its bundled assets — deliberately.** Upstream it ships
> ~18 MB of brand binaries: two commercial retail typefaces (**TT Norms Pro** by TypeType,
> **ABC Solar Display** by ABC Dinamo), plus HeyGen brand music and a background video.
> The Apache-2.0 grant covers, per upstream `CREDITS.md`, "all code in this repository" —
> fonts, music and video are not code, and no separate asset licence is published. Commercial
> webfont licences are per-licensee and normally forbid redistribution, so those four files
> were left out rather than mirrored publicly. All prose, the build spec, visualization
> registry, caption script and HTML skeleton are present. See
> [`changelog-video/ASSETS-OMITTED.md`](changelog-video/ASSETS-OMITTED.md) for how to fetch
> them from upstream, where the licence to use them actually comes from.

## Engineering pack (89 skills) — ⚠️ MIT + Commons Clause, NOT open source

The following 89 skills come from the `engineering/` folder of
[**borghei/Claude-Skills**](https://github.com/borghei/Claude-Skills)
(© 2025–2026 Amin Borghei). Full license text:
[`licenses/borghei-claude-skills-MIT-CommonsClause.txt`](licenses/borghei-claude-skills-MIT-CommonsClause.txt).
Each skill's `SKILL.md` retains its upstream `license:` and `author:` frontmatter.

> **Licensing differs from the rest of this repo.** Everything else here is permissive
> (MIT / Apache-2.0 / MPL-2.0). These 89 are **MIT + Commons Clause**, which is *not* an
> OSI-approved open-source license. Redistribution is permitted — the MIT grant explicitly
> covers publish and distribute — but the **Commons Clause forbids selling**: you may not
> provide, for a fee, a product or service whose value derives entirely or substantially from
> this software, *including hosting or consulting/support fees related to it*. Using the skills
> in your own work is unaffected. Any copy or attribution must carry the Commons Clause notice.

**Agents & AI systems:** agent-designer, agent-harness, agent-protocol, agent-workflow-designer, agenthub, agentic-evaluation-framework, self-improving-agent, context-engine, extended-thinking-architect, computer-use-automation
**AI/LLM engineering:** ai-security, batch-api-orchestrator, llm-cost-optimizer, mcp-server-builder, prompt-engineer-toolkit, prompt-governance, senior-prompt-engineer
**Cloud & infrastructure:** aws-solution-architect, azure-cloud-architect, gcp-cloud-architect, senior-cloud-architect, cloud-security, kubernetes-operator, helm-chart-builder, terraform-patterns, docker-development, ms365-tenant-manager, google-workspace-cli
**Architecture & design:** senior-architect, migration-architect, interview-system-designer, tech-stack-evaluator, spec-driven-workflow, feature-flags-architect, saas-scaffolder
**Data & databases:** senior-data-engineer, senior-data-scientist, database-designer, database-schema-designer, sql-database-assistant, snowflake-development, data-quality-auditor
**Senior role skills:** senior-backend, senior-frontend, senior-fullstack, senior-mobile, senior-qa, senior-devops, senior-secops, senior-security, senior-ml-engineer, senior-computer-vision
**DevOps & release:** ci-cd-pipeline-builder, devops-workflow-engineer, release-manager, release-orchestrator, changelog-generator, git-worktree-manager, monorepo-navigator, env-secrets-manager, secrets-vault-manager
**Reliability & ops:** incident-commander, observability-designer, chaos-engineering, runbook-generator, performance-profiler, threat-detection, red-team
**Quality & testing:** tdd-guide, api-test-suite-builder, playwright-pro, qa-browser-automation, browser-automation, pr-review-expert, api-design-reviewer, dependency-auditor, tech-debt-tracker, focused-fix
**Docs & onboarding:** codebase-onboarding, code-tour, doc-drift-detector, design-auditor, a11y-audit
**Tooling & meta:** claude-code-mastery, codex-cli-specialist, skill-security-auditor, skill-tester, write-a-skill, stripe-integration-expert

> **Not included:** upstream `code-reviewer` and `rag-architect` were skipped — this repo already
> carries those names from the MIT `fullstack-dev-skills` pack above, and they were left in place
> rather than replaced with Commons Clause versions.
>
> A pre-install security audit of all 91 upstream skills (static code, prompt-injection and
> supply-chain scans) returned **PASS** — no obfuscation, no hidden characters, no credential
> access, no unexpected network egress.
