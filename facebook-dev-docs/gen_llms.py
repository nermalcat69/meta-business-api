#!/usr/bin/env python3
"""
Generate llms.txt and llms-full.txt from the converted Markdown in markdown/,
following the llms.txt convention (https://llmstxt.org/):

- llms.txt: a single H1 + summary blockquote, then one link per page grouped
  by top-level category, so an LLM can see the whole site map in one file.
- llms-full.txt: the full body of every page concatenated, for an LLM that
  wants the entire corpus in one request instead of crawling page by page.

Both are written into site/docs/public/ so VitePress serves them at the site
root (SITE_URL/llms.txt, SITE_URL/llms-full.txt) alongside robots.txt/sitemap.xml.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
MARKDOWN_DIR = ROOT / "markdown"
PUBLIC_DIR = ROOT / "site" / "docs" / "public"

# Keep in sync with SITE_URL in site/docs/.vitepress/config.mts.
SITE_URL = "https://nermalcat69.github.io/meta-business-api"

FRONTMATTER_RE = re.compile(r"^---\n(.*?)\n---\n\n(.*)$", re.DOTALL)


def parse(md_path: Path):
    text = md_path.read_text(encoding="utf-8")
    m = FRONTMATTER_RE.match(text)
    if not m:
        return None
    fm, body = m.group(1), m.group(2)
    title_m = re.search(r'^title:\s*"((?:[^"\\]|\\.)*)"', fm, re.MULTILINE)
    source_m = re.search(r"^source_url:\s*(\S+)", fm, re.MULTILINE)
    title = json.loads(f'"{title_m.group(1)}"') if title_m else md_path.stem
    source_url = source_m.group(1) if source_m else ""
    rel = md_path.relative_to(MARKDOWN_DIR).with_suffix(".html")
    site_url = f"{SITE_URL}/{rel.as_posix()}"
    return dict(title=title, source_url=source_url, site_url=site_url, body=body.strip())


def category_of(md_path: Path) -> str:
    rel = md_path.relative_to(MARKDOWN_DIR)
    parts = rel.parts
    if parts[0] == "docs":
        return "Legacy Docs"
    if parts[0] == "documentation" and len(parts) > 1:
        return parts[1]
    return "Other"


def main():
    files = sorted(MARKDOWN_DIR.rglob("*.md"))
    pages = []
    for f in files:
        page = parse(f)
        if page is None:
            continue
        page["category"] = category_of(f)
        pages.append(page)

    pages.sort(key=lambda p: (p["category"], p["title"]))

    # --- llms.txt: index grouped by category ---
    lines = [
        "# Meta / Facebook Developer Docs Mirror",
        "",
        "> A crawlable Markdown mirror of Meta's developer documentation "
        "(developers.facebook.com), converted from a static HTML snapshot. "
        "Each page links back to its original developers.facebook.com URL.",
        "",
    ]
    current_category = None
    for page in pages:
        if page["category"] != current_category:
            current_category = page["category"]
            lines.append(f"## {current_category}")
            lines.append("")
        lines.append(f"- [{page['title']}]({page['site_url']}): mirrors {page['source_url']}")
    lines.append("")
    (PUBLIC_DIR / "llms.txt").write_text("\n".join(lines), encoding="utf-8")

    # --- llms-full.txt: full content of every page, concatenated ---
    full_parts = [
        "# Meta / Facebook Developer Docs Mirror -- Full Content",
        "",
        "> Full text of every page in this mirror, for LLMs that want the "
        "whole corpus in one request. See /llms.txt for just the page index.",
        "",
    ]
    for page in pages:
        full_parts.append("---")
        full_parts.append(f"# {page['title']}")
        full_parts.append(f"Source: {page['source_url']}")
        full_parts.append(f"Mirror: {page['site_url']}")
        full_parts.append("")
        full_parts.append(page["body"])
        full_parts.append("")
    (PUBLIC_DIR / "llms-full.txt").write_text("\n".join(full_parts), encoding="utf-8")

    print(f"Pages indexed: {len(pages)}")
    print(f"llms.txt:      {(PUBLIC_DIR / 'llms.txt').stat().st_size:,} bytes")
    print(f"llms-full.txt: {(PUBLIC_DIR / 'llms-full.txt').stat().st_size:,} bytes")


if __name__ == "__main__":
    main()
