import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hikaleonsubs.pages.dev',
  integrations: [tailwind()],
  output: 'static',
});
