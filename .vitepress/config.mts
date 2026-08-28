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
            { text: 'Tsumugi Pay', link: '/products/pay' },
            { text: 'Tsumugi Industry', link: '/products/industry' },
            { text: 'Tsumugi Workspace', link: '/products/workspace' },
          ],
        },
      ],
    },
    footer: {
      message: 'Tsumugi 产品线门户 · 面向零售、教育、支付、工业与企业协作的数字化解决方案 · 联系我们：<a href="mailto:contact@flweb.cn">contact@flweb.cn</a>',
      copyright: 'Copyright © 2018-2026 WindyPear Tech',
    },
  },
})
