chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
      id: "freedium",
      title: "Freedium",
      contexts: ["all"],
    });
    chrome.contextMenus.create({
        id: "scihub",
        title: "Scihub",
        contexts: ["all"],
    });
  });


chrome.contextMenus.onClicked.addListener(function (info, tab) {
if (info.menuItemId === "freedium") {
    var modifiedLink = "https://freedium.cfd/" + info.linkUrl;
    chrome.tabs.create({ url: modifiedLink });
}
if (info.menuItemId === "scihub") {
    var modifiedLink = "https://sci-hub.se/" + info.linkUrl;
    chrome.tabs.create({ url: modifiedLink });
}
});