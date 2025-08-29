# Changelog

All notable changes to this project will be documented in this file.
See [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) for more information on how to structure this file.

## [0.2.1](https://git.applifting.cz/frontend/style-guide/-/compare/v0.2.0...v0.2.1) - 2025-08-29

### Added

- ky HTTP client integration and style guide documentation
  - Introduce best practices and usage patterns for HTTP requests using the ky package, emphasizing encapsulation with custom hooks and options for improved testability, maintainability, and reuse.

- Public and private API client examples
  - Document standardized patterns for creating both unauthenticated and authenticated API clients via ky, with examples for adding headers, prefix URLs, and retry logic.

- Token refresh workflow using retry hooks
  - Provide guidance on handling authentication, including automatic token refresh via beforeRetry hooks when encountering expired or invalid tokens.

- TanStack Query integration tip
  - Add notes on configuring TanStack Query to disable its automatic retries, avoiding double retry logic when used with ky.

## [0.2.0](https://git.applifting.cz/frontend/style-guide/-/compare/v0.1.5...v0.2.0) - 2025-08-22

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

## [0.1.5] - 2025-07-10

### Changed

- Update section about explicit **boolean** conversion
- Allow and promote the double bang notation (`!!`) as correct solution for **boolean** conversion

## [0.1.4] - 2025-06-18

### Changed

- Fix links (table of content, eslint and prettier, typography example)

## [0.1.3] - 2025-02-17

### Changed

- Add boolean conversion topic into coding section

## [0.1.2] - 2025-02-07

### Changed

- Fix typos
- Use [Conventional Comments](https://conventionalcomments.org/) as guidelines for MR feedback

## [0.1.1] - 2025-01-14

### Changed

- Clarify the constant naming convention by renaming **"Constants"** to **"Constants (primitives)"**.

## [0.1.0] - 2024-09-27

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
