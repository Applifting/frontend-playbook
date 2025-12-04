---
title: Assets & Icons
description: 'Best practices for optimizing images, SVGs, and using icon libraries in React projects.'
sidebar:
  order: 8.3
lastUpdated: 2025-12-03
---

## Images

Always try to optimize images beforehand. A very good FOSS tool for that is [squoosh](https://squoosh.app), which can handle most common formats and can **resize** and **compress**. `.webp` is the preferred format, as it is the most optimal in terms of browser support & file size.

## SVGs

SVGs should be optimized as well. You can use [SVGOMG](https://svgomg.net/) for that. Don't forget to change the `fill` or `stroke` color (depending on the asset) to `currentColor`, as the color can then easily be inherited from its parent's text color. This approach supports theming, simplifies maintenance, and improves reusability.

When using custom icons in the codebase, [svgr](https://react-svgr.com/) is the recommended tool as it easily transforms SVGs into React components. It's supported in both [Next.js](https://react-svgr.com/docs/next/) and [Vite via plugin](https://www.npmjs.com/package/vite-plugin-svgr).

## Icon libraries

There are many excellent free open-source icon libraries for React. For example, [Lucide Icons](https://lucide.dev/icons/) has over 1,500 icons.

**Naming**:
These libraries often name their components without explicitly indicating that they're icons. We should always rename the imports to make it clear that they're icons.

```tsx
// This is quite a common naming convention for icon components, but it doesn't clearly indicate it's an icon
import { Sun1 } from "cool-icon-library";

// A better approach is to rename the icon immediately
import { Sun1 as SunIcon } from "cool-icon-library";
```
