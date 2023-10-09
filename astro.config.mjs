import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
  site: "https://www.eggactyl.cloud",
  integrations: [starlightBlog({
    title: "Release Notes",
    authors: {
      shane: {
        name: "Shane C.",
        title: "Developer",
        picture: "/egg-icon.svg",
        url: "https://eggactyl.cloud"
      }
    }
  }), starlight({
    title: 'Eggactyl',
    social: {
      github: 'https://github.com/eggactyl',
      discord: 'https://discord.eggactyl.cloud'
    },
    logo: {
      src: "./src/assets/egg-icon.svg"
    },
    defaultLocale: "en",
    locales: {
      en: {
        label: "English"
      },
      in: {
        label: "Bahasa Indonesia",
        lang: "in"
      }
    },
    sidebar: [{
      label: "Welcome",
      translations: {
        in: "Selamat Datang"
      },
      items: [{
        label: "Introduction",
        translations: {
          "in": "Perkenalan"
        },
        link: "/introduction"
      }, {
        label: "Configuration",
        translations: {
          in: "Konfigurasi"
        },
        link: "/configuration"
      }, {
        label: "Environment Variables",
        translations: {
          in: "Variabel Lingkungan",
        },
        link: "/environment"
      }, {
        label: "Flag",
        link: "/flags"
      }, {
        label: "FAQ",
        translations: {
          in: "Pertanyaan Umum"
        },
        link: "/faq"
      }]
    }, {
      label: 'Guides',
      translations: {
        in: "Panduan"
      },
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Installation',
        translations: {
          in: "Instalasi"
        },
        link: '/guides/installation'
      }]
    }, {
      label: "Legal",
      translations: {
        in: "Hukum"
      },
      autogenerate: {
        directory: "legal"
      }
    }],
    customCss: ['./src/assets/landing.css']
  })]
});