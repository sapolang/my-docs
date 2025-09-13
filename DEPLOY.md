# VitePress 项目部署指南

## 📋 部署准备

### 1. 环境要求
- Node.js 16+ 
- pnpm (推荐) 或 npm
- Git

### 2. 安装依赖
```bash
pnpm install
```

## 🚀 本地开发

### 启动开发服务器
```bash
pnpm run dev
```
访问: `http://localhost:5174`

### 构建生产版本
```bash
pnpm run build
```

### 预览构建结果
```bash
pnpm run preview
```

## 🌐 部署选项

### GitHub Pages

1. **自动部署 (推荐)**
   - 使用 GitHub Actions
   - 配置文件：`.github/workflows/deploy.yml`
   - 推送到 main 分支自动触发部署

2. **手动部署**
   ```bash
   # 给部署脚本执行权限
   chmod +x deploy.sh
   
   # 执行部署
   ./deploy.sh
   ```

### Netlify

1. 连接 GitHub 仓库
2. 构建命令：`pnpm run build`
3. 发布目录：`.vitepress/dist`
4. Node.js 版本：16+

### Vercel

1. 导入项目到 Vercel
2. 框架预设：VitePress
3. 自动检测构建配置
4. 一键部署

## ⚙️ 配置说明

### 基础路径配置

如果部署到子路径，需要在 `.vitepress/config.js` 中配置：

```js
export default {
  base: '/your-repo-name/',
  // ...
}
```

### 域名配置

1. 在 `public` 目录下创建 `CNAME` 文件
2. 内容为你的域名：`your-domain.com`

### SEO 优化

```js
export default {
  head: [
    ['meta', { name: 'description', content: '网站描述' }],
    ['meta', { name: 'keywords', content: '关键词' }],
    ['meta', { property: 'og:title', content: '页面标题' }],
    ['meta', { property: 'og:description', content: '页面描述' }]
  ]
}
```

## 🔧 常见问题

### Q: 404 错误
**A:** 检查 base 配置和文件路径

### Q: 样式不生效
**A:** 确认 CSS 文件路径和导入语句

### Q: 搜索功能异常
**A:** 检查搜索配置和内容索引

### Q: 图片无法显示
**A:** 确认图片路径，建议放在 `public` 目录

## 📈 性能优化

### 图片优化
- 使用 WebP 格式
- 压缩图片大小
- 使用 CDN 加速

### 构建优化
- 启用代码分割
- 压缩静态资源
- 开启 gzip 压缩

### 缓存策略
- 设置合理的缓存头
- 使用版本号管理资源
- 配置 Service Worker

## 🎯 部署检查清单

- [ ] 配置正确的 base 路径
- [ ] 测试所有页面链接
- [ ] 验证图片和资源加载
- [ ] 检查移动端适配
- [ ] 测试搜索功能
- [ ] 验证 SEO 标签
- [ ] 检查加载速度
- [ ] 测试深色模式

---

*🎉 祝你部署顺利！*