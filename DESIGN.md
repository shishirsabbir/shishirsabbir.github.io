# DESIGN.md — Design System & Signature Motion

The portfolio's identity = **restraint in layout, boldness in motion**. Clean grid, generous whitespace, one confident accent — then advanced CSS animation that makes it memorable. This file is the spec; implement tokens in `src/styles/tokens.css` and motion in `src/styles/motion.css`.

## 1. Art Direction

- **Mood:** modern, precise, slightly futuristic; "engineer who cares about craft."
- **Light-blue forward** accent (matches the resume) over a near-neutral base. Optional dark mode.
- Subtle **grain/noise** overlay + soft **gradient mesh** to avoid flat sterility.
- Motion is **choreographed**, not random: elements arrive with intent on scroll, respond to the cursor, and transitions feel physical.

## 2. Color Tokens

```css
:root {
  /* base */
  --bg:            #f7fafd;   /* page background */
  --surface:       #ffffff;   /* cards */
  --text:          #1f2733;   /* primary text */
  --muted:         #5a6473;   /* secondary text */
  --line:          #e2ecf6;   /* hairlines/borders */

  /* accent — light blue family */
  --accent:        #2e7dc4;   /* primary accent */
  --accent-600:    #2467a6;
  --accent-300:    #5ea3d8;
  --accent-100:    #eaf3fc;   /* tints, sidebar-style fills */
  --accent-glow:   #7cc0ff;   /* highlights, glows */

  /* gradients */
  --grad-hero: radial-gradient(120% 120% at 20% 10%, #eaf3fc 0%, #f7fafd 45%, #ffffff 100%);
  --grad-accent: linear-gradient(120deg, var(--accent-300), var(--accent), var(--accent-600));
}

/* optional dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --bg:#0b1220; --surface:#121b2b; --text:#e7eef7; --muted:#9fb0c4;
    --line:#1e2c40; --accent:#5ea3d8; --accent-100:#10203a;
    --grad-hero: radial-gradient(120% 120% at 20% 10%, #10203a 0%, #0b1220 60%, #0b1220 100%);
  }
}
```

Contrast rule: body text on `--bg` must be ≥ 4.5:1; large text ≥ 3:1.

## 3. Typography

- **Display/Headings:** a characterful but legible sans (e.g. *Clash Display*, *Space Grotesk*, or *General Sans*) — self-hosted woff2.
- **Body:** *Inter* / *Calibri-like* neutral sans, self-hosted.
- **Mono (accents, labels, code chips):** *JetBrains Mono* or *Space Mono*.
- **Fluid type scale** with `clamp()`:

```css
:root{
  --step--1: clamp(.83rem,.78rem + .25vw,.95rem);
  --step-0:  clamp(1rem,.93rem + .35vw,1.18rem);
  --step-1:  clamp(1.3rem,1.1rem + .9vw,1.7rem);
  --step-2:  clamp(1.8rem,1.4rem + 1.8vw,2.6rem);
  --step-3:  clamp(2.6rem,1.9rem + 3.4vw,4.2rem);
  --step-4:  clamp(3.4rem,2.2rem + 6vw,6.5rem);   /* hero name */
}
```

## 4. Spacing, Radii, Layout

```css
:root{
  --space-1:.5rem; --space-2:1rem; --space-3:1.5rem; --space-4:2.5rem;
  --space-5:4rem;  --space-6:6.5rem; --section-y: clamp(4rem,10vh,9rem);
  --radius:14px; --radius-lg:24px; --maxw:72rem; --gutter:clamp(1rem,4vw,3rem);
}
```

- Use **CSS layers**: `@layer reset, tokens, base, components, utilities;`
- Container: `.container{ width:min(var(--maxw),100% - 2*var(--gutter)); margin-inline:auto; }`
- Prefer **CSS Grid** for section layouts; **container queries** for component responsiveness.

## 5. Signature Motion Spec

Each effect below must ship with a `prefers-reduced-motion: reduce` fallback (usually: show final state, no transform/opacity animation).

### 5.1 Scroll-driven reveals (CSS-first)
Use modern scroll-driven animations with an IntersectionObserver fallback.
```css
@keyframes reveal { from{opacity:0; translate:0 24px; filter:blur(6px);} to{opacity:1; translate:0 0; filter:none;} }
@supports (animation-timeline: view()) {
  .reveal{ animation: reveal linear both; animation-timeline: view(); animation-range: entry 0% cover 30%; }
}
@media (prefers-reduced-motion: reduce){ .reveal{ animation:none; opacity:1; translate:0; filter:none; } }
```
Fallback: `lib/reveal.ts` adds `.is-visible` via IntersectionObserver when `animation-timeline` is unsupported.

### 5.2 Hero animated background
Animated **gradient mesh** + **conic glow** using `@property` for smoothly animatable angles, plus a slow drift. Keep it GPU-cheap (transform/opacity only). Layer a tiling SVG noise at low opacity.
```css
@property --ang { syntax:'<angle>'; inherits:false; initial-value:0deg; }
.hero-glow{ background: conic-gradient(from var(--ang), var(--accent-300), transparent 40%); animation: spin 18s linear infinite; }
@keyframes spin{ to{ --ang:360deg; } }
```

### 5.3 Kinetic headline
Hero name does a **per-letter stagger** reveal (split into spans at build time, animated with `animation-delay: calc(var(--i)*40ms)`), plus a subtle gradient-text shimmer on `--accent` using `background-clip:text`.

### 5.4 Magnetic + tilt interactions
- **Magnetic CTAs:** buttons translate slightly toward the cursor (`lib/magnetic.ts`, pointer-fine only).
- **3D tilt project cards:** `rotateX/rotateY` from pointer position with `transform-style:preserve-3d` and a soft glare layer. Disabled on touch/reduced-motion.

### 5.5 Pinned project showcase
Projects section uses **position: sticky** to pin the visual while case-study text scrolls — a "scrollytelling" reveal of MobiOrbit → MyCareerPathshala → Economed. CSS-only where possible.

### 5.6 Marquee
CSS-only infinite **tech marquee** (`Marquee.astro`) with duplicated track and `translate` animation; pauses on hover and under reduced-motion.

### 5.7 View Transitions
Enable Astro `<ClientRouter />`; use `view-transition-name` on shared elements (hero name, project titles) so anchor/section/page changes morph smoothly.

### 5.8 Custom cursor (progressive enhancement)
A blended-difference dot/ring follower (`ui/Cursor.astro`) that scales on interactive hover. Only on `(pointer:fine)` and when motion allowed; native cursor stays as fallback.

### 5.9 Micro-details
- Animated underline links (`background-size` transition).
- Number **count-up** stats on first view.
- Section index labels in mono (`/01 — About`).
- Soft elevation + accent glow on card hover.

## 6. Accessibility & Performance Guardrails

- Global: `@media (prefers-reduced-motion: reduce){ *{ animation-duration:.001ms !important; transition-duration:.001ms !important; scroll-behavior:auto !important; } }` — then opt specific elements back to their static end-state.
- Visible focus rings (`:focus-visible`) with accent outline.
- All interactive targets ≥ 44px; keyboard-navigable; skip-to-content link.
- Self-host + subset fonts; `font-display: swap`.
- Animate only `transform`, `opacity`, `filter`. Avoid layout-thrashing properties.
- Respect `prefers-color-scheme`; test both themes.

## 7. Don'ts

- No autoplaying audio/video, no scroll-hijacking that traps the user, no motion that blocks reading.
- No giant hero libraries (GSAP/Three) unless a specific effect truly needs it — reach for CSS first.
