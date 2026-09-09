const SITE = "https://coders-hub.com";
const PAGES = {
  download: `${SITE}/tools/video/m3u8-hls-downloader`,
  play: `${SITE}/tools/video/online-video-player`,
};
const VIDEO_RE = /\.(m3u8|mpd|mp4|webm|mov|m4v|ts)(\?|$)/i;
const MAX_PER_TAB = 50;

// tabId -> [{url, type, time}]
const found = new Map();

function addHit(tabId, url, type) {
  if (tabId < 0) return;
  const list = found.get(tabId) || [];
  if (list.some((h) => h.url === url)) return;
  list.unshift({ url, type, time: Date.now() });
  found.set(tabId, list.slice(0, MAX_PER_TAB));
  chrome.action.setBadgeText({ tabId, text: String(Math.min(list.length, 99)) });
  chrome.action.setBadgeBackgroundColor({ tabId, color: "#e04a32" });
}

function classify(url) {
  if (/\.m3u8(\?|$)/i.test(url)) return "HLS";
  if (/\.mpd(\?|$)/i.test(url)) return "DASH";
  return "FILE";
}

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (!VIDEO_RE.test(details.url)) return;
    if (/\.ts(\?|$)/i.test(details.url)) return; // ignore individual HLS segments
    addHit(details.tabId, details.url, classify(details.url));
  },
  { urls: ["<all_urls>"] },
);

chrome.tabs.onUpdated.addListener((tabId, info) => {
  if (info.status === "loading" && info.url) {
    found.delete(tabId);
    chrome.action.setBadgeText({ tabId, text: "" });
  }
});

chrome.tabs.onRemoved.addListener((tabId) => found.delete(tabId));

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === "getHits") {
    sendResponse({ hits: found.get(msg.tabId) || [] });
    return true;
  }
  if (msg.type === "clear") {
    found.delete(msg.tabId);
    chrome.action.setBadgeText({ tabId: msg.tabId, text: "" });
    sendResponse({ ok: true });
    return true;
  }
  if (msg.type === "send" || msg.type === "open") {
    const base = PAGES[msg.target === "play" ? "play" : "download"];
    chrome.tabs.create({ url: `${base}?url=${encodeURIComponent(msg.url)}` });
    sendResponse({ ok: true });
    return true;
  }
  return false;
});
