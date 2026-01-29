import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"
import mermaid from "astro-mermaid"
import { loadEnv } from "vite"
import { starlightConfig } from "./starlight.config"

const BASE_URL = "/frontend-playbook/"
const { SITE_URL } = loadEnv("", process.cwd(), "")

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	base: BASE_URL,
	integrations: [mermaid(), starlight(starlightConfig)],
})
