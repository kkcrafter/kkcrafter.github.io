# Portfolio Blog — Technical Specification

## 1. Project Overview

**Purpose:** A minimalist, multilingual portfolio blog to showcase professional expertise in Sustainability/ESG, IT/Data, and Language Learning. Primary audience is HR reviewers clicking links from CVs and LinkedIn.

**Non-goals:** SEO ranking optimization, CMS admin panel, dynamic server-side features, comment system.

**Core Principles:**
- Static Site Generation (SSG) — zero runtime, zero database
- Minimal dependencies — avoid plugin ecosystems
- Fast build, fast load — target Lighthouse 95+ across all categories
- Low maintenance — no WordPress-style update treadmill

---

## 2. Technical Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Astro** (latest stable) | SSG-first, JS-native, built-in Markdown/MDX, image optimization, i18n routing |
| Styling | **Vanilla CSS** (or Astro scoped styles) | No framework overhead; minimalist design doesn't need Tailwind |
| Content | **Markdown (.md)** with YAML frontmatter | Simple, portable, version-controlled |
| Dev Environment | **Docker** (Node.js Alpine) | Reproducible, demonstrates containerization skills |
| CI/CD | **GitHub Actions** | Auto-deploy on push to `main` |
| Hosting | **GitHub Pages** (`username.github.io`) | Free, HTTPS included, upgrade to custom domain later |
| Package Manager | **npm** | Astro default, no need for pnpm/yarn complexity |

---

## 3. i18n Strategy

**Routing:** Language prefix with unified English slugs.

```
/en/blog/docker-local-dev    → English version
/de/blog/docker-local-dev    → German version
/zh/blog/docker-local-dev    → Chinese version
```

**Default language:** English (`en`). Root `/` redirects to `/en/`.

**Language switcher:** Component on every page. Logic:
1. Take current path, e.g. `/de/blog/docker-local-dev`
2. Replace prefix → `/en/blog/docker-local-dev`
3. If target page exists → link to it
4. If target page doesn't exist → grey out / hide that language option

**Asymmetric content:** Not every post needs all 3 languages. A post can exist in 1, 2, or 3 languages. The language switcher adapts accordingly.

**Astro implementation:** Use Astro's built-in i18n routing:
```js
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'zh'],
    routing: {
      prefixDefaultLocale: true, // /en/blog/... not /blog/...
      redirectToDefaultLocale: true,
    }
  }
});
```

**UI strings (navigation, footer, labels):** Store in `src/i18n/ui.ts` as a simple key-value map per locale.

---

## 4. Content Schema

### 4.1 Blog Post Frontmatter

```yaml
---
title: "Setting Up Docker for Local Development"
description: "A concise guide to containerizing your dev workflow."
pubDate: 2025-06-15          # ISO date, required
updatedDate: 2025-06-20      # optional
tags: ["it-dev", "docker"]   # freeform, at least 1 recommended
lang: "en"                   # matches locale
draft: false                 # true = excluded from production build
image:                       # optional, for Open Graph card
  src: "./images/docker-setup-cover.jpg"
  alt: "Docker containers illustration"
---
```

### 4.2 Tags (Freeform)

No fixed categories. Tags are freeform strings — add any topic freely. The blog listing page dynamically reads all existing tags and generates filter buttons.

**Suggested starter tags** (not enforced):

| Tag slug | Example usage |
|----------|--------------|
| `language-learning` | German study notes, language tips |
| `esg` | Sustainability, ESG frameworks, LCA |
| `it-dev` | Docker, Astro, CI/CD, coding |
| `learning-summaries` | Course takeaways, book notes |

You can add `yoga`, `game-theory`, `career`, `nmr`, `biorefinery` — anything. Tags appear as-is; display names can optionally be mapped in `src/i18n/tags.ts` for multilingual labels. Unmapped tags render their slug directly.

### 4.3 Content Directory Structure

```
src/content/blog/
├── en/
│   ├── docker-local-dev.md
│   ├── astro-blog-setup.md
│   └── esg-data-pipelines.md
├── de/
│   ├── docker-local-dev.md       # same slug = translation pair
│   └── deutsch-lernen-tipps.md   # DE-only post, no EN/ZH pair
└── zh/
    └── docker-local-dev.md
```

**Rule:** Same filename across `en/`, `de/`, `zh/` = linked translations. The language switcher uses filename matching to find counterparts.

### 4.4 Content Collection Config

```ts
// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).min(1),  // freeform, at least 1
    lang: z.enum(['en', 'de', 'zh']),
    draft: z.boolean().default(false),
    image: z.object({
      src: image(),
      alt: z.string(),
    }).optional(),
  }),
});

export const collections = { blog };
```

---

## 5. File Structure

```
project-root/
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions: build & deploy to GH Pages
│
├── docker/
│   ├── Dockerfile                  # Node.js Alpine, Astro dev server
│   └── docker-compose.yml          # One-command local dev: docker compose up
│
├── src/
│   ├── components/
│   │   ├── BaseHead.astro          # <head> meta, OG tags, fonts
│   │   ├── Header.astro            # Nav bar + language switcher + theme toggle
│   │   ├── Footer.astro            # Footer with links
│   │   ├── ThemeToggle.astro       # Sun/moon icon button, inline script
│   │   ├── LanguageSwitcher.astro  # Detects available translations
│   │   ├── PostCard.astro          # Blog list item card
│   │   ├── TagFilter.astro         # Dynamic tag filter (reads all tags from posts)
│   │   └── FormattedDate.astro    # Locale-aware date display
│   │
│   ├── content/
│   │   └── blog/
│   │       ├── en/                 # English posts (.md)
│   │       ├── de/                 # German posts (.md)
│   │       └── zh/                 # Chinese posts (.md)
│   │
│   ├── i18n/
│   │   ├── ui.ts                   # UI string translations
│   │   └── tags.ts                 # Optional: multilingual display names for tags
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro        # HTML skeleton, <head>, skip-to-content
│   │   ├── BlogPost.astro          # Single post layout (title, date, content)
│   │   └── MarkdownPostLayout.astro # Wraps rendered markdown
│   │
│   ├── pages/
│   │   ├── index.astro             # Root redirect → /en/
│   │   ├── [lang]/
│   │   │   ├── index.astro         # Landing page per language
│   │   │   ├── blog/
│   │   │   │   ├── index.astro     # Blog listing with tag filter
│   │   │   │   ├── [...slug].astro # Dynamic post route
│   │   │   │   └── tag/
│   │   │   │       └── [tag].astro # Posts filtered by tag, e.g. /en/blog/tag/docker
│   │   │   └── about.astro         # About page (optional)
│   │   └── 404.astro               # Custom 404
│   │
│   └── styles/
│       └── global.css              # CSS variables, typography, minimal reset
│
├── public/
│   ├── favicon.svg                 # Site icon
│   └── robots.txt                  # Basic crawl config
│
├── astro.config.mjs                # Astro config: i18n, image, site URL
├── tsconfig.json                   # TypeScript config
├── package.json
├── .gitignore
└── README.md                       # Project documentation (also a portfolio piece)
```

### File Purpose Summary

| File / Dir | Purpose |
|-----------|---------|
| `BaseHead.astro` | Injects `<title>`, `<meta description>`, Open Graph tags, canonical URL, optional Google Fonts link |
| `LanguageSwitcher.astro` | Reads current slug, checks if `en/`, `de/`, `zh/` versions exist, renders available links |
| `TagFilter.astro` | Dynamically collects all tags from published posts, renders as clickable filter buttons on blog listing |
| `ui.ts` | Maps like `{ "en": { "nav.blog": "Blog", "nav.about": "About" }, "de": { ... } }` |
| `[...slug].astro` | Astro dynamic route — fetches post from content collection by lang + slug |
| `global.css` | CSS custom properties for colors, spacing, font stack; dark/light mode via `prefers-color-scheme` |

---

## 6. Docker Configuration

### 6.1 Dockerfile

```dockerfile
FROM node:22-alpine

WORKDIR /app

# Install dependencies first (layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source
COPY . .

# Expose Astro dev server port
EXPOSE 4321

# Default: dev server with hot reload
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

### 6.2 docker-compose.yml

```yaml
services:
  blog:
    build:
      context: .
      dockerfile: docker/Dockerfile
    ports:
      - "4321:4321"
    volumes:
      # Bind mount for hot reload (sync source changes)
      - .:/app
      # Anonymous volume to preserve node_modules from image
      - /app/node_modules
    environment:
      - NODE_ENV=development
```

### 6.3 Usage

```bash
# Start dev environment
docker compose up --build

# Access at http://localhost:4321

# Stop
docker compose down
```

---

## 7. GitHub Actions — CI/CD Pipeline

### 7.1 deploy.yml

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:       # manual trigger button

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build Astro site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 7.2 Draft / Preview Workflow

- `draft: true` in frontmatter → post is **excluded** from production build
- To preview drafts locally: Astro dev server shows all content including drafts by default
- To preview on a branch: push to a non-`main` branch → no auto-deploy, but you can run `npm run build && npm run preview` locally or in Docker
- Optional future enhancement: add a `preview` workflow on PR branches using Cloudflare Pages or Netlify (free tier)

---

## 8. Design Specification

### 8.1 Visual Direction

- **Minimalist** — content-first, no hero images, no animations
- **Typography-driven** — clean serif or sans-serif body, generous line height (1.6–1.8)
- **Color palette** — near-black text on off-white background; one accent color for links/highlights
- **Dark mode** — default follows `prefers-color-scheme`; manual toggle in header overrides and persists choice via inline `<script>` (no framework JS). Toggle state saved to `data-theme` attribute on `<html>`. ~10 lines inline script, loaded in `<head>` to prevent flash of wrong theme (FOUC).
- **Responsive** — mobile-first, single breakpoint at ~768px

### 8.2 Page Layouts

**Landing (`/en/`):**
- Brief intro (2–3 sentences about who you are)
- Recent posts list (3–5 items)
- Links to popular tags or blog listing

**Blog listing (`/en/blog/`):**
- Tag filter bar (dynamically generated from all posts' tags)
- Chronological post list: title, date, description, tag badges, language badge
- No pagination needed initially (< 50 posts)

**Single post (`/en/blog/[slug]`):**
- Title, publication date, tags, language switcher
- Rendered Markdown content
- Optional: "back to list" link, previous/next post navigation

**About (`/en/about/`):**
- Professional summary
- Links to LinkedIn, GitHub
- Skills/interests overview

### 8.3 Typography Suggestion

```css
:root {
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-heading: var(--font-body);
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --line-height: 1.7;
  --max-width: 720px;  /* optimal reading width */

  /* Light theme (default) */
  --color-bg: #fafafa;
  --color-text: #1a1a1a;
  --color-accent: #2563eb;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
}

/* Auto dark mode (system preference) */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-bg: #111111;
    --color-text: #e5e5e5;
    --color-accent: #60a5fa;
    --color-muted: #9ca3af;
    --color-border: #2e2e2e;
  }
}

/* Manual dark mode override */
[data-theme="dark"] {
  --color-bg: #111111;
  --color-text: #e5e5e5;
  --color-accent: #60a5fa;
  --color-muted: #9ca3af;
  --color-border: #2e2e2e;
}
```

### 8.4 Open Graph Tags

Every page should output:
```html
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="{canonical URL}" />
<meta property="og:image" content="{cover image or site default}" />
```
This ensures LinkedIn/Slack previews look professional when you share links.

---

## 9. Image Handling

Use Astro's built-in `<Image />` component from `astro:assets`:
- Auto-generates responsive `srcset` and WebP/AVIF formats
- Lazy loading by default
- Images stored alongside posts: `src/content/blog/en/images/`

```astro
---
import { Image } from 'astro:assets';
import cover from './images/docker-setup.jpg';
---
<Image src={cover} alt="Docker setup diagram" width={720} />
```

For Markdown posts, use standard `![alt](./images/photo.jpg)` syntax — Astro optimizes these automatically when using content collections.

---

## 10. Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 90 |
| First Contentful Paint | < 1.0s |
| Total Blocking Time | 0ms (no JS by default) |
| Bundle size (JS) | ~0 KB (Astro ships zero JS unless explicitly added) |

---

## 11. Implementation Phases

### Phase 1 — Skeleton (MVP)
- [ ] Initialize Astro project
- [ ] Set up Docker dev environment
- [ ] Configure i18n routing (`/en/`, `/de/`, `/zh/`)
- [ ] Create base layout + global CSS
- [ ] Create content collection schema
- [ ] Build blog listing page + single post page
- [ ] Add 1–2 sample posts (can be placeholder content)
- [ ] Deploy to GitHub Pages via GitHub Actions

### Phase 2 — Polish
- [ ] Language switcher component
- [ ] Tag filter on blog listing (dynamic, reads from all posts)
- [ ] About page
- [ ] Open Graph meta tags
- [ ] Dark mode (auto `prefers-color-scheme` + manual toggle, inline script in `<head>` to prevent FOUC)
- [ ] Custom 404 page
- [ ] `robots.txt` + basic `sitemap.xml` (Astro plugin)
- [ ] README.md as project documentation

### Phase 3 — Content & Optimization
- [ ] Write first real posts (1 per category minimum)
- [ ] Run Lighthouse audit, fix issues
- [ ] Add `<Image />` optimization to posts with images
- [ ] Optional: RSS feed (`@astrojs/rss`)

### Phase 4 — Future Enhancements (backlog)
- [ ] Custom domain setup
- [ ] PR preview deployments (Netlify/Cloudflare)
- [ ] Reading time estimate component
- [ ] Table of contents for long posts
- [ ] Search (client-side, e.g. Pagefind)

---

## 12. Key Astro Configuration

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://USERNAME.github.io',  // replace with actual
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'zh'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [sitemap()],
  image: {
    // Astro's built-in image optimization
    // No additional config needed for basic usage
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',  // syntax highlighting for code blocks
    },
  },
});
```

---

## 13. Cost Breakdown

| Item | Cost |
|------|------|
| GitHub Pages hosting | Free |
| GitHub Actions CI/CD | Free (2,000 min/month) |
| Domain (optional, future) | ~$10/year |
| Astro framework | Free (open source) |
| Docker Desktop | Free (personal use) |
| **Total** | **$0** |

---

## Appendix A: Commands Reference

```bash
# Local development (Docker)
docker compose up --build          # start dev server
docker compose down                # stop

# Local development (native Node.js)
npm install                        # install deps
npm run dev                        # start dev server at localhost:4321
npm run build                      # production build → dist/
npm run preview                    # preview production build locally

# Content workflow
# 1. Create .md file in src/content/blog/{lang}/
# 2. Add frontmatter (see schema above)
# 3. Write content
# 4. Check locally (draft: true for WIP)
# 5. Set draft: false, commit, push to main → auto-deploys
```

## Appendix B: Handoff Notes for Claude Code

When implementing this spec:
1. Start with Phase 1 only — get a deployable skeleton first
2. Use `npm create astro@latest` as the starting point
3. Do NOT add any JS framework (React/Vue/Svelte) — pure Astro components
4. Keep CSS in `global.css` + Astro scoped styles — no CSS framework
5. Test the Docker setup works before moving on
6. Commit after each meaningful step (not one giant commit)
