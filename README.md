# From Idea to Website: AI Coding for Beginners

## Description

This beginner-friendly, hands-on workshop introduces participants to AI-assisted coding by guiding them through the process of building their first simple website.

After a short introduction, participants choose one of two project tracks: a personal portfolio website or a small business landing page. They use AI coding tools to generate, customize, preview, and improve their website step by step.

The session is designed for beginners, career shifters, freelancers, students, and small business owners who want to understand how AI can support the website-building process. No prior coding experience is required.

By the end of the workshop, each participant will have a working one-page website and a basic workflow for using AI tools to continue improving it.

## Event Details

- **Duration:** 2 hours
- **Format:** Hands-on workshop
- **Audience:** Beginners, career shifters, students, freelancers, small business owners
- **Participants:** 10
- **Requirements:** Laptop, internet connection, and willingness to experiment
- **Outcome:** Each participant leaves with a working personal portfolio or business landing page.

## Workshop Guide Site

The participant follow-along guide is an [Astro](https://astro.build) static site with three language versions:

| Route | Language |
| ----- | -------- |
| `/` | English (default) |
| `/fi/` | Finnish |
| `/sv/` | Swedish |

Guide content lives in `src/content/<lang>.html` and shared styles in `src/styles/guide.css`. Content is maintained directly in `src/content/` — the original HTML files in `docs/` are kept for historical reference only.

### Requirements

- **Node.js ≥ 22.12**

### Running locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # Static site → dist/
npm run preview   # Preview production build
```

## Repository Structure

- `src/` — Astro pages, layouts, styles, and guide content
  - `src/content/` — Guide body HTML for each language (edit these)
  - `src/styles/guide.css` — Shared styles (Alsina + Rubik, accent `#d97757`)
  - `src/layouts/` — Astro layout component
  - `src/pages/` — Route pages (English at `/`, Finnish at `/fi/`, Swedish at `/sv/`)
- `public/` — Static assets (fonts, screenshots), served at `/assets/…`
- `docs/` — Original standalone HTML guides, facilitator outline, and planning notes
