import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.ema.codes',
  vite: {
    plugins: [tailwindcss()],
  },
});
