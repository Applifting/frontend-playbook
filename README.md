# Applifting Frontend Playbook

Opinionated guidelines for frontend projects at [Applifting](https://applifting.io) — from React patterns and TypeScript tips to data fetching, routing, and workflow.

## What is this?

This playbook provides clear instructions on how to write and structure React code to ensure a consistent developer experience across all Applifting projects. It aims to enhance maintainability, readability, and onboarding speed across all frontend codebases.

Think of it as a handbook you can refer to whenever you're unsure about how to name something, where to place it, or which library to choose.

### What's inside

- **How we write code** — function and component best practices, pure functions, declarative patterns, TypeScript tips, naming conventions, and immutability.
- **How we structure apps** — feature-sliced design, pages vs. features, TanStack Router & Query patterns, and how routing, data fetching, and features fit together.
- **How we work together** — git workflow, environment variables, shared UI with shadcn/ui & Tailwind, i18n, and API type generators.

## Local Development

**Prerequisites:** Node.js (see `.nvmrc`) and pnpm

```bash
# Install dependencies
pnpm install

# Start dev server at http://localhost:4321
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Contributing

Contributions are welcome! Please use [Conventional Commits](https://www.conventionalcommits.org/) for your commit messages and open a pull request.

## License

MIT
