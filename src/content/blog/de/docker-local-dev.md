---
title: "Docker für die lokale Entwicklung einrichten"
description: "Eine kompakte Anleitung zur Containerisierung des Entwicklungs-Workflows mit Docker und Docker Compose."
pubDate: 2025-06-15
tags: ["it-dev"]
lang: "de"
draft: false
---

## Warum Docker für die lokale Entwicklung?

Die Containerisierung der Entwicklungsumgebung stellt sicher, dass jedes Teammitglied (und jede CI-Pipeline) denselben Stack verwendet — dieselbe Node-Version, dieselben Systembibliotheken, einfach alles identisch. Kein „funktioniert bei mir" mehr.

## Voraussetzungen

- Docker Desktop (oder Docker Engine unter Linux)
- Ein Projekt mit `package.json` (z. B. dieses Blog)

## Das Dockerfile

```dockerfile
FROM node:22-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

Wichtige Entscheidungen:

- **Alpine-Basis** — hält das Image klein (~180 MB statt ~1 GB beim vollständigen Image).
- **Layer-Caching** — `COPY package*.json` und dann `RUN npm ci` vor dem Kopieren des Quellcodes. Abhängigkeiten werden nur neu installiert, wenn sich `package.json` ändert.
- **`--host 0.0.0.0`** — erforderlich, damit der Dev-Server von außerhalb des Containers erreichbar ist.

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

## Verwendung

```bash
docker compose up --build   # beim ersten Mal oder nach Dockerfile-Änderungen
docker compose up           # danach
docker compose down         # Container stoppen und entfernen
```

Öffne `http://localhost:4321` und fang an zu schreiben.
