# dev/designs — Portfolio design explorations

Six standalone, fully-animated single-page portfolio directions. Each uses real content
(`CONTENT.md` / `ABOUT_ME.md`), the actual headshot (`assets/headshot.png`), live project
links, a `prefers-reduced-motion` fallback, and the shared icon system. Open `index.html`
to browse them all with live animated previews.

| # | File | Direction |
|---|------|-----------|
| 01 | `aurora.html`  | Light · gradient mesh, glassmorphism, 3D-tilt, magnetic CTA (auto dark mode) |
| 02 | `nebula.html`  | Dark · terminal/grid, glow, glitch headline, code window, sticky scrollytelling |
| 03 | `kinetic.html` | Bold · editorial/Swiss-brutalist, oversized type, marquees |
| 04 | `prism.html`   | Colorful · rainbow gradients, animated blobs, per-brand color |
| 05 | `slate.html`   | Minimal · monochrome editorial, restrained motion (auto dark mode) |
| 06 | `bento.html`   | Modular · bento grid, each cell its own animated module |

## Icons — `icons.js`

Shared inline-SVG icon system. **Not react-icons** (that needs React + a bundler; the Astro
build targets zero-React / <50 KB JS). Instead the same upstream sources react-icons bundles:

- **Brand logos** → Simple Icons (with official brand colors)
- **UI / line icons** → Lucide

`icons.js` is generated (see `scratchpad/genicons.py`) and auto-decorates each page on load:

- `.chip` (and slate's `.srow__items span`) → brand logo prefix, matched by text via an alias map
- skill-category headers (`.skill h3`, `.srow__cat`, `.cell-skill .cell__label`) → Lucide category icon
- social/contact links → mail / phone / github / download glyphs
- button & link arrow glyphs (`→ ↗ ↓ ↑ ←`) → crisp Lucide arrows

**Per-template config (on `<body>`):**
- `data-icon-theme="dark|light|auto"` — drives a luminance clamp so dark brand logos
  (e.g. Next.js `#000`) stay visible on dark themes and white-ish logos stay visible on light.
- `data-icon-mono` — force all icons to `currentColor` (monochrome). Add this to `slate.html`
  or `kinetic.html` if brand colors feel too loud against their restrained palettes.

To add an icon: re-run `genicons.py` with the new Simple Icons slug / Lucide name, or add an
entry to the `ALIAS` map in `icons.js`.

> `dev/packages/react-icons-master/` is the react-icons **source/build harness only** — it
> contains no icon SVGs (the `icons/` dir is gitignored and populated at build time from
> upstream repos). Kept for reference; not used at runtime.
