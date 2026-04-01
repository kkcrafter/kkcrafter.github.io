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
    'blog.description': 'Occasional writing on things I\'m thinking about — usually random thoughts, sometimes maybe technical.',
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
    'home.hero.name': 'Kelvin Kwok',
    'home.hero.subtitle': 'Decades of gathering, now leaving a small imprint.',
    'home.hero.cta': 'Know more',
    'home.about.title': 'About Me',
    'home.about.p1': 'Self-characterised as a generalist based by a scientist-like mindset. Interests span across Sustainability, IT, Language Learning, Sciences, and Music.',
    'home.about.p2': 'Beyond my core expertise',
    'home.blog.title': 'Latest from the Blog',
    'home.blog.viewAll': 'See all posts',
    'home.notes.title': 'Learning Notes',
    'home.notes.description': 'Structured notes on topics I\'ve been learning, built as concept maps. Target to introduce a broad overview of the topics.',
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
    'site.description': 'Portfolio-Blog — Nachhaltigkeit, IT & Sprachenlernen',
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
    'home.intro': 'Ich schreibe über Nachhaltigkeit, Technologie und Sprachenlernen.',
    'home.recentPosts': 'Neueste Beiträge',
    'home.viewAll': 'Alle Beiträge anzeigen',
    'home.hero.name': 'Kelvin Kwok',
    'home.hero.subtitle': 'Viel empfangen, wenig gegeben. Zeit, ein paar Spuren zu hinterlassen.',
    'home.hero.cta': 'Mehr erfahren',
    'home.about.title': '\u00dcber mich',
    'home.about.p1': 'Ich arbeite an der Schnittstelle von Nachhaltigkeit und Technologie. Mit einem Hintergrund in ESG und Datenanalyse helfe ich Organisationen, ihre Umweltziele durch datengest\u00fctzte Ans\u00e4tze in messbare Ergebnisse umzusetzen.',
    'home.about.p2': '\u00dcber meine Kernkompetenz hinaus lerne ich leidenschaftlich gern Neues \u2014 derzeit bringe ich mein Deutsch auf C1-Niveau und erforsche Webentwicklung mit modernen Tools wie Astro, Docker und CI/CD-Pipelines. Dieser Blog ist sowohl Portfolio als auch Lerntagebuch.',
    'home.blog.title': 'Neueste Blogbeitr\u00e4ge',
    'home.blog.viewAll': 'Alle Beitr\u00e4ge',
    'home.notes.title': 'Lernnotizen',
    'home.notes.description': 'Concept Maps und visuelle Notizen zu Themen, die mich interessieren \u2014 von ESG-Frameworks bis Docker-Architektur.',
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
    'site.description': '個人作品集部落格 — 可持續發展、資訊科技與語言學習',
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
    'home.intro': '我寫關於可持續發展、科技和語言學習的文章。',
    'home.recentPosts': '最新文章',
    'home.viewAll': '查看所有文章',
    'home.hero.name': 'Kelvin Kwok',
    'home.hero.subtitle': '做了幾十年人，收穫很多，付出很少，所以想在這裏留下點腳毛，付出些許。',
    'home.hero.cta': '了解更多',
    'home.about.title': '關於我',
    'home.about.p1': '我是一位在可持續發展與科技交匯領域工作的專業人士。憑藉 ESG 和數據分析的背景，我協助機構透過數據驅動的方法，將環境承諾轉化為可衡量的成果。',
    'home.about.p2': '除了核心專業，我熱衷於持續學習 \u2014 目前正在將德語提升至 C1 水平，同時探索使用 Astro、Docker 和 CI/CD 管線等現代工具進行網頁開發。這個部落格既是作品集，也是學習日誌。',
    'home.blog.title': '最新文章',
    'home.blog.viewAll': '查看所有文章',
    'home.notes.title': '學習筆記',
    'home.notes.description': '我感興趣的主題的概念圖和視覺筆記 — 從 ESG 框架到 Docker 架構。',
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
