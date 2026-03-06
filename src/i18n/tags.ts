import type { Lang } from './ui';

/**
 * Optional multilingual display names for tags.
 * Unmapped tags render their slug directly.
 */
export const tagLabels: Partial<Record<string, Record<Lang, string>>> = {
  'language-learning': {
    en: 'Language Learning',
    de: 'Sprachenlernen',
    zh: '語言學習',
  },
  'esg': {
    en: 'ESG',
    de: 'ESG',
    zh: 'ESG',
  },
  'it-dev': {
    en: 'IT / Dev',
    de: 'IT / Dev',
    zh: '資訊科技',
  },
  'learning-summaries': {
    en: 'Learning Summaries',
    de: 'Lernzusammenfassungen',
    zh: '學習摘要',
  },
};

/**
 * Get the display label for a tag in the given language.
 * Falls back to the raw slug if no mapping exists.
 */
export function getTagLabel(tag: string, lang: Lang): string {
  return tagLabels[tag]?.[lang] ?? tag;
}
