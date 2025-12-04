---
title: Git Workflow
description: 'Git workflow standards: branch naming, commit messages following conventional commits, and JIRA integration.'
sidebar:
  order: 12.1
lastUpdated: 2025-12-03
---

- Each JIRA story / subtask should have only one merge request.
- Branch naming should follow this pattern: `<category/JIRA-TICKET-description-in-kebab-case>`. Categories include `feature`, `bugfix`, `hotfix`, `chore`, and `test`. Example: `chore/CORP-58-lts-node-version`.
- Commit messages should follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/): `<type>: <description>`. Types include `feat`, `fix`, `refactor`, `test`, and `chore`. Example: `chore: add new ESLint rule`.
