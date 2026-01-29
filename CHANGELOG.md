# Changelog

## 1.2.0

### Minor Changes

- 9f9f821: Add LLM action buttons below page title
  - Copy markdown content
  - Copy markdown URL
  - Open in ChatGPT
  - Open in Claude

- 5aa97a0: Generate and serve `.md` file for each content page for better access from AI tools

## 1.1.2

### Patch Changes

- 98164b2: fix missing favicon issue - incorrect base url

## 1.1.1

### Patch Changes

- 8562d9f: Fix "Semantic HTML" url in "Accessibility" page

## 1.1.0

### Minor Changes

- 8daae0e: Add 2 new sections: Semantic HTML elements, Accessibility (a11y)

## 1.0.2

### Patch Changes

- c7e3402: Add new page "Build with AI" explaining how to integrate this Frontend Playbook with AI tools
- c5a7a82: Add new frontmatter property `isInLLMs` to easily determine what should be included in llms.txt

## 1.0.1

### Patch Changes

- b328e73: Extend the "Compound Component Pattern" page with explaining why and when to use it, link to patterns.dev article
- b328e73: Update "Reusability" section in "General Principles" - add AHA principle, explain why abstraction can sometimes hurt our code, add suggested rules

## 1.0.0

### Major Changes

- Migrate from a single plain .md file to Astro Starlight documentation site

### Minor Changes

- Add section on using Type Guards and Parsing Data
- Implement `llms.txt` and `llms-full.txt` for better integration with AI tools
- Extend introduction section
- Replace all links to Applifting TypeScript Starter template with a reference note
- Minor non-breaking tweaks and upgrades in several sections (updated links, wording, etc.)

## 0.2.1

### Added

- ky HTTP client integration and style guide documentation
  - Introduce best practices and usage patterns for HTTP requests using the ky package, emphasizing encapsulation with custom hooks and options for improved testability, maintainability, and reuse.

- Public and private API client examples
  - Document standardized patterns for creating both unauthenticated and authenticated API clients via ky, with examples for adding headers, prefix URLs, and retry logic.

- Token refresh workflow using retry hooks
  - Provide guidance on handling authentication, including automatic token refresh via beforeRetry hooks when encountering expired or invalid tokens.

- TanStack Query integration tip
  - Add notes on configuring TanStack Query to disable its automatic retries, avoiding double retry logic when used with ky.

## 0.2.0

### Changed

- Fix table of contents
- Immutability section
  - update description
  - provide better examples with gotchas
- Components section
  - use arrow function for component definition unless you need hoisting
- Server State management section
  - Explain why Apollo client is discouraged
  - More in-depth explanation of encouraged patterns with Tanstack Query
  - Better examples of Tanstack Query usage
  - Better example of query keys factory pattern
- Environment variables section - just use T3 env
- Project structure section
  - Next.js - change example to app router from pages router
- ESLint - enforce unidirectional codebase with forbidden cross-feature imports

### Added

- Naming functions section inside naming conventions
- API Types Generation suggested tooling and approach
- Routing section
  - Encourage Tanstack Router
  - Explain and provide examples of TS Router and TS Query integration
- Components section
  - Encourage compound component pattern
- Project structure section
  - General rules and explanations
  - Flowchart explaining pages and features relation
  - TanStack router example
  - Escape hatch solution with checklist when to use it
- Coding section
  - Common function rules
  - Pure functions section
- Metadata frontmatter

## 0.1.5

### Changed

- Update section about explicit **boolean** conversion
- Allow and promote the double bang notation (`!!`) as correct solution for **boolean** conversion

## 0.1.4

### Changed

- Fix links (table of content, eslint and prettier, typography example)

## 0.1.3

### Changed

- Add boolean conversion topic into coding section

## 0.1.2

### Changed

- Fix typos
- Use [Conventional Comments](https://conventionalcomments.org/) as guidelines for MR feedback

## 0.1.1

### Changed

- Clarify the constant naming convention by renaming **"Constants"** to **"Constants (primitives)"**.

## 0.1.0

### Added

- Initial version of the style guide for frontend developers.
- Sections on:
  - **Introduction**
  - **General Principles**
  - **Project Structure**
  - **Naming Conventions**
  - **Components**
  - **TypeScript**
  - **Coding**
  - **Static Code Analysis**
  - **Documentation**
  - **Contribution**
  - **Environment Variables**
  - **Preferred Libraries**
