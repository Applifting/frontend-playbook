---
title: Writing Components
description: 'Guidelines for writing React components: props definition, destructuring, arrow functions, and avoiding FC types.'
sidebar:
  order: 4.1
lastUpdated: 2025-12-03
---

- Define **props** above the component definition.
- Use **type** for **props** definition, not interface (more details in the [TypeScript](../../typescript/type-vs-interface/) section).
- Destructure **props**.
- Avoid using **explicit types** (_FC_ or _React.FC_) for component definitions. For more details, [read this article](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/).
- Use arrow functions for component definitions. See the [Coding Patterns](../../coding-patterns/function-best-practices/) section.
  - unless you need hoisting (e.g. Tanstack router `Route.component` definition). In that case we need to use function declaration.

## Example Component

```tsx
type Props = {
  foo: string;
};

export const Component = ({ foo }: Props) => {
  return <div>Component {foo}</div>;
};
```
