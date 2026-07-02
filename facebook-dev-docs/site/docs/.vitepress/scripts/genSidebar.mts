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
  return slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function firstLink(items: DefaultTheme.SidebarItem[]): string | undefined {
  for (const item of items) {
    if (item.link) return item.link;
    if (item.items) {
      const found = firstLink(item.items);
      if (found) return found;
    }
  }
  return undefined;
}

/**
 * Recursively builds sidebar entries for one directory. `dir` is the
 * absolute directory path; `base` is its URL path (trailing slash) used to
 * prefix generated links.
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
    // A file that also has a same-named sibling directory is folded into
    // that directory's group below (as its "overview" entry), so skip it here.
    if (dirs.some((d) => d.name === slug)) continue;
    const abs = path.join(dir, file.name);
    const title = readTitle(abs, titleCase(slug));
    items.push({ text: title, link: `${base}${slug}` });
  }

  for (const d of dirs) {
    const childDir = path.join(dir, d.name);
    const childBase = `${base}${d.name}/`;
    const overviewFile = path.join(dir, `${d.name}.md`);
    const hasOverview = fs.existsSync(overviewFile);

    const childItems = buildGroup(childDir, childBase);
    if (hasOverview) {
      childItems.unshift({
        text: readTitle(overviewFile, "Overview"),
        link: `${base}${d.name}`,
      });
    }

    items.push({
      text: hasOverview ? readTitle(overviewFile, titleCase(d.name)) : titleCase(d.name),
      collapsed: true,
      items: childItems,
    });
  }

  return items;
}

/**
 * Builds the full multi-section sidebar map keyed by top-level URL prefix,
 * e.g. `/documentation/ads-commerce` -> [...]. One entry per top-level
 * category under `docsRoot/documentation`, plus one for `docsRoot/docs`.
 */
export function generateSidebar(docsRoot: string): DefaultTheme.Sidebar {
  const sidebar: DefaultTheme.Sidebar = {};

  const documentationDir = path.join(docsRoot, "documentation");
  const entries = fs.readdirSync(documentationDir, { withFileTypes: true });
  const dirNames = new Set(entries.filter((e) => e.isDirectory()).map((e) => e.name));
  const fileSlugs = new Set(
    entries.filter((e) => e.isFile() && e.name.endsWith(".md")).map((e) => e.name.replace(/\.md$/, "")),
  );
  const slugs = new Set([...dirNames, ...fileSlugs]);

  for (const slug of slugs) {
    const base = `/documentation/${slug}/`;
    const overviewFile = path.join(documentationDir, `${slug}.md`);
    const hasOverview = fileSlugs.has(slug);
    const items: DefaultTheme.SidebarItem[] = [];
    if (hasOverview) {
      items.push({ text: readTitle(overviewFile, "Overview"), link: `/documentation/${slug}` });
    }
    if (dirNames.has(slug)) {
      items.push(...buildGroup(path.join(documentationDir, slug), base));
    }
    sidebar[`/documentation/${slug}`] = items;
  }

  const docsDir = path.join(docsRoot, "docs");
  if (fs.existsSync(docsDir)) {
    sidebar["/docs"] = buildGroup(docsDir, "/docs/");
  }

  return sidebar;
}

/** Top nav entries: one per top-level documentation category, plus legacy docs. */
export function generateNav(docsRoot: string): DefaultTheme.NavItem[] {
  const nav: DefaultTheme.NavItem[] = [{ text: "Home", link: "/" }];

  const documentationDir = path.join(docsRoot, "documentation");
  const entries = fs.readdirSync(documentationDir, { withFileTypes: true });
  const dirNames = new Set(entries.filter((e) => e.isDirectory()).map((e) => e.name));
  const fileSlugs = new Set(
    entries.filter((e) => e.isFile() && e.name.endsWith(".md")).map((e) => e.name.replace(/\.md$/, "")),
  );
  const slugs = [...new Set([...dirNames, ...fileSlugs])].sort((a, b) => a.localeCompare(b));

  nav.push({
    text: "Documentation",
    items: slugs.map((slug) => {
      const overviewFile = path.join(documentationDir, `${slug}.md`);
      const hasOverview = fileSlugs.has(slug);
      const title = hasOverview ? readTitle(overviewFile, titleCase(slug)) : titleCase(slug);
      let link = `/documentation/${slug}`;
      if (!hasOverview && dirNames.has(slug)) {
        const items = buildGroup(path.join(documentationDir, slug), `/documentation/${slug}/`);
        link = firstLink(items) ?? link;
      }
      return { text: title, link };
    }),
  });

  if (fs.existsSync(path.join(docsRoot, "docs"))) {
    nav.push({ text: "Legacy Docs", link: "/docs/graph-api" });
  }

  return nav;
}
