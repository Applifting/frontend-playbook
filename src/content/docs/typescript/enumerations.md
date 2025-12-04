---
title: Enumerations
description: 'Avoiding native TypeScript enums in favor of string literal unions or const objects.'
sidebar:
  order: 5.4
lastUpdated: 2025-12-03
---

Avoid using native Enums (GraphQL-generated enums are an exception). For more information, read [Matt Pocock's article](https://www.totaltypescript.com/why-i-dont-like-typescript-enums).

## Examples

```ts
// Option 1 - Union of string literals
type Role = "ADMIN" | "USER" | "GUEST";

const userRole: Role = "ADMIN"; // Valid
// const invalidRole: Role = 'SUPERADMIN';
// Error: Type '"SUPERADMIN"' is not assignable to type 'Role'.
```

```ts
// Option 2 - Object with `as const`
const Roles = {
  Admin: "ADMIN",
  User: "USER",
  Guest: "GUEST",
} as const;

type Role = (typeof Roles)[keyof typeof Roles];

const currentUserRole: Role = Roles.Admin; // Valid
// const invalidRole: Role = 'SUPERADMIN';
// Error: Type '"SUPERADMIN"' is not assignable to type 'Role'.
```
