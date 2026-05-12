import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Редакция AI Press'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
    sourceUrl: z.string().url().optional(),
    sourceName: z.string().optional(),
  }),
});

export const collections = { articles };
