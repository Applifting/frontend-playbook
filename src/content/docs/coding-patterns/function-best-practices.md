---
title: Function Best Practices
description: 'Function guidelines: arrow functions, async/await, single responsibility, and avoiding boolean flags.'
sidebar:
  order: 6.1
lastUpdated: 2025-12-03
---

| Use ✅              | Don't use ❌                      |
| ------------------- | --------------------------------- |
| **arrow functions** | function expression / declaration |
| **async/await**     | promise chaining                  |
| **named exports**   | default exports                   |

## Do one thing

- A function should focus on a **single responsibility**.
- Easier to test, reuse, and refactor when isolated.
- If it's doing multiple steps (validate + save + notify), break it down.

## Avoid duplication

- Duplicated logic means duplicated bugs.
- If you see the same code in 3+ places, extract a helper.

## Arguments (keep it small)

- **1–2 arguments is ideal.**
- **3 is a warning sign** → consider splitting into smaller functions.
- If many arguments are truly needed, use an **options object** and destructure for clarity:

```ts
function createMenu({ title, body, buttonText, isCancellable }) { ... }
```

## No boolean flags

- Boolean params usually mean the function does more than one thing.
- Calls like `createFile("foo.txt", true)` are unclear.
- Prefer:

  - **Two explicit functions** (`createFile`, `createTempFile`), or
  - A **descriptive options object** (`{ isTemporary: true }`).
