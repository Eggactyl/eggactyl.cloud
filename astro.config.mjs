import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
  site: "https://eggactyl.cloud",
  integrations: [starlightBlog({
    title: "Release Notes",
    authors: {
      shane: {
        name: "Shane C.",
        title: "Developer",
        picture: "/egg-icon.webp",
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
      src: "./src/assets/egg-icon.webp"
    },
    sidebar: [{
      label: "Welcome",
      items: [{
        label: "Introduction",
        link: "/introduction"
      }, {
        label: "Configuration",
        link: "/configuration"
      }, {
        label: "Environment Variables",
        link: "/environment"
      }, {
        label: "Flags",
        link: "/flags"
      }, {
        label: "FAQ",
        link: "/faq"
      }]
    }, {
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Installation',
        link: '/guides/installation'
      }]
    }, {
      label: "Legal",
      autogenerate: {
        directory: "legal"
      }
    }],
    customCss: ['./src/assets/landing.css']
  })]
});