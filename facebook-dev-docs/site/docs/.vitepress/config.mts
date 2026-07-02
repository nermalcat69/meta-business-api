import { defineConfig } from "vitepress";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { generateSidebar, generateNav } from "./scripts/genSidebar.mts";

// Deployed via GitHub Pages (project page), so the site lives under a
// /meta-business-api/ subpath rather than at the domain root. Update both of
// these together if the repo is renamed or moved to a custom domain.
const SITE_URL = "https://nermalcat69.github.io/meta-business-api";
const BASE = "/meta-business-api/";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.resolve(__dirname, "..");

export default defineConfig({
  title: "Meta / Facebook Developer Docs Mirror",
  description:
    "A crawlable Markdown mirror of Meta's developer documentation (developers.facebook.com), converted from a static HTML snapshot.",
  srcDir: ".",
  base: BASE,
  cleanUrls: false,
  lastUpdated: true,
  // Source pages cross-link to ~676 sibling pages that were deliberately
  // excluded from conversion (duplicate/empty captures -- see
  // NEEDS_REDOWNLOAD.md), plus a handful of literal http://localhost URLs
  // from the original WhatsApp testing docs. Neither should fail the build;
  // every page still carries its real developers.facebook.com source link.
  ignoreDeadLinks: true,
  markdown: {
    // The source content is a raw HTML->Markdown conversion and can contain
    // literal angle-bracket tokens (e.g. `Array<String>`, `<PLACEHOLDER>`)
    // that read as HTML tags under the CommonMark html_inline rule. With
    // html:true those get parsed as (unclosed) custom elements and crash
    // Vue's SFC compiler at build time. Disabling it renders them as safe
    // escaped text (`&lt;String&gt;`) instead, which is what we want since
    // none of this content relies on real inline HTML.
    html: false,
  },
  sitemap: {
    // Trailing slash matters: the sitemap generator resolves each page's
    // relative path against this via `new URL(page, hostname)`, and without
    // a trailing slash the last hostname segment (here, the repo name) gets
    // dropped instead of treated as a directory.
    hostname: `${SITE_URL}/`,
  },
  head: [
    ["meta", { name: "robots", content: "index, follow" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // Points LLM crawlers/agents at the machine-readable index (llms.txt
    // convention: https://llmstxt.org/) in addition to it being linked from
    // the nav/footer for human visitors.
    ["link", { rel: "llms.txt", href: "/llms.txt" }],
  ],
  themeConfig: {
    nav: [
      ...generateNav(docsRoot),
      {
        text: "For LLMs",
        items: [
          { text: "llms.txt (page index)", link: "/llms.txt" },
          { text: "llms-full.txt (full content)", link: "/llms-full.txt" },
        ],
      },
      { text: "About", link: "/about-us" },
    ],
    sidebar: generateSidebar(docsRoot),
    search: {
      provider: "local",
    },
    outline: {
      level: [2, 3],
    },
    footer: {
      message:
        'Unofficial mirror for reference/search purposes. All content originates from developers.facebook.com — see the source link at the top of each page. ' +
        'Machine-readable indexes: <a href="/llms.txt" target="_blank">llms.txt</a> · ' +
        '<a href="/llms-full.txt" target="_blank">llms-full.txt</a> · ' +
        '<a href="/about-us">About</a>',
      copyright:
        'Content © Meta Platforms, Inc. · Built by <a href="https://arjunaditya.xyz" target="_blank" rel="noopener">Arjun Aditya</a>',
    },
  },
  transformPageData(pageData) {
    const sourceUrl = pageData.frontmatter.source_url as string | undefined;
    pageData.frontmatter.head ??= [];
    if (sourceUrl) {
      pageData.frontmatter.head.push(["link", { rel: "alternate", href: sourceUrl }]);
    }
  },
});
