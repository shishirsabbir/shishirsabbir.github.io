# DEPLOY.md — GitHub Pages Deployment

Astro static build → GitHub Pages via GitHub Actions. Read this **before** writing internal links/asset paths — the base path is the most common breakage.

## 1. Choose your repo type (decides the base path)

| Repo name | Live URL | `site` | `base` |
|-----------|----------|--------|--------|
| `username.github.io` (user/org site) | `https://username.github.io/` | `https://username.github.io` | `/` (omit) |
| any other, e.g. `portfolio` (project site) | `https://username.github.io/portfolio/` | `https://username.github.io` | `/portfolio/` |

> Recommendation for a personal portfolio: create a repo literally named **`<yourusername>.github.io`** so the site is at the clean root URL and `base` is just `/`.

## 2. astro.config.mjs

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://<username>.github.io',
  // base: '/portfolio/',   // ONLY for a project repo; omit for <username>.github.io
  output: 'static',
  trailingSlash: 'ignore',
});
```

## 3. Respect the base path everywhere

Never hard-code leading-slash paths. Use Astro's `BASE_URL`:

```astro
---
const base = import.meta.env.BASE_URL; // '/' or '/portfolio/'
---
<a href={`${base}#projects`}>Work</a>
<img src={`${base}images/hero.webp`} alt="..." />
<a href={`${base}resume.pdf`} download>Résumé</a>
```

For assets in `src/`, prefer Astro `import` (it rewrites URLs automatically). For files in `public/`, prefix with `BASE_URL`.

## 4. GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
        # with:
        #   path: .            # repo root (default)
        #   node-version: 20
        #   package-manager: npm

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

`withastro/action` auto-detects the package manager, runs the build, and uploads `dist/` as the Pages artifact.

## 5. Enable Pages (one-time)

1. Push the repo to GitHub with the workflow on `main`.
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the workflow manually). Wait for the green check.
4. Visit the URL from the table in §1.

## 6. Custom domain (optional)

1. Add your domain in **Settings → Pages → Custom domain** (creates a `CNAME` file).
2. DNS: `CNAME` record `www → <username>.github.io`; for an apex domain add the four GitHub Pages `A` records (or an `ALIAS`/`ANAME`).
3. Set `site: 'https://yourdomain.com'` and remove `base` in `astro.config.mjs`.
4. Enable **Enforce HTTPS**.

## 7. Pre-deploy checklist

- [ ] `npm run build && npm run preview` works locally and matches dev.
- [ ] All links/images use `BASE_URL` (no broken assets on the subpath).
- [ ] `site` (and `base` if a project repo) set correctly.
- [ ] Add a `public/.nojekyll` file (prevents Jekyll from ignoring `_`-prefixed assets).
- [ ] `404.astro` page exists.
- [ ] OG/meta + favicon present; Lighthouse ≥ 95.

## 8. Common gotchas

- **Blank page / 404 assets:** wrong `base`. Project repos MUST set `base: '/<repo>/'`.
- **Underscore folders missing:** add `public/.nojekyll`.
- **Old content served:** Pages CDN cache — hard refresh, or wait a few minutes after the action completes.
- **Mixed dev/prod link behavior:** always test the built output, not just `npm run dev`.
