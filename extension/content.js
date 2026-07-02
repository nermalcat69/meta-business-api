// Runs on developers.facebook.com/docs/* and /documentation/* pages.
// Extracts the main article text + on-page links, and can be asked
// (by the popup or the background script) to save the current page.

function extractContent() {
  const main =
    document.querySelector("main") ||
    document.querySelector("article") ||
    document.querySelector('[role="main"]') ||
    document.body;

  const title = (document.querySelector("h1")?.innerText || document.title || "").trim();

  // Clone so we can resolve relative links/srcs to absolute without
  // touching the live page, and strip script/style noise.
  const clone = main.cloneNode(true);
  clone.querySelectorAll("script, style, noscript").forEach((el) => el.remove());
  clone.querySelectorAll("a[href]").forEach((a) => {
    try {
      a.setAttribute("href", new URL(a.getAttribute("href"), location.href).toString());
    } catch {
      // leave as-is if it can't be resolved
    }
  });
  clone.querySelectorAll("img[src]").forEach((img) => {
    try {
      img.setAttribute("src", new URL(img.getAttribute("src"), location.href).toString());
    } catch {
      // leave as-is
    }
  });

  const html = clone.outerHTML;

  return { title, html, url: location.href, path: location.pathname };
}

function extractLinks() {
  const anchors = Array.from(document.querySelectorAll("a[href]"));
  const seen = new Set();
  const links = [];

  for (const a of anchors) {
    let href;
    try {
      href = new URL(a.getAttribute("href"), location.href);
    } catch {
      continue;
    }
    if (href.hostname !== "developers.facebook.com") continue;
    if (!/^\/(docs|documentation)\//.test(href.pathname)) continue;

    href.hash = "";
    const clean = href.toString();
    if (seen.has(clean)) continue;
    seen.add(clean);
    links.push({ url: clean, text: a.innerText.trim().slice(0, 200) });
  }
  return links;
}

function buildHtmlDocument({ title, html, url }) {
  const now = new Date().toISOString();
  return [
    "<!DOCTYPE html>",
    '<html lang="en">',
    "<head>",
    '<meta charset="utf-8">',
    `<title>${title.replace(/</g, "&lt;")}</title>`,
    `<!-- source_url: ${url} -->`,
    `<!-- scraped_at: ${now} -->`,
    "</head>",
    "<body>",
    html,
    "</body>",
    "</html>",
    "",
  ].join("\n");
}

function saveCurrentPage() {
  const content = extractContent();
  const links = extractLinks();
  const html = buildHtmlDocument(content);

  chrome.runtime.sendMessage({
    type: "SAVE_PAGE",
    payload: {
      url: content.url,
      path: content.path,
      title: content.title,
      html,
      links,
    },
  });
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === "PING") {
    sendResponse({ ok: true });
    return;
  }
  if (msg.type === "SAVE_NOW") {
    saveCurrentPage();
    sendResponse({ ok: true });
    return;
  }
  if (msg.type === "GET_LINKS") {
    sendResponse({ links: extractLinks() });
    return;
  }
});

// Auto-save on load if enabled, and also react to SPA-style history
// navigations the background script detects (see background.js).
chrome.storage.local.get(["autoSave"], ({ autoSave }) => {
  if (autoSave) {
    // small delay lets client-side rendering settle
    setTimeout(saveCurrentPage, 800);
  }
});
