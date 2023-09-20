import type { AstroIntegration, AstroUserConfig } from 'astro'

import { type StarlightBlogConfig, validateConfig } from './libs/config'
import { vitePluginStarlightBlogComponents, vitePluginStarlightBlogConfig } from './libs/vite'

export default function starlightBlogIntegration(userConfig?: StarlightBlogConfig): AstroIntegration {
  const config: StarlightBlogConfig = validateConfig(userConfig)

  return {
    name: 'starlight-blog',
    hooks: {
      'astro:config:setup': ({ injectRoute, updateConfig }) => {
        injectRoute({
          entryPoint: 'starlight-blog/tags',
          pattern: '/releases/tags/[tag]',
        })

        injectRoute({
          entryPoint: 'starlight-blog/blog',
          pattern: '/releases/[...page]',
        })

        const astroConfig: AstroUserConfig = {
          vite: {
            plugins: [vitePluginStarlightBlogComponents(), vitePluginStarlightBlogConfig(config)],
          },
        }

        updateConfig(astroConfig)
      },
    },
  }
}
