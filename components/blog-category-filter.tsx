'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import type { BlogPostSummary } from '@/lib/blog-data';

const CATEGORY_COLORS: Record<string, string> = {
  'Performance Marketing': 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300',
  'SEO':                   'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300',
  'Privacy':               'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300',
  'Attribution':           'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300',
  'Email':                 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300',
  'Automation':            'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300',
};

function getCategoryColor(category: string) {
  for (const [key, val] of Object.entries(CATEGORY_COLORS)) {
    if (category.includes(key)) return val;
  }
  return 'bg-[#f0f7ff] dark:bg-[#0068d6]/15 text-[#0068d6]';
}

interface Props {
  posts: BlogPostSummary[];
  categories: { label: string; slug: string | null }[];
  locale: string;
}

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

export default function BlogCategoryFilter({ posts, categories, locale }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active ? posts.filter((p) => p.categorySlug === active) : posts;

  return (
    <>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActive(cat.slug === active ? null : cat.slug)}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors border ${
              (cat.slug === null && active === null) || active === cat.slug
                ? 'bg-[#0068d6] text-white border-[#0068d6]'
                : 'bg-white dark:bg-[#161616] text-[#555555] dark:text-[#888888] border-[#ebebeb] dark:border-[#2a2a2a] hover:border-[#0068d6]/40'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Post grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={getLocalePath(`/blog/${post.slug}`, locale)}
            className="group bg-white dark:bg-[#161616] rounded-[14px] border border-[#ebebeb] dark:border-[#2a2a2a] overflow-hidden hover:shadow-md dark:hover:border-[#3a3a3a] transition-all flex flex-col"
          >
            {post.image && (
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-3">
                <span className={`px-2.5 py-0.5 rounded-[5px] text-[11px] font-semibold uppercase tracking-wider ${getCategoryColor(post.category)}`}>
                  {post.category}
                </span>
              </div>
              <h3 className="text-[15px] font-bold text-[#171717] dark:text-white leading-[1.4] mb-3 group-hover:text-[#0068d6] transition-colors flex-1">
                {post.title}
              </h3>
              <p className="text-[13px] text-[#666666] dark:text-[#888888] leading-[1.6] mb-5 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-[11.5px] text-[#999999] dark:text-[#555555] mt-auto">
                <span className="flex items-center gap-1.5">
                  <Calendar size={11} />
                  {new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={11} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[15px] text-[#999999] dark:text-[#555555] py-16">
          No articles in this category yet.
        </p>
      )}
    </>
  );
}
