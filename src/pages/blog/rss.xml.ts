// src/pages/blog/rss.xml.ts
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { data as site } from "../../data/siteData";

// Petit helper: construit le lien même si TS n'infère pas "slug"
function entryLink(p: CollectionEntry<"blog">) {
	const s: string | undefined = p.slug;
	const fallback = p.id.replace(/^.*\//, "").replace(/\.(md|mdx)$/, "");
	return `/blog/${s ?? fallback}/`;
}

export async function GET(context: APIContext) {
	const posts: CollectionEntry<"blog">[] = (
		await getCollection("blog", (e) => !e.data.draft)
	).sort((a, b) => +b.data.date - +a.data.date);

	return rss({
		title: `${site.name} – Blog`,
		description: "Guides et actus épaviste à Toulouse et Occitanie.",
		site: context.site!, // Assure-toi d’avoir "site" défini dans astro.config.mjs
		items: posts.map((p) => ({
			link: entryLink(p),
			title: p.data.title,
			description: p.data.description,
			pubDate: p.data.date,
		})),
	});
}
