import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"
import mermaid from "astro-mermaid"

const base = "/frontend-playbook/"

// https://astro.build/config
export default defineConfig({
	site: "https://applifting.github.io",
	base,
	integrations: [
		mermaid(),
		starlight({
			title: "Frontend Playbook",
			favicon: "favicon.svg",
			head: [
				{
					tag: "link",
					attrs: {
						rel: "icon",
						type: "image/png",
						href: "favicon-96x96.png",
						sizes: "96x96",
					},
				},
				{
					tag: "link",
					attrs: {
						rel: "icon",
						type: "image/svg+xml",
						href: "favicon.svg",
					},
				},
				{
					tag: "link",
					attrs: {
						rel: "shortcut icon",
						href: "favicon.ico",
					},
				},
				{
					tag: "link",
					attrs: {
						rel: "apple-touch-icon",
						sizes: "180x180",
						href: "apple-touch-icon.png",
					},
				},
				{
					tag: "meta",
					attrs: {
						name: "apple-mobile-web-app-title",
						content: "Applifting Frontend Playbook",
					},
				},
				{
					tag: "link",
					attrs: {
						rel: "manifest",
						href: "site.webmanifest",
					},
				},
			],
			logo: {
				light: "/src/assets/logo-black.svg",
				dark: "/src/assets/logo-white.svg",
			},
			editLink: {
				baseUrl: "https://github.com/Applifting/frontend-playbook/tree/main",
			},
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/Applifting/frontend-playbook",
				},
			],
			sidebar: [
				{
					label: "Getting Started",
					autogenerate: { directory: "getting-started" },
				},
				{
					label: "Project Structure",
					autogenerate: { directory: "project-structure" },
				},
				{
					label: "Naming Conventions",
					autogenerate: { directory: "naming-conventions" },
				},
				{
					label: "Components",
					autogenerate: { directory: "components" },
				},
				{
					label: "TypeScript",
					autogenerate: { directory: "typescript" },
				},
				{
					label: "Coding Patterns",
					autogenerate: { directory: "coding-patterns" },
				},
				{
					label: "Tooling",
					autogenerate: { directory: "tooling" },
				},
				{
					label: "UI & Styling",
					autogenerate: { directory: "ui-styling" },
				},
				{
					label: "HTML & Accessibility",
					autogenerate: { directory: "html-accessibility" },
				},
				{
					label: "Data Fetching",
					autogenerate: { directory: "data-fetching" },
				},
				{
					label: "Routing",
					autogenerate: { directory: "routing" },
				},
				{
					label: "Forms & Translations",
					autogenerate: { directory: "forms-translations" },
				},
				{
					label: "Contributing",
					autogenerate: { directory: "contributing" },
				},
				{
					label: "Changelog",
					link: "/changelog",
				},
			],
		}),
	],
})
