---
title: "About"
---

# About

This site is an unofficial, crawlable Markdown mirror of Meta's developer
documentation (`developers.facebook.com`) — covering the Graph API, Marketing
API, Conversions API, WhatsApp/Messenger platform, Instagram Platform,
Facebook Login, Audience Network, and more.

It exists to make Meta's docs easier to search, link to, and feed into AI
coding agents as context, since the live site is a client-rendered SPA that's
awkward for both humans grepping around and for LLMs to crawl directly.

Every page on this site links back to its original `developers.facebook.com`
source at the top of the article — this is a mirror for reference and search,
not a replacement for the official docs.

## How it's built

1. A small Chrome extension saves each `developers.facebook.com` page's
   rendered HTML, mirroring the site's URL structure locally.
2. A Python script converts that HTML into clean Markdown, dropping nav
   chrome, unwrapping Facebook's link-shim redirects, and flagging pages
   whose capture was empty or a duplicate of another page (a known artifact
   of crawling a client-rendered SPA) instead of publishing broken content.
3. [VitePress](https://vitepress.dev) turns the Markdown into this static
   site, with a sidebar generated from the folder structure and local search
   built in.
4. `llms.txt` and `llms-full.txt` are generated alongside the site, following
   the [llms.txt convention](https://llmstxt.org/), so an AI agent can pull in
   the whole doc set (or just an index of it) as context in one request.

The full pipeline is open source — see the repository linked in the footer
for the extension, conversion scripts, and site source.

## Content is current as of

**July 2, 2026.** Meta updates its docs continuously, so some pages here may
drift from the live site over time.

## Feedback

Found a stale page, a conversion bug, or something worth improving? Issues
and pull requests are welcome on the
[GitHub repository](https://github.com/nermalcat69/meta-developer-docs).

## Built by

[Arjun Aditya](https://arjunaditya.xyz)
