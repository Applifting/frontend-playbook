---
title: Feature-based Architecture Overview
description: 'Introduction to feature-based project structure based on Bulletproof React.'
sidebar:
  order: 2.1
lastUpdated: 2025-12-03
---

React doesn't impose a strict structure for files. After experimenting with various approaches, we've found a **feature-based architecture** to offer the best experience. This pattern is well-documented in the [Bulletproof React](https://github.com/alan2207/bulletproof-react) repository, and we should follow its structure. Instead of copying its contents here, please refer to their documentation, especially the [Project Structure](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) section.

> **Note:** This is sometimes confused with [Feature-Sliced Design (FSD)](https://feature-sliced.design/), which is a different, more opinionated methodology with strict layers (`app → pages → widgets → features → entities → shared`) and one-way import rules. Bulletproof React follows a simpler feature-based approach without enforcing a strict layer hierarchy.
