import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';
import BlogCategoryFilter from '@/components/blog-category-filter';

export const metadata: Metadata = {
  title: 'Marketing Insights & Resources — Excel Consultancy',
  description:
    'Expert guides, case studies, and data-driven marketing strategies from the Excel team. Deep-dive articles on SEO, PPC, attribution, privacy, and AI-powered marketing.',
  keywords: [
    'digital marketing blog',
    'SEO guides',
    'PPC strategy',
    'marketing attribution',
    'privacy marketing',
    'AI marketing blog',
    'performance marketing resources',
  ],
};

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

const CATEGORIES = [
  { label: 'All Articles', slug: null },
  { label: 'Performance Marketing', slug: 'performance' },
  { label: 'SEO', slug: 'seo' },
  { label: 'Privacy & Attribution', slug: 'privacy' },
  { label: 'Email & Automation', slug: 'email' },
];

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="pt-20 pb-16 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#f0f7ff] dark:bg-[#0068d6]/15 border border-[#cce0ff] dark:border-[#0068d6]/30">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0068d6]" />
            <span className="text-[12px] font-semibold text-[#0068d6] tracking-wide">Resources &amp; Insights</span>
          </div>
          <h1 className="text-[40px] sm:text-[52px] font-bold leading-[1.1] text-[#171717] dark:text-white max-w-[700px] mb-5">
            Marketing Insights &amp; Expert Resources
          </h1>
          <p className="text-[18px] text-[#555555] dark:text-[#888888] leading-[1.7] max-w-[580px]">
            Deep-dive guides, case studies, and data-driven strategies from the Excel team — covering SEO, PPC, attribution, privacy, and AI-powered marketing.
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ────────────────────────────────────────── */}
      {featured && (
        <section className="pb-16 bg-white dark:bg-[#0a0a0a]">
          <div className="max-w-[1200px] mx-auto px-6">
            <Link
              href={getLocalePath(`/blog/${featured.slug}`, locale)}
              className="group grid lg:grid-cols-2 gap-0 rounded-[20px] border border-[#ebebeb] dark:border-[#2a2a2a] overflow-hidden hover:shadow-lg dark:hover:border-[#3a3a3a] transition-all bg-[#f5f7fa] dark:bg-[#111111]"
            >
              {featured.image && (
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-0.5 rounded-[5px] text-[11px] font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">
                    {featured.category}
                  </span>
                  <span className="text-[12px] text-[#999999] dark:text-[#555555] font-medium">Featured</span>
                </div>
                <h2 className="text-[24px] sm:text-[28px] font-bold text-[#171717] dark:text-white leading-[1.3] mb-4 group-hover:text-[#0068d6] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[15px] text-[#666666] dark:text-[#888888] leading-[1.7] mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-5 text-[12px] text-[#999999] dark:text-[#555555]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {new Date(featured.date).toLocaleDateString('en-AU', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {featured.readTime}
                  </span>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0068d6]">
                  Read Article
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── ALL POSTS ────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f5f7fa] dark:bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <h2 className="text-[26px] font-bold text-[#171717] dark:text-white">All Articles</h2>
            <p className="text-[14px] text-[#666666] dark:text-[#888888]">{blogPosts.length} articles published</p>
          </div>

          <BlogCategoryFilter posts={rest} categories={CATEGORIES} locale={locale} />
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#0068d6]">
        <div className="max-w-[760px] mx-auto px-6 text-center">
          <h2 className="text-[30px] sm:text-[36px] font-bold text-white leading-[1.2] mb-4">
            Want expert marketing guidance tailored to your business?
          </h2>
          <p className="text-[16px] text-white/75 leading-[1.7] mb-8">
            Book a free strategy session with the Excel team. We&apos;ll assess your current marketing and give you an actionable growth plan.
          </p>
          <a
            href="https://calendly.com/wali-noorzad12/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-8 bg-white text-[#0068d6] font-semibold rounded-[8px] text-[15px] hover:bg-white/90 transition-colors"
          >
            Book a Free Strategy Session
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

    </div>
  );
}
