---
title: "Setting Up Docker for Local Development"
description: "A concise guide to containerizing your dev workflow with Docker and Docker Compose."
pubDate: 2025-06-15
tags: ["it-dev"]
lang: "en"
draft: true
---

## Why Docker for Local Dev?

Containerizing your development environment ensures that every team member (and CI pipeline) runs the exact same stack — same Node version, same OS libraries, same everything. No more "works on my machine" surprises.

## Prerequisites

- Docker Desktop (or Docker Engine on Linux)
- A `package.json` project (this blog, for example)

## The Dockerfile

Here's the Dockerfile used for this blog's dev environment:

```dockerfile
FROM node:22-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

Key decisions:

- **Alpine base** — keeps the image small (~180 MB vs ~1 GB for the full image).
- **Layer caching** — `COPY package*.json` then `RUN npm ci` before copying source code. Dependencies only re-install when `package.json` changes.
- **`--host 0.0.0.0`** — required so the dev server is accessible from outside the container.

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

The bind mount (`.:/app`) gives you hot reload — edit a file on your host, the container picks it up instantly. The anonymous volume (`/app/node_modules`) prevents the host's `node_modules` from overwriting the container's.

## Usage

```bash
docker compose up --build   # first run or after Dockerfile changes
docker compose up           # subsequent runs
docker compose down         # stop and remove containers
```

Open `http://localhost:4321` and start writing.

## What I Learned

Setting up Docker for a simple Astro blog taught me more about layer caching, volume mounts, and networking than any tutorial. The best way to learn infrastructure tooling is to use it for your own projects.
