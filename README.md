# claude-skills

A curated collection of **283 [Claude Agent Skills](https://agentskills.io)**. Each skill is a folder with a `SKILL.md` plus any supporting `references/`, `scripts/`, or `assets/`.

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

283 skills, grouped by area. Click a name for its `SKILL.md`. Regenerate this list with `python scripts/gen_readme.py`.

### Analysis, BI & general (122)

| Skill | Description |
| --- | --- |
| [a11y-audit](a11y-audit/SKILL.md) | This skill should be used when the user asks to "check accessibility", "audit WCAG compliance", "scan HTML for a11y issues", "check color contrast", or "find accessibility violations in web pages". |
| [ab-test-analysis](ab-test-analysis/SKILL.md) | Rigorous A/B test statistical analysis. |
| [agent-designer](agent-designer/SKILL.md) | Designs multi-agent system architectures with orchestration patterns, tool schemas, and performance evaluation. |
| [agent-harness](agent-harness/SKILL.md) | Test and evaluation harness for AI agents — scenario suites, deterministic replay, regression diffing, cost and latency budgets. |
| [agent-protocol](agent-protocol/SKILL.md) | Design AI agent communication protocols: MCP tool schemas, A2A, function calling, and inter- agent messaging. |
| [agent-workflow-designer](agent-workflow-designer/SKILL.md) | Design multi-agent orchestration with workflow DAGs, routing, handoff protocols, and state management. |
| [agenthub](agenthub/SKILL.md) | Multi-agent DAG orchestration for workflows where AI agents collaborate via dependency graphs, covering agent spawning, output merging, and quality evaluation. |
| [agentic-evaluation-framework](agentic-evaluation-framework/SKILL.md) | This skill should be used when the user asks to "evaluate LLM output quality", "set up LLM-as-judge", "build an eval rubric", "compare model outputs pairwise", or "measure agent quality". |
| [ai-security](ai-security/SKILL.md) | This skill should be used when the user asks to "scan AI systems for security threats", "check for prompt injection vulnerabilities", "assess model security posture", "detect data poisoning risks", or "audit AI/ML pip... |
| [analysis-assumptions-log](analysis-assumptions-log/SKILL.md) | Track and document analytical assumptions and decisions. |
| [analysis-documentation](analysis-documentation/SKILL.md) | Structured, reproducible analysis documentation. |
| [analysis-planning](analysis-planning/SKILL.md) | Structure analysis approach before starting work. |
| [analysis-qa-checklist](analysis-qa-checklist/SKILL.md) | Pre-delivery quality assurance for analysis work. |
| [analysis-retrospective](analysis-retrospective/SKILL.md) | Post-analysis learning and process improvement. |
| [api-design-reviewer](api-design-reviewer/SKILL.md) | Review REST API designs for quality, consistency, and breaking changes. |
| [api-test-suite-builder](api-test-suite-builder/SKILL.md) | Generate API test suites from route definitions across frameworks: auth, input validation, contract, k6 load testing, mocking, and OpenAPI-driven generation. |
| [aws-solution-architect](aws-solution-architect/SKILL.md) | Design AWS serverless architectures for startups with IaC. |
| [batch-api-orchestrator](batch-api-orchestrator/SKILL.md) | This skill should be used when the user asks to "batch LLM requests", "should I use the batch API", "estimate batch vs realtime cost", "design a bulk LLM job", or "process thousands of prompts cheaply". |
| [browser-automation](browser-automation/SKILL.md) | This skill should be used when the user asks to "build web automation scripts", "check browser automation for detection", "generate web scraping code", "create form filling automation", or "build anti-detection browse... |
| [business-metrics-calculator](business-metrics-calculator/SKILL.md) | Standard business metric calculation with industry benchmarks. |
| [changelog-generator](changelog-generator/SKILL.md) | Generate changelogs and release notes from Conventional Commits with semver bump detection, Keep a Changelog formatting, and monorepo scopes. |
| [chaos-engineering](chaos-engineering/SKILL.md) | Chaos engineering: hypothesis-driven fault injection to surface weakness before users do. |
| [ci-cd-pipeline-builder](ci-cd-pipeline-builder/SKILL.md) | Design and generate CI/CD pipelines from project stack signals across GitHub Actions, GitLab CI, CircleCI, and Buildkite. |
| [claude-code-mastery](claude-code-mastery/SKILL.md) |  |
| [cloud-security](cloud-security/SKILL.md) | Cloud posture security across AWS, Azure, and GCP — IAM least privilege, public exposure, encryption, logging coverage, landing-zone guardrails. |
| [code-tour](code-tour/SKILL.md) | Build ordered, annotated tours of an unfamiliar codebase and keep the anchors from rotting. |
| [codebase-onboarding](codebase-onboarding/SKILL.md) | Analyze a codebase and generate onboarding docs: architecture overviews, file maps, setup guides, runbooks, and debugging guides. |
| [codex-cli-specialist](codex-cli-specialist/SKILL.md) | OpenAI Codex CLI and cross-platform skill authoring. |
| [cohort-analysis](cohort-analysis/SKILL.md) | Time-based cohort analysis with retention and behaviour tracking. |
| [computer-use-automation](computer-use-automation/SKILL.md) | This skill should be used when the user asks to "build a computer-use agent", "automate a GUI with an AI agent", "when to use computer use vs an API", "make browser automation reliable", or "design screenshot-driven a... |
| [context-engine](context-engine/SKILL.md) | Context management engine for AI coding agents. |
| [context-packager](context-packager/SKILL.md) | Efficiently package context for AI-assisted analysis. |
| [dashboard-specification](dashboard-specification/SKILL.md) | Design specifications for effective dashboards. |
| [data-catalog-entry](data-catalog-entry/SKILL.md) | Create standardized metadata for data assets. |
| [data-narrative-builder](data-narrative-builder/SKILL.md) | Build compelling data-driven narratives. |
| [data-quality-audit](data-quality-audit/SKILL.md) | Comprehensive data quality assessment against business rules, schema constraints, and freshness expectations. |
| [data-quality-auditor](data-quality-auditor/SKILL.md) | Audit data quality across pipelines, warehouses, and stores. |
| [database-designer](database-designer/SKILL.md) | Database design with schema analysis, index optimization, and migration generation for PostgreSQL, MySQL, MongoDB, and DynamoDB. |
| [database-schema-designer](database-schema-designer/SKILL.md) | Design relational schemas from requirements with normalization, migrations, ERDs, RLS policies, and indexes for PostgreSQL, MySQL, and SQLite. |
| [dependency-auditor](dependency-auditor/SKILL.md) | Scan project dependencies for vulnerabilities, license issues, and upgrade opportunities across Python, Node.js, Go, and Rust. |
| [design-auditor](design-auditor/SKILL.md) | Audit UI/UX designs for quality, AI-generated slop, and accessibility. |
| [devops-workflow-engineer](devops-workflow-engineer/SKILL.md) | Generate and optimize GitHub Actions CI/CD workflows. |
| [doc-drift-detector](doc-drift-detector/SKILL.md) | Detect documentation drift against code changes, score staleness, validate API docs via AST parsing, and audit link integrity. |
| [docker-development](docker-development/SKILL.md) | This skill should be used when the user asks to "analyze a Dockerfile", "optimize Docker layers", "validate docker-compose", "check container best practices", or "audit Docker configurations". |
| [env-secrets-manager](env-secrets-manager/SKILL.md) | Environment and secrets management lifecycle: .env scaffolding, validation, leak detection, and rotation across Vault, AWS SSM, 1Password, and Doppler. |
| [executive-summary-generator](executive-summary-generator/SKILL.md) | Create concise executive summaries from detailed analysis. |
| [extended-thinking-architect](extended-thinking-architect/SKILL.md) | This skill should be used when the user asks to "decide reasoning effort", "set a thinking budget", "when to use extended thinking", "tune reasoning vs cost", or "should this task use a reasoning model". |
| [feature-flags-architect](feature-flags-architect/SKILL.md) | Feature flag strategy, lifecycle, and operations. |
| [focused-fix](focused-fix/SKILL.md) | This skill should be used when the user asks to "fix a bug with minimal changes", "analyze change scope for a bugfix", "find the minimal set of files to change", "do a focused bugfix", or "scope a minimal repair". |
| [funnel-analysis](funnel-analysis/SKILL.md) | Conversion funnel analysis with drop-off investigation. |
| [gcp-cloud-architect](gcp-cloud-architect/SKILL.md) | Design, review, and validate Google Cloud (GCP) architectures. |
| [git-worktree-manager](git-worktree-manager/SKILL.md) | Manage parallel development with Git worktrees: creation with port allocation, environment sync, branch isolation, and cleanup. |
| [google-workspace-cli](google-workspace-cli/SKILL.md) | This skill should be used when the user asks to "audit Google Workspace", "check GWS security settings", "set up Google Workspace authentication", "diagnose Workspace issues", or "review Google admin configurations". |
| [helm-chart-builder](helm-chart-builder/SKILL.md) | This skill should be used when the user asks to "analyze Helm charts", "validate Helm values", "review chart structure", "check Kubernetes Helm templates", or "audit chart dependencies and configuration". |
| [image-gen](image-gen/SKILL.md) | Generate images from a text prompt via Hugging Face. |
| [impact-quantification](impact-quantification/SKILL.md) | Estimate and communicate business impact of insights. |
| [incident-commander](incident-commander/SKILL.md) | Production incident response. |
| [insight-synthesis](insight-synthesis/SKILL.md) | Transform data findings into compelling insights. |
| [interview-system-designer](interview-system-designer/SKILL.md) | Design calibrated interview loops, competency-based question banks, and hiring calibration. |
| [kubernetes-operator](kubernetes-operator/SKILL.md) | Design, build, and operate Kubernetes operators. |
| [llm-cost-optimizer](llm-cost-optimizer/SKILL.md) | This skill should be used when the user asks to "estimate LLM costs", "count tokens in prompts", "optimize prompt token usage", "compare model pricing", or "reduce LLM API costs". |
| [mcp-server-builder](mcp-server-builder/SKILL.md) | Build MCP (Model Context Protocol) servers with tool definitions, resource providers, prompt templates, and transports. |
| [methodology-explainer](methodology-explainer/SKILL.md) | Explain analysis methodology to diverse audiences. |
| [metric-reconciliation](metric-reconciliation/SKILL.md) | Cross-source metric validation and discrepancy investigation. |
| [migration-architect](migration-architect/SKILL.md) | Plans zero-downtime migrations with compatibility validation, rollback strategies, and phased execution plans. |
| [monorepo-navigator](monorepo-navigator/SKILL.md) | Manage and optimize monorepos with Turborepo, Nx, pnpm workspaces, and Changesets. |
| [ms365-tenant-manager](ms365-tenant-manager/SKILL.md) | Microsoft 365 tenant administration for Global Administrators. |
| [observability-designer](observability-designer/SKILL.md) | Design observability strategies: SLI/SLO frameworks, alerting, and dashboards. |
| [peer-review-template](peer-review-template/SKILL.md) | Structured peer review for analytical work. |
| [performance-profiler](performance-profiler/SKILL.md) | Performance profiling for Node.js, Python, and Go: CPU flamegraphs, memory leak detection, bundle analysis, query optimization, and k6 load testing. |
| [planning-with-files](planning-with-files/SKILL.md) | Implements Manus-style file-based planning to organize and track progress on complex tasks. |
| [playwright-pro](playwright-pro/SKILL.md) | End-to-end testing with Playwright: test generation, page objects, locator strategy, flaky- test diagnosis, visual regression, and CI integration. |
| [pr-review-expert](pr-review-expert/SKILL.md) | Systematic PR review with blast-radius analysis, security scanning, and breaking-change and test-coverage deltas. |
| [programmatic-eda](programmatic-eda/SKILL.md) | Systematic exploratory data analysis. |
| [prompt-engineer-toolkit](prompt-engineer-toolkit/SKILL.md) | Prompt engineering frameworks for building, testing, versioning, and evaluating prompts: chain-of-thought, few-shot, regression testing, and rubrics. |
| [prompt-governance](prompt-governance/SKILL.md) | This skill should be used when the user asks to "audit prompts for safety", "check prompts for injection vulnerabilities", "manage a prompt catalog", "version control prompts", or "review prompt quality and compliance". |
| [qa-browser-automation](qa-browser-automation/SKILL.md) | Browser-based QA combining Chrome MCP control with Python analysis tools. |
| [query-validation](query-validation/SKILL.md) | SQL query review for correctness, performance, and best practices. |
| [red-team](red-team/SKILL.md) | This skill should be used when the user asks to "plan a red team engagement", "scope a penetration test", "design a security assessment methodology", "create rules of engagement", or "plan an adversary simulation". |
| [release-manager](release-manager/SKILL.md) | Automates release management with changelog generation, semantic versioning, and release readiness checks. |
| [release-orchestrator](release-orchestrator/SKILL.md) | Orchestrate end-to-end release pipelines. |
| [root-cause-investigation](root-cause-investigation/SKILL.md) | Systematic investigation of metric changes and anomalies. |
| [runbook-generator](runbook-generator/SKILL.md) | Generate operational runbooks from codebase analysis covering deployment, incident response, scaling, and monitoring, with copy-paste commands and rollback steps. |
| [saas-scaffolder](saas-scaffolder/SKILL.md) | Generate SaaS boilerplate with auth, database schemas, Stripe billing, multi-tenancy, API routes, and dashboard UI on a Next.js/TypeScript/Tailwind stack. |
| [schema-mapper](schema-mapper/SKILL.md) | Database schema understanding and relationship mapping. |
| [secrets-vault-manager](secrets-vault-manager/SKILL.md) | This skill should be used when the user asks to "generate Vault configurations", "plan secret rotation", "analyze vault audit logs", "manage secrets lifecycle", or "set up HashiCorp Vault". |
| [segmentation-analysis](segmentation-analysis/SKILL.md) | Customer/user segmentation with actionable insights. |
| [self-improving-agent](self-improving-agent/SKILL.md) | Patterns for AI agents that learn from their own execution, detect failure modes, and improve autonomously. |
| [semantic-model-builder](semantic-model-builder/SKILL.md) | Build structured semantic layer documentation for metrics, dimensions, and entities. |
| [senior-architect](senior-architect/SKILL.md) | System architecture design and review. |
| [senior-backend](senior-backend/SKILL.md) | Backend development with Node.js/Express/Fastify and PostgreSQL. |
| [senior-cloud-architect](senior-cloud-architect/SKILL.md) |  |
| [senior-computer-vision](senior-computer-vision/SKILL.md) | Computer vision engineering for object detection, segmentation, and visual AI, covering CNN and Vision Transformer architectures and ONNX/TensorRT deployment. |
| [senior-data-engineer](senior-data-engineer/SKILL.md) | Data engineering for batch and streaming pipelines with Airflow, dbt, Spark, and Kafka. |
| [senior-data-scientist](senior-data-scientist/SKILL.md) |  |
| [senior-devops](senior-devops/SKILL.md) | DevOps for CI/CD, containers, Kubernetes, and Terraform. |
| [senior-frontend](senior-frontend/SKILL.md) | Frontend development for React, Next.js, TypeScript, and Tailwind CSS. |
| [senior-fullstack](senior-fullstack/SKILL.md) | Fullstack development toolkit with project scaffolding for Next.js/FastAPI/MERN/Django stacks and code quality analysis. |
| [senior-ml-engineer](senior-ml-engineer/SKILL.md) | ML engineering skill for productionizing models, building MLOps pipelines, and integrating LLMs. |
| [senior-mobile](senior-mobile/SKILL.md) |  |
| [senior-prompt-engineer](senior-prompt-engineer/SKILL.md) | Prompt engineering and LLM evaluation. |
| [senior-qa](senior-qa/SKILL.md) | Testing for React/Next.js with Jest, React Testing Library, and Playwright. |
| [senior-secops](senior-secops/SKILL.md) | SecOps for application security, vulnerability management, compliance, and secure development. |
| [senior-security](senior-security/SKILL.md) | STRIDE threat modeling, DREAD risk scoring, secret detection, and secure architecture design. |
| [skill-security-auditor](skill-security-auditor/SKILL.md) | Security audit and vulnerability scanning for AI agent skills before install. |
| [skill-tester](skill-tester/SKILL.md) | Validate and score Claude Code skill packages for quality, completeness, and best-practice compliance. |
| [snowflake-development](snowflake-development/SKILL.md) | This skill should be used when the user asks to "optimize Snowflake queries", "analyze Snowflake SQL performance", "size Snowflake warehouses", "review Snowflake data models", or "troubleshoot Snowflake cost issues". |
| [spec-driven-workflow](spec-driven-workflow/SKILL.md) | Run development from an executable specification with traceable requirement IDs and merge-time coverage gates. |
| [sql-database-assistant](sql-database-assistant/SKILL.md) | This skill should be used when the user asks to "optimize SQL queries", "explore database schemas", "generate migration SQL", "analyze query performance", or "document database structure". |
| [sql-to-business-logic](sql-to-business-logic/SKILL.md) | Translate SQL queries into plain language business logic. |
| [stakeholder-requirements-gathering](stakeholder-requirements-gathering/SKILL.md) | Structured requirements elicitation for analysis requests. |
| [stripe-integration-expert](stripe-integration-expert/SKILL.md) | Implement Stripe integrations for SaaS billing: subscriptions, checkout, proration, usage- based billing, idempotent webhooks, customer portal, dunning, and SCA. |
| [sv3d](sv3d/SKILL.md) | Stable Video 3D (SV3D) — turn a SINGLE image of an object into an orbital novel-view VIDEO (image→video/3D). |
| [tdd-guide](tdd-guide/SKILL.md) | Guide red-green-refactor TDD with test generation, coverage-gap analysis, and multi- framework support. |
| [tech-debt-tracker](tech-debt-tracker/SKILL.md) | Scan codebases for technical debt with AST parsing, prioritize by impact, and generate trend dashboards. |
| [tech-stack-evaluator](tech-stack-evaluator/SKILL.md) | Evaluate and compare technology stacks with TCO analysis, security assessment, and ecosystem health scoring. |
| [technical-to-business-translator](technical-to-business-translator/SKILL.md) | Translate technical analysis into business language. |
| [threat-detection](threat-detection/SKILL.md) | This skill should be used when the user asks to "analyze logs for threats", "detect suspicious activity", "scan for brute force attempts", "identify injection attacks", or "audit access patterns for anomalies". |
| [time-series-analysis](time-series-analysis/SKILL.md) | Temporal pattern detection and forecasting. |
| [visualization-builder](visualization-builder/SKILL.md) | Create effective, publication-ready data visualizations. |
| [web-artifacts-builder](web-artifacts-builder/SKILL.md) | Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). |
| [write-a-skill](write-a-skill/SKILL.md) | Author, lint, and publish skill packages that satisfy the library authoring standard. |

### Power BI (3)

| Skill | Description |
| --- | --- |
| [pbi-report-builder](pbi-report-builder/SKILL.md) | [power-bi] Power BI PBIR Report Builder with IBCS Visuals. |
| [pbi-requirements-gathering](pbi-requirements-gathering/SKILL.md) | [power-bi] Power BI Requirements Gathering — a structured, conversation-driven skill that captures everything needed before building a Power BI solution. |
| [pbip-dependency-analyzer](pbip-dependency-analyzer/SKILL.md) | Power BI PBIP Dependency Analyzer. |

### Data, cloud & infrastructure (20)

> Curated from official vendor skill repos (Microsoft, ClickHouse, Neon, HashiCorp). See [ATTRIBUTION.md](ATTRIBUTION.md).

| Skill | Description |
| --- | --- |
| [azure-ai-ml-py](azure-ai-ml-py/SKILL.md) | Azure Machine Learning SDK v2 for Python. |
| [azure-ai-projects-py](azure-ai-projects-py/SKILL.md) | Build AI applications using the Azure AI Projects Python SDK (azure-ai-projects). |
| [azure-cloud-architect](azure-cloud-architect/SKILL.md) | Design, review, and validate Azure cloud architectures. |
| [azure-identity-py](azure-identity-py/SKILL.md) | Azure Identity SDK for Python authentication with Microsoft Entra ID. |
| [azure-keyvault-py](azure-keyvault-py/SKILL.md) | Azure Key Vault SDK for Python. |
| [azure-mgmt-fabric-py](azure-mgmt-fabric-py/SKILL.md) | Azure Fabric Management SDK for Python. |
| [azure-monitor-query-py](azure-monitor-query-py/SKILL.md) | Azure Monitor Query SDK for Python. |
| [azure-search-documents-py](azure-search-documents-py/SKILL.md) | Azure AI Search SDK for Python. |
| [azure-storage-blob-py](azure-storage-blob-py/SKILL.md) | Azure Blob Storage SDK for Python. |
| [azure-storage-file-datalake-py](azure-storage-file-datalake-py/SKILL.md) | Azure Data Lake Storage Gen2 SDK for Python. |
| [azure-verified-modules](azure-verified-modules/SKILL.md) | Azure Verified Modules (AVM) requirements and best practices for developing certified Azure Terraform modules. |
| [chdb-datastore](chdb-datastore/SKILL.md) | Use when the user has tabular data (pandas DataFrame, parquet, csv, Arrow, json) and wants to filter, group, aggregate, join, or speed up slow pandas. |
| [chdb-sql](chdb-sql/SKILL.md) | Use when the user wants to run SQL — especially analytical SQL — on local files (parquet/csv/json), URLs, S3 paths, or remote databases (Postgres, MySQL, MongoDB, ClickHouse Cloud, Iceberg, Delta Lake) without setting... |
| [clickhouse-architecture-advisor](clickhouse-architecture-advisor/SKILL.md) | MUST USE when designing ClickHouse architectures, selecting between ingestion or modeling patterns, or translating best practices into workload-specific system designs. |
| [clickhouse-best-practices](clickhouse-best-practices/SKILL.md) | MUST USE when reviewing ClickHouse schemas, queries, or configurations. |
| [fastapi-router-py](fastapi-router-py/SKILL.md) | Create FastAPI routers with CRUD operations, authentication dependencies, and proper response models. |
| [neon-postgres](neon-postgres/SKILL.md) | Guides and best practices for working with Neon Serverless Postgres. |
| [pydantic-models-py](pydantic-models-py/SKILL.md) | Create Pydantic models following the multi-model pattern with Base, Create, Update, Response, and InDB variants. |
| [terraform-patterns](terraform-patterns/SKILL.md) | This skill should be used when the user asks to "analyze Terraform modules", "scan IaC for security issues", "review Terraform configurations", "check infrastructure code for misconfigurations", or "audit cloud resour... |
| [terraform-style-guide](terraform-style-guide/SKILL.md) | Generate Terraform HCL code following HashiCorp's official style conventions and best practices. |

### Full-stack development (66)

> Added from [Jeffallan/claude-skills](https://github.com/Jeffallan/claude-skills) (MIT). See [ATTRIBUTION.md](ATTRIBUTION.md).

| Skill | Description |
| --- | --- |
| [angular-architect](angular-architect/SKILL.md) | Generates Angular 17+ standalone components, configures advanced routing with lazy loading and guards, implements NgRx state management, applies RxJS patterns, and optimizes bundle performance. |
| [api-designer](api-designer/SKILL.md) | Use when designing REST or GraphQL APIs, creating OpenAPI specifications, or planning API architecture. |
| [architecture-designer](architecture-designer/SKILL.md) | Use when designing new high-level system architecture, reviewing existing designs, or making architectural decisions. |
| [atlassian-mcp](atlassian-mcp/SKILL.md) | Integrates with Atlassian products to manage project tracking and documentation via MCP protocol. |
| [chaos-engineer](chaos-engineer/SKILL.md) | Designs chaos experiments, creates failure injection frameworks, and facilitates game day exercises for distributed systems — producing runbooks, experiment manifests, rollback procedures, and post-mortem templates. |
| [cli-developer](cli-developer/SKILL.md) | Use when building CLI tools, implementing argument parsing, or adding interactive prompts. |
| [cloud-architect](cloud-architect/SKILL.md) | Designs cloud architectures, creates migration plans, generates cost optimization recommendations, and produces disaster recovery strategies across AWS, Azure, and GCP. |
| [code-documenter](code-documenter/SKILL.md) | Generates, formats, and validates technical documentation — including docstrings, OpenAPI/Swagger specs, JSDoc annotations, doc portals, and user guides. |
| [code-reviewer](code-reviewer/SKILL.md) | Analyzes code diffs and files to identify bugs, security vulnerabilities (SQL injection, XSS, insecure deserialization), code smells, N+1 queries, naming issues, and architectural concerns, then produces a structured... |
| [cpp-pro](cpp-pro/SKILL.md) | Writes, optimizes, and debugs C++ applications using modern C++20/23 features, template metaprogramming, and high-performance systems techniques. |
| [csharp-developer](csharp-developer/SKILL.md) | Use when building C# applications with .NET 8+, ASP.NET Core APIs, or Blazor web apps. |
| [database-optimizer](database-optimizer/SKILL.md) | Optimizes database queries and improves performance across PostgreSQL and MySQL systems. |
| [debugging-wizard](debugging-wizard/SKILL.md) | Parses error messages, traces execution flow through stack traces, correlates log entries to identify failure points, and applies systematic hypothesis-driven methodology to isolate and resolve bugs. |
| [devops-engineer](devops-engineer/SKILL.md) | Creates Dockerfiles, configures CI/CD pipelines, writes Kubernetes manifests, and generates Terraform/Pulumi infrastructure templates. |
| [django-expert](django-expert/SKILL.md) | Use when building Django web applications or REST APIs with Django REST Framework. |
| [dotnet-core-expert](dotnet-core-expert/SKILL.md) | Use when building .NET 8 applications with minimal APIs, clean architecture, or cloud-native microservices. |
| [embedded-systems](embedded-systems/SKILL.md) | Use when developing firmware for microcontrollers, implementing RTOS applications, or optimizing power consumption. |
| [fastapi-expert](fastapi-expert/SKILL.md) | Use when building high-performance async Python APIs with FastAPI and Pydantic V2. |
| [feature-forge](feature-forge/SKILL.md) | Conducts structured requirements workshops to produce feature specifications, user stories, EARS-format functional requirements, acceptance criteria, and implementation checklists. |
| [fine-tuning-expert](fine-tuning-expert/SKILL.md) | Use when fine-tuning LLMs, training custom models, or adapting foundation models for specific tasks. |
| [flutter-expert](flutter-expert/SKILL.md) | Use when building cross-platform applications with Flutter 3+ and Dart. |
| [fullstack-guardian](fullstack-guardian/SKILL.md) | Builds security-focused full-stack web applications by implementing integrated frontend and backend components with layered security at every level. |
| [game-developer](game-developer/SKILL.md) | Use when building game systems, implementing Unity/Unreal Engine features, or optimizing game performance. |
| [golang-pro](golang-pro/SKILL.md) | Implements concurrent Go patterns using goroutines and channels, designs and builds microservices with gRPC or REST, optimizes Go application performance with pprof, and enforces idiomatic Go with generics, interfaces... |
| [graphql-architect](graphql-architect/SKILL.md) | Use when designing GraphQL schemas, implementing Apollo Federation, or building real-time subscriptions. |
| [java-architect](java-architect/SKILL.md) | Use when building, configuring, or debugging enterprise Java applications with Spring Boot 3.x, microservices, or reactive programming. |
| [javascript-pro](javascript-pro/SKILL.md) | Writes, debugs, and refactors JavaScript code using modern ES2023+ features, async/await patterns, ESM module systems, and Node.js APIs. |
| [kotlin-specialist](kotlin-specialist/SKILL.md) | Provides idiomatic Kotlin implementation patterns including coroutine concurrency, Flow stream handling, multiplatform architecture, Compose UI construction, Ktor server setup, and type-safe DSL design. |
| [kubernetes-specialist](kubernetes-specialist/SKILL.md) | Use when deploying or managing Kubernetes workloads. |
| [laravel-specialist](laravel-specialist/SKILL.md) | Build and configure Laravel 10+ applications, including creating Eloquent models and relationships, implementing Sanctum authentication, configuring Horizon queues, designing RESTful APIs with API resources, and build... |
| [legacy-modernizer](legacy-modernizer/SKILL.md) | Designs incremental migration strategies, identifies service boundaries, produces dependency maps and migration roadmaps, and generates API facade designs for aging codebases. |
| [mcp-developer](mcp-developer/SKILL.md) | Use when building, debugging, or extending MCP servers or clients that connect AI systems with external tools and data sources. |
| [microservices-architect](microservices-architect/SKILL.md) | Designs distributed system architectures, decomposes monoliths into bounded-context services, recommends communication patterns, and produces service boundary diagrams and resilience strategies. |
| [ml-pipeline](ml-pipeline/SKILL.md) | Designs and implements production-grade ML pipeline infrastructure: configures experiment tracking with MLflow or Weights & Biases, creates Kubeflow or Airflow DAGs for training orchestration, builds feature store sch... |
| [monitoring-expert](monitoring-expert/SKILL.md) | Configures monitoring systems, implements structured logging pipelines, creates Prometheus/Grafana dashboards, defines alerting rules, and instruments distributed tracing. |
| [nestjs-expert](nestjs-expert/SKILL.md) | Creates and configures NestJS modules, controllers, services, DTOs, guards, and interceptors for enterprise-grade TypeScript backend applications. |
| [nextjs-developer](nextjs-developer/SKILL.md) | Use when building Next.js 14+ applications with App Router, server components, or server actions. |
| [pandas-pro](pandas-pro/SKILL.md) | Performs pandas DataFrame operations for data analysis, manipulation, and transformation. |
| [php-pro](php-pro/SKILL.md) | Use when building PHP applications with modern PHP 8.3+ features, Laravel, or Symfony frameworks. |
| [playwright-expert](playwright-expert/SKILL.md) | Use when writing E2E tests with Playwright, setting up test infrastructure, or debugging flaky browser tests. |
| [postgres-pro](postgres-pro/SKILL.md) | Use when optimizing PostgreSQL queries, configuring replication, or implementing advanced database features. |
| [prompt-engineer](prompt-engineer/SKILL.md) | Writes, refactors, and evaluates prompts for LLMs — generating optimized prompt templates, structured output schemas, evaluation rubrics, and test suites. |
| [python-pro](python-pro/SKILL.md) | Use when building Python 3.11+ applications requiring type safety, async programming, or robust error handling. |
| [rag-architect](rag-architect/SKILL.md) | Designs and implements production-grade RAG systems by chunking documents, generating embeddings, configuring vector stores, building hybrid search pipelines, applying reranking, and evaluating retrieval quality. |
| [rails-expert](rails-expert/SKILL.md) | Rails 7+ specialist that optimizes Active Record queries with includes/eager_load, implements Turbo Frames and Turbo Streams for partial page updates, configures Action Cable for WebSocket connections, sets up Sidekiq... |
| [react-expert](react-expert/SKILL.md) | Use when building React 18+ applications in .jsx or .tsx files, Next.js App Router projects, or create-react-app setups. |
| [react-native-expert](react-native-expert/SKILL.md) | Builds, optimizes, and debugs cross-platform mobile applications with React Native and Expo. |
| [rust-engineer](rust-engineer/SKILL.md) | Writes, reviews, and debugs idiomatic Rust code with memory safety and zero-cost abstractions. |
| [salesforce-developer](salesforce-developer/SKILL.md) | Writes and debugs Apex code, builds Lightning Web Components, optimizes SOQL queries, implements triggers, batch jobs, platform events, and integrations on the Salesforce platform. |
| [secure-code-guardian](secure-code-guardian/SKILL.md) | Use when implementing authentication/authorization, securing user input, or preventing OWASP Top 10 vulnerabilities — including custom security implementations such as hashing passwords with bcrypt/argon2, sanitizing... |
| [security-reviewer](security-reviewer/SKILL.md) | Identifies security vulnerabilities, generates structured audit reports with severity ratings, and provides actionable remediation guidance. |
| [shopify-expert](shopify-expert/SKILL.md) | Builds and debugs Shopify themes (.liquid files, theme.json, sections), develops custom Shopify apps (shopify.app.toml, OAuth, webhooks), and implements Storefront API integrations for headless storefronts. |
| [spark-engineer](spark-engineer/SKILL.md) | Use when writing Spark jobs, debugging performance issues, or configuring cluster settings for Apache Spark applications, distributed data processing pipelines, or big data workloads. |
| [spec-miner](spec-miner/SKILL.md) | Reverse-engineering specialist that extracts specifications from existing codebases. |
| [spring-boot-engineer](spring-boot-engineer/SKILL.md) | Generates Spring Boot 3.x configurations, creates REST controllers, implements Spring Security 6 authentication flows, sets up Spring Data JPA repositories, and configures reactive WebFlux endpoints. |
| [sql-pro](sql-pro/SKILL.md) | Optimizes SQL queries, designs database schemas, and troubleshoots performance issues. |
| [sre-engineer](sre-engineer/SKILL.md) | Defines service level objectives, creates error budget policies, designs incident response procedures, develops capacity models, and produces monitoring configurations and automation scripts for production systems. |
| [swift-expert](swift-expert/SKILL.md) | Builds iOS/macOS/watchOS/tvOS applications, implements SwiftUI views and state management, designs protocol-oriented architectures, handles async/await concurrency, implements actors for thread safety, and debugs Swif... |
| [terraform-engineer](terraform-engineer/SKILL.md) | Use when implementing infrastructure as code with Terraform across AWS, Azure, or GCP. |
| [test-master](test-master/SKILL.md) | Generates test files, creates mocking strategies, analyzes code coverage, designs test architectures, and produces test plans and defect reports across functional, performance, and security testing disciplines. |
| [the-fool](the-fool/SKILL.md) | Use when challenging ideas, plans, decisions, or proposals using structured critical reasoning. |
| [typescript-pro](typescript-pro/SKILL.md) | Implements advanced TypeScript type systems, creates custom type guards, utility types, and branded types, and configures tRPC for end-to-end type safety. |
| [vue-expert](vue-expert/SKILL.md) | Builds Vue 3 components with Composition API patterns, configures Nuxt 3 SSR/SSG projects, sets up Pinia stores, scaffolds Quasar/Capacitor mobile apps, implements PWA features, and optimises Vite builds. |
| [vue-expert-js](vue-expert-js/SKILL.md) | Creates Vue 3 components, builds vanilla JS composables, configures Vite projects, and sets up routing and state management using JavaScript only — no TypeScript. |
| [websocket-engineer](websocket-engineer/SKILL.md) | Use when building real-time communication systems with WebSockets or Socket.IO. |
| [wordpress-pro](wordpress-pro/SKILL.md) | Develops custom WordPress themes and plugins, creates and registers Gutenberg blocks and block patterns, configures WooCommerce stores, implements WordPress REST API endpoints, applies security hardening (nonces, sani... |

### Video & motion (6)

| Skill | Description |
| --- | --- |
| [captions-overlay](captions-overlay/SKILL.md) | Overlay doctrine for the embedded-captions workflow — the caption MODEL (drop / rail / embed) and the rule that captions are an OVERLAY composited on top of the film, never a reserved bottom band you shift content up... |
| [changelog-video](changelog-video/SKILL.md) | Turn a weekly changelog .md into a finished branded changelog video (square 1080, ~45-60s, Annie VO, animated brand background, mock-UI visualizations, lowkey captions). |
| [cut-the-curve](cut-the-curve/SKILL.md) | The technique catalog: five velocity-matched SEAMS (zoom-through, INVERSE zoom-through, cut-the-curve, waterfall cut, rack-focus blur-cut) plus the two in-scene techniques — waterfall ENTRY (staggered arrival cascades... |
| [motion-doctrine](motion-doctrine/SKILL.md) | GATEWAY — load FIRST before composing any HyperFrames animation or video. |
| [oversized-cursor](oversized-cursor/SKILL.md) | House-style oversized macOS cursor technique for HyperFrames launch videos. |
| [seam-craft](seam-craft/SKILL.md) | Render-correctness doctrine for scene-to-scene seams in HyperFrames launch videos — the prerequisites that make transitions composite correctly on the master timeline. |

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
