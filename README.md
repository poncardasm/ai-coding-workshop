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

## Repository Structure

- `docs/` contains workshop planning notes and outlines.
- `slides/` contains Open Slide decks.
- `themes/` contains optional shared Open Slide themes.
- `assets/` can hold shared workshop assets.

## Slides

This repo uses [Open Slide](https://open-slide.dev/docs) for the React-based workshop slides. Each deck lives under `slides/<id>/index.tsx` and default-exports an array of page components.

Run the slide deck locally:

```bash
npm install
npm run dev
```

The Open Slide dev server runs on `http://localhost:5173` or the next available port.

Useful scripts:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Open Slide dev server with hot reload. |
| `npm run build` | Build a static slide bundle to `dist/`. |
| `npm run preview` | Preview the built slide bundle locally. |
| `npm run sync:skills` | Sync Open Slide agent skills. |

## Open Slide Notes

Every slide renders into a fixed **1920 x 1080** canvas. Slides are React components, not Markdown slides, so design with fixed presentation layouts rather than responsive web page layouts.
