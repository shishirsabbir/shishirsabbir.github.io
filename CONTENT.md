# CONTENT.md — Portfolio Copy & Data (Source of Truth)

All site text lives here first, then is transcribed into `src/data/*`. Keep this file authoritative.

## Profile

- **Name:** Shishir Sabbir
- **Role:** Full-Stack Developer
- **Specialties:** Web Automation & Scraping · Shopify · Self-hosted full-stack platforms
- **Location:** Rajshahi, Bangladesh
- **Email:** shishir.sabbir@gmail.com
- **Phone:** +880 1883 061280
- **GitHub:** https://github.com/shishirsabbir
- **Telegram:** https://t.me/shishirsabbir
- **WhatsApp:** https://wa.me/8801883061280  (+880 1883 061280)
- **Photo:** `public/og` / hero uses `DP.png` (square headshot, in the parent `resume` folder)

### Taglines (pick/iterate)
- "I build complete products end to end — from scrapers to storefronts to self-hosted platforms."
- "Full-stack developer who ships: monorepos, APIs, automation, and pixel-clean frontends."
- "Self-taught since 2019. JavaScript/TypeScript + Python. Automation is my edge."

## About

Self-taught developer building since 2019 — started with C and Python, moved through Node.js and advanced CSS into professional web development, and now work full-stack across the JavaScript/TypeScript and Python ecosystems. I design and ship entire products: monorepo architectures, REST/GraphQL APIs, SQL and NoSQL data layers, modern React/Next.js frontends, and self-hosted VPS deployments. My edge is large-scale **web automation and scraping**, and building/customizing **Shopify** and **Strapi** platforms.

### Quick stats (for animated counters)
- **6+** years coding (since 2019)
- **70,000+** products scraped & pipelined (Economed)
- **3** full platforms built solo (MobiOrbit, MyCareerPathshala, Economed)
- **15+** databases, frameworks & automation tools in daily use

## Skills (grouped)

- **Languages:** JavaScript, TypeScript, Python, C, Bash, SQL
- **Frontend:** React, Next.js (App Router), Vite, Svelte, React Native, Electron, Tailwind, CSS Modules, HTML5, Advanced CSS
- **Backend:** Node.js, Fastify, Express, Koa, FastAPI; REST & GraphQL APIs, JWT auth, high-performance async (asyncio, async/await)
- **Databases & ORMs:** PostgreSQL, MySQL, MariaDB, MS SQL Server, SQLite, MongoDB; Drizzle, SQLAlchemy, SQLModel, Sequelize, Mongoose
- **Machine Learning & Data:** NumPy, pandas, Matplotlib, OpenCV, scikit-learn; Jupyter / IPython notebooks
- **Web Automation & Scraping:** Playwright, Selenium, Scrapy, BeautifulSoup4, selectolax, httpx, requests, curl_cffi, Cheerio.js, Axios, pendulum
- **Platforms & CMS:** Shopify (Liquid, Admin & Storefront API), Strapi 5 (forked/extended), Chrome Extensions (Manifest V3)
- **Infra & DevOps:** Docker, Coolify, Nginx, Cloudflare (R2, DNS), Let's Encrypt, pnpm/Yarn/Turborepo monorepos, VPS self-hosting, Git, Linux

## Projects

### 1. MobiOrbit — Smartphone Database & Commerce Platform  *(Founder / Solo · in active development)*
- **URL:** mobiorbit.com
- **One-liner:** A South-Asia smartphone intelligence & commerce platform — device specs, comparison, and search, built ad-ready from day one.
- **Highlights:**
  - Architected as a **pnpm + Turborepo monorepo**: a **Fastify 5 + TypeScript** API (raw MongoDB driver, JWT auth), a **Next.js 15** public site (App Router, ISR), and a **Vite + React 19** admin panel with a custom, from-scratch Polaris-inspired component library.
  - Built a Python **GSMArena scraper** plus a companion **mobiCrawl Chrome extension** (Manifest V3, Shadow DOM isolation) to capture device specs; media served from **Cloudflare R2**.
  - Clean architecture: services layer, slug-based routing, raw-driver Mongo with typed interfaces (no ODM).
- **Stack:** Fastify, TypeScript, MongoDB, Next.js 15, React 19, Vite, Turborepo, Cloudflare R2, Chrome Extension MV3, Python

### 2. MyCareerPathshala — Full-Stack Education Platform  *(Solo)*
- **URL:** www.mycareerpathshala.com (public) · cms.mycareerpathshala.com (Strapi CMS) · admin.mycareerpathshala.com (admin dashboard)
- **One-liner:** An education platform for students — custom CMS, public site, and admin dashboard, deployed solo.
- **Highlights:**
  - Built a custom CMS by **forking and extending Strapi 5** (Yarn monorepo) exposing **REST and GraphQL** APIs.
  - **Next.js** student frontend + a separate **Next.js** admin dashboard; **Drizzle ORM on PostgreSQL**; JWT (jose) + bcrypt auth with middleware-protected routes; transactional email via Resend.
  - Deployed all three apps as **Docker** containers on a Hostinger **VPS via Coolify**, with **Nginx**, Cloudflare DNS, and **Let's Encrypt** SSL.
- **Stack:** Strapi 5 (forked), Next.js, Drizzle, PostgreSQL, Docker, Coolify, Nginx, Cloudflare

### 3. Economed.co.uk — Shopify E-commerce Store  *(Freelance)*
- **URL:** economed.co.uk
- **One-liner:** A production Shopify store powered by a 70,000-product automated data pipeline.
- **Highlights:**
  - Scraped and processed **70,000+ products** into an automated pipeline that cleans, normalizes, and bulk-imports the full catalog.
  - Built a complete store with **custom Liquid** theming, driving the product pipeline through the Shopify **Admin API (GraphQL)**.
- **Stack:** Shopify, Liquid, Admin GraphQL API, Python (Scrapy/Playwright/httpx/curl_cffi), SQL

### More work (secondary strip)
- **Product scraping & data pipelines** — large-scale e-commerce extraction → normalized SQL (Scrapy, Playwright, Selenium, selectolax, curl_cffi).
- **Cross-platform app builds** — desktop & mobile from a shared TS skill set (React Native, Electron, Next.js, Svelte, SQLite).

## Experience

**Freelance Full-Stack Developer** — 2020 to Present · Independent / Remote
- Deliver end-to-end web apps for clients — frontend, REST/GraphQL APIs, database design, deployment and VPS self-hosting.
- Build/customize Shopify and Strapi platforms; design large-scale scraping & automation systems with anti-bot handling.

**Web Developer (early career)** — 2019 to 2020
- Moved from programming fundamentals (C, Python) into professional web development; established backend foundations (FastAPI+SQLAlchemy, Express+MongoDB).

## Education

**B.Sc. in Computer Science** — Hebei University of Science and Technology *(in progress)*
- Undergraduate thesis: deep-learning–based **weld-pool penetration sensing** using biprism stereo vision — stereo matching, edge-aware CNN architectures (DE-Net), and 3D feature extraction for weld-quality classification.

## Calls to action

- **View Work** → scrolls to Projects
- **Download Résumé** → `public/resume.pdf`
- **Email me** → mailto:shishir.sabbir@gmail.com

## SEO / Meta

- **Title:** Shishir Sabbir — Full-Stack Developer & Automation Engineer
- **Description:** Full-stack developer specializing in web automation, scraping, Shopify, and self-hosted platforms. Builder of MobiOrbit, MyCareerPathshala, and Economed.
- **OG image:** generate a 1200×630 card with name, role, accent gradient, and headshot.
