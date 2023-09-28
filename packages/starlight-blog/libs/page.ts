import type { AstroGlobal } from 'astro'
import config from 'virtual:starlight-blog-config'

export function isAnyBlogPage({ url }: AstroGlobal) {
  return url.pathname.match(/^\/releases(\/?$|\/.+\/?$)/)
}

export function isBlogRoot({ url }: AstroGlobal) {
  return url.pathname.match(/^\/releases\/?$/)
}

export function isAnyBlogPostPage({ url }: AstroGlobal) {
  return url.pathname.match(/^\/releases\/\d+\.\d+(\.\d+)?(?!(\d+\/?|tags\/.+)$).+$/) !== null;
}

export function isBlogPostPage({ url }: AstroGlobal, slug: string) {
  return url.pathname.match(new RegExp(`^/${slug}/?$`)) !== null
}

export function isBlogTagsPage({ url }: AstroGlobal, tag: string) {
  return url.pathname.match(new RegExp(`^/releases/tags/${tag}/?$`)) !== null
}

export function getPageProps(title: string, slug: string) {
  return {
    entry: {
      data: {
        editUrl: false,
        head: [],
        tableOfContents: false,
        title,
      },
      slug,
    },
    entryMeta: {
      lang: config.locale,
    },
    lang: config.locale,
  }
}
