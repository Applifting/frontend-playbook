---
title: Merge Requests
description: 'Merge request conventions: naming, squashing commits, review process, and conventional comments format.'
sidebar:
  order: 13.2
lastUpdated: 2025-12-03
---

- **Naming**: Merge request names should follow the pattern `<category/JIRA-TICKET: Short description>`. Categories are the same as for branches. Example: `chore/CORP-52: Update renovate settings`.
- **Squash Commits**: Commits should be squashed before merging. In GitLab, check the **Squash commits** box in the _"Ready to merge!"_ section. In GitHub, change the "Merge" option in the dropdown menu to _"Squash and merge"_.
- **Review Process**: Every merge request (except bug fixes) should have **at least one approval** before it can be merged.
- **Feedback and Implementation**:
  - Developers should not automatically rework everything based on feedback.
  - Provide a rationale for your implementation choices and engage in constructive discussion.
  - If you agree with feedback, acknowledge it and indicate your intention to make the necessary updates.
  - Whenever you work on proposed changes, resolve the thread. This is the responsibility of the author of the merge request, not the reviewer.

## Standardized Comment Format

- Comments should follow [conventional comments](https://conventionalcomments.org).
- Comment should have prefix: `<label>: ...`. Labels include `issue`, `suggestion`, `nitpick`, `question`, `thought`, and `praise`.
- Decorations give additional context for a comment, e.g. `suggestion(non-blocking): <description>` (it might not be clear if suggestion is blocking).
