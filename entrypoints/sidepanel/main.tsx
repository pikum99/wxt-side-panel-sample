import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

// サイドパネルが閉じられたことを検出するための接続を作成
chrome.runtime.connect({ name: "mySidepanel" });

chrome.runtime.onMessage.addListener((message) => {
  if (message === "closeSidePanel") {
    window.close();
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
