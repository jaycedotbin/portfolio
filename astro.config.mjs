import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), tailwind(), sitemap()],
  site: "https://jaycedotbin.github.io",
  vite: {
    ssr: {
      noExternal: ["@fontsource/inter"]
    }
  }
});