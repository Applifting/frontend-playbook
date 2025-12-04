---
title: Tailwind CSS
description: 'Tailwind CSS best practices: cn utility, theming with CSS variables, and managing color palettes.'
sidebar:
  order: 8.2
lastUpdated: 2025-12-03
---

We consider [Tailwind CSS](https://tailwindcss.com/) the easiest and most developer-friendly way to define and enforce a robust design system. A transformation pipeline between Figma design tokens and CSS variables (and, by extension, utility classes) is our preferred approach.

## Classnames

When working with **light/dark mode**, define colors as CSS variables in a CSS file, override the variable for dark mode, and reference the variable in the Tailwind config. See [Shadcn/ui Theming article](https://ui.shadcn.com/docs/theming#list-of-variables).

Use the **cn** utility function, which combines [clsx](https://www.npmjs.com/package/clsx) and [tailwind-merge](https://www.npmjs.com/package/tailwind-merge), for optimal experience.

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Split breakpoints and states into separate strings to enhance readability when there are many classNames.

```tsx
export const Component = () => (
  <div
    className={cn(
      "px-4",
      "lg:ml-sidebar lg:px-9",
      "2xl:px-[4.5rem]",
      "hover:bg-red-500",
    )}
  >
    Hello World
  </div>
);
```

## Color palette

Whenever a project has its color palette defined, it should override the default Tailwind CSS color palette. This avoids mixing project-defined colors with the default Tailwind CSS palette, such as `text-blue-500`.

See [Tailwind CSS - Disabling Default Colors](https://tailwindcss.com/docs/colors#disabling-default-colors).
