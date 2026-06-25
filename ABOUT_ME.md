# ABOUT_ME.md — Full Personal Knowledge Base

> Purpose: a single, authoritative dump of everything about **Shishir Sabbir** so any AI assistant (Claude Code, etc.) opened in this folder has full context to build the portfolio and write accurate copy. Pair this with `CONTENT.md` (curated site copy) — this file is the deeper raw reference.

## 1. Identity & Contact

- **Name:** Shishir Sabbir (full forms seen: "Sabbir Ahamed Shishir")
- **Title:** Full-Stack Developer
- **Positioning:** Full-stack developer with an edge in **extreme web automation & scraping**; strong in **Shopify** and **self-hosted full-stack platforms**.
- **Location:** Rajshahi, Bangladesh
- **Email:** shishir.sabbir@gmail.com  (also seen: shishirsabbirahamed@gmail.com)
- **Phone:** +880 1883 061280
- **GitHub:** https://github.com/shishirsabbir  (portfolio site to be hosted from here / `*.github.io`)
- **Telegram:** https://t.me/shishirsabbir  ·  **WhatsApp:** https://wa.me/8801883061280
- **Headshot:** `assets/headshot.png` (square; dark hoodie, yellow background)
- **Résumé:** `assets/Shishir_Sabbir_Resume.docx` and `assets/Shishir_Sabbir_Resume.pdf`

## 2. Background & Learning Timeline

- **2019** — Started programming: **C**, then **Python**, then **Node.js** with advanced **HTML/CSS**. Began working as a web developer.
- **Late 2020** — Backend foundations: **FastAPI + SQLAlchemy**, **Express + MongoDB/Mongoose**.
- **2020 → present** — Freelance full-stack developer (independent / remote).
- Deep dive into **web automation & scraping** (Playwright, Selenium, BeautifulSoup4, selectolax, httpx, requests, curl_cffi, Scrapy, Cheerio.js, Axios, pendulum) and **all major databases** (MS SQL Server, MariaDB, MySQL, PostgreSQL, SQLite, MongoDB).
- Expanded into **React, Next.js (App Router), Svelte, React Native, Electron**, and ORMs (**Sequelize, Drizzle, SQLModel, dataclasses**), plus servers **Fastify, Koa**, runtime tooling **Bash, Docker**, and full **VPS hosting** ("can host a website on any VPS").
- **Self-taught**, currently pursuing a **B.Sc. in Computer Science at Hebei University of Science and Technology** (in progress). (Note: an older 2022 certificate references Chandigarh University / UID 21BCS6707 + a LinkedIn Learning entrepreneurship path — user has confirmed the resume should show **Hebei**.)

## 3. Complete Skill Inventory

- **Languages:** JavaScript, TypeScript, Python, C, Bash, SQL
- **Frontend:** React, Next.js (App Router), Vite, Svelte, React Native, Electron, Tailwind, CSS Modules, HTML5, Advanced CSS
- **Backend:** Node.js, Fastify, Express, Koa, FastAPI; REST & GraphQL APIs; JWT auth; **high-performance asynchronous applications** (asyncio, async/await)
- **Databases:** PostgreSQL, MySQL, MariaDB, MS SQL Server, SQLite, MongoDB
- **ORMs / data mapping:** Drizzle, SQLAlchemy, SQLModel, Sequelize, Mongoose, Python dataclasses
- **Machine Learning & Data Science:** NumPy, pandas, Matplotlib, OpenCV, scikit-learn; very comfortable in **Jupyter / IPython (ipykernel)** notebooks
- **Web Automation & Scraping:** Playwright, Selenium, Scrapy, BeautifulSoup4, selectolax, httpx, requests, curl_cffi, Cheerio.js, Axios, pendulum
- **E-commerce / CMS:** Shopify (Liquid, Admin API incl. GraphQL, Storefront API), Strapi 5 (forked & extended)
- **Browser extensions:** Chrome Extensions (Manifest V3, Shadow DOM, content scripts)
- **Infra / DevOps:** Docker, Coolify (self-hosted PaaS), Nginx, Cloudflare (R2 object storage, DNS), Let's Encrypt/Certbot, PM2, monorepos (pnpm, Yarn workspaces, Turborepo, Nx), VPS provisioning & self-hosting, Git, Linux (Ubuntu)

## 4. Projects (Deep Detail)

### 4.1 MobiOrbit — Smartphone Database & Commerce Platform  *(Founder / solo; in active development)*
- **Domain:** mobiorbit.com
- **What it is:** A mobile-phone spec database + commerce platform for **South Asia** (Bangladesh, India, Pakistan, Sri Lanka, Nepal, Bhutan, Maldives). Stores specs for devices, lets users compare/filter, and surfaces "cheapest price" discovery. Target: 100,000 visitors within 3 months of launch.
- **Architecture:** One **Fastify** API powers two frontends. `pnpm + Turborepo` monorepo.
  - **API:** Fastify 5 (TypeScript), `@fastify/type-provider-typebox`, `@fastify/jwt`; **raw `mongodb` driver v6** (no ODM) with typed interfaces; routes by domain; business logic in `services/`; Mongo `_id` always serialized as `id: string`; kebab-case slugs as public identifiers.
  - **Public web:** **Next.js 15** (App Router, CSS Modules, ISR; `revalidateTag` on device update).
  - **Admin:** **Vite 6 + React 19**, React Router v7, TanStack Query v5, Tailwind v4; a **custom, from-scratch Polaris-inspired component library** (never Shopify Polaris); helpers like `UrlField`, `SlugField`, `SearchableSelect`.
  - **Shared types:** `packages/types` (plain TS interfaces).
  - **Storage:** images on **Cloudflare R2** (only URLs in Mongo).
- **Data acquisition:**
  - Standalone **Python GSMArena scraper** (session/fetch/parser/images/storage/queue; `queue.db`).
  - **mobiCrawl Chrome extension** (Manifest V3): floating action button on GSMArena pages, Shadow-DOM isolation, BEM CSS, scrapes specs to the local API, catalogue linking + match badge.
- **Launch scope (Phase 1):** Google AdSense only; affiliate engine + self-service merchant ad panel deferred until ~100k monthly visitors; single launch price per device; user reviews/ratings + Q&A planned post-launch on a lightweight public-user auth (separate from admin JWT/RBAC).
- **Principles:** no fake data; mobile-first performance on 3G/4G; regional-first thinking; "Lindy-stable" ad layout (UI first).
- **Dev ports:** API 8000, Admin 5173, Web 3000.

### 4.2 MyCareerPathshala — Full-Stack Education Platform  *(solo)*
- **What it is:** An education platform for students (universities, medical colleges, courses, countries, streams, blogs).
- **Components:**
  - **Backend:** **Strapi 5** CMS — **forked and extended** (Yarn-workspace monorepo housing Strapi core packages); exposes **REST & GraphQL**; custom content types (blog, university, medical-college, course, country, stream), components, plugin extensions (users-permissions), custom **rich-editor plugin (TipTap)**, policies, middlewares, cron tasks.
  - **Frontend:** **Next.js** (App Router) student site.
  - **Admin:** separate **Next.js** dashboard with a `(protected)` route group + middleware-enforced auth.
- **Data:** **Drizzle ORM** on **PostgreSQL** (schema is single source of truth; `tablesFilter` scoping); SQLite for some dev.
- **Auth:** JWT (`jose`) + bcrypt; route-level middleware.
- **Email:** Resend provider.
- **Deployment:** all three apps as **Docker** containers on a **Hostinger VPS via Coolify** (self-hosted PaaS), **Nginx** reverse proxy, **Cloudflare DNS**, **Let's Encrypt/Certbot** SSL. (Earlier iterations used PM2 + Yarn 4 + Node 22 via nvm; Postgres `mcpcms` + `mcpapp` DBs.) Domain: cms.mycareerpathshala.com.
- **Notable:** entire stack designed, built, and deployed **solo**.

### 4.3 Economed.co.uk — Shopify E-commerce Store  *(freelance)*
- **What it is:** A production Shopify store.
- **Highlights:** Scraped & processed **70,000+ products** into an automated pipeline (clean → normalize → bulk import, zero manual entry); built a complete store with **custom Liquid** theming; drove the entire product pipeline through the Shopify **Admin API (GraphQL)** — automating product creation, updates, variants, inventory at scale.
- **Stack:** Shopify, Liquid, Admin GraphQL API, Python scraping toolchain (Scrapy, Playwright, httpx, curl_cffi), SQL.

### 4.4 Secondary work
- **Product scraping & data pipelines** — large-scale e-commerce extraction → normalized SQL (Scrapy, Playwright, Selenium, selectolax, BeautifulSoup4, curl_cffi; Postgres / MS SQL Server).
- **Cross-platform builds** — desktop & mobile from a shared TS skill set (React Native, Electron, Next.js, Svelte, SQLite).

## 5. Experience Summary

- **Freelance Full-Stack Developer (2020 – present, remote):** end-to-end client web apps; Shopify & Strapi customization; large-scale scraping/automation with anti-bot handling; VPS deployment & self-hosting.
- **Web Developer (2019 – 2020):** moved from C/Python fundamentals into professional web development; first backends (FastAPI+SQLAlchemy, Express+MongoDB).

## 6. Education & Research

- **B.Sc. Computer Science — Hebei University of Science and Technology** *(in progress)*.
- **Undergraduate thesis (weld_pool / "Sparks to Algorithms"):** deep-learning-based **weld-pool penetration sensing** via **biprism stereo vision**. Key ideas: single-camera biprism produces stereo pairs → disparity map; **DE-Net (Detail-Enhanced Network)** with an **EAFO** (Edge-Aware Adaptive Feature Optimization) module and disparity optimization (L-R consistency + interpolation); **Comprehensive Features (CF)** describing pool shape (width/height/curvature) to classify penetration as partial / full / excessive. Demonstrates applied **computer vision + ML** (OpenCV, scikit-learn, NumPy/pandas, Jupyter).

## 7. Voice, Preferences & Constraints (for writing copy)

- Tone: confident, concrete, engineering-credible; let the work speak. Avoid fluff and clichés.
- Communication preference: concise and direct; minimal verbosity.
- Design preference for the portfolio: **very unique, modern, heavily-animated, advanced-CSS** (see `DESIGN.md`); light-blue accent matching the résumé.
- Accuracy: do **not** invent metrics, employers, or dates. The figures here (70,000+ products, 2019 start, solo builds) are user-confirmed. Mark anything uncertain.
- GitHub is live: https://github.com/shishirsabbir (the portfolio repo/site will be hosted from here).

## 8. Ready-Made Copy Snippets

**Economed work-achievements (English, <1000 chars) — for job platforms:**
```
Shopify Developer — Economed.co.uk (E-commerce Store)
1. Scraped and processed 70,000+ products into a fully automated data pipeline that cleaned, normalized, and bulk-imported the entire catalog with zero manual entry.
2. Built a complete, production-ready Shopify store from the ground up with custom Liquid theming tailored to the brand.
3. Engineered the end-to-end product pipeline through the Shopify Admin API (GraphQL) — automating product creation, updates, variants, and inventory at scale.
4. Delivered a launch-ready storefront handling a large catalog while keeping performance and data accuracy high.
```

## 9. Assets in This Folder

- `assets/headshot.png` — profile photo (square).
- `assets/Shishir_Sabbir_Resume.docx` / `.pdf` — current résumé (two-column, light-blue design).
- `CONTENT.md` — curated portfolio copy. `DESIGN.md` — visual + motion spec. `PLAN.md` — build roadmap. `DEPLOY.md` — GitHub Pages. `CLAUDE.md` — contributor guide.
