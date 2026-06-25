# Shishir Sabbir — Developer Portfolio

A unique, animation-forward personal portfolio built with **Astro** and hand-crafted modern CSS, deployed to **GitHub Pages**.

> Full-Stack Developer · Web Automation & Scraping · Shopify · Self-hosted platforms
> Rajshahi, Bangladesh · shishir.sabbir@gmail.com

## Tech

- **Astro 5** — static site generator, island architecture, zero JS by default
- **Modern CSS** — design tokens, CSS layers, scroll-driven animations, View Transitions
- **TypeScript** — small, targeted interactive islands only
- **GitHub Pages** — static hosting via GitHub Actions

Design direction: **Nebula** (dark terminal / neon-blue). Six explorations are archived in `dev/designs/`.

## Quick Start

```bash
npm install
npm run dev                    # http://localhost:4321
npm run build && npm run preview   # test the production build
```

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Build the static site to `./dist` |
| `npm run preview` | Serve the production build locally |
| `npm run astro -- --help` | Astro CLI help |

## Project Layout

See `CLAUDE.md` for the full structure. In short:
`src/pages/index.astro` composes section components from `src/components/sections/`,
all driven by data in `src/data/` and styled with tokens in `src/styles/`.

## Documentation

| File | Purpose |
|------|---------|
| `CLAUDE.md` | AI/contributor working guide, stack, conventions, guardrails |
| `PLAN.md` | Architecture, section-by-section breakdown, build milestones |
| `DESIGN.md` | Design system + the signature animation/interaction spec |
| `CONTENT.md` | Real copy and project data (source of truth for `src/data/`) |
| `DEPLOY.md` | GitHub Pages deployment, base path, custom domain, CI |

## Deploy (summary)

Push to `main` → GitHub Actions builds with `withastro/action` → publishes `dist/` to Pages.
First-time setup and base-path rules are in `DEPLOY.md`.

## License

Personal project © Shishir Sabbir. Code may be reused with attribution; content/photos are not.
