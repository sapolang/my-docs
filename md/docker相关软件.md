# 🐳 Docker 相关软件

> Docker 容器技术相关的工具和配置指南

## 🚀 Docker 加速

### 🔗 镜像代理资源
- **代理收集**: [Mirrorify](https://www.mirrorify.net/)

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