---
title: Variable Naming
description: 'Variable naming conventions: PascalCase for types, camelCase for variables, and boolean prefixes.'
sidebar:
  order: 3.2
lastUpdated: 2025-12-03
---

| Category                    | Naming Style                                        | Example                                 |
| --------------------------- | --------------------------------------------------- | --------------------------------------- |
| Constants (primitives)      | SCREAMING_SNAKE_CASE                                | `MY_CONSTANT`                           |
| Types                       | PascalCase                                          | `MyType`                                |
| Components                  | PascalCase                                          | `MyComponent`                           |
| Everything else             | camelCase                                           | `myVariable`                            |
| Keys in `json` files (i18n) | PascalCase (for objects) and camelCase (for values) | `Dashboard.Header.Navigation.userLabel` |

## Boolean variables

All **boolean** variables should be named with a "_booleanish_" prefix, like `is`, `has`, `can`, `will`, `should`, `did`, etc.

- **Correct:** `isLoading` ✅
- **Incorrect:** `loading` ❌
