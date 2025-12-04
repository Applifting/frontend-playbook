---
title: Query Keys & Options
description: 'Patterns for query key factories and queryOptions to keep data fetching flexible and maintainable.'
sidebar:
  order: 9.3
lastUpdated: 2025-12-03
---

## Query Keys

To simplify query key management and improve maintainability, it's recommended to use [Query Key Factories](https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories) for each feature.

```ts
// src/features/posts/api/queryKeys
export const postKeys = {
  all: () => ["posts"] as const,
  lists: () => [...postKeys.all(), "list"] as const,
  list: (filter: PostListFilter) => [...postKeys.lists(), filter] as const,
  details: () => [...postKeys.all(), "detail"] as const,
  detail: (id: number) => [...postKeys.details(), id],
};
```

## Query Options

We encourage the usage of `queryOptions` instead of using a custom hook that wraps `useQuery`.  
It's a much more flexible solution because this way it's possible to use it in many different scenarios:

### Standard `useQuery` in a component

```tsx
const { data, isPending, isError, error } = useQuery(
  postDetailQueryOptions(id),
);
```

### In a component with a suspense boundary using `useSuspenseQuery`

```tsx
const { data } = useSuspenseQuery(postDetailQueryOptions(id));
```

### In a Tanstack router route loader with `queryClient` methods

```tsx
export const Route = createFileRoute("/_Layout/posts_/$postId")({
  loader: async ({ context: { queryClient }, params: { postId } }) => {
    await queryClient.ensureQueryData(postDetailQueryOptions(postId));
  },
  component: RouteComponent,
});
```

> We won't be able to achieve this flexibility with doing something like `usePostDetail()` custom hook that is just a wrapper around `useQuery` with hardcoded options.
