---
name: handoff
description: Compact the current conversation into a handoff document for another agent to pick up. With the argument "bg" (or "--bg"), also hand the conversation off to a fresh background agent that picks up the work immediately (formerly claude-handoff).
argument-hint: "[bg] What will the next session be used for?"
disable-model-invocation: true
---

Write a handoff document summarising the current conversation so a fresh agent can continue the work. Save to the handover folder defined under "Filplacering" in the user's global CLAUDE.md - not the current workspace.

Include a "suggested skills" section in the document, naming which skills the next agent should call the Skill tool for.

Do not duplicate content already captured in other artifacts (specs, plans, ADRs, issues, commits, diffs). Reference them by path or URL instead.

Redact any sensitive information, such as API keys, passwords, or personally identifiable information.

If the user passed arguments, treat them as a description of what the next session will focus on and tailor the doc accordingly.

## Start a background agent (argument `bg` or `--bg`; merged from claude-handoff 2026-10-12)

When the arguments start with `bg` or `--bg`, strip that word, write the handoff document as above, then launch a background agent seeded with it as its prompt: `claude --bg --name "<descriptive name>" -- "$(cat <summary file>)"`. Passing the file keeps the shell from running backticks or expanding `$` in the summary. It starts in the current working directory and returns immediately; the user manages it with `claude agents`.

Always pass `-n`/`--name` with a descriptive name (e.g. `--name "Fix login bug"`); it sets the display name shown in the job list, session picker, and terminal title.

The summary becomes the agent's prompt, so the redaction rule above matters doubly here.
