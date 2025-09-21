import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string().min(5),
			description: z.string().min(50).max(160),
			date: z.coerce.date(),
			updated: z.coerce.date().optional(),
			category: z.string().optional(),
			tags: z.array(z.string()).default([]),
			ville: z.string().optional(),
			region: z.string().optional(),
			author: z.string().default("Rédaction"),
			readingTime: z.string().optional(),
			heroImage: image().optional(),
			heroAlt: z.string().optional(),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
