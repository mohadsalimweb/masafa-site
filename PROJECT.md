# Masafa Publishing House — Project Handbook

Everything about this site in one document. Read top to bottom to understand what exists, why it was built the way it was, and how to change it.

---

## 1. What this is

A bilingual (Arabic RTL / English LTR) marketing and catalogue website for **Dar Masafa Publishing House** — an independent Arabic publisher based in the Sultanate of Oman. It reads from and reflects the house's *Book of Identity* (`masafa_identity_book.html`, 18 chapters, 2026).

- **Live:** https://mohadsalimweb.github.io/masafa-site/
- **Repo:** https://github.com/mohadsalimweb/masafa-site
- **Hosting:** GitHub Pages, free, HTTPS enforced
- **Build step:** none — plain HTML + one CSS + one JS + a PNG logo

---

## 2. File tree

```
masafa_site/
├── index.html          Arabic homepage
├── about.html          Story · philosophy of the name · references · team
├── series.html         The six editorial series (feature splits)
├── catalogue.html      Filterable book grid (by series)
├── submissions.html    Three reading gates + submission form
├── journal.html        Editorial notes and excerpts archive
├── contact.html        Contact channels grid + contact form
├── en/                 English mirror (7 pages, LTR)
│   ├── index.html
│   ├── about.html
│   ├── series.html
│   ├── catalogue.html
│   ├── submissions.html
│   ├── journal.html
│   └── contact.html
├── css/main.css        Design system — one stylesheet, ~1500 lines
├── js/main.js          Nav toggle, series filter, reveal-on-scroll, form ack
├── assets/
│   ├── logo-primary.png   Transparent-background primary mark (header + favicon)
│   ├── logo-primary.jpg   Legacy JPG (kept for reference)
│   ├── logo-dark.jpg      Burgundy variant for future dark-surface use
│   └── fonts/thmanyah/    Self-hosted Thmanyah family (sans / seriftext / serifdisplay, woff2) + LICENSE.pdf
├── README.md
├── DEPLOY.md          Step-by-step publishing guide
├── PROJECT.md         (this file)
└── .gitignore
```

14 HTML pages total (7 AR + 7 EN). Every page loads the same CSS and JS via relative paths.

---

## 3. Design system

### 3.1 Palette — derived from the logo

| Token | Value | Where it shows |
|---|---|---|
| `--ink` | `#3a312a` | Body text, dark rectangles, brand mark backdrop |
| `--ink-soft` | `#5b4f45` | Secondary text |
| `--ink-mute` | `#8a7d70` | Metadata, eyebrows |
| `--surface` | `#ece5d7` | Page background (the logo's cream) |
| `--surface-alt` | `#e0d7c5` | Alternating section background |
| `--surface-deep` | `#3a312a` | Manifesto, footer |
| `--burgundy` | `#9a4a48` | Primary buttons, hero accent word, top strip on manifesto/footer |
| `--line` | `#dcd3c5` | 1px dividers |

### 3.2 Series accents

Each of the six series has its own colour, tuned to sit inside the earthen palette. Used on series cards, feature-split "plates", and book-cover spines.

| Series | Kind | Accent |
|---|---|---|
| **Abjad** (أبجد) | Poetry | `#9a4a48` — burgundy (signature) |
| **Masrad** (مسرد) | Fiction & short story | `#6b4a3a` — burnt sienna |
| **Mizan** (ميزان) | Literary criticism | `#4b5a58` — dusty slate |
| **Ubour** (عبور) | Translation | `#6a7355` — olive |
| **Lisan** (لسان) | Linguistic studies | `#7a4a52` — rose-brown |
| **Ta'ammul** (تأمل) | Philosophy | `#3a312a` — deep brown |

### 3.3 Typography

- **Family:** [Thmanyah](https://thmanyah.com) — a bilingual (Arabic + Latin) family; the same faces serve both scripts, so AR and EN pages share one visual voice
- **Three cuts, self-hosted as `woff2`** under `assets/fonts/thmanyah/`:
  - **Thmanyah Sans** — body and UI (`--font-body`, `--font-display` on Arabic; `--font-latin` on English)
  - **Thmanyah Serif Text** — long-form and the manifesto (`--font-serif`)
  - **Thmanyah Serif Display** — reserved for large display type (`--font-arabic-display` / `--font-latin-display`) — available but not yet used
- Five weights per cut: Light (300), Regular (400), Medium (500), Bold (700), Black (900)
- Fonts swap automatically based on `<html lang="ar">` vs `<html lang="en">` — same faces, but the token indirection preserves the per-script fallback chain if the webfont ever fails to load
- License PDF sits alongside the font files at `assets/fonts/thmanyah/LICENSE.pdf`

### 3.4 Layout rules

- **≥ 35% whitespace on every visual surface** — a direct implementation of the Book of Identity's philosophy-of-the-name principle
- **Container max:** 1240 px, narrow prose max: 820 px, measure: 72ch
- **RTL/LTR handled with logical properties** (`inset-inline`, `padding-inline`, `margin-inline`) — same stylesheet serves both directions with no forks

### 3.5 Logo

- Primary usage: transparent PNG (outer cream knocked out to alpha) so the mark sits directly on any background
- The dark brown rectangle stays intact — only the surrounding cream is transparent
- Never rotate, recolour, or filter

---

## 4. Content approach

### 4.1 Voice (from Book of Identity, Chapter 9)

- First person plural — "we", "the house" — never "I"
- No exclamation marks, no "revolutionary" adjectives, no marketing-style questions
- Every CTA is descriptive: "Browse the catalogue" / "تصفح الإصدارات" — not "Discover" or "Explore now"
- Rejections and acceptances follow the templates in Chapter 17

### 4.2 Bilingual structure

- Arabic is primary and lives at the root of the site
- English at `/en/` mirrors every page 1-to-1
- The language toggle in the header goes to the matching page in the other language, not the homepage
- `dir="rtl"` on Arabic pages, `dir="ltr"` on English — text alignment flips accordingly

### 4.3 Featured authors and titles

Placeholder authors and titles are used across the catalogue. They read like plausible Omani names but are not real people — replace with actual authors as the catalogue fills.

---

## 5. Interactive behaviour (`js/main.js`)

- **Mobile nav toggle** — hamburger opens/closes primary nav under 900 px viewport
- **Sticky header shadow** — border appears after 8 px of scroll
- **Reveal-on-scroll** — `[data-reveal]` elements fade in via `IntersectionObserver`; respects `prefers-reduced-motion`
- **Catalogue filter** — pill buttons filter books by series via `data-series-filter`
- **Newsletter and contact forms** — client-side acknowledgement only (no backend yet); shows a localised thank-you message and clears the form

---

## 6. Responsive behaviour

- **≥ 900 px:** full desktop layout, horizontal nav, two-line brand (Arabic + Latin subtitle)
- **≤ 899 px:** hamburger menu, brand collapses to single line, Latin subtitle hidden, logo scales to 44×38 px, header row 64 px tall
- **≤ 560 px:** further tightening — logo 40×34 px, header row 60 px, book grid becomes 2 columns

---

## 7. Deployment

### Current state

- Repo lives at `github.com/mohadsalimweb/masafa-site`, `main` branch
- GitHub Pages enabled — Source: `main` / root
- HTTPS enforced automatically by GitHub

### Publishing a change

Any edit goes live in ~30 seconds after a push:

```bash
cd /Users/malshuaili/mz/masafa_site
# edit files
git add -A
git commit -m "Concise imperative subject"
git push
```

`gh` CLI is already authenticated on this Mac; no auth prompt needed.

### If GitHub Pages later shows a 404

Check `Settings → Pages` on the repo. Source should say `Deploy from a branch → main → / (root)`. Pages sometimes needs a re-save after major repo changes.

---

## 8. Change log — this session

1. **Built the site from scratch** — 14 HTML pages, one CSS design system, one JS file. Structure modelled after mahaseelalbon.com; visual language pulled from the Book of Identity.
2. **Swapped in the real logo** — replaced the placeholder SVG with the four-variant logo sheet (WhatsApp image, 2026-07-20). Cropped the primary and dark variants with PIL.
3. **Reworked the palette** — replaced neutral gray/black with cream/brown/burgundy from the logo. All series accents retuned to sit inside the earthen palette.
4. **Made the logo background transparent** — knocked out the outer cream backdrop (RGB ~232,227,221) with PIL, saved as PNG. Removed the `mix-blend-mode: multiply` workaround.
5. **Deployed to GitHub Pages** — created the repo, authenticated `gh`, pushed, enabled Pages via API. Verified every URL returns 200.
6. **Fixed mobile header** — under 900px the toggle read as centred (row was 78 px because the brand had two lines). Now collapses to one line, row is 64 px, logo scales to 44×38 px.
7. **Swapped Google Fonts for self-hosted Thmanyah** — dropped the `@import` for IBM Plex Sans Arabic / Amiri / Inter / EB Garamond and replaced them with local `@font-face` blocks pointing at Thmanyah Sans, Serif Text, and Serif Display (woff2, five weights each) under `assets/fonts/thmanyah/`. Same family now serves Arabic and Latin, so the two sides of the site share one visual voice; the AR/EN token split stays so the per-script fallback chain survives a webfont failure.

---

## 9. Known things not done

- **No backend for forms** — newsletter and contact submissions currently show a fake acknowledgement. Wiring these to a real destination (Formspree, Netlify Forms, or a small backend) is the next natural step.
- **No CMS** — every content change is a code change. Fine for a launch site; if the journal grows, consider a static site generator (Eleventy, Astro) or a headless CMS.
- **Placeholder authors and titles** — replace with real Masafa authors when catalogue is finalised.
- **No search** — small enough that a search box would feel out of place; add one when catalogue crosses ~30 titles.
- **No sitemap.xml / robots.txt** — worth adding before serious SEO work.
- **Cover art is CSS-generated** — a rectangle plus a burgundy stripe, echoing the logo. Once real covers exist, swap them into `.book-cover-inner` as background images.

---

## 10. Reference: source documents

- `masafa_identity_book.html` — the 18-chapter Book of Identity. Every design decision above traces to a chapter in this document.
- `masafa_logo_prompt.html` and `masafa_logo.html` — earlier logo iteration notes (pre-final).
- `WhatsApp Image 2026-07-20 at 15.14.04.jpeg` — the four-variant logo sheet that supplied the current mark.

---

© 2026 Dar Masafa Publishing House.
