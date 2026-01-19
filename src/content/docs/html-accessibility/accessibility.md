---
title: Accessibility Basics
description: 'Essential accessibility practices that cover 80% of common issues. Focus on keyboard navigation, images, forms, and color.'
sidebar:
  order: 9.2
lastUpdated: 2026-01-19
---

Accessibility (a11y) ensures your app works for everyone, including users with disabilities. These baseline practices will catch the majority of accessibility issues.

## Images need alt text

Every `<img>` needs an `alt` attribute. If the image is decorative, use an empty string.

```tsx
// Informative image - describe what it shows
<img src="/chart.png" alt="Sales increased 25% in Q4" />

// Decorative image - empty alt
<img src="/decorative-line.svg" alt="" />
```

> **Rule of thumb**: Ask yourself "If I couldn't see this image, what would I need to know?" That's your alt text.

## Interactive elements must be keyboard accessible

Users must be able to navigate and interact with your app using only a keyboard.

**The basics:**

- All interactive elements should be focusable (buttons, links, inputs already are)
- Focus order should follow visual order (don't mess with `tabIndex` unless necessary)
- Focus should be visible (don't remove outline without providing an alternative)

```css
/* Bad - removes focus indicator entirely */
button:focus {
  outline: none;
}

/* Good - custom focus style */
button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

## Use native HTML elements

Native elements like `<button>`, `<a>`, `<input>` come with built-in accessibility. Don't reinvent them.

```tsx
// Bad - div with click handler
<div onClick={handleClick} className="button">
  Submit
</div>

// Good - actual button
<button onClick={handleClick}>Submit</button>
```

See [Semantic HTML](./semantic-html/) for more on choosing the right elements.

## Forms need labels

Every form input must have an associated label. Screen readers announce the label when the input is focused.

```tsx
// Good - explicit label association
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// Also good - wrapping label
<label>
  Email
  <input type="email" />
</label>

// Bad - placeholder is NOT a label
<input type="email" placeholder="Email" />
```

## Color alone is not enough

Don't rely solely on color to convey information. Add text, icons, or patterns.

```tsx
// Bad - only color indicates error
<input className={hasError ? "border-red" : "border-gray"} />

// Good - color + text + icon
<input className={hasError ? "border-red" : "border-gray"} />
{hasError && <span className="text-red">⚠ This field is required</span>}
```

Ensure sufficient color contrast (WCAG recommends 4.5:1 for normal text, 3:1 for large text).

## ARIA: use sparingly

ARIA attributes add accessibility info to elements. But native HTML is almost always better.

**When to use ARIA:**

- Adding context that HTML can't express (e.g., `aria-live` for dynamic content)
- Enhancing custom components that can't use native elements
- Labeling elements without visible text (`aria-label`)

```tsx
// Good use - live region for dynamic updates
<div aria-live="polite">{statusMessage}</div>

// Good use - labeling icon-only button
<button aria-label="Close dialog">
  <CloseIcon />
</button>
```

> **First rule of ARIA**: Don't use ARIA if you can use native HTML instead.

## Quick checklist

Before shipping, verify:

- [ ] Can you navigate the entire page with just Tab and Enter?
- [ ] Is focus always visible?
- [ ] Do all images have appropriate alt text?
- [ ] Do all form inputs have labels?
- [ ] Is information conveyed by more than just color?
- [ ] Does the heading structure make sense? (h1 → h2 → h3, no skipping)
