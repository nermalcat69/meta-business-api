# Meta / Facebook Developer Docs Mirror

A crawlable Markdown mirror of Meta's developer documentation
(`developers.facebook.com`) — Graph API, Marketing API, Conversions API,
WhatsApp/Messenger Platform, Instagram Platform, Facebook Login, Audience
Network, and more. Content is current **as of July 2, 2026**.

**Live site:** https://nermalcat69.github.io/meta-developer-docs/

It's built specifically to be useful as **context for AI coding agents** —
each page is clean Markdown with a link back to its real
`developers.facebook.com` source, and the whole corpus is also available as:

- [`/llms.txt`](https://nermalcat69.github.io/meta-developer-docs/llms.txt) — an index of every page, per the [llms.txt convention](https://llmstxt.org/)
- [`/llms-full.txt`](https://nermalcat69.github.io/meta-developer-docs/llms-full.txt) — the full content of every page in one file

Point an agent at either URL to give it the full Meta developer docs as
context in one shot, instead of crawling the (client-rendered, hard-to-parse)
live site page by page.

## Why this exists

`developers.facebook.com` is a client-rendered SPA — hard for scrapers,
search, and LLMs to consume directly. This repo captures it, cleans it up,
and republishes it as a static, crawlable, linkable site.

## How it works

```
extension/           Chrome extension that saves the current
                      developers.facebook.com page's HTML, mirroring
                      the site's URL structure locally
facebook-dev-docs/
  documentation/,     Raw HTML captured by the extension
  docs/
  convert.py          Converts the raw HTML into clean Markdown; drops nav
                      chrome, unwraps link-shim redirects, and flags pages
                      whose capture was empty or a duplicate of another
                      page instead of publishing broken content
  NEEDS_REDOWNLOAD.md Pages flagged by convert.py for a manual re-capture
  markdown/           Converted Markdown output (source of truth for the site)
  gen_llms.py         Generates llms.txt / llms-full.txt from markdown/
  site/               VitePress project that turns markdown/ into the
                      published site (auto-generated nav/sidebar, local
                      search, sitemap.xml, robots.txt)
```

### Regenerating the site after new captures

```bash
# 1. Convert freshly captured HTML into Markdown
python3 facebook-dev-docs/convert.py

# 2. Sync the converted Markdown into the VitePress project
rm -rf facebook-dev-docs/site/docs/documentation facebook-dev-docs/site/docs/docs facebook-dev-docs/site/docs/docs.md
cp -r facebook-dev-docs/markdown/documentation facebook-dev-docs/site/docs/documentation
cp -r facebook-dev-docs/markdown/docs facebook-dev-docs/site/docs/docs
cp facebook-dev-docs/markdown/docs.md facebook-dev-docs/site/docs/docs.md

# 3. Regenerate llms.txt / llms-full.txt
python3 facebook-dev-docs/gen_llms.py

# 4. Build (or run locally with `npm run docs:dev`)
cd facebook-dev-docs/site && npm run docs:build
```

Pushing to `main` with changes under `facebook-dev-docs/site/**` triggers
[`.github/workflows/deploy-docs.yml`](.github/workflows/deploy-docs.yml),
which builds the site and deploys it to GitHub Pages automatically.

## Contributing

Found a stale page, a conversion bug, or something worth improving? Issues
and pull requests are welcome.

## Built by

[Arjun Aditya](https://arjunaditya.xyz)
