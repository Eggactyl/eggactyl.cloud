import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.eggactyl.cloud",
  integrations: [
    starlight({
      plugins: [
        starlightBlog({
          title: "Release Notes",
          // translations: {
          //   id: "Catatan Rilis",
          //   fr: "Notes de mises à jour",
          // },
          prefix: 'releases',
          authors: {
            shane: {
              name: "Shane C.",
              title: "Developer",
              picture: "/egg-icon.svg",
              url: "https://eggactyl.cloud",
            },
          },
        }),
      ],
      title: "Eggactyl",
      head: [
        {
          tag: "meta",
          attrs: {
            name: "theme-color",
            content: "#48A9FF",
          },
        },
      ],
      social: {
        github: "https://github.com/eggactyl",
        discord: "https://discord.eggactyl.cloud",
      },
      logo: {
        src: "./src/assets/egg-icon.svg",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        id: {
          label: "Bahasa Indonesia",
          lang: "id",
        },
        fr: {
          label: "Français",
          lang: "fr",
        },
        bn: {
          label: "বাংলা",
          lang: "bn"
        }
      },
      sidebar: [
        {
          label: "Welcome",
          translations: {
            id: "Selamat Datang",
            fr: "Bienvenue",
          },
          autogenerate: {
            directory: 'welcome',
          }
        },
        {
          label: "Guides",
          translations: {
            id: "Panduan",
            fr: "Guides",
          },
          autogenerate: {
            directory: 'guides',
          },
        },
        {
          label: "Legal",
          translations: {
            id: "Kebijakan",
            fr: "Mentions légales",
          },
          autogenerate: {
            directory: "legal",
          },
        },
      ],
      customCss: ["./src/assets/landing.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
