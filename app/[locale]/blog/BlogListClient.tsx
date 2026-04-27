'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Search } from 'lucide-react';
import type { BlogPostSummary } from '@/lib/blog-data';

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Privacy & Compliance':              { bg: '#eff6ff', text: '#1d4ed8' },
  'Sales & Marketing Alignment':       { bg: '#faf5ff', text: '#7c3aed' },
  'Platform Migration & Infrastructure':{ bg: '#fff7ed', text: '#c2410c' },
  'Data Attribution & ROI':            { bg: '#f0fdf4', text: '#15803d' },
  'Performance Marketing':             { bg: '#fef2f2', text: '#dc2626' },
  'Email & Automation':                { bg: '#f0fdfa', text: '#0f766e' },
};

interface Props {
  locale: string;
  featured: BlogPostSummary;
  posts: BlogPostSummary[];
  categories: { slug: string; label: string }[];
}

export default function BlogListClient({ locale, featured, posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allPosts = featured ? [featured, ...posts] : posts;

  const filtered = (activeCategory === 'all' && searchQuery === '' ? posts : allPosts).filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.categorySlug === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const showFeatured = activeCategory === 'all' && searchQuery === '';
  const featuredColor = featured ? (categoryColors[featured.category] ?? { bg: '#f5f5f5', text: '#0a0a0a' }) : null;

  return (
    <div>
      {/* Filters + Search */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                  activeCategory === cat.slug
                    ? 'bg-[#0a0a0a] text-white'
                    : 'text-[#4d4d4d] hover:bg-[#f5f5f5]'
                }`}
                style={activeCategory !== cat.slug ? { boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' } : {}}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#808080]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 pl-8 pr-3 text-[13px] text-[#0a0a0a] bg-white rounded-full outline-none w-[200px] focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)]"
              style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
            />
          </div>
        </div>
      </div>

      <section className="max-w-[1200px] mx-auto px-6 py-12">

        {/* Featured article */}
        {showFeatured && featured && featuredColor && (
          <Link
            href={getLocalePath(`/blog/${featured.slug}`, locale)}
            className="group flex flex-col md:flex-row gap-0 rounded-[12px] overflow-hidden border border-[#e8e8e8] mb-10 card-hover"
          >
            {/* Left: dark visual panel */}
            <div
              className="md:w-[340px] shrink-0 flex items-end p-8"
              style={{ background: '#0a0a0a', minHeight: '220px' }}
            >
              <div>
                <span
                  className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3"
                  style={{ background: featuredColor.bg, color: featuredColor.text }}
                >
                  {featured.category}
                </span>
                <div className="flex items-center gap-1.5 text-[12px]" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  <Clock size={11} />
                  {featured.readTime}
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div className="flex-1 p-8 flex flex-col justify-between gap-4">
              <div>
                <span
                  className="inline-block text-[11px] font-semibold uppercase tracking-wider mb-3"
                  style={{ color: '#808080' }}
                >
                  Featured
                </span>
                <h2 className="text-[22px] font-semibold text-[#0a0a0a] leading-[1.35] tracking-[-0.02em] mb-3 group-hover:opacity-70 transition-opacity">
                  {featured.title}
                </h2>
                <p className="text-[14.5px] text-[#555555] leading-[1.65] line-clamp-3">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#0a0a0a] group-hover:gap-2.5 transition-all">
                Read article <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        )}

        {/* Articles grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#808080]">
            <p className="text-[16px]">No articles found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post) => {
              const color = categoryColors[post.category] ?? { bg: '#f5f5f5', text: '#555555' };
              return (
                <Link
                  key={post.slug}
                  href={getLocalePath(`/blog/${post.slug}`, locale)}
                  className="group flex flex-col bg-white rounded-[10px] overflow-hidden border border-[#e8e8e8] card-hover"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                        style={{ background: color.bg, color: color.text }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-[15.5px] font-semibold text-[#0a0a0a] leading-[1.45] tracking-[-0.02em] mb-3 group-hover:opacity-70 transition-opacity flex-1">
                      {post.title}
                    </h2>
                    <p className="text-[13.5px] text-[#666666] leading-[1.60] mb-5 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#e8e8e8]">
                      <div className="flex items-center gap-1.5 text-[12px] text-[#808080]">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                      <span className="text-[12px] font-semibold text-[#0a0a0a] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 p-10 rounded-[12px] bg-[#0a0a0a] text-center">
          <h3 className="text-[24px] font-semibold text-white tracking-[-0.02em] mb-3">
            Need a specific answer?
          </h3>
          <p className="text-[15px] mb-6 max-w-[400px] mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Book a free 30-minute call and get a direct answer to your specific marketing setup question.
          </p>
          <Link
            href={getLocalePath('/book', locale)}
            className="h-10 px-6 text-[14px] font-semibold text-[#0a0a0a] bg-white rounded-[8px] inline-flex items-center gap-2 hover:bg-[#f0f0f0] transition-colors"
          >
            Book a Free Consultation
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
