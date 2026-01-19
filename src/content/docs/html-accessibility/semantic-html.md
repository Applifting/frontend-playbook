---
title: Semantic HTML
description: 'Use HTML elements for their intended purpose. Better accessibility, SEO, and maintainability with minimal effort.'
sidebar:
  order: 9.1
lastUpdated: 2026-01-19
---

Semantic HTML means using elements for their intended purpose. It improves accessibility, SEO, and makes your code more maintainable. Most importantly, it's free — you just pick the right element.

## Document structure

Use landmark elements to define page regions. Screen readers and search engines use these to understand your page structure.

```tsx
<header>
  <nav>{/* Main navigation */}</nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    {/* Article content */}
  </article>
  <aside>{/* Sidebar content */}</aside>
</main>

<footer>{/* Footer content */}</footer>
```

| Element     | Purpose                                        |
| ----------- | ---------------------------------------------- |
| `<header>`  | Introductory content, typically contains nav   |
| `<nav>`     | Navigation links                               |
| `<main>`    | Main content (only one per page)               |
| `<article>` | Self-contained content (blog post, card, etc.) |
| `<section>` | Thematic grouping of content                   |
| `<aside>`   | Tangentially related content (sidebar)         |
| `<footer>`  | Footer content                                 |

## Headings create hierarchy

Headings (`h1`-`h6`) create a document outline. Use them in order — don't skip levels.

```tsx
// Good - logical hierarchy
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
  <h2>Another Section</h2>

// Bad - skipping levels
<h1>Page Title</h1>
  <h4>Section</h4>  {/* Skipped h2, h3 */}
```

> **Rule of thumb**: One `<h1>` per page. Each section gets an `<h2>`. Subsections get `<h3>`, and so on.

## Buttons vs Links

This is one of the most common mistakes. The rule is simple:

- **`<button>`** — performs an action (submit, toggle, open modal)
- **`<a>`** — navigates somewhere (different page, section, external URL)

```tsx
// Good
<button onClick={openModal}>Open Settings</button>
<a href="/settings">Go to Settings</a>

// Bad - link that doesn't navigate
<a href="#" onClick={openModal}>Open Settings</a>

// Bad - button for navigation
<button onClick={() => navigate('/settings')}>Go to Settings</button>
```

## Lists for lists

If it's a list of things, use a list element.

```tsx
// Good - navigation as list
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

// Good - definition list for key-value pairs
<dl>
  <dt>Name</dt>
  <dd>John Doe</dd>
  <dt>Email</dt>
  <dd>john@example.com</dd>
</dl>
```

## Forms

Use proper form elements and associate labels with inputs.

```tsx
<form>
  <fieldset>
    <legend>Personal Information</legend>

    <label htmlFor="name">Name</label>
    <input id="name" type="text" required />

    <label htmlFor="email">Email</label>
    <input id="email" type="email" required />
  </fieldset>

  <button type="submit">Submit</button>
</form>
```

**Key points:**

- `<fieldset>` groups related inputs, `<legend>` describes the group
- Use appropriate `type` attributes (`email`, `tel`, `number`, etc.)
- `<button type="submit">` inside a form submits it — no onClick needed

## Other useful elements

| Instead of...            | Use...                            |
| ------------------------ | --------------------------------- |
| `<div>` for time         | `<time datetime="2025-01-19">`    |
| `<i>` or `<b>` for style | CSS (or `<em>`/`<strong>` if semantic) |
| `<div>` for figures      | `<figure>` + `<figcaption>`       |
| `<span>` for code        | `<code>`                          |
| `<div>` for quotes       | `<blockquote>` or `<q>`           |

## Quick reference

Ask yourself:

- **Is it clickable?** → `<button>` (action) or `<a>` (navigation)
- **Is it a list?** → `<ul>`, `<ol>`, or `<dl>`
- **Is it a page region?** → `<header>`, `<main>`, `<footer>`, `<nav>`, `<aside>`
- **Is it a heading?** → `<h1>`-`<h6>` in proper order
- **Is it a form field?** → proper `<input type>` with `<label>`
- **None of the above?** → Then `<div>` or `<span>` is fine

> Using semantic HTML is the easiest accessibility and SEO win. It costs nothing and pays dividends.
