/**
 * Removes import statements from markdown/MDX content.
 * Matches various import formats:
 * - import { X } from "y"
 * - import X from "y"
 * - import * as X from "y"
 * - import X, { Y } from "y"
 * - import type { X } from "y"
 * - Handles both single and double quotes
 * - Handles optional semicolons
 * - Removes surrounding empty lines (if import is surrounded by 2 empty lines, becomes 1)
 *
 * @param content - The markdown/MDX content string
 * @returns The content with all import statements removed
 */
export function removeImports(content?: string): string | null {
	if (!content) return null
	// Match import statements with various formats:
	// - import { ... } from "..."
	// - import X from "..."
	// - import * as X from "..."
	// - import X, { ... } from "..."
	// - import type { ... } from "..."
	// Handles both single and double quotes
	// Optional semicolon at the end
	// The (?m) flag enables multiline mode so ^ and $ match line boundaries
	const importPattern =
		/^import\s+(?:type\s+)?(?:(?:\*\s+as\s+\w+)|(?:\{[^}]*\})|(?:\w+)|(?:\w+\s*,\s*\{[^}]*\}))\s+from\s+["'][^"']+["'];?\s*$/gm

	// First, remove all import statements
	const result = content
		.replace(importPattern, "")

		// Then, clean up empty lines: collapse 2+ consecutive empty lines (\n\n\n+) to a single empty line (\n\n)
		// This handles the case where an import was surrounded by empty lines
		.replace(/\n\n\n+/g, "\n\n")

		// Trim leading newlines to prevent extra empty lines when the cleaned content is concatenated with other content
		.replace(/^\n+/, "")

		// Also trim trailing empty lines for cleanliness
		.replace(/\n\n+$/, "\n")

	return result
}
