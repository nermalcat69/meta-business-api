const BASE_DIR = "facebook-dev-docs";

function pathToFilename(pathname) {
  // /documentation/business-messaging/whatsapp/about-the-platform
  // -> facebook-dev-docs/documentation/business-messaging/whatsapp/about-the-platform.html
  let clean = pathname.replace(/^\/+|\/+$/g, "");
  if (!clean) clean = "index";
  const safe = clean
    .split("/")
    .map((seg) => seg.replace(/[^a-zA-Z0-9._-]/g, "-"))
    .join("/");
  return `${BASE_DIR}/${safe}.html`;
}

async function getState() {
  const { savedPages = {}, linkQueue = {}, autoSave = false } =
    await chrome.storage.local.get(["savedPages", "linkQueue", "autoSave"]);
  return { savedPages, linkQueue, autoSave };
}

async function saveHtml(url, path, title, html) {
  const { savedPages } = await getState();
  const filename = pathToFilename(path);

  const dataUrl = "data:text/html;charset=utf-8," + encodeURIComponent(html);

  await chrome.downloads.download({
    url: dataUrl,
    filename,
    conflictAction: "overwrite",
    saveAs: false,
  });

  savedPages[url] = { title, path, filename, savedAt: new Date().toISOString() };
  await chrome.storage.local.set({ savedPages });
}

async function mergeLinks(discoveredLinks) {
  const { savedPages, linkQueue } = await getState();
  let added = 0;
  for (const { url, text } of discoveredLinks) {
    if (savedPages[url] || linkQueue[url]) continue;
    linkQueue[url] = { text, discoveredAt: new Date().toISOString() };
    added++;
  }
  await chrome.storage.local.set({ linkQueue });
  return added;
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  (async () => {
    if (msg.type === "SAVE_PAGE") {
      const { url, path, title, html, links } = msg.payload;
      await saveHtml(url, path, title, html);
      const added = await mergeLinks(links || []);
      // remove from queue if it was in it (now visited)
      const { linkQueue } = await getState();
      if (linkQueue[url]) {
        delete linkQueue[url];
        await chrome.storage.local.set({ linkQueue });
      }
      sendResponse({ ok: true, added });
      return;
    }

    if (msg.type === "GET_STATUS") {
      const { savedPages, linkQueue, autoSave } = await getState();
      sendResponse({
        savedCount: Object.keys(savedPages).length,
        queueCount: Object.keys(linkQueue).length,
        autoSave,
      });
      return;
    }

    if (msg.type === "SET_AUTOSAVE") {
      await chrome.storage.local.set({ autoSave: msg.value });
      sendResponse({ ok: true });
      return;
    }

    if (msg.type === "EXPORT_INDEX") {
      const { savedPages } = await getState();
      const json = JSON.stringify(savedPages, null, 2);
      const dataUrl = "data:application/json;charset=utf-8," + encodeURIComponent(json);
      await chrome.downloads.download({
        url: dataUrl,
        filename: `${BASE_DIR}/_index.json`,
        conflictAction: "overwrite",
        saveAs: false,
      });
      sendResponse({ ok: true });
      return;
    }

    if (msg.type === "EXPORT_QUEUE") {
      const { linkQueue } = await getState();
      const lines = Object.keys(linkQueue).sort();
      const text = lines.join("\n") + "\n";
      const dataUrl = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
      await chrome.downloads.download({
        url: dataUrl,
        filename: `${BASE_DIR}/_link-queue.txt`,
        conflictAction: "overwrite",
        saveAs: false,
      });
      sendResponse({ ok: true, count: lines.length });
      return;
    }

    if (msg.type === "CLEAR_DATA") {
      await chrome.storage.local.set({ savedPages: {}, linkQueue: {} });
      sendResponse({ ok: true });
      return;
    }
  })();
  return true; // keep the message channel open for the async response
});

// Handle SPA-style client-side navigations on developers.facebook.com
// (clicking sidebar links often doesn't do a full page load).
chrome.webNavigation.onHistoryStateUpdated.addListener(async (details) => {
  if (details.frameId !== 0) return;
  const { autoSave } = await getState();
  if (!autoSave) return;
  try {
    await chrome.tabs.sendMessage(details.tabId, { type: "SAVE_NOW" });
  } catch {
    // content script may not be ready yet; ignore
  }
});
