#!/usr/bin/env python3
"""
Convert facebook-dev-docs/{documentation,docs}/**/*.html into clean Markdown.

- Extracts the real content container per page (skips nav/sidebar chrome).
- Derives each page's canonical developers.facebook.com URL from its file path.
- Detects pages whose captured content is empty, or is an exact duplicate of
  another page's content (a known artifact of this crawl: some routes never
  client-side-rendered and just kept the previous page's HTML). Those pages
  are NOT converted; they're listed in NEEDS_REDOWNLOAD.md instead so they
  can be manually re-saved from Chrome.
- Unwraps Facebook's l.php link-shim redirects to the real target URL.
- Writes Markdown mirroring the source directory tree under markdown/.
"""
import hashlib
import json
import re
import urllib.parse
from pathlib import Path

from bs4 import BeautifulSoup
from markdownify import markdownify as md

ROOT = Path(__file__).parent
DOC_ROOTS = ["documentation", "docs"]
OUT_DIR = ROOT / "markdown"
BASE_URL = "https://developers.facebook.com"
MIN_CONTENT_CHARS = 40


def derive_url(rel_path: Path) -> str:
    parts = list(rel_path.with_suffix("").parts)
    if parts and parts[-1] == "index":
        parts = parts[:-1]
    return BASE_URL + "/" + "/".join(parts)


def find_content_container(soup: BeautifulSoup):
    article = soup.find("article")
    if article is not None:
        return article

    headings = soup.find_all(["h1", "h2", "h3"])
    if len(headings) >= 2:
        first, last = headings[0], headings[-1]
        first_ancestors = list(first.parents)
        last_ancestor_ids = {id(a) for a in last.parents}
        for anc in first_ancestors:
            if id(anc) in last_ancestor_ids:
                return anc

    main = soup.find(id="rebrandBodyID") or soup.find("main")
    return main


def get_title(soup: BeautifulSoup, container) -> str:
    h1 = container.find("h1") if container else None
    if h1 and h1.get_text(strip=True):
        return h1.get_text(strip=True)
    if soup.title and soup.title.string:
        return soup.title.string.strip()
    return "Untitled"


def unwrap_fb_redirects(soup_fragment: BeautifulSoup):
    for a in soup_fragment.find_all("a", href=True):
        href = a["href"]
        if "l.facebook.com/l.php" in href:
            qs = urllib.parse.urlparse(href).query
            target = urllib.parse.parse_qs(qs).get("u", [None])[0]
            if target:
                a["href"] = target


def normalize_text(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def flatten_nested_pre(container):
    """Collapse <pre><div><pre>...</pre></div></pre> wrappers down to a single
    <pre>. markdownify emits one ``` fence per <pre> tag, so nested <pre>s
    produce two adjacent opening fences (parsed as an empty code block) and
    leak the real code as raw text afterwards -- which then breaks Vue's SFC
    compiler on any bare `<PLACEHOLDER>`-style token in that code.
    """
    for pre in container.find_all("pre"):
        inner = pre.find("pre")
        if inner is not None:
            inner_copy = inner.extract()
            pre.replace_with(inner_copy)
    for pre in container.find_all("pre"):
        text = pre.get_text()
        if "\xa0" in text:
            for node in pre.find_all(string=True):
                node.replace_with(node.replace("\xa0", " "))


def main():
    html_files = []
    for docroot in DOC_ROOTS:
        html_files.extend(sorted((ROOT / docroot).rglob("*.html")))
    top_level = sorted(ROOT.glob("*.html"))
    html_files = top_level + html_files

    records = []  # per-file info
    for path in html_files:
        rel = path.relative_to(ROOT)
        try:
            with open(path, encoding="utf-8", errors="ignore") as f:
                soup = BeautifulSoup(f, "html.parser")
        except Exception as e:
            records.append(dict(rel=rel, url=derive_url(rel), error=str(e)))
            continue

        container = find_content_container(soup)
        text = normalize_text(container.get_text(separator=" ")) if container else ""
        title = get_title(soup, container) if container else (soup.title.string.strip() if soup.title and soup.title.string else "Untitled")

        records.append(dict(
            rel=rel,
            url=derive_url(rel),
            title=title,
            text=text,
            text_len=len(text),
            container=container,
        ))

    # Group by content hash to find duplicate/broken captures. Whitespace is
    # stripped entirely (not just collapsed) before hashing: the crawl's DOM
    # sometimes puts a label and its value in separate inline nodes ("Updated"
    # / ": Jun 24" vs "Updated:" / " Jun 24"), so get_text() renders one extra
    # or missing space even though the two pages are truly identical content.
    groups = {}
    for rec in records:
        if rec.get("error"):
            continue
        h = hashlib.md5(re.sub(r"\s+", "", rec["text"]).encode("utf-8")).hexdigest()
        groups.setdefault(h, []).append(rec)

    canonical_by_hash = {}
    needs_redownload = []  # (reason, url, rel, note)
    to_convert = []

    for h, members in groups.items():
        if len(members) == 1:
            rec = members[0]
            if rec["text_len"] < MIN_CONTENT_CHARS:
                needs_redownload.append(("empty", rec["url"], str(rec["rel"]), "page captured with no readable content"))
            else:
                to_convert.append(rec)
            continue

        # Multiple files share identical rendered content.
        if members[0]["text_len"] < MIN_CONTENT_CHARS:
            for rec in members:
                needs_redownload.append(("empty", rec["url"], str(rec["rel"]), "page captured with no readable content"))
            continue

        members_sorted = sorted(members, key=lambda r: (len(r["rel"].parts), len(str(r["rel"]))))
        canonical = members_sorted[0]
        to_convert.append(canonical)
        for rec in members_sorted[1:]:
            needs_redownload.append((
                "duplicate", rec["url"], str(rec["rel"]),
                f"shows stale/duplicate content from {canonical['url']}",
            ))

    for rec in records:
        if rec.get("error"):
            needs_redownload.append(("error", rec["url"], str(rec["rel"]), rec["error"]))

    # Convert the winners to Markdown.
    converted = 0
    for rec in to_convert:
        container = rec["container"]
        flatten_nested_pre(container)
        unwrap_fb_redirects(container)
        body_md = md(str(container), heading_style="ATX", bullets="*")
        body_md = re.sub(r"\n{3,}", "\n\n", body_md).strip()
        # Literal "{{ }}" (template-tag docs, Handlebars-style examples, etc.)
        # reads as Vue mustache interpolation once VitePress renders this
        # Markdown to HTML -- and that happens even inside inline code spans,
        # which VitePress does not wrap in v-pre (only fenced code blocks get
        # that treatment). A zero-width space splits the delimiter so Vue's
        # compiler never sees "{{"/"}}" while remaining invisible to readers.
        body_md = body_md.replace("{{", "{​{").replace("}}", "}​}")
        # Curly/smart quotes next to braces inside table cells crash Vue's
        # SFC compiler at build time (rollup: "Unexpected character '‘'"),
        # apparently from how it hoists static table-cell text. Straight
        # quotes render identically for readers and sidestep the crash.
        body_md = (
            body_md.replace("‘", "'")
            .replace("’", "'")
            .replace("“", '"')
            .replace("”", '"')
        )

        frontmatter = (
            "---\n"
            f"title: {json.dumps(rec['title'])}\n"
            f"source_url: {rec['url']}\n"
            "---\n\n"
        )
        out_path = OUT_DIR / rec["rel"].with_suffix(".md")
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(frontmatter + body_md + "\n", encoding="utf-8")
        converted += 1

    # Write the manual-redownload list.
    needs_redownload.sort(key=lambda t: (t[0], t[1]))
    lines = [
        "# Pages to re-download from Chrome",
        "",
        "These source HTML files did not contain usable page content when captured",
        "(either empty, errored, or an exact duplicate of another page's rendered",
        "output -- a known artifact of this crawl where client-side routing didn't",
        "finish before the page was saved). Re-save each URL from Chrome, replacing",
        "the file at the given path.",
        "",
    ]
    reason_titles = {
        "duplicate": "## Duplicate content (shows another page's content)",
        "empty": "## Empty capture (no readable content)",
        "error": "## Parse error",
    }
    for reason in ["duplicate", "empty", "error"]:
        items = [t for t in needs_redownload if t[0] == reason]
        if not items:
            continue
        lines.append(reason_titles[reason])
        lines.append("")
        for _, url, rel, note in items:
            lines.append(f"- [ ] [{url}]({url}) — `{rel}` — {note}")
        lines.append("")

    (ROOT / "NEEDS_REDOWNLOAD.md").write_text("\n".join(lines), encoding="utf-8")

    print(f"Total HTML files scanned: {len(records)}")
    print(f"Converted to Markdown:    {converted}")
    print(f"Flagged for re-download:  {len(needs_redownload)}")


if __name__ == "__main__":
    main()
