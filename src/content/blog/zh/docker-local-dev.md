---
title: "使用 Docker 建立本地開發環境"
description: "一份簡潔的指南，介紹如何使用 Docker 和 Docker Compose 容器化你的開發工作流程。"
pubDate: 2025-06-15
tags: ["it-dev"]
lang: "zh"
draft: false
---

## 為什麼要用 Docker 做本地開發？

容器化開發環境確保每位團隊成員（以及 CI 管線）執行完全相同的技術堆疊 — 同一個 Node 版本、同樣的系統函式庫。再也不會出現「在我電腦上可以跑」的問題。

## 前置需求

- Docker Desktop（或 Linux 上的 Docker Engine）
- 一個有 `package.json` 的專案（例如這個部落格）

## Dockerfile

```dockerfile
FROM node:22-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

關鍵設計：

- **Alpine 基礎映像** — 映像大小約 180 MB，比完整映像（約 1 GB）小很多。
- **分層快取** — 先複製 `package*.json` 再執行 `npm ci`。只有 `package.json` 變更時才需重新安裝依賴。
- **`--host 0.0.0.0`** — 讓開發伺服器能從容器外部存取。

## Docker Compose

```yaml
services:
  blog:
    build:
      context: .
      dockerfile: docker/Dockerfile
    ports:
      - "4321:4321"
    volumes:
      - .:/app
      - /app/node_modules
```

## 使用方式

```bash
docker compose up --build   # 首次執行或 Dockerfile 變更後
docker compose up           # 後續執行
docker compose down         # 停止並移除容器
```

打開 `http://localhost:4321` 即可開始撰寫。
