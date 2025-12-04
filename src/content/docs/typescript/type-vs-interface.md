---
title: Type vs Interface
description: "Why we default to 'type' over 'interface' in TypeScript: unions, mapped types, and declaration merging."
sidebar:
  order: 5.1
lastUpdated: 2025-12-03
---

> Always aim for the highest type safety. Never use the `any` type.

> We should always default to `type` unless there's a valid use case for choosing `interface`.

There's a really good article [Type vs Interface: Which Should You Use?](https://www.totaltypescript.com/type-vs-interface-which-should-you-use) by Matt Pocock that goes in-depth on this topic.

**In summary**:

- **Interfaces can't express** unions, mapped types, or conditional types, and all of these are very useful in day-to-day frontend work.
- **Interfaces** with the same name in the same scope **merge their declarations**, leading to unexpected bugs.
- **Type** aliases have an implicit index signature of `Record<PropertyKey, unknown>`, which occasionally comes up.

- Basically, the **only pro of using interface** over type is inheritance. `extends` makes **TypeScript's type checker run slightly faster** than using `&`.
