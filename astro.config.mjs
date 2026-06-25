// @ts-check
import { defineConfig } from 'astro/config';

// Deploy target: user/org site repo `shishirsabbir.github.io` → served at the root, so base = '/'.
// If you instead use a PROJECT repo (e.g. `portfolio`), set base: '/portfolio/' and keep `site`.
export default defineConfig({
  site: 'https://shishirsabbir.github.io',
  // base: '/portfolio/',   // ← uncomment ONLY for a project repo
  output: 'static',
  trailingSlash: 'ignore',
  prefetch: true,
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
