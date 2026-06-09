# From Idea to Website: AI Coding for Beginners

## Description

This beginner-friendly, hands-on workshop introduces participants to AI-assisted coding by guiding them through the process of building their first simple website.

After a short introduction, participants will choose one of two project tracks: a personal portfolio website or a small business landing page. They will use AI coding tools to generate, customize, preview, and improve their website step by step.

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
| `/` | Language picker |
| `/en/` | English |
| `/fi/` | Finnish |
| `/sv/` | Swedish |

Source content lives in `src/content/` (converted from the original HTML in `docs/`). Shared styles are in `src/styles/guide.css`.

Run locally:

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:4321` by default.

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start the Astro dev server     |
| `npm run build`   | Build a static site to `dist/` |
| `npm run preview` | Preview the production build   |

## Repository Structure

- `src/` — Astro pages, layouts, styles, and guide content
- `public/` — Static assets (fonts, screenshots)
- `docs/` — Original HTML guides and workshop planning notes (source of truth for content edits; re-run conversion or edit `src/content/` directly)
