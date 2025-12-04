---
title: Code Order in Components
description: 'Recommended order of code inside React components: state, derived values, handlers, then effects.'
sidebar:
  order: 4.2
lastUpdated: 2025-12-03
---

Maintain a consistent flow within components. Whenever possible, follow this order:

1. Internal state (`useState`, `useReducer`, `useSearchParams`, etc.)
2. Derived state
3. Handler functions
4. Side effects (`useEffect`)
