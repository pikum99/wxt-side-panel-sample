import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    permissions: [
      "sidePanel",
      "activeTab",
      "scripting",
      "contextMenus",
      "tabs",
      "storage",
    ],
    action: {
      default_popup: undefined,
    },
  },
  runner: {
    startUrls: ["https://www.google.co.jp/"],
  },
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-react"],
});
