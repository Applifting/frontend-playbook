import { getCollection } from "astro:content"
import type { APIRoute, GetStaticPaths } from "astro"
import { removeImports } from "@/lib/utils"

export const getStaticPaths = (async () => {
	const docs = await getCollection("docs", (doc) => doc.data.isInLLMs)

	return docs.map((doc) => {
		const [category, ...slugParts] = doc.id.split("/")
		const slug = slugParts.join("/")
		return {
			params: { category, slug: `${slug}.md` },
			props: { doc },
		}
	})
}) satisfies GetStaticPaths

type Props = Awaited<ReturnType<typeof getStaticPaths>>[number]["props"]

export const GET: APIRoute<Props> = async ({ props }) => {
	const { doc } = props
	const cleanedContent = removeImports(doc.body)

	return new Response(`# ${doc.data.title}\n\n${cleanedContent}\n`, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	})
}
