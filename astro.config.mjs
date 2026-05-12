import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://besl.github.io',
  base: '/ai_press',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  }
});
