// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://editorsgurukul.com',
  integrations: [sitemap({
    // standalone pages that live in public/ and are not Astro routes,
    // so @astrojs/sitemap cannot discover them on its own
    customPages: ['https://editorsgurukul.com/glyph-motions'],
  })],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '_astro/[name].[ext]'
        }
      }
    }
  }
});