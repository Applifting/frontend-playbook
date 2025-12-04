---
title: Translations
description: 'Setting up i18n with react-i18next or next-intl. Covers namespaces, hooks usage, and nested translation keys.'
sidebar:
  order: 11.2
lastUpdated: 2025-12-03
---

- For React: [react-i18next](https://react.i18next.com/).
- For Next.js: [next-intl](https://next-intl.dev/)

Translation documents are located in the `@/locales/[language_code]` directory. To improve readability and manageability, translation documents may be split into multiple `.json` files (namespaces). For example, to add a translation document for a specific feature, create a new file called `feature.json` and define translations specific to that feature.

## Adding Translation Documents

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

## Using Translation in React Components

To use translation strings, the `useTranslation()` hook must be used. There are two ways the translations can be used, depending on how many translation documents are needed in the component.

### Basic Usage

If you only need translations from the `common.json` document, you can use the `useTranslation('document_name')` hook directly in your components. Then, in the `t()` function you only pass the translation string. For example:

```tsx
import { useTranslation } from "react-i18next";

export const Feature = () => {
  const { t } = useTranslation("common");

  return <h1>{t("Localization.currentLanguage")}</h1>;
};
```

### Advanced Usage

If you need translations from multiple documents, you can import all the documents using the `useTranslation(['nameSpace1', 'nameSpace2'])` hook passing all the needed namespaces.

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

### Nested translation keys

Often times, the translation keys are deeply nested, and you only need a certain portion of the translation namespace. To avoid repeating the whole path to the key, you should extract it into a `keyPrefix` option inside the `useTranslation()` hook.

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
