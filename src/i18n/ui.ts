export const languages = {
  en: 'English',
  de: 'Deutsch',
  zh: '中文',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui: Record<Lang, Record<string, string>> = {
  en: {
    'site.title': 'Kelvin Kwok',
    'site.description': 'Portfolio blog — Sustainability, IT & Language Learning',
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'blog.title': 'Blog',
    'blog.description': 'Articles on sustainability, tech, and language learning.',
    'blog.all': 'All',
    'blog.readMore': 'Read more',
    'blog.backToList': 'Back to all posts',
    'blog.publishedOn': 'Published on',
    'blog.updatedOn': 'Updated on',
    'blog.noPosts': 'No posts yet.',
    'home.greeting': 'Hi, I\'m Kelvin',
    'home.intro': 'I write about sustainability, technology, and language learning.',
    'home.recentPosts': 'Recent Posts',
    'home.viewAll': 'View all posts',
    'footer.rights': 'All rights reserved.',
  },
  de: {
    'site.title': 'Kelvin Kwok',
    'site.description': 'Portfolio-Blog — Nachhaltigkeit, IT & Sprachenlernen',
    'nav.home': 'Start',
    'nav.blog': 'Blog',
    'nav.about': 'Über mich',
    'blog.title': 'Blog',
    'blog.description': 'Artikel über Nachhaltigkeit, Technik und Sprachenlernen.',
    'blog.all': 'Alle',
    'blog.readMore': 'Weiterlesen',
    'blog.backToList': 'Zurück zur Übersicht',
    'blog.publishedOn': 'Veröffentlicht am',
    'blog.updatedOn': 'Aktualisiert am',
    'blog.noPosts': 'Noch keine Beiträge.',
    'home.greeting': 'Hallo, ich bin Kelvin',
    'home.intro': 'Ich schreibe über Nachhaltigkeit, Technologie und Sprachenlernen.',
    'home.recentPosts': 'Neueste Beiträge',
    'home.viewAll': 'Alle Beiträge anzeigen',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
  zh: {
    'site.title': 'Kelvin Kwok',
    'site.description': '個人作品集部落格 — 可持續發展、資訊科技與語言學習',
    'nav.home': '首頁',
    'nav.blog': '文章',
    'nav.about': '關於我',
    'blog.title': '文章',
    'blog.description': '關於可持續發展、科技和語言學習的文章。',
    'blog.all': '全部',
    'blog.readMore': '閱讀更多',
    'blog.backToList': '返回文章列表',
    'blog.publishedOn': '發佈於',
    'blog.updatedOn': '更新於',
    'blog.noPosts': '暫無文章。',
    'home.greeting': '你好，我是 Kelvin',
    'home.intro': '我寫關於可持續發展、科技和語言學習的文章。',
    'home.recentPosts': '最新文章',
    'home.viewAll': '查看所有文章',
    'footer.rights': '版權所有。',
  },
};

/**
 * Get a translated UI string for the given language and key.
 * Falls back to English if the key is missing in the target locale.
 */
export function t(lang: Lang, key: string): string {
  return ui[lang][key] ?? ui[defaultLang][key] ?? key;
}

/**
 * Extract the language prefix from a URL path.
 * e.g. '/de/blog/my-post' → 'de'
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}
