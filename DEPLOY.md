# 🚀 GitHub Pages 部署指南

## 📋 部署步骤

### 1. 创建GitHub仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 `+` → `New repository`
3. 填写仓库名称，如：`my-docsify-docs`
4. 选择 `Public`（免费用户需要公开仓库才能使用GitHub Pages）
5. 点击 `Create repository`

### 2. 本地Git初始化

```bash
# 在docs目录下初始化git仓库
cd /home/ubu/docs
git init

# 设置用户信息
git config user.name "你的用户名"
git config user.email "你的邮箱"

# 添加远程仓库地址
git remote add origin https://github.com/你的用户名/仓库名.git

# 创建main分支
git branch -M main
```

### 3. 首次推送

```bash
# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Docsify docs site"

# 推送到GitHub
git push -u origin main
```

### 4. 启用GitHub Pages

1. 在GitHub仓库页面，点击 `Settings`
2. 滚动到 `Pages` 部分
3. 在 `Source` 下选择 `Deploy from a branch`
4. 选择 `main` 分支和 `/ (root)` 目录
5. 点击 `Save`

### 5. 访问站点

约1-2分钟后，你的站点将在以下地址可用：
```
https://你的用户名.github.io/仓库名/
```

## 🔄 日常更新流程

### 方式一：使用部署脚本（推荐）

```bash
# 快速部署
./deploy.sh "更新文档内容"
```

### 方式二：手动Git命令

```bash
# 添加更改
git add .

# 提交更改
git commit -m "更新说明"

# 推送到GitHub
git push origin main
```

## ⚙️ 自动化部署

项目已配置GitHub Actions自动化部署：

- 📁 `.github/workflows/deploy.yml` - 自动部署配置
- 🔄 每次推送到 `main` 分支时自动部署
- ⚡ 无需手动操作，推送即部署

## 📱 自定义域名（可选）

如果你有自己的域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 文件内容填写你的域名，如：`docs.yourdomain.com`
3. 在域名DNS设置中添加CNAME记录指向 `你的用户名.github.io`

## 🔧 常见问题

### Q: 404页面显示
**A**: 检查仓库是否为Public，GitHub Pages设置是否正确

### Q: 样式不显示
**A**: 确保CDN链接可访问，可尝试使用国内CDN

### Q: 搜索功能不工作
**A**: GitHub Pages需要一定时间索引内容，等待几分钟后重试

### Q: 图片不显示
**A**: 确保图片路径正确，推荐使用相对路径

## 🎉 部署完成清单

- ✅ GitHub仓库已创建
- ✅ 代码已推送到main分支
- ✅ GitHub Pages已启用
- ✅ 站点可以正常访问
- ✅ 搜索功能正常
- ✅ 响应式设计正常
- ✅ 所有链接可正常点击

## 🌟 优化建议

1. **SEO优化**: 在index.html中添加更多meta标签
2. **访问统计**: 配置Google Analytics
3. **评论系统**: 集成Gitalk或Disqus
4. **主题定制**: 根据需要调整CSS样式
5. **PWA支持**: 添加Service Worker支持离线访问