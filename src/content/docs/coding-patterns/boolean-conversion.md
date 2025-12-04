---
title: Boolean Conversion
description: 'How to properly convert values to booleans using !! or Boolean(), with type narrowing considerations.'
sidebar:
  order: 6.3
lastUpdated: 2025-12-03
---

Prefer to be explicit with boolean conversions. Use either the double bang notation (`!!`) or the `Boolean()` method. Implicit conversions, for example in `if` statements, are alright.

```ts
type User = {
    id: string
}

const user: User | null | undefined = {
    id: "01979ad0-8041-713d-b2e1-47219d90d881"
};

// ❌ WRONG - logically incorrect comparison (types differ)
if (user == true) { ... }
if (user === true) { ... }

// ❌ WRONG - creates the `Boolean` object -> objects are always truthy!
if (new Boolean(user)) { ... }

// ❌ WRONG - `isAuthenticated` is not a boolean
const isAuthenticated = user
// the following would be a typescript error
const isAuthenticated: boolean = user

// ✅ ALRIGHT - implicit conversion to a `boolean`
if (user) { ... }

// ✅ GOOD - explicit conversion
if (!!user) { ... }

// ✅ GOOD - explicit conversion
if (Boolean(user)) { ... }

// ✅ GOOD - explicit conversion
const isAuthenticated: boolean = Boolean(user)
const isAuthenticated: boolean = !!user
```

## Type narrowing caveat

When using `Boolean()` method, keep in mind that type narrowing does not work as well:

```ts
type User = {
  id: string;
};

const narrowTypeBang = (user: User | null) => {
  const isUserDefined = !!user;

  if (isUserDefined) {
    return user.id; // `user` is of type `User` here, correctly narrowed type
  }
};

const narrowTypeBoolean = (user: User | null) => {
  const isUserDefined = Boolean(user);

  if (isUserDefined) {
    return user.id; // `user` is of type `User | null` here, not narrowed down, type error
  }
};
```
