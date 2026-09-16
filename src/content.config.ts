import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Files starting with an underscore (scratch notes like _ideas) are ignored
// by the loader, as they were by Jekyll.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    categories: z.array(z.string()).default([]),
    aiUsage: z.string().optional(),
  }),
});

export const collections = { posts };
