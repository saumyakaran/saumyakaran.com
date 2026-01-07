# saumyakaran.com

Minimal static site for **Saumya Karan** (indie dev) + Apple “Support URL” for **Campfire — 30 minute timer**.

## Run locally

```bash
pnpm install
pnpm dev
```

## Where to change the App Store URL
- Campfire CTA button lives in: `apps/campfire/index.html`
  - Replace the placeholder `href="#"` on the “Download on the App Store” link.

## Screenshots
This repo currently renders **placeholders** (no broken images).

- Drop your screenshots into: `public/apps/campfire/screenshots/`
- Expected filenames (per spec):
  - `01.jpg`
  - `02.jpg`
  - `03.jpg`
  - `04.jpg`
  - `05.jpg`
  - `06.jpg`

After adding them, update the screenshot gallery markup in:
- `apps/campfire/index.html`

(Swap the placeholder `<div class="screenshotPh">…</div>` blocks for `<img>` tags pointing at those files.)


