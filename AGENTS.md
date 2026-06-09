# AI Coding Workshop — Agent Guide

This repo hosts the **participant follow-along guide** for *From Idea to Website: AI Coding for Beginners* — a beginner-friendly workshop on building a first website with AI coding tools (OpenCode + Neuralwatt).

The site is a static [Astro](https://astro.build) app. There are no slides, no React app shell, and no backend.

## Routes

| Route | File | Purpose |
| ----- | ---- | ------- |
| `/` | `src/pages/index.astro` | English guide (default) |
| `/fi/` | `src/pages/fi/index.astro` | Finnish guide |
| `/sv/` | `src/pages/sv/index.astro` | Swedish guide |

Each language page wraps raw HTML from `src/content/<lang>.html` inside `src/layouts/GuideLayout.astro`.

## Repository layout

```
src/
  content/          # Guide body HTML (en, fi, sv)
  layouts/          # GuideLayout.astro — head, hreflang, copy-button script
  pages/            # Astro routes (English at /, fi and sv at /fi/ and /sv/)
  styles/
    guide.css       # Guide page styles
public/
  assets/           # Fonts and screenshots (served at /assets/…)
docs/               # Facilitator notes + original HTML sources
  outline.md        # Workshop script and timing
  *-workshop-guide.html   # Standalone HTML sources (optional reference)
  assets/           # Source screenshots + font for standalone HTML
```

## Hard rules

- **Edit guide copy** in `src/content/<lang>.html`. If you also maintain the standalone HTML in `docs/`, keep both in sync.
- **Edit styles** in `src/styles/guide.css`. Do not inline large style blocks in Astro files.
- **Put deployable assets** (fonts, images) in `public/assets/`. Reference them as `/assets/…` in HTML.
- **Language links** must point to `/` (English), `/fi/`, `/sv/` — not `.html` filenames.
- **Do not add dependencies** unless clearly needed. Prefer plain HTML, CSS, and minimal Astro.
- **Do not touch** `package.json` or `astro.config.mjs` unless the task requires it.

## Content model

Guide pages are not Markdown or MDX. Each language file is a self-contained HTML fragment (the `.wrap` div and everything inside it) imported via `?raw` and injected with `<Fragment set:html={content} />`.

`GuideLayout.astro` owns:
- `<html lang>` and `<title>`
- `hreflang` alternate links
- Google Fonts (Rubik) + local Alsina heading font (via `guide.css`)
- Copy-to-clipboard buttons on `pre.prompt` blocks (inline script)

When adding a new section, follow existing patterns: numbered `<section id="…">`, `.card`, `.note`, `.btn-row`, track accordions (`<details class="track-accordion">`), and `pre.prompt` blocks for copyable prompts.

## Design tokens

Defined in `src/styles/guide.css`:

- Background `#faf9f5`, text `#141413`, accent `#d97757`
- UI font: Rubik. Heading font: Alsina (`/assets/alsina-ultrajada.woff`)
- Max content width: 720px

Match these when adding or restyling content.

## Common tasks

| Task | Where to edit |
| ---- | ------------- |
| Change guide text | `src/content/<lang>.html` |
| Add a screenshot | Copy to `public/assets/`, reference in content HTML |
| Update TOC / nav labels | Header `<nav class="toc">` in each `src/content/<lang>.html` |
| Change page title / meta | `title` const in `src/pages/<lang>/index.astro` |
| Facilitator script / timing | `docs/outline.md` |
| Planning / improvement notes | `docs/handout-improvements.md` |

## Deployment

- **Build output:** `dist/` (static HTML)
- **Netlify:** `netlify.toml` runs `npm run build`, publishes `dist/`
- **Vercel:** deploys the Astro static build from `dist/`

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site → dist/
npm run preview   # preview production build
```

Requires Node **≥ 22.12**.
