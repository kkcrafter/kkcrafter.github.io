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
    'site.description': 'Portfolio blog of Kelvin Kwok',
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.notes': 'Notes',
    'blog.title': 'Blog',
    'blog.description': 'Articles on sustainability, technology and language learning.',
    'blog.all': 'All',
    'blog.readMore': 'Read more',
    'blog.backToList': 'Back to all posts',
    'blog.publishedOn': 'Published on',
    'blog.updatedOn': 'Updated on',
    'blog.noPosts': 'No posts yet.',
    'home.greeting': 'Hi, I\'m Kelvin',
    'home.recentPosts': 'Recent Posts',
    'home.viewAll': 'View all posts',
    'home.hero.name': 'Kelvin Kwok',
    'home.hero.subtitle': 'Decades of gathering, now leaving a small imprint.',
    'home.hero.cta': 'Know more',
    'home.about.title': 'About Me',
    'home.about.p1': 'Born in Hong Kong, now based in Germany — a generalist with a scientific streak, with interests spanning sustainability, IT, and language learning. I started in science, moved into IT, and eventually found my way to Germany to pursue a master\'s in sustainability, believing that the most pressing challenges of our time demand genuine domain expertise.',
    'home.blog.title': 'Latest from the Blog',
    'home.blog.viewAll': 'See all posts',
    'home.notes.title': 'Learning Notes',
    'home.notes.description': 'Structured notes and concept maps on topics I\'m exploring or interested in, aiming to provide a broad overview.',
    'home.notes.viewAll': 'Explore all notes',
    'home.contact.title': 'Contact',
    'home.contact.text': 'Interested in collaborating or have a question? Feel free to connect.',
    'home.contact.cta': 'Let\'s Connect',
    'footer.backToTop': 'Back to top',
    'search.placeholder': 'Search posts...',
    'search.label': 'Search posts',
    'search.noResults': 'No posts match your search.',
    'pagination.prev': 'Previous',
    'pagination.next': 'Next',
    'footer.rights': 'All rights reserved.',
  },
  de: {
    'site.title': 'Kelvin Kwok',
    'site.description': 'Portfolio-Blog',
    'nav.home': 'Start',
    'nav.blog': 'Blog',
    'nav.about': 'Über mich',
    'nav.notes': 'Notizen',
    'blog.title': 'Blog',
    'blog.description': 'Artikel über Nachhaltigkeit, Technik und Sprachenlernen.',
    'blog.all': 'Alle',
    'blog.readMore': 'Weiterlesen',
    'blog.backToList': 'Zurück zur Übersicht',
    'blog.publishedOn': 'Veröffentlicht am',
    'blog.updatedOn': 'Aktualisiert am',
    'blog.noPosts': 'Noch keine Beiträge.',
    'home.greeting': 'Hallo, ich bin Kelvin',
    'home.recentPosts': 'Neueste Beiträge',
    'home.viewAll': 'Alle Beiträge anzeigen',
    'home.hero.name': 'Kelvin Kwok',
    'home.hero.subtitle': 'Viel empfangen, wenig gegeben. Zeit, ein paar Spuren zu hinterlassen.',
    'home.hero.cta': 'Mehr erfahren',
    'home.about.title': '\u00dcber mich',
    'home.about.p1': 'Geboren in Hongkong, heute in Deutschland zu Hause — ein Generalist mit wissenschaftlichem Gespür, dessen Interessen Nachhaltigkeit, IT und Sprachenlernen umspannen. Ich begann in der Wissenschaft, wechselte in die IT und fand schließlich meinen Weg nach Deutschland, um einen Master in Nachhaltigkeit zu verfolgen — überzeugt, dass die drängendsten Herausforderungen unserer Zeit echtes Fachwissen erfordern.',
    'home.blog.title': 'Neueste Blogbeitr\u00e4ge',
    'home.blog.viewAll': 'Alle Beitr\u00e4ge',
    'home.notes.title': 'Lernnotizen',
    'home.notes.description': 'Strukturierte Notizen und Konzeptkarten zu Themen, mit denen ich mich interesse, um einen breiten Überblick zu geben.',
    'home.notes.viewAll': 'Alle Notizen entdecken',
    'home.contact.title': 'Kontakt',
    'home.contact.text': 'Interesse an einer Zusammenarbeit oder eine Frage? Gerne vernetzen.',
    'home.contact.cta': 'Vernetzen',
    'footer.backToTop': 'Nach oben',
    'search.placeholder': 'Beiträge durchsuchen...',
    'search.label': 'Beiträge durchsuchen',
    'search.noResults': 'Keine passenden Beiträge gefunden.',
    'pagination.prev': 'Zurück',
    'pagination.next': 'Nächste',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
  zh: {
    'site.title': 'Kelvin Kwok',
    'site.description': '個人作品集部落格',
    'nav.home': '首頁',
    'nav.blog': '文章',
    'nav.about': '關於我',
    'nav.notes': '筆記',
    'blog.title': '文章',
    'blog.description': '關於可持續發展、科技和語言學習的文章。',
    'blog.all': '全部',
    'blog.readMore': '閱讀更多',
    'blog.backToList': '返回文章列表',
    'blog.publishedOn': '發佈於',
    'blog.updatedOn': '更新於',
    'blog.noPosts': '暫無文章。',
    'home.greeting': '你好，我是 Kelvin',
    'home.recentPosts': '最新文章',
    'home.viewAll': '查看所有文章',
    'home.hero.name': 'Kelvin Kwok',
    'home.hero.subtitle': '一路以來，收穫很多，付出很少，所以想在這裏留下點足跡，付出些許。',
    'home.hero.cta': '了解更多',
    'home.about.title': '關於我',
    'home.about.p1': '生於香港，現居德國，通才向的理工人，興趣橫跨可持續發展、資訊科技、自然科學、語言學習。原修讀理科，曾轉戰IT行業，又再輾轉赴德攻讀可持續發展相關碩士。希望在這變幻莫測的年代當個小橋樑，帶來丁點貢獻。',
    'home.blog.title': '最新文章',
    'home.blog.viewAll': '查看所有文章',
    'home.notes.title': '學習筆記',
    'home.notes.description': '以概念圖形式整理的結構化筆記，涵蓋各類我正在探索或感興趣的主題，旨在提供概括性介紹',
    'home.notes.viewAll': '瀏覽所有筆記',
    'home.contact.title': '聯絡',
    'home.contact.text': '有興趣合作或有任何問題？歡迎與我聯繫。',
    'home.contact.cta': '與我聯繫',
    'footer.backToTop': '回到頂部',
    'search.placeholder': '搜尋文章...',
    'search.label': '搜尋文章',
    'search.noResults': '沒有符合搜尋條件的文章。',
    'pagination.prev': '上一頁',
    'pagination.next': '下一頁',
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
