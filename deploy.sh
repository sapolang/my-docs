#!/bin/bash

# GitHub Pages 部署脚本
# 使用方法: ./deploy.sh "提交信息"

echo "🚀 开始部署到GitHub Pages..."

# 检查是否提供了提交信息
if [ -z "$1" ]; then
    COMMIT_MSG="Update docs $(date '+%Y-%m-%d %H:%M:%S')"
else
    COMMIT_MSG="$1"
fi

echo "📝 提交信息: $COMMIT_MSG"

# 添加所有文件到git
git add .

# 提交更改
git commit -m "$COMMIT_MSG"

# 推送到远程仓库
git push origin main

echo "✅ 部署完成！"
echo "🌐 请等待1-2分钟，然后访问: https://你的用户名.github.io/仓库名/"