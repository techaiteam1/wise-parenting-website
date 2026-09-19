# Wise Parenting — Launch Homepage

A responsive homepage for **wise parenting**, founded by Alizah Taha — MBBS, Parenting Coach & Educator.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Review files

- `design-review/home-desktop.png` — 1440px full-page review capture
- `design-review/home-mobile.png` — 390px full-page review capture

## Content and actions

The logo lockup, portrait, framework image, contact details, program dates/pricing, PDF downloads, and testimonials are managed in the project files.

Mock CMS content lives in `src/data/content.ts`. It is kept separate from the presentation components so it can be replaced with an administrator-managed data source in Phase 2 without redesigning the approved interface.

The contact form opens a prefilled email draft, and resource cards download PDFs from `public/pdfs`.
