import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

const BASE = 'https://www.theexcelagency.com';
const LOCALES = ['it', 'de'] as const;

const staticPaths = [
  { path: '',         changeFrequency: 'weekly'  as const, priority: 1.0 },
  { path: '/services',changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/ai',      changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/blog',    changeFrequency: 'weekly'  as const, priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/privacy', changeFrequency: 'yearly'  as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const enRoutes: MetadataRoute.Sitemap = staticPaths.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const localeRoutes: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    staticPaths.map(({ path, changeFrequency, priority }) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: now,
      changeFrequency,
      priority: priority * 0.9,
    }))
  );

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.flatMap((post) => [
    { url: `${BASE}/blog/${post.slug}`,    lastModified: new Date(post.date), changeFrequency: 'monthly' as const, priority: 0.7 },
    ...LOCALES.map((locale) => ({
      url: `${BASE}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]);

  return [...enRoutes, ...localeRoutes, ...blogRoutes];
}
