import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  MousePointerClick,
  Share2,
  Globe,
  Zap,
  BarChart3,
  Bot,
  Brain,
  Sparkles,
  TrendingUp,
  Target,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Clock,
  Calendar,
  Star,
} from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';
import ContactSection from '@/components/contact-section';
import JsonLd from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Excel — Full-Service Digital Marketing Agency',
  description:
    'Excel helps brands reach their full online digital marketing potential through SEO, PPC, social media advertising, and AI-powered strategies. Trusted by businesses worldwide.',
  keywords: [
    'global digital marketing agency',
    'international SEO agency',
    'PPC management',
    'social media advertising',
    'AI marketing',
  ],
};

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

const SERVICES = [
  {
    icon: Search,
    title: 'Search Engine Optimisation',
    label: 'SEO',
    description:
      'Drive sustainable organic growth with technical excellence, strategic content, and authority building. We help ambitious brands dominate search results and compound their traffic month over month.',
    highlights: ['Technical SEO Audits', 'Keyword Strategy', 'Content Optimisation', 'Link Building', 'Local SEO', 'Enterprise SEO'],
  },
  {
    icon: MousePointerClick,
    title: 'Pay-Per-Click (PPC)',
    label: 'PPC',
    description:
      'Data-driven paid advertising across Google, Microsoft Bing, and beyond. We treat every euro as a procurement investment — buying customers at a profitable spread, not just impressions.',
    highlights: ['Google Ads', 'Microsoft Bing Ads', 'Google Shopping', 'Remarketing', 'Smart Bidding', 'ChatGPT Ads'],
  },
  {
    icon: Share2,
    title: 'Social Media Advertising',
    label: 'Social',
    description:
      'Precision targeting on Meta, LinkedIn, and TikTok to build brand awareness and generate high-quality leads from your ideal audience segments.',
    highlights: ['Facebook & Instagram Ads', 'LinkedIn Ads', 'TikTok Ads', 'Creative Strategy', 'Audience Targeting', 'Retargeting'],
  },
  {
    icon: Globe,
    title: 'Web Design & Development',
    label: 'Web Dev',
    description:
      'High-converting landing pages and websites built on fast, scalable infrastructure. Every page is designed with one goal: turning traffic into revenue.',
    highlights: ['Landing Page Design', 'Conversion Optimisation', 'Performance Engineering', 'Mobile-First', 'A/B Testing', 'CRO Audits'],
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    label: 'Automation',
    description:
      'Nurture leads at scale with intelligent email sequences, CRM integration, and automated workflows that keep your pipeline full without manual effort.',
    highlights: ['Email Sequences', 'CRM Integration', 'Lead Scoring', 'Behavioural Triggers', 'Drip Campaigns', 'Sales Enablement'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Attribution',
    label: 'Analytics',
    description:
      'Know exactly where your revenue comes from. Full-funnel tracking, consent-compliant measurement, and clear dashboards that show what is actually working.',
    highlights: ['GA4 Setup', 'Conversion Tracking', 'Multi-Touch Attribution', 'Custom Dashboards', 'GDPR Compliance', 'Reporting'],
  },
];

const AI_FEATURES = [
  {
    icon: Bot,
    title: 'AI-Driven SEO',
    description:
      'Machine learning models analyse search patterns, identify semantic content gaps, and optimise for AI-powered search engines at a scale impossible to achieve manually.',
  },
  {
    icon: Brain,
    title: 'Smart PPC Bidding',
    description:
      'AI-powered bid management algorithms optimise your ad spend in real-time, automatically shifting budget toward the highest-performing keywords and audiences.',
  },
  {
    icon: Sparkles,
    title: 'Automated Content',
    description:
      'AI-assisted content creation and optimisation at scale — maintaining quality and brand voice while dramatically reducing time-to-publish for SEO content programmes.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description:
      'Anticipate customer behaviour and market trends before they happen. Predictive models surface opportunities and flag risks weeks ahead of manual analysis.',
  },
  {
    icon: Target,
    title: 'Intelligent Attribution',
    description:
      'ML-powered attribution models reveal the true impact of every marketing touchpoint, cutting through last-click bias to show you where your best customers actually come from.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-Safe Measurement',
    description:
      'AI-enhanced conversion modelling recovers measurement lost to consent restrictions — keeping your data GDPR-compliant without sacrificing bidding signal quality.',
  },
];

const STATS = [
  { value: '3+', label: 'Years of Excellence' },
  { value: '4', label: 'Countries Served' },
  { value: '91%', label: 'Campaign Success Rate' },
  { value: '28+', label: 'Expert Resources' },
];

const RESULTS = [
  { label: 'Avg. CPL Reduction', value: '52%', desc: 'vs. previous agency' },
  { label: 'Organic Traffic Growth', value: '+89%', desc: 'in 6 months' },
  { label: 'Verified ROAS', value: '3.8×', desc: 'for e-commerce clients' },
  { label: 'Wasted Spend Eliminated', value: '61%', desc: 'on first audit' },
];

const recentPosts = blogPosts.slice(0, 6);

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'Excel Consultancy',
    url: 'https://get-excel.com',
    logo: 'https://get-excel.com/logo.webp',
    email: 'hello@get-excel.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Rome', addressRegion: 'Lazio', addressCountry: 'IT' },
    areaServed: 'Worldwide',
    description: 'Full-service digital marketing agency specialising in SEO, PPC, social media advertising, web design, marketing automation, and AI-powered analytics.',
    sameAs: ['https://www.linkedin.com/in/walinoorzad/'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What services does Excel Consultancy offer?', acceptedAnswer: { '@type': 'Answer', text: 'Excel is a full-service digital marketing consultancy offering SEO, Pay-Per-Click advertising, social media advertising, web design & development, marketing automation, and analytics & attribution.' } },
      { '@type': 'Question', name: 'How much does digital marketing cost?', acceptedAnswer: { '@type': 'Answer', text: 'Our managed plans start from €1,200/month using flat-fee pricing — no percentage of ad spend. Book a free consultation for a tailored recommendation.' } },
      { '@type': 'Question', name: 'How long before I see results?', acceptedAnswer: { '@type': 'Answer', text: 'PPC campaigns can drive qualified leads within days. SEO compounds over 3–6 months and continues growing long-term.' } },
      { '@type': 'Question', name: 'Do you work with businesses outside of your country?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with clients worldwide — regardless of country, industry, or company size. We are fully GDPR compliant and operate remotely across all time zones.' } },
    ],
  };

  return (
    <div>
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative pt-20 pb-24 bg-white dark:bg-[#0a0a0a] overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-30 dark:opacity-15"
          style={{
            background: 'radial-gradient(ellipse at center, #0068d625 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#f0f7ff] dark:bg-[#0068d6]/15 border border-[#cce0ff] dark:border-[#0068d6]/30">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0068d6]" />
            <span className="text-[12px] font-semibold text-[#0068d6] tracking-wide">
              Global Digital Marketing Agency
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-[40px] sm:text-[52px] lg:text-[62px] font-bold leading-[1.1] text-[#171717] dark:text-white max-w-[860px] mx-auto mb-6">
            We Help Brands Reach Their Full Online{' '}
            <span className="text-[#0068d6]">Digital Marketing Potential.</span>
          </h1>

          <p className="text-[17px] sm:text-[19px] text-[#555555] dark:text-[#888888] leading-[1.7] max-w-[620px] mx-auto mb-10">
            Excel is a performance-first marketing consultancy. We build data-driven,
            multi-channel strategies that connect your SEO, paid ads, and analytics into a
            single growth engine — backed by AI, delivered with precision.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="https://calendly.com/wali-noorzad12/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-7 bg-[#0068d6] hover:bg-[#0055b3] text-white font-semibold rounded-[8px] inline-flex items-center gap-2 transition-colors text-[15px]"
            >
              Book Your Free Strategy Session
              <ArrowRight size={16} />
            </a>
            <Link
              href={getLocalePath('/services', locale)}
              className="h-12 px-7 border border-[#ebebeb] dark:border-[#2a2a2a] hover:bg-[#f5f5f5] dark:hover:bg-white/5 text-[#171717] dark:text-white font-semibold rounded-[8px] inline-flex items-center gap-2 transition-colors text-[15px]"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Star rating */}
          <div className="flex items-center justify-center gap-2 mb-16">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[#f59e0b] fill-[#f59e0b]" />
              ))}
            </div>
            <span className="text-[13px] font-medium text-[#555555] dark:text-[#888888]">
              4.9 / 5 · Trusted by businesses in 4 countries
            </span>
          </div>

          {/* Partners */}
          <div className="border-t border-[#ebebeb] dark:border-[#2a2a2a] pt-10">
            <p className="text-[11px] uppercase tracking-widest text-[#aaaaaa] dark:text-[#555555] font-semibold mb-6">
              Certified Partners &amp; Platform Experts
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[13px] font-semibold text-[#999999] dark:text-[#555555]">
              {['Google Partner', 'Meta Business Partner', 'Microsoft Advertising', 'HubSpot Solutions', 'Semrush Certified'].map(
                (name) => (
                  <span key={name}>{name}</span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────── */}
      <section className="bg-[#0068d6] py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-[40px] font-bold leading-none mb-1">{stat.value}</p>
                <p className="text-[13px] font-medium text-white/70 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-[#f5f7fa] dark:bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[13px] font-semibold text-[#0068d6] uppercase tracking-wider mb-3">
              What We Do
            </p>
            <h2 className="text-[36px] sm:text-[44px] font-bold text-[#171717] dark:text-white leading-[1.15] mb-4">
              Full-Service Digital Marketing Solutions
            </h2>
            <p className="text-[17px] text-[#666666] dark:text-[#888888] max-w-[560px] mx-auto leading-[1.7]">
              We Drive Growth Through a Multi-Channel Digital Marketing Strategy — one that is
              cohesive, measurable, and built around your business goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white dark:bg-[#161616] rounded-[14px] border border-[#ebebeb] dark:border-[#2a2a2a] p-7 flex flex-col hover:shadow-md dark:hover:border-[#3a3a3a] transition-all group"
                >
                  <div className="w-11 h-11 rounded-[10px] bg-[#f0f7ff] dark:bg-[#0068d6]/15 flex items-center justify-center mb-5 group-hover:bg-[#0068d6]/10 dark:group-hover:bg-[#0068d6]/25 transition-colors">
                    <Icon size={22} className="text-[#0068d6]" />
                  </div>
                  <div className="inline-block px-2.5 py-0.5 bg-[#f5f5f5] dark:bg-white/5 rounded-[5px] text-[11px] font-semibold text-[#666666] dark:text-[#888888] uppercase tracking-wider mb-3 w-fit">
                    {service.label}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#171717] dark:text-white mb-3 leading-[1.3]">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-[#666666] dark:text-[#888888] leading-[1.7] mb-5 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-[13px] text-[#555555] dark:text-[#888888]">
                        <CheckCircle size={13} className="text-[#0068d6] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={getLocalePath('/services', locale)}
              className="inline-flex items-center gap-2 h-11 px-6 bg-[#0068d6] hover:bg-[#0055b3] text-white font-semibold rounded-[8px] text-[14px] transition-colors"
            >
              View All Services
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY EXCEL ────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Founder callout */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-16 p-7 bg-[#f5f7fa] dark:bg-[#111111] rounded-[16px] border border-[#ebebeb] dark:border-[#2a2a2a]">
            <Image
              src="/profile.jpeg"
              alt="Wali Nori — Founder, Excel Consultancy"
              width={72}
              height={72}
              className="rounded-full object-cover shrink-0"
            />
            <div>
              <p className="text-[15px] font-bold text-[#171717] dark:text-white">Wali Nori</p>
              <p className="text-[13px] text-[#0068d6] font-medium mb-2">Founder & Lead Strategist — Excel Consultancy</p>
              <p className="text-[14px] text-[#666666] dark:text-[#888888] leading-[1.65]">
                Digital marketing specialist with hands-on experience across SEO, paid media, and AI-driven strategy. I work directly with every client — no account managers, no junior handoffs. When you work with Excel, you work with me.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[13px] font-semibold text-[#0068d6] uppercase tracking-wider mb-3">
                Why Excel
              </p>
              <h2 className="text-[36px] sm:text-[42px] font-bold text-[#171717] dark:text-white leading-[1.15] mb-5">
                We are a Full-Service Digital Marketing Agency Built for Results.
              </h2>
              <p className="text-[16px] text-[#666666] dark:text-[#888888] leading-[1.75] mb-8">
                Businesses of all sizes and industries trust us to manage their digital marketing.
                We don&apos;t sell meetings or reports — we deliver measurable revenue growth
                through a performance system where every investment is tracked to outcomes.
              </p>
              <div className="space-y-5">
                {[
                  ['Flat-fee pricing', 'No percentage of spend. Our incentives are aligned with your results, not your budget size.'],
                  ['AI-powered operations', 'We leverage machine learning to optimise campaigns, content, and attribution faster than any manual process.'],
                  ['Full-funnel visibility', 'From first impression to closed deal — we track every touchpoint and attribute revenue correctly.'],
                  ['GDPR & privacy-first', 'Fully compliant measurement built for global privacy regulations — no compromises.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4">
                    <CheckCircle size={20} className="text-[#0068d6] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[15px] font-semibold text-[#171717] dark:text-white">{title}</p>
                      <p className="text-[14px] text-[#666666] dark:text-[#888888] leading-[1.65]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {RESULTS.map((item) => (
                <div
                  key={item.label}
                  className="bg-[#f5f7fa] dark:bg-[#111111] rounded-[14px] border border-[#ebebeb] dark:border-[#2a2a2a] p-6"
                >
                  <p className="text-[38px] font-bold text-[#0068d6] leading-none mb-1.5">
                    {item.value}
                  </p>
                  <p className="text-[13px] font-semibold text-[#171717] dark:text-white mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[12px] text-[#999999] dark:text-[#555555]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#f5f7fa] dark:bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold text-[#0068d6] uppercase tracking-wider mb-3">
              Client Results
            </p>
            <h2 className="text-[36px] sm:text-[42px] font-bold text-[#171717] dark:text-white leading-[1.15]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {[
              {
                quote: 'Excel is a professional with achievable objectives set, highly recommended.',
                name: 'Speed Wreckers',
                title: 'Perth, WA — Automotive',
                stars: 5,
              },
              {
                quote: 'Excel has great professional services and affordable for any SMEs. Highly recommended.',
                name: 'Auto Point Car Removal',
                title: 'Perth, WA — Automotive',
                stars: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-[#161616] rounded-[16px] border border-[#ebebeb] dark:border-[#2a2a2a] p-8 flex flex-col"
              >
                <div className="flex mb-5">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={15} className="text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-[16px] text-[#333333] dark:text-[#cccccc] leading-[1.75] mb-6 flex-1 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-[14px] font-semibold text-[#171717] dark:text-white">{t.name}</p>
                  <p className="text-[12px] text-[#999999] dark:text-[#555555]">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI ───────────────────────────────────────────────────── */}
      <section id="ai" className="py-24 bg-[#0f172a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[13px] font-semibold text-[#60a5fa] uppercase tracking-wider mb-3">
              AI-Powered Marketing
            </p>
            <h2 className="text-[36px] sm:text-[44px] font-bold text-white leading-[1.15] mb-4">
              Harnessing AI, Machine Learning &amp;{' '}
              <span className="text-[#60a5fa]">the Latest Technology</span>
            </h2>
            <p className="text-[17px] text-white/60 max-w-[580px] mx-auto leading-[1.7]">
              We embed artificial intelligence into every layer of your digital marketing
              strategy — delivering smarter results, faster optimisation, and sustainable
              competitive advantage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AI_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-[14px] border border-white/10 bg-white/5 p-7 hover:bg-white/8 hover:border-white/20 transition-all"
                >
                  <div className="w-11 h-11 rounded-[10px] bg-[#0068d6]/20 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#60a5fa]" />
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-[14px] text-white/55 leading-[1.7]">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Link
              href={getLocalePath('/ai', locale)}
              className="inline-flex items-center gap-2 h-11 px-6 bg-[#0068d6] hover:bg-[#0055b3] text-white font-semibold rounded-[8px] text-[14px] transition-colors"
            >
              Explore AI Marketing Solutions
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────────────────── */}
      <section id="blog" className="py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[13px] font-semibold text-[#0068d6] uppercase tracking-wider mb-3">
                Resources
              </p>
              <h2 className="text-[36px] sm:text-[42px] font-bold text-[#171717] dark:text-white leading-[1.15] mb-3">
                Marketing Insights &amp; Resources
              </h2>
              <p className="text-[16px] text-[#666666] dark:text-[#888888] leading-[1.6] max-w-[480px]">
                Expert guides, case studies, and data-driven strategies from the Excel team.
              </p>
            </div>
            <Link
              href={getLocalePath('/blog', locale)}
              className="shrink-0 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0068d6] hover:underline"
            >
              View All Articles
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={getLocalePath(`/blog/${post.slug}`, locale)}
                className="group bg-[#f5f7fa] dark:bg-[#111111] rounded-[14px] border border-[#ebebeb] dark:border-[#2a2a2a] overflow-hidden hover:shadow-md dark:hover:border-[#3a3a3a] transition-all flex flex-col"
              >
                {post.image && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="px-2.5 py-0.5 bg-[#f0f7ff] dark:bg-[#0068d6]/15 text-[#0068d6] text-[11px] font-semibold rounded-[5px] uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-[16px] font-bold text-[#171717] dark:text-white leading-[1.4] mb-3 group-hover:text-[#0068d6] transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-[#666666] dark:text-[#888888] leading-[1.6] mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-[12px] text-[#999999] dark:text-[#555555] mt-auto">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT + FAQ ────────────────────────────────────────── */}
      <ContactSection />

    </div>
  );
}
