import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        landing: resolve(import.meta.dirname, "landing.html"),
        login: resolve(import.meta.dirname, "login.html"),
        signup: resolve(import.meta.dirname, "signup.html"),
        privacy: resolve(import.meta.dirname, "privacy.html"),
        faq: resolve(import.meta.dirname, "faq.html"),
        items: resolve(import.meta.dirname, "items.html"),
      },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.js"],
    restoreMocks: true,
  },
});
