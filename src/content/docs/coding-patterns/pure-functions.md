---
title: Pure Functions
description: 'Writing pure functions for better testability and performance. Define them outside components when possible.'
sidebar:
  order: 6.2
lastUpdated: 2025-12-03
---

**Pure functions are:**

- Functions that always return the same output for the same input
- Free of side effects (they don't read or mutate external state)

Writing pure functions improves **readability, testability, and predictability**. In React, pure functions can often be defined **outside of the component**, which avoids re-creating them on every render — leading to better performance and cleaner code.

## Bad example

```tsx
const ProductList = ({ products, filterText }: Props) => {
  const filterProducts = () => {
    return products.filter((p) => p.name.includes(filterText));
  };

  const filtered = filterProducts();

  return (
    <ul>
      {filtered.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
};
```

Why it's bad:

- `filterProducts` is defined on every render.
- It's not pure - it depends on external variables.
- It's harder to test, reuse, or reason about.

## Good example

```tsx
const filterProducts = (products: Product[], filterText: string) => {
  return products.filter((p) => p.name.includes(filterText));
};

const ProductList = ({ products, filterText }: Props) => {
  const filtered = filterProducts(products, filterText);

  return (
    <ul>
      {filtered.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
};
```

Why it's better:

- `filterProducts` is a pure function: it only depends on its inputs.
- It lives outside the component and doesn't get recreated on re-renders.
- It's easier to unit test and reuse elsewhere in the app.

> **Rule of thumb**  
> If a function doesn't rely on side effects, make it pure and define it outside the component
