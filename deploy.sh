#!/bin/bash

# VitePress 部署脚本
# 构建并部署到 GitHub Pages

set -e

echo \"🚀 开始构建 VitePress 站点...\"

# 安装依赖
pnpm install

# 构建项目
pnpm run build

echo \"✅ 构建完成！\"

# 如果有 dist 目录，准备部署
if [ -d \".vitepress/dist\" ]; then
  echo \"📦 准备部署文件...\"
  cd .vitepress/dist
  
  # 初始化 git
  git init
  git add -A
  git commit -m \"Deploy VitePress site\"
  
  # 推送到 gh-pages 分支
  # git push -f git@github.com:username/repository.git main:gh-pages
  
  echo \"🎉 部署完成！\"
  echo \"📝 请手动推送到 GitHub Pages:\"
  echo \"git push -f git@github.com:username/repository.git main:gh-pages\"
else
  echo \"❌ 构建失败，未找到 dist 目录\"
  exit 1
fi