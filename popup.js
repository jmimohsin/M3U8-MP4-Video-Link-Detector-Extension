const listEl = document.getElementById("list");
const emptyEl = document.getElementById("empty");

async function currentTabId() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab ? tab.id : -1;
}

function render(hits, tabId) {
  listEl.innerHTML = "";
  emptyEl.hidden = hits.length > 0;
  for (const hit of hits) {
    const li = document.createElement("li");

    const row = document.createElement("div");
    row.className = "row";
    const type = document.createElement("span");
    type.className = "type";
    type.textContent = hit.type;
    row.appendChild(type);
    li.appendChild(row);

    const url = document.createElement("div");
    url.className = "url";
    url.textContent = hit.url;
    li.appendChild(url);

    const actions = document.createElement("div");
    actions.className = "actions";

    const play = document.createElement("button");
    play.className = "primary";
    play.textContent = "Play";
    play.addEventListener("click", () =>
      chrome.runtime.sendMessage({ type: "open", target: "play", url: hit.url }),
    );

    const download = document.createElement("button");
    download.className = "primary";
    download.textContent = "Download";
    download.addEventListener("click", () =>
      chrome.runtime.sendMessage({ type: "open", target: "download", url: hit.url }),
    );

    const copy = document.createElement("button");
    copy.textContent = "Copy";
    copy.addEventListener("click", async () => {
      await navigator.clipboard.writeText(hit.url);
      copy.textContent = "Copied";
      setTimeout(() => (copy.textContent = "Copy"), 1200);
    });

    actions.append(play, download, copy);
    li.appendChild(actions);
    listEl.appendChild(li);
  }
  document.getElementById("clear").onclick = () => {
    chrome.runtime.sendMessage({ type: "clear", tabId }, () => render([], tabId));
  };
}

(async () => {
  const tabId = await currentTabId();
  chrome.runtime.sendMessage({ type: "getHits", tabId }, (res) => {
    render((res && res.hits) || [], tabId);
  });
})();
