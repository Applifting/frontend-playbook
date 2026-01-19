---
title: HTTP Client with ky
description: 'Using ky HTTP client with custom hooks, authentication handling, and automatic token refresh.'
sidebar:
  order: 10.2
lastUpdated: 2025-12-03
---

When making HTTP requests using the `ky` client, we recommend encapsulating request logic with **custom hooks and options**.
This makes it easier to test, reuse, and maintain API interactions across the codebase.

This approach is especially useful when working with **access tokens** and handling **automatic retries** with `ky`.
By using retry hooks, we can build reusable and authenticated API clients that integrate smoothly into the application.

```tsx
// Public API client (e.g., for fetching public data or logging in)
export const publicApi = ky.create({
  prefixUrl: apiUrl,
  retry: 0,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "en",
  },
});

// Private API client: base for authenticated requests
export const privateApi = publicApi.extend({
  prefixUrl: `${apiUrl}/api/v1/`,
  hooks: {
    // Add the authentication header with the current access token
    beforeRequest: [
      (request) => {
        const { accessToken } = useAuthStore.getState();

        if (accessToken) {
          request.headers.set("Authorization", `Bearer ${accessToken}`);
        }
      },
    ],
  },
});

// Helper to refresh the access token via beforeRetry
const refreshToken = async ({ request, error }: BeforeRetryState) => {
  const { isRefreshing, setAccessToken } = useAuthStore.getState();

  if (error && !isRefreshing) {
    const newToken = await refreshAccessToken();

    if (newToken) {
      // Update the access token so future requests use it
      setAccessToken(newToken);
    } else {
      setAccessToken(null);
      redirect(AUTH_ROUTES.login);
    }
  }
};

// Authenticated API client with automatic token refresh
export const api = privateApi.extend({
  // Retry the request if the access token is expired or invalid without throwing an error or redirecting the user
  retry: {
    methods: ["get", "post", "put", "delete", "patch"],
    // Only retry on 401 (Unauthorized) responses
    statusCodes: [401],
  },
  hooks: {
    beforeRetry: [refreshToken],
  },
});
```

## Combining with TanStack Query

When combining retry logic with `ky` and TanStack Query, set `retry: 0` in the QueryClient's default config. This prevents TanStack Query from retrying requests automatically (which could conflict with `ky`'s retry handling).

```ts
import { type DefaultOptions } from "@tanstack/react-query";

export const defaultQueryConfig = {
  queries: {
    // By default tanstack query will retry failed requests 3 times
    retry: 0,
  },
} satisfies DefaultOptions;
```
