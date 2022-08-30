import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import type { ViteUserConfig } from "astro/config";
import { defineConfig } from "astro/config";

const viteUserConfig: ViteUserConfig = {
	ssr: {
		noExternal: ["@fontsource/inter"],
	},
};

// https://astro.build/config
export default defineConfig({
	site: "https://jaycedotbin.github.io",
	integrations: [tailwind(), sitemap()],
	vite: viteUserConfig,
});
