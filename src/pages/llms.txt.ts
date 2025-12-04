import { getCollection } from "astro:content"
import type { APIRoute } from "astro"

const docs = await getCollection("docs")
const sortedDocs = docs
	.toSorted(
		(a, b) => Number(a.data.sidebar.order) - Number(b.data.sidebar.order),
	)
	.filter((doc) => !!doc.data.sidebar.order)

export const GET: APIRoute = async ({ site }) => {
	return new Response(
		`# Applifting Frontend Playbook\n\n${sortedDocs
			.map((doc) => {
				return `- [${doc.data.title}](${new URL(`${import.meta.env.BASE_URL}/${doc.id}`, site)}) - ${doc.data.description}\n`
			})
			.join("")}`,
		{ headers: { "Content-Type": "text/plain; charset=utf-8" } },
	)
}
