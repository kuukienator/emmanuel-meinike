import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.ema.codes',
  // Keep the same publish directory and URL shape (/links.html) as the old Next.js static export
  outDir: './out',
  build: {
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
