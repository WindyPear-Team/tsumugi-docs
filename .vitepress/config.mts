import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Tsumugi',
  description: '风梨旗下企业级行业解决方案',
  lang: 'zh-CN',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '产品', link: '/products/jxc' },
    ],
    sidebar: {
      '/products/': [
        {
          text: '产品线',
          items: [
            { text: 'Tsumugi 进销存', link: '/products/jxc' },
            { text: 'Tsumugi Edu', link: '/products/edu' },
            { text: 'Tsumugi Panel', link: '/products/panel' },
          ],
        },
      ],
    },
    footer: {
      message: 'Tsumugi 产品线门户 · 面向零售、教育与企业后台的数字化解决方案',
      copyright: 'Copyright © 2018-2026 WindyPear Tech',
    },
  },
})
