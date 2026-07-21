# Masafa Publishing House — Website

A bilingual (Arabic RTL / English LTR) static website for **Dar Masafa Publishing House**, an independent Arabic publisher based in the Sultanate of Oman.

**Live site:** https://YOUR-GITHUB-USERNAME.github.io/masafa-site/

## Structure

```
masafa_site/
├── index.html          Arabic homepage
├── about.html          Story · philosophy · references · team
├── series.html         The six editorial series
├── catalogue.html      Filterable book grid
├── submissions.html    Manuscript-submission guide + form
├── journal.html        Editorial notes and excerpts
├── contact.html        Contact channels + form
├── en/                 English mirror (7 pages)
├── css/main.css        Design system (one stylesheet)
├── js/main.js          Nav, filter, reveal, form handlers
└── assets/             Logo files
```

## Design system

- Palette derived from the logo — deep brown `#3a312a`, cream `#ece5d7`, burgundy accent `#9a4a48`
- Typography — IBM Plex Sans Arabic + Amiri for Arabic; Inter + EB Garamond for English
- Six-series colour system — each series has a discreet accent tuned to sit inside the earthen palette
- ≥ 35% whitespace on every visual surface (a direct application of the philosophy of the name)

## Local development

Nothing to build. Serve statically:

```bash
cd masafa_site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deployment (GitHub Pages)

1. Push this repo to GitHub.
2. **Settings → Pages → Source → Deploy from branch → `main` / `/ (root)`**.
3. The site will be live at `https://<user>.github.io/masafa-site/` within ~1 minute.

No build step, no dependencies.

## License

© 2026 Dar Masafa Publishing House. Content and design belong to Masafa.
