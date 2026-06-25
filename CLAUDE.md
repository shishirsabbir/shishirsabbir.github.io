# CLAUDE.md — Shishir Sabbir · Developer Portfolio

> **Read `ABOUT_ME.md` first.** It is the complete, authoritative knowledge base about Shishir Sabbir (bio, full skills, deep project breakdowns, education/thesis, voice, and ready-made copy). Treat it + `CONTENT.md` as the source of truth and never invent facts.


Guidance for Claude Code (and any AI contributor) working in this repository.

## What This Project Is

A personal **developer portfolio** for **Shishir Sabbir** — a full-stack developer specializing in web automation/scraping, Shopify, and self-hosted full-stack platforms. The site is a **static website** built with **Astro**, deployed to **GitHub Pages** (`*.github.io`).

Goal: a **unique, modern, heavily-animated** single-page (plus optional sub-pages) portfolio driven by **advanced CSS** — not a generic template. Motion and craft are the point; see `DESIGN.md`.

## Tech Stack

| Layer | Choice | Notes |
|------|--------|-------|
| Framework | **Astro 5** | Static output (`output: 'static'`), island architecture, zero JS by default |
| Styling | **Plain modern CSS** (no Tailwind) | Custom properties, `@layer`, `@property`, container queries, scroll-driven animations |
| Interactivity | Vanilla TS islands + Astro `<ClientRouter />` | View Transitions for page/section morphs; keep JS minimal |
| Content | Local TS/Markdown data in `src/data/` and `src/content/` | Single source of truth; see `CONTENT.md` |
| Fonts | Self-hosted (woff2) via `@font-face` | No external font CDN at runtime (perf + offline build) |
| Deploy | **GitHub Pages** via GitHub Actions | `withastro/action`; see `DEPLOY.md` |

> Decisions are intentionally framework-light: the output must be clean static **HTML + CSS** that runs anywhere, including GitHub Pages.

## Repository Structure (target)

```
own_portfolio/
├── astro.config.mjs          # site + base configured for GitHub Pages
├── package.json
├── tsconfig.json
├── public/                   # static assets copied as-is (favicon, og image, fonts, resume.pdf)
│   ├── fonts/
│   └── resume.pdf
├── src/
│   ├── pages/
│   │   └── index.astro       # the one-page portfolio (sections composed here)
│   ├── layouts/
│   │   └── Base.astro        # <head>, meta/OG, ClientRouter, global CSS import
│   ├── components/
│   │   ├── sections/         # Hero, About, Skills, Projects, Experience, Contact
│   │   └── ui/               # Buttons, Cards, Marquee, Cursor, etc.
│   ├── data/
│   │   ├── profile.ts        # name, tagline, contact, socials
│   │   ├── projects.ts       # MobiOrbit, MyCareerPathshala, Economed, ...
│   │   ├── skills.ts         # grouped skill data
│   │   └── experience.ts
│   ├── styles/
│   │   ├── global.css        # reset, tokens (@layer base), utilities
│   │   ├── tokens.css        # design tokens (colors, type scale, spacing)
│   │   └── motion.css        # keyframes, scroll-timeline, reduced-motion
│   └── lib/                  # tiny TS helpers (intersection, magnetic, tilt)
└── .github/workflows/deploy.yml
```

## Commands

```bash
npm install
npm run dev        # local dev server (http://localhost:4321)
npm run build      # static build → ./dist
npm run preview    # preview the production build locally
```

## Conventions & Guardrails

- **No Tailwind, no CSS-in-JS, no UI kit.** Hand-written CSS is a feature here. Use CSS layers (`@layer reset, tokens, base, components, utilities`).
- **Design tokens first.** All colors, spacing, radii, type sizes come from CSS custom properties in `tokens.css`. No hard-coded hex in components.
- **Light-JS.** Prefer CSS-only animation (scroll-driven animations, `:has()`, transitions). Add a TS island only when CSS can't do it. Each island must be `client:visible` or `client:idle`, never `client:load` unless required.
- **Accessibility is non-negotiable.** Every animation must honor `@media (prefers-reduced-motion: reduce)`. Maintain semantic HTML, focus states, color contrast ≥ 4.5:1, and `alt` text.
- **Performance budget.** Lighthouse ≥ 95 across the board. Ship < 50 KB JS on first load. Self-host fonts, lazy-load images, use Astro `<Image>`.
- **Content is data-driven.** Never hard-code project copy inside markup — import from `src/data/*`. Update `CONTENT.md` and the data files together.
- **GitHub Pages base path.** If the repo is `username.github.io` → `base: '/'`. If it's a project repo (e.g. `portfolio`) → `base: '/portfolio/'`. All internal links/assets must respect `import.meta.env.BASE_URL`. See `DEPLOY.md`.

## Do

- Keep `index.astro` thin — compose section components.
- Co-locate component styles in `.astro` `<style>` blocks; put shared tokens/keyframes in `src/styles/`.
- Add a `prefers-reduced-motion` fallback in the same file as any animation.
- Test the production build (`npm run build && npm run preview`) before deploy — GitHub Pages serves `dist/`, not dev.

## Do Not

- Do not install Tailwind, Bootstrap, MUI, or any component library.
- Do not load fonts/scripts from third-party CDNs at runtime.
- Do not use `client:load` everywhere — it defeats Astro's performance model.
- Do not hard-code the production URL or base path in components — use `BASE_URL`.
- Do not commit `node_modules/` or `dist/` (CI builds them).

## Reference Docs

- `ABOUT_ME.md` — **complete personal knowledge base** (read this first).
- `assets/` — headshot (`headshot.png`) and résumé (`.docx`/`.pdf`); copy what you need into `public/`.

- `README.md` — quick start for humans.
- `PLAN.md` — architecture, page/section breakdown, build milestones.
- `DESIGN.md` — design system + the animation/interaction spec (the "unique" part).
- `CONTENT.md` — the real copy and project data (source of truth for `src/data/`).
- `DEPLOY.md` — GitHub Pages setup, base path, custom domain, CI workflow.
