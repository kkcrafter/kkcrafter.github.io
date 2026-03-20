import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const repoRoot = join(import.meta.dirname, '..');
const VALID_LANGS = ['en', 'de', 'zh'];
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const [lang, slug] = process.argv.slice(2);

if (!lang || !slug) {
  console.error('Usage: npm run publish-post -- <lang> <slug>');
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

if (!existsSync(filePath)) {
  console.error(`Error: File not found: ${relativePath}`);
  process.exit(1);
}

// Update draft: true → draft: false in frontmatter
const fileContent = readFileSync(filePath, 'utf-8');
const lines = fileContent.split('\n');
let inFrontmatter = false;
let foundDraft = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === '---') {
    if (inFrontmatter) break; // closing ---
    inFrontmatter = true;
    continue;
  }
  if (inFrontmatter && /^draft:\s*true\s*$/.test(lines[i])) {
    lines[i] = 'draft: false';
    foundDraft = true;
    break;
  }
}

if (foundDraft) {
  writeFileSync(filePath, lines.join('\n'), 'utf-8');
  console.log(`Published: ${relativePath} (draft: false)`);
} else if (/^draft:\s*false/m.test(fileContent)) {
  console.log(`Already published: ${relativePath} (draft is already false)`);
} else {
  console.warn(`Warning: No draft field found in ${relativePath}`);
}

// Remove from .gitignore
const gitignorePath = join(repoRoot, '.gitignore');
let gitignore = readFileSync(gitignorePath, 'utf-8');

if (gitignore.includes(relativePath)) {
  gitignore = gitignore
    .split('\n')
    .filter((line) => line.trim() !== relativePath)
    .join('\n');
  writeFileSync(gitignorePath, gitignore, 'utf-8');
  console.log('Removed from .gitignore');
} else {
  console.log('Not in .gitignore (skipped)');
}
