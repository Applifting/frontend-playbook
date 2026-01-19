---
title: API Type Generators
description: 'Recommended tools for generating TypeScript types from GraphQL schemas and OpenAPI specifications.'
sidebar:
  order: 10.4
lastUpdated: 2025-12-03
---

We have a good experience with following solutions for generating types for APIs (requests, responses, entities, errors, etc.)

| API Type | Suggested library                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| GraphQL  | [@graphql-codegen/cli](https://github.com/dotansimha/graphql-code-generator)                                          |
| REST     | [@openapi-codegen/cli](https://github.com/fabien0102/openapi-codegen) or [orval](https://github.com/orval-labs/orval) |

**Never generate hooks for Tanstack Query**. That will be against the point mentioned above why Apollo client is discouraged. When we generate hooks, we lose the ability of defining our own query keys structure and we basically lose the ownership of the cache. We always want to keep control over our cache and queries/mutations definition.
