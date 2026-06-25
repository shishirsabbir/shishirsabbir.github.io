// @ts-check
import { defineConfig } from 'astro/config';

// Deploy target: user/org site repo `shishirsabbir.github.io` → served at the root, so no `base`.
// (For a PROJECT repo you'd set base: '/<repo>/' since Pages serves it under a subpath.)
export default defineConfig({
  site: 'https://shishirsabbir.github.io',
  output: 'static',
  trailingSlash: 'ignore',
  prefetch: true,
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
