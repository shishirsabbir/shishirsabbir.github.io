// @ts-check
import { defineConfig } from 'astro/config';

// Deploy target: PROJECT repo `portfolio_page` → served at https://shishirsabbir.github.io/portfolio_page/
// (For a user/org site repo `shishirsabbir.github.io` you'd drop `base` so it serves from the root.)
export default defineConfig({
  site: 'https://shishirsabbir.github.io',
  base: '/portfolio_page/',
  output: 'static',
  trailingSlash: 'ignore',
  prefetch: true,
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
