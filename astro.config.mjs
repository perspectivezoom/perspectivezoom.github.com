// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://perspectivezoom.com',
  integrations: [mdx(), react()],
  // The 2013 site served posts as /YYYY/MM/DD/slug.html and section pages as
  // /posts/ and /projects/. 'preserve' builds each route as it is named in
  // src/pages, so [slug].astro becomes slug.html and index.astro stays index.html.
  build: { format: 'preserve' },
});
