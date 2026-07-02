# Meta Dev Docs Saver (Chrome extension)

Saves the developers.facebook.com doc page you're currently viewing to
`~/Downloads/facebook-dev-docs/...html` (mirroring the URL path), and keeps
a running list of in-page links it has seen so you know what to visit next.
It only acts when you're on the page — no background crawling.

Saved files are the page's main content as HTML (scripts/styles stripped,
relative links resolved to absolute `https://developers.facebook.com/...`
URLs), so all the `<a href>` links stay intact for later parsing.

## Install

1. Open `chrome://extensions`
2. Enable "Developer mode" (top right)
3. Click "Load unpacked" and select this `extension/` folder

## Use

- Browse to any `developers.facebook.com/docs/...` or `/documentation/...` page normally.
- Click the extension icon → **Save this page** to save it as HTML.
- Enable **Auto-save every page I visit** to save automatically as you click
  through the docs (works for both full page loads and in-app client-side navigation).
- **Export discovered-links queue** downloads `_link-queue.txt` — every doc
  link seen on pages you've visited that you haven't saved yet, so you can
  open them next.
- **Export saved-pages index** downloads `_index.json` with title/URL/local
  path/timestamp for everything saved so far.

## After collecting pages

Run `scripts/build_llms.py` (see repo root) against the downloaded
`facebook-dev-docs/` folder to generate `llms.txt`, `llms-full.txt`,
per-product `llms-<product>.txt`, and `llms-whatsapp.txt` for VitePress.
