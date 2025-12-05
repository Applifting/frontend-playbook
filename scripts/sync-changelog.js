import { readFile, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const root = resolve(__dirname, "..")
const src = resolve(root, "CHANGELOG.md")
const dest = resolve(root, "src/content/docs/changelog.md")

const raw = await readFile(src, "utf-8")

// Drop the first 2 lines from the root changelog:
// 1. "# Changelog"
// 2. the blank line after it
const lines = raw.split(/\r?\n/)
const withoutFirstTwoLines = lines.slice(2).join("\n")

const frontmatter = `---
title: Changelog
description: Release notes for Applifting Frontend Playbook
editUrl: false
isInLLMs: false
---

`

await writeFile(dest, frontmatter + withoutFirstTwoLines)

console.log("Synced CHANGELOG.md → src/content/docs/changelog.md")
