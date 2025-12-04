import { getCollection } from "astro:content"
import type { APIRoute } from "astro"

const docs = await getCollection("docs")
const sortedDocs = docs
	.toSorted(
		(a, b) => Number(a.data.sidebar.order) - Number(b.data.sidebar.order),
	)
	.filter((doc) => !!doc.data.sidebar.order)

export const GET: APIRoute = async () => {
	return new Response(
		`# Applifting Frontend Playbook - Full\n\n${sortedDocs
			.map((doc) => {
				return `# ${doc.data.title}\n\n${doc.body}\n\n`
			})
			.join("")}`,
		{ headers: { "Content-Type": "text/plain; charset=utf-8" } },
	)
}
