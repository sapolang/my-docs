# 🐳 Docker 相关软件

> Docker 容器技术相关的工具和配置指南

## 🚀 Docker 加速

### 🔗 镜像代理资源
- **docker镜像代理**: [Mirrorify](https://www.mirrorify.net/)

- **常用镜像代理地址**

| 代理服务商 | 镜像地址 | 状态 |
|-----------|---------|------|
| Mirrorify | `https://hub.mirrorify.net` | ✅ 可用 |
| DaoCloud | `https://docker.m.daocloud.io` | ✅ 可用 |
| 阿里云 | `https://registry.cn-hangzhou.aliyuncs.com` | ✅ 可用 |
| 腾讯云 | `https://mirror.ccs.tencentyun.com` | ✅ 可用 |
| 网易云 | `https://hub-mirror.c.163.com` | ✅ 可用 |
| 中科大 | `https://docker.mirrors.ustc.edu.cn` | ✅ 可用 |

**1. 编辑 Docker 配置文件**
```bash
sudo vim /etc/docker/daemon.json
```

**2. 添加镜像源配置**
```json
{
  "registry-mirrors": ["https://hub.mirrorify.net"]
}
```

**3. 重启 Docker 服务**
```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

**4. 验证配置**
```bash
docker info | grep -A 10 "Registry Mirrors"
```

> 💡 **提示**: 配置后拉取镜像速度将显著提升

### ⚡ [Docker 镜像加速专家](https://kspeeder.istoreos.com/guide/getting-started.html)

```bash
docker pull docker.m.daocloud.io/linkease/kspeeder
docker tag  docker.m.daocloud.io/linkease/kspeeder  docker.io/linkease/kspeeder

# docker-compose.yml
services:
  kspeeder:
    image: linkease/kspeeder:latest
    container_name: kspeeder
    ports:
      - "5443:5443"
      - "5003:5003"
    volumes:
      - ./kspeeder-data:/kspeeder-data
      - ./kspeeder-config:/kspeeder-config
    restart: unless-stopped

docker compose up -d
```

## 📝 Docker 常用命令

### 🔍 基础操作

| 操作 | 命令 | 说明 |
|------|------|------|
| 查看版本 | `docker --version` | 查看 Docker 版本信息 |
| 查看信息 | `docker info` | 查看 Docker 系统信息 |
| 登录仓库 | `docker login` | 登录 Docker Hub |
| 登出仓库 | `docker logout` | 登出 Docker Hub |

### 📍 镜像管理

| 操作 | 命令 | 说明 |
|------|------|------|
| 拉取镜像 | `docker pull 镜像名` | 从仓库拉取镜像 |
| 列出镜像 | `docker images` | 查看本地所有镜像 |
| 删除镜像 | `docker rmi 镜像名` | 删除指定镜像 |
| 构建镜像 | `docker build -t 名称 .` | 从 Dockerfile 构建镜像 |
| 标记镜像 | `docker tag 源镜像 目标镜像` | 给镜像打标签 |
| 推送镜像 | `docker push 镜像名` | 将镜像推送到仓库 |

### 📦 容器管理

| 操作 | 命令 | 说明 |
|------|------|------|
| 运行容器 | `docker run -d --name 名称 镜像` | 后台运行容器 |
| 列出容器 | `docker ps` | 查看运行中的容器 |
| 列出所有 | `docker ps -a` | 查看所有容器 |
| 停止容器 | `docker stop 容器名` | 停止指定容器 |
| 启动容器 | `docker start 容器名` | 启动指定容器 |
| 重启容器 | `docker restart 容器名` | 重启指定容器 |
| 删除容器 | `docker rm 容器名` | 删除指定容器 |
| 进入容器 | `docker exec -it 容器名 /bin/bash` | 进入容器终端 |

### 📋 日志和监控

| 操作 | 命令 | 说明 |
|------|------|------|
| 查看日志 | `docker logs 容器名` | 查看容器日志 |
| 实时日志 | `docker logs -f 容器名` | 实时迟随日志 |
| 查看统计 | `docker stats` | 查看资源使用情况 |
| 查看进程 | `docker top 容器名` | 查看容器进程 |

### 🗃️ 数据卷管理

| 操作 | 命令 | 说明 |
|------|------|------|
| 创建数据卷 | `docker volume create 名称` | 创建数据卷 |
| 列出数据卷 | `docker volume ls` | 查看所有数据卷 |
| 删除数据卷 | `docker volume rm 名称` | 删除指定数据卷 |
| 挂载数据卷 | `docker run -v 数据卷:路径 镜像` | 运行时挂载数据卷 |

### 🌐 网络管理

| 操作 | 命令 | 说明 |
|------|------|------|
| 列出网络 | `docker network ls` | 查看所有网络 |
| 创建网络 | `docker network create 名称` | 创建网络 |
| 删除网络 | `docker network rm 名称` | 删除指定网络 |
| 连接网络 | `docker network connect 网络 容器` | 容器连接到网络 |

### 🧹 清理命令

| 操作 | 命令 | 说明 |
|------|------|------|
| 清理容器 | `docker container prune` | 删除所有停止的容器 |
| 清理镜像 | `docker image prune` | 删除无用镜像 |
| 清理网络 | `docker network prune` | 删除无用网络 |
| 清理数据卷 | `docker volume prune` | 删除无用数据卷 |
| 全面清理 | `docker system prune -a` | 删除所有无用资源 |

> 💡 **提示**: 使用 `-f` 参数可强制执行，无需确认

### docker卸载脚本
```bash
#!/usr/bin/env bash
# ------------------------------------------------------------
# purge-docker.sh —— Ubuntu 上彻底卸载 Docker（含容器/镜像/卷/配置/源/密钥）
# 支持 20.04/22.04/24.04 等 systemd 系统
# ------------------------------------------------------------
set -euo pipefail

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; NC='\033[0m'

log_info()  { echo -e "${GREEN}[INFO]${NC} $*"; }
log_warn()  { echo -e "${YELLOW}[WARN]${NC} $*"; }
log_error() { echo -e "${RED}[ERROR]${NC} $*"; }

# 0. 必须以 root 运行
if [[ $EUID -ne 0 ]]; then
   log_error "请使用 sudo 运行本脚本"
   exit 1
fi

# 1. 停服务并禁用
log_info "1. 停止并禁用 systemd 单元"
systemctl stop docker.socket docker.service containerd.service 2>/dev/null || true
systemctl disable docker.socket docker.service containerd.service 2>/dev/null || true

# 2. 卸载 snap 版本（若有）
if snap list docker &>/dev/null; then
    log_warn "检测到 snap 版 Docker，即将移除"
    snap remove --purge docker
fi

# 3. apt 卸载所有相关包
log_info "2. 卸载 apt 安装的 Docker 相关包"
apt purge -y docker-ce docker-ce-cli docker-ce-rootless-extras \
               containerd.io docker-buildx-plugin docker-compose-plugin \
               docker-scan-plugin docker.io docker-doc 2>/dev/null || true
apt autoremove -y --purge

# 4. 删除数据/配置/日志
log_info "3. 删除数据目录和配置文件"
rm -rf /var/lib/docker /var/lib/containerd \
       /etc/docker /etc/default/docker \
       /root/.docker /var/log/docker /var/log/containerd

# 5. 清理 systemd 单元残留
rm -rf /etc/systemd/system/docker*
systemctl daemon-reload

# 6. 清掉 APT 源 & GPG 密钥
log_info "4. 移除 Docker APT 源与 GPG 密钥"
rm -f /etc/apt/sources.list.d/docker.list \
      /etc/apt/keyrings/docker.gpg \
      /etc/apt/trusted.gpg.d/docker.gpg
rmdir /etc/apt/keyrings 2>/dev/null || true

# 7. 删除 docker 用户组
if getent group docker &>/dev/null; then
    log_info "5. 删除 docker 用户组"
    groupdel docker
fi

# 8. 清理网络/防火墙残留
log_info "6. 清理 docker0 网卡与 iptables 链"
ip link delete docker0 2>/dev/null || true
iptables -t nat -F DOCKER 2>/dev/null || true
iptables -F DOCKER       2>/dev/null || true

# 9. 验证
log_info "7. 验证卸载结果"
if ! command -v docker &>/dev/null; then
    log_info "Docker 已卸载干净"
else
    log_warn "仍有 docker 命令存在于：$(command -v docker)，请手工删除"
fi

# 10. 提示重启
log_info "8. 建议重启系统以确保内核模块/网络彻底清理"
read -rp "是否立即重启？ [y/N] " yn
case $yn in
    [Yy]*) reboot ;;
    *)     log_info "稍后请手动重启系统" ;;
esac
```
