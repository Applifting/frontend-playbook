---
title: TanStack Query Overview
description: 'Why TanStack Query is our go-to for REST and GraphQL. Includes Apollo Client comparison and zod validation patterns.'
sidebar:
  order: 10.1
lastUpdated: 2025-12-03
---

[Tanstack Query](https://tanstack.com/query/latest) (formerly React Query) is the recommended solution for both **REST** and **GraphQL** APIs.

## Why not Apollo client?

We discourage using Apollo Client because it hides too much behind GraphQL-specific magic, relying on things like `__typename` and `id` for caching—which breaks easily with missing fields, aliases, or composite keys. Cache updates are imperative and error-prone, especially with nested or paginated data. React Query offers a simpler, API-agnostic approach with flexible keys and declarative cache control, making it more predictable, consistent, and maintainable.

- For REST APIs, use the [ky](https://www.npmjs.com/package/ky) HTTP client.
- For GraphQL, use the [graphql-request](https://www.npmjs.com/package/graphql-request) client.

> When working with REST APIs, don't create TypeScript types for response data. Always parse the JSON using a zod schema and infer its type — don't trust anyone! (Unless the API is created based on a contract - in that case see [API Types Generators](../api-type-generators/))

```ts
// src/features/posts/api/postDetailQueryOptions
import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";

import { api } from "@/lib/api";

import { postKeys } from "./queryKeys";

const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export type PostSchema = z.infer<typeof postSchema>;

export const postDetailQueryOptions = (id: number) =>
  queryOptions({
    queryKey: postKeys.detail(id),
    queryFn: async () => {
      const data = await api.get(`/posts/${id}`).json();
      // Validate and parse the response using the schema
      // Will throw an error if the response shape does not pass schema validation
      return postSchema.parse(data);
    },
  });

// Usage in a component
const { data, isPending, isError, error } = useQuery(
  postDetailQueryOptions(id),
);
```

## Additional notes

- As explained above, we shouldn't create custom wrapper hooks for queries. For mutations, it's completely okay since we don't usually use the mutation options in more places than `useMutation`.
- If there's a case when you really need to use `useQuery` inside a custom hook, never mix `useQuery` and `useMutation` definitions in a single hook. We should separate operations that read data from operations that mutate data.
