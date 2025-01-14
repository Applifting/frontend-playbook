# Applifting Frontend Development Style Guide

**Table of contents**

- [Introduction](#introduction)
- [General Principles](#general-principles)
  - [Clean and Readable Code](#clean-and-readable-code)
  - [Reusability](#reusability)
  - [Separation of Concerns](#separation-of-concerns)
  - [Minimize Side Effects](#minimize-side-effects)
  - [Handle Errors with Feedback](#handle-errors-with-feedback)
- [Project Structure](#project-structure)
  - [Next.js](#nextjs)
- [Naming Conventions](#naming-conventions)
  - [File naming](#file-naming)
  - [Variable naming](#variable-naming)
    - [Boolean variables](#boolean-variables)
  - [Good to Know](#good-to-know)
- [Components](#components)
  - [Example Component](#example-component)
  - [Code Order in Components](#code-order-in-components)
- [TypeScript](#typescript)
  - [Type vs Interface](#type-vs-interface)
  - [Utility Types](#utility-types)
  - [Immutability](#immutability)
    - [Examples](#examples)
  - [Enumerations](#enumerations)
    - [Examples](#examples)
- [Coding](#coding)
  - [Declarative vs Imperative](#declarative-vs-imperative)
    - [Examples](#examples)
- [Static Code Analysis](#static-code-analysis)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
- [Documentation](#documentation)
  - [Inside Code](#inside-code)
- [Contribution](#contribution)
  - [Merge Requests](#merge-requests)
- [Environment Variables](#environment-variables)
  - [Vite Example](#vite-example)
    - [Environment Variables Schema Definition](#environment-variables-schema-definition)
    - [Usage in Codebase](#usage-in-codebase)
- [Preferred Libraries](#preferred-libraries)
  - [UI Components](#ui-components)
    - [Typography](#typography)
  - [Styling](#styling)
    - [Tailwind CSS](#tailwind-css)
  - [Assets](#assets)
    - [Images](#images)
    - [SVGs](#svgs)
  - [Forms](#forms)
  - [Server State Management](#server-state-management)
    - [Tanstack Query](#tanstack-query)
  - [Translations](#translations)
    - [Adding Translation Documents](#adding-translation-documents)
    - [Using Translation in React Components](#using-translation-in-react-components)

## Introduction

This document provides clear instructions on how to write and structure React code to ensure a consistent developer experience across all projects. It aims to enhance maintainability, readability, and onboarding speed across all frontend codebases.

Think of this document as a handbook that you should refer to whenever you're unsure about how to name something, where to place it, or which library to choose. All developers should read it, and it's encouraged to revisit it from time to time.

> When a new project is started, it should comply with the current version of the style guide at that time.

This document follows [Semantic Versioning](https://semver.org/) and all changes are recorded in a [Changelog](CHANGELOG.md) based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## General Principles

### Clean and Readable Code

**Code should be self-explanatory**. If a developer (including yourself) revisits the code months later, it should be easy to understand at a glance. Prefer clear, meaningful variable and function names over complex logic.

### Reusability

Follow the **DRY** (Don't Repeat Yourself) principle. Create reusable components and utilities whenever possible to avoid duplication and reduce maintenance.

### Separation of Concerns

Ensure that each part of the code has a **single responsibility** and is separated based on its concern (UI vs. logic vs. data fetching). This makes the code modular, easier to test, and simpler to refactor.

> Rule of thumb: A component or hook should rarely exceed 100 lines of code.

### Minimize Side Effects

Keep side effects isolated (e.g., in `useEffect`) and avoid logic in the render body. This helps maintain a pure and easy-to-follow component render flow.

Before using the `useEffect` hook, ask yourself: _Is this really a side effect?_ There's a great article, [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect), in the official React docs.

### Handle Errors with Feedback

Always handle potential errors gracefully, whether from API calls, state management, or user interaction. **Provide feedback to users** (e.g., error messages, toast notifications) and never let an error crash the app.

## Project Structure

React doesn’t impose a strict structure for files. After experimenting with various approaches, we’ve found **Feature-sliced Design** to offer the best experience. This pattern is well-documented in the [Bulletproof React](https://github.com/alan2207/bulletproof-react) repository, and we should follow its structure. Instead of copying its contents here, please refer to their documentation, especially the [Project Structure](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) section.

### Next.js

All of the above applies, with the following additions:

- Files in the `pages/` directory should simply re-export `NextPage` components from the feature directory. For example, `@/features/dashboard/pages/DashboardPage.tsx`.
- Business logic for SSR/SSG (`getServerSideProps` & `getStaticProps`) must be kept in the standard Next.js `pages/` directory, as it won’t work elsewhere.

## Naming Conventions

### File naming

| Category                                    | Naming Style | Example           |
| ------------------------------------------- | ------------ | ----------------- |
| Components                                  | PascalCase   | `MyComponent.tsx` |
| Hooks                                       | camelCase    | `useMyHook.ts`    |
| Folders                                     | camelCase    | `myFolder/`       |
| Contextual Collection of Components Folders | PascalCase   | `Sidebar/`        |
| Everything else                             | camelCase    | `myFile.ts`       |

### Variable naming

| Category                    | Naming Style                                        | Example                                 |
| --------------------------- | --------------------------------------------------- | --------------------------------------- |
| Constants (primitives)      | SCREAMING_SNAKE_CASE                                | `MY_CONSTANT`                           |
| Types                       | PascalCase                                          | `MyType`                                |
| Components                  | PascalCase                                          | `MyComponent`                           |
| Everything else             | camelCase                                           | `myVariable`                            |
| Keys in `json` files (i18n) | PascalCase (for objects) and camelCase (for values) | `Dashboard.Header.Navigation.userLabel` |

#### Boolean variables

All **boolean** variables should be named with a "_booleanish_" prefix, like `is`, `has`, `can`, `will`, `should`, `did`, etc.

- **Correct:** `isLoading` ✅
- **Incorrect:** `loading` ❌

### Good to Know

- **Constants** include enumerations in the form of string literal union types, such as `type Color = "RED" | "BLUE"`.
- Don’t prefix types with `T` (e.g., `TUser`) unless there’s a naming conflict.
- When working with [zod](https://zod.dev) schemas, use the same name for the inferred type as the schema. For example, if the schema is named `userSchema`, the inferred type should be `UserSchema`.

## Components

- Define **props** above the component definition.
- Use **type** for **props** definition, not interface (more details in the [TypeScript](#typescript) section).
- Destructure **props**.
- Avoid using **explicit types** (_FC_ or _React.FC_) for component definitions. For more details, [read this article](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/).
- Use arrow functions for component definitions. See the [Coding](#coding) section.

### Example Component

```tsx
type Props = {
  foo: string;
};

export const Component = ({ foo }: Props) => {
  return <div>Component {foo}</div>;
};
```

### Code Order in Components

Maintain a consistent flow within components. Whenever possible, follow this order:

1. Internal state (`useState`, `useReducer`, `useSearchParams`, etc.)
2. Derived state
3. Handler functions
4. Side effects (`useEffect`)

## TypeScript

> Always aim for the highest type safety. Never use the `any` type.

### Type vs Interface

> We should always default to `type` unless there's a valid use case for choosing `interface`.

There's a really good article [Type vs Interface: Which Should You Use?](https://www.totaltypescript.com/type-vs-interface-which-should-you-use) by Matt Pocock that goes in-depth on this topic.

**In summary**:

- **Interfaces can't express** unions, mapped types, or conditional types, and all of these are very useful in day-to-day frontend work.
- **Interfaces** with the same name in the same scope **merge their declarations**, leading to unexpected bugs.
- **Type** aliases have an implicit index signature of `Record<PropertyKey,

unknown>`, which occasionally comes up.

- Basically, the **only pro of using interface** over type is inheritance. `extends` makes **TypeScript's type checker run slightly faster** than using `&`.

### Utility Types

Leverage TypeScript's [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) instead of defining new types from scratch. These are particularly useful for frontend developers:

- [`Pick<Type, Keys>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)
- [`Omit<Type, Keys>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)
- [`Exclude<UnionType, ExcludedMembers>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers)
- [`Extract<Type, Union>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union)
- [`ReturnType<Type>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)

### Immutability

For all immutable values (e.g., arrays with possible options, map objects, etc.), use `as const` if the value is **implicitly typed**. If the value is **explicitly typed**, `as const` has no effect, so use the `readonly` prefix for arrays or the `Readonly<T>` generic for objects.

#### Examples

##### Implicitly Typed

```ts
// Implicitly typed array
const options = ["option1", "option2", "option3"] as const;

// Implicitly typed object
const categoriesMapping = {
  category1: "Category 1",
  category2: "Category 2",
} as const;
```

##### Explicitly Typed

```ts
// Explicitly typed array with `readonly`
type Option = "option1" | "option2" | "option3";

const readonlyOptions: readonly Option[] = ["option1", "option2", "option3"];

// Explicitly typed object with `Readonly<T>`
type CategoryMapping = {
  category1: string;
  category2: string;
};

const readonlyCategoriesMapping: Readonly<CategoryMapping> = {
  category1: "Category 1",
  category2: "Category 2",
};
```

### Enumerations

Avoid using native Enums (GraphQL-generated enums are an exception). For more information, read [Matt Pocock's article](https://www.totaltypescript.com/why-i-dont-like-typescript-enums).

#### Examples

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

## Coding

| Use ✅              | Don't use ❌                      |
| ------------------- | --------------------------------- |
| **arrow functions** | function expression / declaration |
| **async/await**     | promise chaining                  |
| **named exports**   | default exports                   |

### Declarative vs Imperative

We should always prefer writing declarative code when possible instead of imperative code. The declarative approach focuses on expressing the developer's intent clearly rather than manually writing instructions on how the program should achieve that intent.

#### Examples

##### Imperative code (Incorrect ❌)

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

##### Declarative code (Correct ✅)

```ts
type Item = {
  isActive: boolean;
  value: string;
};

const handleItemsDeclaratively = (items: Item[]) => {
  return items.filter((item) => item.active).map((item) => item.value);
};
```

## Static Code Analysis

### ESLint

- See [Corplifting ESLint config](https://git.applifting.cz/corplifting1/corplifting-frontend/-/blob/main/.eslintrc.cjs).

### Prettier

- See [Corplifting Prettier config](https://git.applifting.cz/corplifting1/corplifting-frontend/-/blob/main/prettier.config.js).

## Documentation

### Inside Code

Use comments in the following format:

- **FIXME**
- **TODO**
- **NOTE**

```ts
// TODO: To be implemented in STORY-001
// FIXME: This causes excessive re-renders, investigation needed
// NOTE: This is necessary to prevent the event from bubbling up to the parent form.
```

## Contribution

- Each JIRA story should have only one merge request.
- Branch naming should follow this pattern: `<category/JIRA-TICKET-description-in-kebab-case>`. Categories include `feature`, `bugfix`, `hotfix`, `chore`, and `test`. Example: `chore/CORP-58-lts-node-version`.
- Commit messages should follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/): `<type>: <description>`. Types include `feat`, `fix`, `refactor`, `test`, and `chore`. Example: `chore: add new ESLint rule`.

### Merge Requests

- **Naming**: Merge request names should follow the pattern `<category/JIRA-TICKET: Short description>`. Categories are the same as for branches. Example: `chore/CORP-52: Update renovate settings`.
- **Squash Commits**: Commits should be squashed before merging. In GitLab, check the **Squash commits** box in the _"Ready to merge!"_ section. In GitHub, change the "Merge" option in the dropdown menu to _"Squash and merge"_.
- **Review Process**: Every merge request (except bug fixes) should have **at least one approval** before it can be merged.
- **Feedback and Implementation**:
  - Developers should not automatically rework everything based on feedback.
  - Provide a rationale for your implementation choices and engage in constructive discussion.
  - If you agree with feedback, acknowledge it and indicate your intention to make the necessary updates.
  - Whenever you work on proposed changes, resolve the thread. This is the responsibility of the author of the merge request, not the reviewer.

**Standardized Comment Format**:

- 💅 Use this emoji for non-blocking comments. _This can be improved, but it’s not a blocker_.
- ⛔️ Use this emoji for blocking comments. _This must be reworked and cannot be merged as is_.

## Environment Variables

> `.env` must always be gitignored; `env.example` should not.

A good utility library for Next.js is [t3-env](https://github.com/t3-oss/t3-env), which helps distinguish between **client** and **server** environment variables.

### Vite Example

#### Environment Variables Schema Definition

```ts
// src/config/env.ts
import { z } from "zod";

// Define the schema for Vite environment variables
const viteEnvSchema = z.object({
  VITE_API_URL: z.string().url(), // Ensures a valid URL string
  VITE_API_TIMEOUT: z.coerce.number().min(1000).default(5000), // Coerce to number, min 1000, default to 5000
  VITE_ENABLE_FEATURE_X: z.coerce.boolean().default(false), // Coerce to boolean, default to false
  VITE_ALLOWED_DOMAINS: z
    .string()
    .transform((val) => val.split(",")) // Convert comma-separated string to array
    .optional(), // Optional environment variable
  VITE_LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"), // Enum for log levels
});

// Parse and validate the environment variables
const parsedEnv = viteEnvSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:", parsedEnv.error.format());
  throw new Error("Invalid Vite environment variables");
}

// Export the validated environment variables
export const env = parsedEnv.data;
```

#### Usage in Codebase

```ts
import { env } from "@/config/env";

console.log("API URL:", env.VITE_API_URL);
```

## Preferred Libraries

### UI Components

The recommended approach for creating reusable UI components is [Shadcn/ui](https://ui.shadcn.com/). Most components are based on [Radix UI Primitives](https://www.radix-ui.com/primitives), with default styling using [Tailwind CSS](https://tailwindcss.com/) and [Class Variance Authority](https://cva.style/docs).

#### Typography

Shadcn/ui does not have a dedicated typography component. A recommended approach is described in [this GitHub issue](<https://github.com/shadcn-ui>

/ui/pull/363#issuecomment-1659259897), which has been tested on two projects with good results.

### Styling

#### Tailwind CSS

##### Classnames

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

##### Color palette

Whenever a project has its color palette defined, it should override the default Tailwind CSS color palette (don't use `extend` in `theme`). This avoids mixing project-defined colors with the default Tailwind CSS palette, such as `text-blue-500`.

See [Tailwind CSS - Customizing Colors](https://tailwindcss.com/docs/customizing-colors).

### Assets

#### Images

Always try to optimize images beforehand. A very good FOSS tool for that is [squoosh](https://squoosh.app), which can handle most common formats and can **resize** and **compress**. `.webp` is the preferred format, as it is the most optimal in terms of browser support & file size.

#### SVGs

SVGs should be optimized as well. You can use [SVGOMG](https://svgomg.net/) for that. Don't forget to change the `fill` or `stroke` color (depending on the asset) to `currentColor`, as the color can then easily be inherited from its parent's text color. This approach supports theming, simplifies maintenance, and improves reusability.

When using custom icons in the codebase, [svgr](https://react-svgr.com/) is the recommended tool as it easily transforms SVGs into React components. It's supported in both [Next.js](https://react-svgr.com/docs/next/) and [Vite via plugin](https://www.npmjs.com/package/vite-plugin-svgr).

##### Icon libraries

There are many excellent free open-source icon libraries for React. For example, [Lucide Icons](https://lucide.dev/icons/) has over 1,500 icons.

**Naming**:
These libraries often name their components without explicitly indicating that they're icons. We should always rename the imports to make it clear that they're icons.

```tsx
// This is quite a common naming convention for icon components, but it doesn't clearly indicate it's an icon
import { Sun1 } from "cool-icon-library";

// A better approach is to rename the icon immediately
import { Sun1 as SunIcon } from "cool-icon-library";
```

### Forms

The go-to solution is [react-hook-form](https://react-hook-form.com/) with [zod](https://zod.dev/) validation and [Shadcn/ui](https://ui.shadcn.com/) form components. [See the example in their docs](https://ui.shadcn.com/docs/components/form).

### Server State Management

#### Tanstack Query

[Tanstack Query](https://tanstack.com/query/latest) (formerly React Query) is the recommended solution for both REST and GraphQL APIs.

- For REST APIs, use the [ky](https://www.npmjs.com/package/ky) HTTP client.
- For GraphQL, use the [graphql-request](https://www.npmjs.com/package/graphql-request) client.

> When working with REST APIs, don’t create TypeScript types for response data. Always parse the JSON using a zod schema and infer its type—don’t trust anyone!

```ts
import { z } from "zod";

const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

type PostSchema = z.infer<typeof postSchema>;

const useExamplePost = (id: number) => {
  const result = useQuery<PostSchema>({
    queryKey: exampleKeys.post(id),
    queryFn: async () => {
      const response = await api.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      const data = await response.json();
      // Validate and parse the response using the schema
      // Will throw an error if the response shape does not pass schema validation
      return postSchema.parse(data);
    },
  });
  return result;
};
```

To simplify query key management and improve maintainability, it’s recommended to use [Query Key Factories](https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories) for each feature.

```ts
export const exampleKeys = {
  posts: ["posts"] as const,
  post: (id: number) => [...exampleKeys.posts, id] as const,
};
```

### Translations

- For React: [react-i18next](https://react.i18next.com/).
- For Next.js: [next-i18next](https://github.com/i18next/next-i18next).

Translation documents are located in the `@/locales/[language_code]` directory. To improve readability and manageability, translation documents may be split into multiple `.json` files. For example, to add a translation document for a specific feature, create a new file called `feature.json` and define translations specific to that feature.

#### Adding Translation Documents

If more translation documents are needed, it is only necessary to add a new `.json` document with the same name in each translation folder and then import them in the `@/config/i18n`. Here's an example of how the translation documents are defined in the config if we have translation documents `@/locales/en/common.json` and `@/locales/cs/common.json`:

```ts
import commonCS from "@/locales/cs/common.json";
import commonEN from "@/locales/en/common.json";
import { use } from "i18next";
import { initReactI18next } from "react-i18next";

const defaultNS = "common";
const fallbackLng = "en";

export const resources = {
  en: {
    common: commonEN,
  },
  cs: {
    common: commonCS,
  },
};

export const initTranslation = () =>
  use(initReactI18next).init({
    resources,
    ns: ["common"],
    defaultNS,
    lng: localStorage.getItem("lang") ?? "en",
    fallbackLng,
  });
```

#### Using Translation in React Components

To use translation strings, the `useTranslation()` hook must be used. There are two ways the translations can be used, depending on how many translation documents are needed in the component.

1. **Basic Usage**: If you only need translations from the `common.json` document, you can use the `useTranslation('document_name')` hook directly in your components. Then, in the `t()` function you only pass the translation string. For example:

```tsx
import { useTranslation } from "react-i18next";

export const Feature = () => {
  const { t } = useTranslation("common");

  return <h1>{t("Localization.currentLanguage")}</h1>;
};
```

2. **Advanced Usage**: If you need translations from multiple documents, you can import all the documents using the `useTranslation(['nameSpace1', 'nameSpace2'])` hook passing all the needed namespaces.

```tsx
import { useTranslation } from "react-i18next";

export const Feature = () => {
  const { t } = useTranslation(["common", "feature"]);

  return (
    <>
      <h1>{t("common:Localization.currentLanguage")}</h1>
      <h2>{t("feature:Main.subheading")}</h2>
    </>
  );
};
```

3. **Nested translation keys**: Often times, the translation keys are deeply nested, and you only need a certain portion of the translation namespace. To avoid repeating the whole path to the key, you should extract it into a `keyPrefix` option inside the `useTranslation()` hook.

```tsx
import { useTranslation } from "react-i18next";

export const Feature = () => {
  const { t } = useTranslation("feature", {
    keyPrefix: "Shared.Part.Of.Translation.Keys",
  });

  return (
    <>
      <h1>{t("endPart1")}</h1>
      <h2>{t("endPart2")}</h2>
    </>
  );
};
```
