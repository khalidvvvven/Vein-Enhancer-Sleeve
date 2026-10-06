# WARMUP — Vein Enhancer Sleeve

Single-page product website for the **WARMUP Vein Enhancer Sleeve**: an arm-warming sleeve with an integrated mitten and heat-pack pouches, designed to support preparation for blood draws and IV placement. Informational only, with no commerce.

> **Status:** local build for review. Nothing has been deployed or published.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173 (hot reload)
npm run build     # type-check, build, prerender static HTML into dist/
npm run preview   # serve dist/ at http://localhost:4173
```

## Design direction: "the page warms up"

The WARMUP logo runs cobalt → violet → wine → signal red, which is a cold-to-warm scale. The site uses that as its design language:

- A thin **thermal line** in the logo gradient tracks scroll progress under the header, connects the How It Works steps (cool → warm) and marks the coverage rail in the hero.
- The hero product panel plays a single **cool-to-warm glow** on load.
- The palette is taken from the product itself: cream fleece, charcoal knit, warm off-white paper, and deep navy type.
- Type: Instrument Sans (clinical clarity), Instrument Serif italic (human warmth, used sparingly), IBM Plex Mono (spec-sheet labels).
- A faint **cutting-mat grid** behind the product views refers back to how the prototype was photographed.

## Sections

1. Header: logo, Product / How it works / Features / Research, mobile menu
2. Hero: worn-arm photo with callouts (Velcro strap, heat-pack pouch, **integrated mitten**) and a hand-to-upper-arm coverage rail
3. Why warmth (`#product`): principle, illustrative cool-vs-warm vein cross-section (clearly captioned)
4. How it works: Position → Warm → Prepare, with schematic drawings that warm up step by step
5. Anatomy (`#features`): flat-lay photo with five engineered callouts plus an "as worn" mitten inset
6. Clinical use: blood draws, IV placement, inpatient stays, and the single-patient journey
7. Comfort: patient-comfort framing without outcome claims
8. Materials: close-up crops from the real prototype
9. Research (`#research`): the four client-supplied references in expandable panels, with a note that they are not WARMUP studies
10. Closing: as worn + laid flat, feature summary, footer with a responsible-use notice

## Editing content

All copy lives in [`src/content/site.ts`](src/content/site.ts): headlines, callout labels and positions, features, references and footer notice. Layout code doesn't need to change for copy edits.

## Project structure

```
source-assets/
  client-original/     Untouched client files (photos, brief .docx, logo EPS/PDF/PNG/JPG, original ZIP)
  cutouts/             Background-removed product masters (PNG + alpha) and the script used
scripts/
  build-images.mjs     npm run images: AVIF/WebP derivatives, crops, logo SVG, favicons, OG image
  prerender.mjs        Renders the app to static HTML after the Vite build
public/
  img/                 Generated responsive images (do not edit by hand)
  brand/               Logo SVG (converted from the client PDF), favicons, social image
src/
  content/site.ts      All copy
  components/          One component + stylesheet per section
  styles/index.css     Tokens, typography, base styles, motion
review/
  screenshots/         QA screenshots at 1440 / 1024 / 768 / 390
  qa-report.txt        Automated QA output (console, overflow, axe-core, keyboard, menu)
```

## Image pipeline

- The client originals are **never modified**. Every web image is a derivative written to `public/img/`.
- The product cutouts in `source-assets/cutouts/` were made with [rembg](https://github.com/danielgatis/rembg) using the `birefnet-general` model (`remove-background.py`). The product itself is not retouched, recoloured or reshaped.
- `npm run images` regenerates every derivative. It needs `pdftocairo` (poppler-utils) for the logo.

## Quality notes

- The page is prerendered to static HTML and readable without JavaScript. JS only adds the header behaviour and reveal animations.
- Images carry intrinsic width/height (no layout shift), are lazy-loaded below the fold, and are served as AVIF with WebP fallback.
- `prefers-reduced-motion` turns off all motion; content is never hidden without JS.
- axe-core (WCAG 2.1 A/AA + best practice) reports 0 violations at all four tested widths. See `review/qa-report.txt`.
