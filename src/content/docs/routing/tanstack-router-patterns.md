---
title: TanStack Router Patterns
description: 'Integrating TanStack Router with TanStack Query: loaders, prefetching, suspense boundaries, and pending states.'
sidebar:
  order: 10.2
lastUpdated: 2025-12-03
---

It is possible to easily integrate Tanstack Router and Tanstack Query to have access to `queryClient` inside route loaders. That allows us several features:

- Start fetching data even before a route component begins to render
- Block rendering of a route till data is fetched (to avoid spinnagedon if the response time is quick)
- Co-location of data and routes - goes well with our feature-sliced approach
- Built in suspense and error boundaries - goes well with `useSuspenseQuery`

## Examples

### Start prefetching a query inside a route loader

Once resolved, it populates our Query Cache

```tsx
export const Route = createFileRoute("/_Layout/posts_/$postId")({
  loader: ({ context: { queryClient }, params: { postId } }) => {
    void queryClient.prefetchQuery(postDetailQueryOptions(postId));
    // void = we don't care about the data here, we are just triggering the fetch before anything starts to render
  },
  component: RouteComponent,
});
```

### Fetch data inside a loader

`queryClient.ensureQueryData` is a combination of `.getQueryData()` and `.fetchQuery()`. It means that it first checks whether a data is already in the Query Cache and if not, it starts fetching the data and returns a Promise.  
This is the most common approach we use in route definitions

```tsx
export const Route = createFileRoute("/_Layout/posts_/$postId")({
  component: TestingDeviceDetailPage,
  loader: ({ context: { queryClient }, params: { postId } }) =>
    queryClient.ensureQueryData(postDetailQueryOptions(postId)),
  pendingComponent: TestingDeviceDetailPageSkeleton,
});
```

As you can see above, we've defined a `pendingComponent`. That means we are creating a Suspense boundary around our route. Whenever we need the data from `postDetailQueryOptions` in any component in the context of this route, we can just use

```tsx
const { data } = useSuspenseQuery(postDetailOptions(postId));
```

No need to check for pending state because that is handled by the suspense boundary and the `pendingComponent`. If we have a global error boundary defined, we don't need to check for error state either. For that see [defaultErrorComponent](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#using-the-default-errorcomponent). `.ensureQueryData()` and `.fetchQuery()` both throw on error which means it triggers the closest error boundary and passes the error into it.

## Route loading state and UI blocking

Tanstack Router is pretty smart about when does it show the `pendingComponent`. Often times, the API response can take just a small fractions of a seconds. It's not pleasant UX to flicker loading spinners or skeletons for just a couple of milliseconds. For that reason TS router shows the `pendingComponent`:

- The pending component is shown only if the API response is taking long (exceeds a threshold, default `1s`)
- Once the pending component is shown, it stays displayed for a defined time to avoid flashing (default `500ms`)
- If the threshold is not exceeded, TS router just blocks the UI and keeps showing the previous page

Both these values can be easily configured. To see how and read more about this behavior check [Showing a pending component](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#showing-a-pending-component) and [Avoiding Pending Component Flash](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#avoiding-pending-component-flash) sections.
