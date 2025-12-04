---
title: Cross-Feature Composition (Escape Hatch)
description: 'Escape hatch pattern for injecting components across feature boundaries via page-level context.'
sidebar:
  order: 2.5
lastUpdated: 2025-12-03
---

This pattern lets a **page/route** inject a component from one feature into another (e.g., `PostsListItem` from **Posts** into **Search**).

> ⚠️ **Use only as a last resort.** Normally, features [must not import](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) from each other (enforced by ESLint). Pages are the only place where cross-feature wiring can happen. This avoids moving half-baked components into `src/` (shared) unnecessarily.

## Checklist Before Using

- [ ] A simple **prop/slot** API won’t work
- [ ] Context is provided at the **page/route** level, not globally
- [ ] The **contract is minimal and typed** (no leaking feature internals)
- [ ] There’s a clear **comment why** this escape hatch is needed

## Safer Alternatives (if possible)

- Pass a render function (`itemRenderer`) as a prop
- Define a tiny **contract type** in `src/` (shared) and keep implementations in features

## The Escape Hatch Example

```tsx
// src/routes/_Layout/search.tsx
import { SearchList } from "@/features/search/components/SearchList";
import { PostsListItem } from "@/features/posts/components/PostsListItem";
import { PostListItemProvider } from "@/lib/PostListItemContext";

export const Route = createFileRoute("/_Layout/search")({
  component: SearchPage,
});

function SearchPage() {
  const { t } = useTranslation("search");
  return (
    <Card>
      <Card.Header>
        <Typography type="display-4xl">{t("title")}</Typography>
      </Card.Header>
      <Card.Content>
        <PostListItemProvider postsListItem={PostsListItem}>
          <SearchList />
        </PostListItemProvider>
      </Card.Content>
    </Card>
  );
}

// src/features/search/SearchList.tsx
export const SearchList = () => {
  const { t } = useTranslation("search");
  const PostsListItem = usePostListItem();
  const { data } = useSuspenseQuery(searchQueryOptions());

  return (
    <>
      {!!data.items.length ? (
        <ul className="divide-y-1">
          {data.items.map((post) => (
            <PostsListItem key={post.id} post={post} />
          ))}
        </ul>
      ) : (
        <Typography className="text-muted-foreground">
          {t("noResultsMessage")}
        </Typography>
      )}
    </>
  );
};

// src/features/posts/providers/PostListItemContext.tsx
type PostListItemProps = {
  post: PostType;
};

type PostListItem = (props: PostListItemProps) => React.ReactNode;

type PostListItemContextValue = {
  postListItem: PostListItem;
};

const PostListItemContext = createContext<PostListItemContextValue>(
  undefined as never,
);

type PostListItemProviderProps = {
  postListItem: PostListItem;
  children: ReactNode;
};

export const PostListItemProvider = ({
  postListItem,
  children,
}: PostListItemProviderProps) => {
  return (
    <PostListItemContext value={{ postListItem }}>
      {children}
    </PostListItemContext>
  );
};

export const usePostListItem = () => {
  const context = useContext(PostListItemContext);
  if (!context) {
    throw new Error(
      '"usePostListItem" must be used within "<PostListItemProvider>"',
    );
  }
  return context;
};
```
