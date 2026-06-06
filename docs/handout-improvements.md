# Handout improvement notes

Suggestions for `docs/en-workshop-guide.html` — prioritized for a live beginner workshop. Use this as a backlog when editing the handout.

---

## High impact (content beginners will ask about)

### 1. Add a “Before you arrive” checklist at the top

Right under the lede, add a short checklist:

- [ ] OpenCode desktop installed
- [ ] Neuralwatt account created and API key copied
- [ ] Neuralwatt connected in OpenCode (provider + model selected)
- [ ] Empty project folder created (e.g. `my-website`)

Today the handout jumps from “connect” to prompts without saying where files live or how to open that folder in OpenCode.

### 2. Explain how to preview the site

Section 6 says “open the site in the browser often” but never explains how. Add 2–3 lines, for example:

- Create a folder (e.g. `my-website`) and open it in OpenCode (File → Open Folder, or equivalent).
- After `index.html` exists: double-click the file, or right-click → Open With → your browser.
- Optional: mention Live Server only if the facilitator plans to demo it (keeps scope simple).

### 3. Pin one recommended model — done

Handout standardizes on **Kimi K2.6** for the workshop (section 3 + troubleshooting). Other Neuralwatt models are mentioned only as optional after the session.

### 4. Verify or soften the Plan mode tip

Current copy (section 4):

> For bigger features, switch to **Plan mode** (Tab key), review the plan, then switch back to Build mode and say “Go ahead.”

If that behavior is Cursor-specific, beginners will hunt for Tab in OpenCode. Either confirm the exact OpenCode UI (label + shortcut) or rephrase:

> Ask for a plan first (“Give me steps before code”), review it, then say “go ahead” when you’re ready.

### 5. Label the quick-test prompt clearly — done

Section 3 uses `prompt-step` label **“Quick test — try this first”**, `pre.prompt` for copy, and `#quick-test` anchor.

---

## Structure and navigation

### 6. Expand the table of contents

Consider anchors or nav labels for:

- Pre-workshop setup (sections 1–3)
- During session (sections 4–6)
- Optional: `#quick-test` anchor under Connect

### 7. Align “During the workshop” with slides

Slides emphasize: not magic → workflow → prompting → pick track. Section 6 is thinner than sections 1–5. Add a small card mirroring the slide bullets so the room and handout stay in sync.

### 8. Track B framing for non-restaurants — done

Track B panel opens with a note for non-restaurant businesses (swap menu → services/products, hours → how customers reach you).

---

## UX and polish

### 9. Sticky nav or “back to top”

The handout is long (~900 lines). A slim sticky TOC or an “↑ Top” control after section 5 helps during hands-on.

### 10. Pre-work time estimate

Example: **“Sections 1–3: about 15 minutes before we start.”** Sets expectations and reduces day-of panic.

### 11. Typography alignment with slides — done

Slides and handout both use **Poppins** (headings/UI) + **Akt** (body).

### 12. `meta description` and favicon

Useful when sharing the handout URL in email or chat before the event.

### 13. Hosting note for facilitators

Images use relative paths (`assets/…`). Host so `en-workshop-guide.html` and `docs/assets/` stay together — e.g. serve from `docs/` on GitHub Pages, not the repo root, or screenshots 404.

---

## Accessibility and print

### 14. Print: expand accordions

Print CSS already exposes `.track-panel`. Add a print-only note at the top of section 5: _“Expand both tracks below if printing.”_ Some browsers still collapse `<details>`.

### 15. Accordion affordance — done

Track accordions show **Click to expand** / **Click to collapse** beside the chevron in each summary.

### 16. `prefers-reduced-motion`

Disable hover `transform` on buttons when the user prefers reduced motion.

---

## Safety and troubleshooting

### 17. “When AI is wrong” callout

Short box aligned with slides:

- Invented links, APIs, or files
- Rewrites the whole page when you wanted a small fix

**Fix:** paste the error or say “make the smallest change only.”

### 18. “Save your work”

Remind participants to note where `index.html` lives on disk and not to close OpenCode before confirming the file exists in their project folder.

### 19. Credit reassurance

Trial credit ($5 / 30 days) is mentioned twice — fine. Optional line: _“One full site build today is typically well within trial credit”_ so people aren’t afraid to iterate.

---

## Nice-to-have (post-workshop)

### 20. “After today”

How to keep the site: zip the folder, email yourself `index.html`, or optional pointer to GitHub Pages / static hosting.

### 21. Collapsible facilitator block

Footer contact info is great for your events. Wrapping it in `<details>` makes the handout easier to reuse when another facilitator runs the session.

### 22. Offline PDF

Header note: “Print to PDF” for spotty Wi‑Fi. Web fonts may still need network unless self-hosted.

---

## Already strong (keep as-is)

- Clear numbered flow: install → key → connect → prompts → live session
- Copy buttons on long prompts
- Screenshots for Neuralwatt setup
- API key security callout
- Two tracks + bonus accordion
- Print stylesheet
- Troubleshooting and footer resources

---

## Recommended first three edits

If time is limited, do these first:

1. Pre-work checklist + project folder + browser preview
2. Fix or remove Plan mode / Tab tip (OpenCode-accurate wording)

---

## Related files

| File                         | Role                                                   |
| ---------------------------- | ------------------------------------------------------ |
| `docs/workshop-guide.html`   | Language picker                                        |
| `docs/en-workshop-guide.html`| English participant follow-along                       |
| `docs/fi-workshop-guide.html`| Finnish participant follow-along                       |
| `docs/sv-workshop-guide.html`| Swedish participant follow-along                       |
| `docs/outline.md`            | Facilitator script and timing                          |
| `slides/ai-coding-workshop/` | Presenter slides                                       |
| `docs/assets/`               | Handout screenshots (must ship next to `en-workshop-guide.html`) |
