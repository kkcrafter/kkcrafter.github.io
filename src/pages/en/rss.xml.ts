import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { t } from '../../i18n/ui';
import type { APIContext } from 'astro';

const lang = 'en';

export async function GET(context: APIContext) {
  const posts = (
    await getCollection('blog', ({ data }) => data.lang === lang && !data.draft)
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: t(lang, 'site.title'),
    description: t(lang, 'site.description'),
    site: context.site!.toString(),
    items: posts.map((post) => {
      const slug = post.id.split('/').slice(1).join('/');
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/${lang}/blog/${slug}/`,
      };
    }),
  });
}
