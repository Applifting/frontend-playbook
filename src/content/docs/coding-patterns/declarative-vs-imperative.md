---
title: Declarative vs Imperative
description: 'Why declarative code is preferred over imperative: clearer intent with filter, map, and other array methods.'
sidebar:
  order: 6.4
lastUpdated: 2025-12-03
---

We should always prefer writing declarative code when possible instead of imperative code. The declarative approach focuses on expressing the developer's intent clearly rather than manually writing instructions on how the program should achieve that intent.

## Examples

### Imperative code (Incorrect ❌)

```ts
interface Item {
  isActive: boolean;
  value: string;
}

function handleItemsImperatively(items: Item[]) {
  const results = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].active) {
      results.push(items[i].value);
    }
  }
  return results;
}
```

### Declarative code (Correct ✅)

```ts
type Item = {
  isActive: boolean;
  value: string;
};

const handleItemsDeclaratively = (items: Item[]) => {
  return items.filter((item) => item.active).map((item) => item.value);
};
```
