---
title: "Building a Multilingual Blog with Astro"
description: "How I chose Astro for my portfolio blog and configured it for three languages with zero JavaScript shipped to the browser."
pubDate: 2025-06-20
tags: ["it-dev"]
lang: "en"
draft: false
---

## Why Astro?

When I decided to build a portfolio blog, the requirements were clear:

1. **Static output** — no server, no database, free hosting on GitHub Pages.
2. **Markdown-first** — I want to write in `.md` files, not a CMS.
3. **Multilingual** — English, German, and Chinese, with asymmetric content (not every post needs all three languages).
4. **Fast** — Lighthouse 95+ across all categories.

Astro fits all four. It's a static site generator that ships **zero JavaScript** by default. You write components in `.astro` files (similar to HTML with a frontmatter script block), and Astro compiles them to plain HTML + CSS at build time.

## Project Structure

```
src/
├── content/blog/
│   ├── en/          # English posts
│   ├── de/          # German posts
│   └── zh/          # Chinese posts
├── i18n/
│   ├── ui.ts        # UI string translations
│   └── tags.ts      # Tag display names
├── layouts/
│   ├── BaseLayout.astro
│   └── BlogPost.astro
└── pages/
    ├── en/blog/     # English routes
    ├── de/blog/     # German routes
    └── zh/blog/     # Chinese routes
```

The key insight: **same filename across language folders = linked translations**. The language switcher uses filename matching to find counterparts. If a translation doesn't exist, that language option is greyed out.

## i18n Configuration

Astro has built-in i18n routing. In `astro.config.mjs`:

```js
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'de', 'zh'],
  routing: {
    prefixDefaultLocale: true,
    redirectToDefaultLocale: true,
  },
}
```

This gives us URL prefixes for every language: `/en/blog/...`, `/de/blog/...`, `/zh/blog/...`. The root `/` redirects to `/en/`.

## Content Collections

Astro's Content Layer API validates frontmatter at build time with Zod schemas. If a required field is missing or a date is malformed, the build fails with a clear error message. This is much safer than silently rendering broken pages.

## What's Next

In upcoming posts, I'll cover the dark mode implementation, tag filtering system, and GitHub Actions deployment pipeline.
