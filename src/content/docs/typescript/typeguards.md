---
title: "Type Guards and Parsing Data"
description: 'Using type guards and runtime validation with zod or narrowland for type-safe data handling.'
sidebar:
  order: 5.5
lastUpdated: 2025-12-03
---

Type guards and assertion functions let TypeScript *narrow* the type of a value at runtime based on checks you perform in code. In practice, this is essential whenever the type you get from the outside world (`unknown`, `any`, API responses, user input, etc.) is broader or less trusted than what your business logic actually needs.

For **complex data structures** (API payloads, nested objects, arrays of records…), we strongly recommend validating and narrowing them with a runtime schema library like [zod](https://zod.dev/). For **simple checks** – e.g. “is this value defined?”, “is it a string?”, “is this array non-empty?”, or narrowing based on element/property type – you can use the [narrowland](https://www.npmjs.com/package/narrowland) utility library, created and maintained by Applifters. It provides a curated set of boolean type guards (`is.*`) and assertion type guards (`assert.*`) that cover the most common narrowing use cases in our codebases.
