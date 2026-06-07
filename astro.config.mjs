import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tricansecurity.com',
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['framer-motion', 'motion/react', 'gsap', 'gsap/ScrollTrigger'],
    },
  },
});
