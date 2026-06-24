import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// IMPORTANT — CONFIRM PRODUCTION DOMAIN AT GO-LIVE BEFORE SHIPPING.
// This new site replaces the current live Engage Electrics site. The `site`
// value below drives the canonical URLs in the generated XML sitemap. If the
// cutover domain differs from engage-electrics.com.au (e.g. www. prefix, a
// different TLD, or a staging host), update this value AND public/robots.txt
// before the sitemap is submitted to Search Console. Mismatched domains here
// silently emit wrong sitemap URLs.
const site = 'https://engage-electrics.com.au';

// Static output, no deploy adapter yet (added at the deploy stage, version-matched to Astro).
export default defineConfig({
  site,
  output: 'static',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
