export default {
  title: '📚 我的文档中心',
  description: '基于 VitePress 构建的个人技术文档与学习资源管理系统',
  
  // GitHub Pages 部署基础路径
  // 请将 'your-repo-name' 替换为您的实际仓库名称
  // 如果是 username.github.io 则设置为 '/'
  // 如果是其他仓库名，则设置为 '/仓库名称/'
  base: '/my-docs/', // 请根据实际情况修改
  
  // 主题配置
  themeConfig: {
    // 网站logo
    siteTitle: '📚 我的文档中心',
    
    // 导航栏
    nav: [
      { text: '🏠 首页', link: '/' },
      { 
        text: '🔧 技术文档', 
        items: [
          { text: '🤖 AI工具', link: '/docs/AI' },
          { text: '💻 程序开发', link: '/docs/程序' },
          { text: '🛠️ 实用工具', link: '/docs/工具' },
          { text: '🐳 Docker相关', link: '/docs/docker相关软件' },
          { text: '🎵 媒体管理', link: '/docs/媒体管理' }
        ]
      },
      { 
        text: '📚 学习资源',
        items: [
          { text: '🌐 语言学习', link: '/docs/语言学习' },
          { text: '📁 其他资源', link: '/docs/其他' }
        ]
      },
      { text: '📋 关于', link: '/about' }
    ],

    // 侧边栏
    sidebar: {
      '/docs/': {
        base: '/docs/',
        items: [
          {
            text: '🔧 技术文档',
            collapsed: false,
            items: [
              { text: '🤖 AI工具', link: 'AI' },
              { text: '💻 程序开发', link: '程序' },
              { text: '🛠️ 实用工具', link: '工具' },
              { text: '🐳 Docker相关', link: 'docker相关软件' },
              { text: '🎵 媒体管理', link: '媒体管理' }
            ]
          },
          {
            text: '📚 学习资源',
            collapsed: false,
            items: [
              { text: '🌐 语言学习', link: '语言学习' },
              { text: '📁 其他资源', link: '其他' }
            ]
          }
        ]
      }
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/your-username/your-repo/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    // 页脚
    footer: {
      message: '基于 <a href="https://vitepress.dev/">VitePress</a> 构建',
      copyright: 'Copyright © 2024-present'
    },

    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    // 文档页脚导航
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 大纲配置
    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    // 返回顶部
    returnToTopLabel: '回到顶部',

    // 外部链接图标
    externalLinkIcon: true
  },

  // 忽略死链接检查
  ignoreDeadLinks: true,

  // 其他配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],

  // 最后更新时间
  lastUpdated: true,

  // 语言设置
  lang: 'zh-CN',

  // 清理URLs
  cleanUrls: true,

  // Markdown配置
  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  // 站点地图
  sitemap: {
    hostname: 'https://your-domain.com'
  }
}