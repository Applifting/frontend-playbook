---
title: General Principles 
description: 'Core principles: clean code, DRY, separation of concerns, minimal side effects, and error handling.'
sidebar:
  order: 1.2
lastUpdated: 2025-12-03
---

## Clean and Readable Code

**Code should be self-explanatory**. If a developer (including yourself) revisits the code months later, it should be easy to understand at a glance. Prefer clear, meaningful variable and function names over complex logic.

## Reusability

Follow the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don't Repeat Yourself) principle. Create reusable components and utilities whenever possible to avoid duplication and reduce maintenance.

## Separation of Concerns

Ensure that each part of the code has a **single responsibility** and is separated based on its concern (UI vs. logic vs. data fetching). This makes the code modular, easier to test, and simpler to refactor.

> Rule of thumb: A component or hook should rarely exceed 100 lines of code in its body.

## Minimize Side Effects

Keep side effects isolated (e.g., in `useEffect`) and avoid logic in the render body. This helps maintain a pure and easy-to-follow component render flow.

Before using the `useEffect` hook, ask yourself: _Is this really a side effect?_ There's a great article, [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect), in the official React docs.

## Handle Errors with Feedback

Always handle potential errors gracefully, whether from API calls, state management, or user interaction. **Provide feedback to users** (e.g., error messages, toast notifications) and never let an error crash the app.
