import {defineConfig} from "playwright/test";

export default defineConfig({
  testDir: "tests",
  timeout: 30000,
  use: {
    // Configure test settings
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
});
