import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// `content/` is a copy of the `main` branch made by `scripts/sync-content.mjs`.

/** Every `<app>/<doc>.md` file becomes a page at `/apps/<app>/<doc>/`. Frontmatter is optional. */
const docs = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './content' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    order: z.number().optional(),
    effective: z.coerce.date().optional(),
  }),
});

/** Optional `<app>/app.json` with the display name, a short description, and up to 5 tags. */
const apps = defineCollection({
  loader: glob({
    pattern: '*/app.json',
    base: './content',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string().trim().min(1).max(24)).max(5, 'app.json allows at most 5 tags').default([]),
  }),
});

export const collections = { docs, apps };
