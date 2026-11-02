// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { boldParagraphHeadings } from './src/lib/bold-paragraph-headings.mjs';

// SITE (e.g. https://kctofficial.github.io) and BASE (e.g. /legals) are set by the
// GitHub Pages workflow; locally the site is served from the root.
export default defineConfig({
  site: process.env.SITE || undefined,
  base: process.env.BASE || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // Fetch pages on hover/focus/touch so navigation feels instant on slow connections.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  markdown: {
    processor: satteri({ mdastPlugins: [boldParagraphHeadings] }),
  },
});
