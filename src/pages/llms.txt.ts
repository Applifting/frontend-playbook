import { getCollection } from "astro:content"
import type { APIRoute } from "astro"

const docs = await getCollection("docs")
const sortedDocs = docs
	.toSorted(
		(a, b) => Number(a.data.sidebar.order) - Number(b.data.sidebar.order),
	)
	.filter((doc) => doc.data.isInLLMs)

export const GET: APIRoute = async () => {
	return new Response(
		`# Applifting Frontend Playbook\n\n> Opinionated guidelines for frontend projects at Applifting — a handbook of battle-tested patterns and conventions for writing React code, structuring applications, and maintaining consistency across projects.\n\n## Table of contents\n\n${sortedDocs
			.map((doc) => {
				return `- [${doc.data.title}](${import.meta.env.BASE_URL}${doc.id}.md): ${doc.data.description}\n`
			})
			.join("")}`,
		{ headers: { "Content-Type": "text/plain; charset=utf-8" } },
	)
}
