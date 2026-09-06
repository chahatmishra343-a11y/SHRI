import { defineConfig } from 'astro/config';

// Static site — no server adapter needed. When you're ready to deploy on
// Cloudflare Pages, no changes are required here; Cloudflare builds static
// Astro output automatically.
export default defineConfig({
  output: 'static',
});
