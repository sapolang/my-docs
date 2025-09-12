// 主题配置文件
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 应用级别的增强
    // 可以在这里注册全局组件
  }
}