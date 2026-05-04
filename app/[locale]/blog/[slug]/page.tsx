import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts, getBlogPost } from '@/lib/blog-data';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: 'article',
    },
  };
}

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

const categoryColors: Record<string, string> = {
  'Privacy & Compliance': 'bg-blue-50 text-blue-700',
  'Sales & Marketing Alignment': 'bg-purple-50 text-purple-700',
  'Platform Migration & Infrastructure': 'bg-orange-50 text-orange-700',
  'Data Attribution & ROI': 'bg-green-50 text-green-700',
  'Performance Marketing': 'bg-red-50 text-red-700',
  'Email & Automation': 'bg-teal-50 text-teal-700',
};

export default function BlogPostPage({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const post = getBlogPost(slug);
  if (!post) notFound();

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  const relatedPosts = blogPosts
    .filter((p) => p.categorySlug === post.categorySlug && p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-16">
        {/* Article */}
        <article>
          {/* Back link */}
          <Link
            href={getLocalePath('/blog', locale)}
            className="inline-flex items-center gap-1.5 text-[13px] text-[#808080] hover:text-[#171717] transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Resources
          </Link>

          {/* Category + meta */}
          <div className="flex items-center gap-3 mb-5">
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${categoryColors[post.category] || 'bg-gray-50 text-gray-700'}`}>
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-[12px] text-[#808080]">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[36px] sm:text-[42px] font-semibold tracking-[-0.1rem] text-[#171717] mb-6 leading-[1.1]">
            {post.title}
          </h1>

          {/* Author + date */}
          <div className="flex items-center gap-3 pb-8 mb-8 border-b border-[#ebebeb]">
            <Image
              src="/profile.jpeg"
              alt="Wali Nori"
              width={36}
              height={36}
              className="w-9 h-9 rounded-full object-cover"
              style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
            />
            <div>
              <div className="text-[14px] font-medium text-[#171717]">{post.author}</div>
              <div className="text-[12px] text-[#808080]">
                {new Date(post.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>

          {/* Hero image */}
          {post.image && (
            <div className="mb-10 rounded-[10px] overflow-hidden border border-[#ebebeb]">
              <Image
                src={post.image}
                alt={post.title}
                width={1408}
                height={768}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          {/* Article content */}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author bio */}
          <div
            className="mt-12 p-6 rounded-[8px] flex items-start gap-4 bg-[#fafafa]"
            style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
          >
            <Image
              src="/profile.jpeg"
              alt="Wali Nori"
              width={48}
              height={48}
              loading="lazy"
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <div>
              <div className="text-[15px] font-semibold text-[#171717] mb-1">Wali Nori</div>
              <div className="text-[13px] text-[#666666] leading-[1.55] mb-2">
                Founder of Excel Consultancy. Digital marketing and marketing operations specialist with 3 years building automation systems and tracking infrastructure for SMEs across Australia and Europe.
              </div>
              <a
                href="https://www.linkedin.com/in/wali-nori/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#0072f5] underline"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 pt-8 border-t border-[#ebebeb] grid grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                href={getLocalePath(`/blog/${prevPost.slug}`, locale)}
                className="group p-4 rounded-[8px] hover:bg-[#fafafa] transition-colors"
                style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
              >
                <div className="flex items-center gap-1 text-[12px] text-[#808080] mb-1">
                  <ArrowLeft size={12} /> Previous
                </div>
                <div className="text-[14px] font-medium text-[#171717] leading-[1.4] group-hover:opacity-70 transition-opacity line-clamp-2">
                  {prevPost.title}
                </div>
              </Link>
            ) : <div />}
            {nextPost && (
              <Link
                href={getLocalePath(`/blog/${nextPost.slug}`, locale)}
                className="group p-4 rounded-[8px] text-right hover:bg-[#fafafa] transition-colors"
                style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
              >
                <div className="flex items-center justify-end gap-1 text-[12px] text-[#808080] mb-1">
                  Next <ArrowRight size={12} />
                </div>
                <div className="text-[14px] font-medium text-[#171717] leading-[1.4] group-hover:opacity-70 transition-opacity line-clamp-2">
                  {nextPost.title}
                </div>
              </Link>
            )}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          {/* CTA card */}
          <div
            className="p-6 rounded-[8px] bg-[#171717] mb-6"
          >
            <h3 className="text-[16px] font-semibold text-white mb-3">Need hands-on help?</h3>
            <p className="text-[13px] text-[rgba(255,255,255,0.6)] leading-[1.55] mb-5">
              Book a free 30-minute call and get a direct answer about your specific marketing setup.
            </p>
            <Link
              href={getLocalePath('/contact', locale)}
              className="w-full h-9 rounded-[6px] text-[13px] font-medium text-[#171717] bg-white inline-flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* Related articles */}
          {relatedPosts.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#808080] mb-4">
                Related Articles
              </div>
              <div className="space-y-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={getLocalePath(`/blog/${related.slug}`, locale)}
                    className="group block p-4 rounded-[8px] bg-white hover:bg-[#fafafa] transition-colors"
                    style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
                  >
                    <h4 className="text-[13px] font-medium text-[#171717] leading-[1.4] group-hover:opacity-70 transition-opacity">
                      {related.title}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] text-[#808080] mt-2">
                      <Clock size={10} /> {related.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
