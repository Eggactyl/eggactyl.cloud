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
    defaultLocale: "root",
    locales: {
      root: {
        label: "English",
        lang: "en"
      },
      id: {
        label: "Bahasa Indonesia",
        lang: "id"
      }
    },
    sidebar: [{
      label: "Welcome",
      translations: {
        id: "Selamat Datang"
      },
      items: [{
        label: "Introduction",
        translations: {
          "id": "Perkenalan"
        },
        link: "/introduction"
      }, {
        label: "Configuration",
        translations: {
          id: "Konfigurasi"
        },
        link: "/configuration"
      }, {
        label: "Environment Variables",
        translations: {
          id: "Variabel Lingkungan",
        },
        link: "/environment"
      }, {
        label: "Flag",
        link: "/flags"
      }, {
        label: "FAQ",
        translations: {
          id: "Pertanyaan Umum"
        },
        link: "/faq"
      }]
    }, {
      label: 'Guides',
      translations: {
        id: "Panduan"
      },
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Installation',
        translations: {
          id: "Instalasi"
        },
        link: '/guides/installation'
      }]
    }, {
      label: "Legal",
      translations: {
        id: "Hukum"
      },
      autogenerate: {
        directory: "legal"
      }
    }],
    customCss: ['./src/assets/landing.css']
  })]
});