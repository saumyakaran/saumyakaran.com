import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        apps: resolve(__dirname, "apps/index.html"),
        campfire: resolve(__dirname, "apps/campfire/index.html"),
        campfirePrivacy: resolve(__dirname, "privacy/campfire/index.html"),
        campfireSupport: resolve(__dirname, "support/campfire/index.html")
      }
    }
  }
});


