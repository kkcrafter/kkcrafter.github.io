import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const repoRoot = join(import.meta.dirname, '..');
const VALID_LANGS = ['en', 'de', 'zh'];
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SENTINEL = '# Draft posts (managed by npm scripts)';

const [lang, slug] = process.argv.slice(2);

if (!lang || !slug) {
  console.error('Usage: npm run new-post -- <lang> <slug>');
  console.error('  lang: en, de, or zh');
  console.error('  slug: kebab-case post name (e.g., my-first-post)');
  process.exit(1);
}

if (!VALID_LANGS.includes(lang)) {
  console.error(`Error: Invalid language "${lang}". Must be one of: ${VALID_LANGS.join(', ')}`);
  process.exit(1);
}

if (!SLUG_REGEX.test(slug)) {
  console.error(`Error: Invalid slug "${slug}". Use lowercase kebab-case (e.g., my-first-post)`);
  process.exit(1);
}

const relativePath = `src/content/blog/${lang}/${slug}.md`;
const filePath = join(repoRoot, relativePath);

if (existsSync(filePath)) {
  console.error(`Error: File already exists: ${relativePath}`);
  process.exit(1);
}

// Create the markdown file with frontmatter template
const today = new Date().toISOString().split('T')[0];
const content = `---
title: ""
description: ""
pubDate: ${today}
tags: []
lang: "${lang}"
draft: true
---

Write your post here.
`;

writeFileSync(filePath, content, 'utf-8');
console.log(`Created draft: ${relativePath}`);

// Add to .gitignore
const gitignorePath = join(repoRoot, '.gitignore');
let gitignore = readFileSync(gitignorePath, 'utf-8');

if (gitignore.includes(relativePath)) {
  console.log('Already in .gitignore (skipped)');
} else {
  if (gitignore.includes(SENTINEL)) {
    gitignore = gitignore.trimEnd() + '\n' + relativePath + '\n';
  } else {
    gitignore = gitignore.trimEnd() + '\n\n' + SENTINEL + '\n' + relativePath + '\n';
  }
  writeFileSync(gitignorePath, gitignore, 'utf-8');
  console.log('Added to .gitignore');
}
