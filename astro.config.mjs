import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.eggactyl.cloud",
  integrations: [
    starlightBlog({
      title: "Release Notes",
      translations: {
        id: "Catatan Rilis",
        fr: "Notes de mises à jour",
      },
      authors: {
        shane: {
          name: "Shane C.",
          title: "Developer",
          picture: "/egg-icon.svg",
          url: "https://eggactyl.cloud",
        },
      },
    }),
    starlight({
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
      components: {
        MarkdownContent: "starlight-blog/overrides/MarkdownContent.astro",
        Sidebar: "starlight-blog/overrides/Sidebar.astro",
        ThemeSelect: "starlight-blog/overrides/ThemeSelect.astro",
      },
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
        // bn: {
        //   label: "বাংলা",
        //   lang: "bn"
        // }
      },

      sidebar: [
        {
          label: "Welcome",
          translations: {
            id: "Selamat Datang",
            fr: "Bienvenue",
          },
          items: [
            {
              label: "Introduction",
              translations: {
                id: "Perkenalan",
                fr: "Introduction",
              },
              link: "/introduction",
            },
            {
              label: "Configuration",
              translations: {
                id: "Konfigurasi",
                fr: "Configuration",
              },
              link: "/configuration",
            },
            {
              label: "Environment Variables",
              translations: {
                id: "Variabel Lingkungan",
                fr: "Variables d'environnement",
              },
              link: "/environment",
            },
            {
              label: "Flag",
              translations: {
                fr: "Flag",
              },
              link: "/flags",
            },
            {
              label: "FAQ",
              translations: {
                id: "Pertanyaan Umum",
                fr: "FAQ",
              },
              link: "/faq",
            },
          ],
        },
        {
          label: "Guides",
          translations: {
            id: "Panduan",
            fr: "Guides",
          },
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Installation",
              translations: {
                id: "Instalasi",
                fr: "Installation",
              },
              link: "/guides/installation",
            },
          ],
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
