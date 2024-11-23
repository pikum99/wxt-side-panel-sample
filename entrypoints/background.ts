export default defineBackground(() => {
  // console.log("Hello background!", { id: browser.runtime.id });
  // サイドパネルが開いているかどうかを管理するフラグ
  let isSidePanelOpen = false;

  // ボタンがクリックされたときの処理
  chrome.action.onClicked.addListener((tab) => {
    // console.log("Button clicked!", { id: browser.runtime.id });
    if (isSidePanelOpen) {
      // サイドパネルを閉じるメッセージを送信
      // 参考: https://github.com/w3c/webextensions/issues/521
      chrome.runtime.sendMessage("closeSidePanel");
    } else {
      // サイドパネルを開く
      chrome.sidePanel.open({ windowId: tab.windowId });
    }
    // フラグをトグル
    isSidePanelOpen = !isSidePanelOpen;
  });

  // サイドパネルを閉じる処理をサイドパネルスクリプトに委託
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "closeSidePanel") {
      // console.log("Closing side panel...");
      // サイドパネルにメッセージを送る処理（後述の sidepanel.js に関連）
      sendResponse({ action: "close" });
    }
  });
});
