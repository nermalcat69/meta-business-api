const statsEl = document.getElementById("stats");
const statusEl = document.getElementById("status");
const autoSaveEl = document.getElementById("autoSave");

function flash(msg) {
  statusEl.textContent = msg;
  setTimeout(() => (statusEl.textContent = ""), 2500);
}

async function refreshStats() {
  const res = await chrome.runtime.sendMessage({ type: "GET_STATUS" });
  statsEl.textContent = `Saved: ${res.savedCount} pages · Queued (unvisited links): ${res.queueCount}`;
  autoSaveEl.checked = !!res.autoSave;
}

async function activeTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

document.getElementById("saveNow").addEventListener("click", async () => {
  const tab = await activeTab();
  if (!tab?.url?.includes("developers.facebook.com")) {
    flash("Not on developers.facebook.com");
    return;
  }
  await chrome.tabs.sendMessage(tab.id, { type: "SAVE_NOW" });
  setTimeout(refreshStats, 500);
  flash("Saved.");
});

document.getElementById("exportIndex").addEventListener("click", async () => {
  await chrome.runtime.sendMessage({ type: "EXPORT_INDEX" });
  flash("Exported _index.json");
});

document.getElementById("exportQueue").addEventListener("click", async () => {
  const res = await chrome.runtime.sendMessage({ type: "EXPORT_QUEUE" });
  flash(`Exported _link-queue.txt (${res.count} links)`);
});

document.getElementById("clearData").addEventListener("click", async () => {
  await chrome.runtime.sendMessage({ type: "CLEAR_DATA" });
  refreshStats();
  flash("Cleared.");
});

autoSaveEl.addEventListener("change", async () => {
  await chrome.runtime.sendMessage({ type: "SET_AUTOSAVE", value: autoSaveEl.checked });
});

refreshStats();
