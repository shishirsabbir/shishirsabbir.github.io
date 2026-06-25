# PLAN.md — Architecture & Build Roadmap

## 1. Objective

Ship a single-page (scroll-narrative) portfolio that feels **bespoke and alive** — advanced CSS, tasteful heavy animation, fast and accessible — and deploys cleanly to GitHub Pages.

## 2. Information Architecture

One long page, anchor-navigated, with these sections in order:

1. **Hero** — name, role, one-line value prop, animated background, primary CTAs (View Work, Download Resume, Email).
2. **About** — short narrative (self-taught since 2019, full-stack + automation), photo, quick stats (years coding, projects shipped, products scraped).
3. **Skills** — grouped, animated tech grid + marquee of logos/keywords.
4. **Projects** — the centerpiece. Featured case-study cards: MobiOrbit, MyCareerPathshala, Economed, plus a "more work" strip (scraping pipelines, cross-platform builds).
5. **Experience** — freelance timeline + the academic thesis line.
6. **Contact** — email, location, socials, GitHub (placeholder until live), download resume.
7. **Footer** — back-to-top, built-with note, copyright.

Optional later: `/projects/[slug]` detail pages reusing the same data.

## 3. Component Plan

| Component | Type | Notes |
|-----------|------|-------|
| `Base.astro` (layout) | static | head/meta/OG, global CSS, `<ClientRouter />` |
| `Hero.astro` | static + 1 island | animated gradient/mesh bg (CSS), magnetic CTA (TS island) |
| `About.astro` | static | scroll-reveal text, stat counters (CSS or tiny island) |
| `Skills.astro` | static | CSS grid, hover micro-interactions, `Marquee.astro` |
| `Projects.astro` | static | sticky/pinned scroll showcase, 3D-tilt cards (island) |
| `Experience.astro` | static | CSS scroll-driven timeline progress line |
| `Contact.astro` | static | mailto, copy-to-clipboard email (tiny island) |
| `ui/Cursor.astro` | island | custom cursor (disabled on touch + reduced-motion) |
| `ui/Marquee.astro` | static | CSS-only infinite scroll |
| `ui/Reveal.astro` | static | wrapper applying scroll-driven reveal animation |

## 4. Data Model (`src/data/`)

```ts
// projects.ts
export interface Project {
  slug: string;
  name: string;
  tagline: string;
  role: 'Founder / Solo' | 'Solo' | 'Freelance';
  status?: string;            // "in active development"
  url?: string;               // mobiorbit.com, economed.co.uk
  highlights: string[];       // bullet achievements
  stack: string[];            // chips
  featured: boolean;
  accent?: string;            // per-project accent color token
}
```

Mirror simple interfaces for `skills.ts`, `experience.ts`, `profile.ts`. All copy comes from `CONTENT.md`.

## 5. Build Milestones

- [ ] **M0 — Scaffold.** `npm create astro` (Empty, TS strict). Add `astro.config.mjs` with `site`/`base`. Commit.
- [ ] **M1 — Foundations.** `tokens.css`, `global.css` (reset + layers), self-hosted fonts, `Base.astro`, container + section primitives.
- [ ] **M2 — Content data.** Fill `src/data/*` from `CONTENT.md`. Static, unstyled sections rendering real text.
- [ ] **M3 — Layout & type.** Section rhythm, responsive grid, typographic scale, dark/light handling. Looks good with zero animation.
- [ ] **M4 — Signature motion.** Implement the `DESIGN.md` animation set (scroll-driven reveals, hero bg, pinned projects, marquee, custom cursor, tilt). Add reduced-motion fallbacks alongside each.
- [ ] **M5 — Polish & a11y.** Focus states, keyboard nav, contrast, alt text, OG/meta, favicon, 404.
- [ ] **M6 — Perf.** Image optimization, font subsetting, Lighthouse ≥ 95, JS budget check.
- [ ] **M7 — Deploy.** GitHub Actions → Pages (see `DEPLOY.md`). Verify base path, links, assets.

## 6. Responsive Strategy

- Mobile-first. Breakpoints via container queries where possible.
- Heavy effects (custom cursor, pinned scroll, 3D tilt) **progressively enhanced** — off on touch/small screens and under reduced-motion.
- Test at 360px, 768px, 1024px, 1440px.

## 7. Risks / Notes

- **GitHub Pages base path** is the #1 gotcha — bake `BASE_URL` into all asset/link helpers from M1.
- Scroll-driven animations (`animation-timeline`) lack full cross-browser support — provide IntersectionObserver fallback in `lib/` for non-supporting browsers.
- Keep the animation tasteful: motion should guide attention, never block reading or interaction.
