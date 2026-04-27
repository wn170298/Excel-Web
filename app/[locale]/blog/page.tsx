import type { Metadata } from 'next';
import { getBlogPostSummaries, blogCategories } from '@/lib/blog-data';
import BlogListClient from './BlogListClient';

export const metadata: Metadata = {
  title: 'Marketing Resources — Excel',
  description: 'Technical guides, strategic frameworks, and B2B marketing insights — from GDPR compliance to revenue attribution.',
};

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  const posts = getBlogPostSummaries();
  const [featured, ...rest] = posts;

  return (
    <div>
      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-6 pt-16 sm:pt-28 pb-12">
        <div className="max-w-[600px]">
          <span className="text-label mb-5 block">Resources</span>
          <h1 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.03em] text-[#0a0a0a] mb-4">
            Marketing insights.
          </h1>
          <p className="text-[15px] sm:text-[17px] text-[#555555] leading-[1.65]">
            Technical guides, strategic frameworks, and B2B marketing insights — from GDPR compliance to revenue attribution.
          </p>
        </div>
      </section>

      <BlogListClient locale={locale} featured={featured} posts={rest} categories={blogCategories} />
    </div>
  );
}
