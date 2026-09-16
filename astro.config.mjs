// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://perspectivezoom.com',
  integrations: [mdx(), react()],
  // The 2013 site served posts as /YYYY/MM/DD/slug.html. 'file' keeps that
  // shape; index pages still build to <dir>/index.html.
  build: { format: 'file' },
});
