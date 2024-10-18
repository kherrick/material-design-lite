import { defineConfig } from "astro/config";
// https://astro.build/config
export default defineConfig({
  base: "/material-design-lite/",
  site: "https://kherrick.github.io",
  markdown: {
    syntaxHighlight: "prism",
  },
  vite: {
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: [".."],
      },
    },
  },
});
