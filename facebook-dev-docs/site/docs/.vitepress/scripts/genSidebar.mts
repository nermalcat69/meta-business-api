import fs from "node:fs";
import path from "node:path";
import type { DefaultTheme } from "vitepress";

const TITLE_RE = /^---[\s\S]*?\ntitle:\s*"((?:[^"\\]|\\.)*)"/;

function readTitle(absFile: string, fallback: string): string {
  try {
    const raw = fs.readFileSync(absFile, "utf-8");
    const m = raw.match(TITLE_RE);
    if (m) return JSON.parse(`"${m[1]}"`);
  } catch {
    /* ignore, use fallback */
  }
  return fallback;
}

function titleCase(slug: string): string {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Recursively builds a VitePress sidebar group for one directory.
 * `dir` is the absolute directory path; `base` is its URL path (with
 * trailing slash) used to prefix generated links.
 */
function buildGroup(dir: string, base: string): DefaultTheme.SidebarItem[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory()).sort((a, b) => a.name.localeCompare(b.name));
  const files = entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .sort((a, b) => a.name.localeCompare(b.name));

  const items: DefaultTheme.SidebarItem[] = [];

  for (const file of files) {
    const slug = file.name.replace(/\.md$/, "");
    const abs = path.join(dir, file.name);
    const fallbackTitle = slug === "index" ? titleCase(path.basename(dir)) : titleCase(slug);
    const title = readTitle(abs, fallbackTitle);
    const link = slug === "index" ? base : `${base}${slug}`;
    items.push({ text: title, link });
  }

  for (const d of dirs) {
    const childDir = path.join(dir, d.name);
    const childBase = `${base}${d.name}/`;
    const indexFile = path.join(childDir, "index.md");
    const overviewFile = path.join(dir, `${d.name}.md`);
    const groupTitle = fs.existsSync(indexFile)
      ? readTitle(indexFile, titleCase(d.name))
      : fs.existsSync(overviewFile)
        ? readTitle(overviewFile, titleCase(d.name))
        : titleCase(d.name);

    items.push({
      text: groupTitle,
      collapsed: true,
      items: buildGroup(childDir, childBase),
    });
  }

  return items;
}

/**
 * Builds the full multi-section sidebar map keyed by top-level URL prefix,
 * e.g. `/documentation/ads-commerce/` -> [...]. One entry is produced per
 * immediate child of `docsRoot/documentation` and one for `docsRoot/docs`.
 */
export function generateSidebar(docsRoot: string): DefaultTheme.Sidebar {
  const sidebar: DefaultTheme.Sidebar = {};

  const documentationDir = path.join(docsRoot, "documentation");
  for (const entry of fs.readdirSync(documentationDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const base = `/documentation/${entry.name}/`;
    sidebar[base] = buildGroup(path.join(documentationDir, entry.name), base);
  }

  const docsDir = path.join(docsRoot, "docs");
  if (fs.existsSync(docsDir)) {
    sidebar["/docs/"] = buildGroup(docsDir, "/docs/");
  }

  return sidebar;
}

/** Top nav entries: one per top-level documentation category, plus legacy docs. */
export function generateNav(docsRoot: string): DefaultTheme.NavItem[] {
  const nav: DefaultTheme.NavItem[] = [{ text: "Home", link: "/" }];

  const documentationDir = path.join(docsRoot, "documentation");
  const categories = fs
    .readdirSync(documentationDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b));

  nav.push({
    text: "Documentation",
    items: categories.map((name) => {
      const indexFile = path.join(documentationDir, name, "index.md");
      const overviewFile = path.join(documentationDir, `${name}.md`);
      const title = fs.existsSync(indexFile)
        ? readTitle(indexFile, titleCase(name))
        : fs.existsSync(overviewFile)
          ? readTitle(overviewFile, titleCase(name))
          : titleCase(name);
      return { text: title, link: `/documentation/${name}/` };
    }),
  });

  if (fs.existsSync(path.join(docsRoot, "docs"))) {
    nav.push({ text: "Legacy Docs", link: "/docs/" });
  }

  return nav;
}
