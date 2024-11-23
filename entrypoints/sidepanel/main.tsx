import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

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
