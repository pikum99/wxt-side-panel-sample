export default defineBackground(() => {
  let isSidePanelOpen = false;

  // ボタンがクリックされたときの処理
  chrome.action.onClicked.addListener((tab) => {
    if (isSidePanelOpen) {
      chrome.runtime.sendMessage("closeSidePanel");
    } else {
      chrome.sidePanel.open({ windowId: tab.windowId });
    }
    isSidePanelOpen = !isSidePanelOpen;
  });

  // サイドパネルの状態を検出する
  chrome.runtime.onConnect.addListener((port) => {
    if (port.name === "mySidepanel") {
      // サイドパネルが閉じられたときの処理
      port.onDisconnect.addListener(() => {
        console.log("Sidepanel closed.");
        isSidePanelOpen = false; // フラグをリセット
      });
    }
  });

  // サイドパネルを閉じる処理をサイドパネルスクリプトに委託
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "closeSidePanel") {
      sendResponse({ action: "close" });
    }
  });
});
