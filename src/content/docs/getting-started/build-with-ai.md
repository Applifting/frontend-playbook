---
title: Build with AI
description: 'How to enhance AI coding tools with up-to-date knowledge from the Frontend Playbook.'
sidebar:
  order: 1.3
lastUpdated: 2025-12-05
isInLLMs: false
---

AI-powered editors and agentic coding tools are becoming essential parts of modern development workflows. While these tools generally have good knowledge of popular frameworks and libraries, they may not be aware of your team's specific conventions, patterns, and best practices.

This guide covers how to enhance AI tools with up-to-date knowledge from this Playbook.

## Context files

The Frontend Playbook provides two special files optimized for AI consumption:

- [`/llms.txt`](../../llms.txt) — A minimal index of all documentation pages with titles, links, and descriptions
- [`/llms-full.txt`](../../llms-full.txt) — The complete content of all documentation in a streamlined Markdown format

These files follow the [llms.txt standard](https://llmstxt.org/) — a convention for providing website content in a format that's easy for AI tools to parse and understand.

## How to use them

### Providing context to AI tools

Many AI coding assistants allow you to provide external documentation as context. You can:

1. **Point to the URL directly** — Some tools can auto-discover these files if you provide `https://applifting.github.io/frontend-playbook/` as a docs source
2. **Reference in prompts** — Include a link to these files when asking AI tools for help with code that should follow our conventions
3. **Copy the content** — Paste the content of `/llms.txt` or `/llms-full.txt` into your AI tool's context window

### Which file to use?

| File | Best for | Trade-off |
|------|----------|-----------|
| `/llms.txt` | Quick reference, when AI needs to know what topics are covered | Minimal token usage, but lacks detailed content |
| `/llms-full.txt` | Deep context, when AI needs to understand our specific patterns | Complete information, but uses more tokens |

## Example use cases

- **Code reviews** — Ask AI to review code against our playbook conventions
- **Generating new code** — Provide context so generated code follows our patterns
- **Refactoring** — Help AI understand our preferred approaches when suggesting improvements
- **Onboarding** — Use AI to explain our conventions to new team members

## Keep in mind

While these context files provide a convenient way to share our conventions with AI tools, remember that:

- The files need to be updated regularly to stay current with playbook changes (they're generated automatically on each build)
- Large context files will use more tokens, which may affect response quality or cost
- AI suggestions should still be reviewed against the actual playbook when in doubt
