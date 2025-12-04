---
title: Naming Tips & Gotchas
description: 'Common naming pitfalls and tips for TypeScript types, zod schemas, and avoiding unnecessary prefixes.'
sidebar:
  order: 3.4
lastUpdated: 2025-12-03
---

- [Constants](../variable-naming/) include enumerations in the form of string literal union types, such as `type Color = "RED" | "BLUE"`.
- Don't prefix types with `T` (e.g., `TUser`) unless there's a naming conflict.
- When working with [zod](https://zod.dev) schemas, use the same name for the inferred type as the schema. For example, if the schema is named `userSchema`, the inferred type should be `UserSchema`.
