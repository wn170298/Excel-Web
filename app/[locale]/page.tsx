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
  title: 'Excel | Full-Service Digital Marketing Agency',
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
      'Data-driven paid advertising across Google, Microsoft Bing, and beyond. We treat every euro as a procurement investment, buying customers at a profitable spread, not just impressions.',
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
      'AI-assisted content creation and optimisation at scale, maintaining quality and brand voice while dramatically reducing time-to-publish for SEO content programmes.',
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
      'AI-enhanced conversion modelling recovers measurement lost to consent restrictions, keeping your data GDPR-compliant without sacrificing bidding signal quality.',
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
    sameAs: ['https://www.linkedin.com/in/wali-nori/'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What services does Excel Consultancy offer?', acceptedAnswer: { '@type': 'Answer', text: 'Excel is a full-service digital marketing consultancy offering SEO, Pay-Per-Click advertising, social media advertising, web design & development, marketing automation, and analytics & attribution.' } },
      { '@type': 'Question', name: 'How much does digital marketing cost?', acceptedAnswer: { '@type': 'Answer', text: 'Our managed plans start from €1,200/month using flat-fee pricing, no percentage of ad spend. Book a free consultation for a tailored recommendation.' } },
      { '@type': 'Question', name: 'How long before I see results?', acceptedAnswer: { '@type': 'Answer', text: 'PPC campaigns can drive qualified leads within days. SEO compounds over 3–6 months and continues growing long-term.' } },
      { '@type': 'Question', name: 'Do you work with businesses outside of your country?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with clients worldwide, regardless of country, industry, or company size. We are fully GDPR compliant and operate remotely across all time zones.' } },
    ],
  };

  return (
    <div>
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative pt-20 pb-24 bg-[#fdf9f5] dark:bg-[#080808] overflow-hidden"
      >
        {/* Cool-blue orb top-right */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,104,214,0.08) 0%, transparent 65%)',
            transform: 'translate(25%, -25%)',
          }}
        />
        {/* Warm-amber orb bottom-left */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-[550px] h-[550px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.09) 0%, transparent 70%)',
            transform: 'translate(-25%, 25%)',
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center">

            {/* Left column */}
            <div>
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-[#eef5ff] dark:bg-[#0068d6]/15 border border-[#c8dfff] dark:border-[#0068d6]/30">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0068d6]" />
                <span className="text-[11px] font-semibold text-[#0068d6] tracking-[0.12em] uppercase">
                  Global Digital Marketing Agency
                </span>
              </div>

              <h1
                className="text-[50px] sm:text-[66px] lg:text-[76px] leading-[1.0] text-[#171717] dark:text-white mb-8"
                style={{ fontWeight: 800, letterSpacing: '-0.04em' }}
              >
                We Help Brands Reach Their Full Online{' '}
                <span className="text-[#0068d6]">Digital Marketing Potential.</span>
              </h1>

              <p className="text-[17px] sm:text-[18px] text-[#555555] dark:text-[#888888] leading-[1.8] max-w-[540px] mb-10">
                Excel is a performance-first marketing consultancy. We build data-driven,
                multi-channel strategies that connect your SEO, paid ads, and analytics into a
                single growth engine, backed by AI, delivered with precision.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-3 mb-12">
                <a
                  href="https://calendly.com/wali-noorzad12/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-7 bg-[#0068d6] hover:bg-[#0055b3] text-white font-semibold rounded-[10px] inline-flex items-center gap-2.5 transition-all text-[15px]"
                  style={{ boxShadow: '0 2px 20px rgba(0,104,214,0.28)' }}
                >
                  Book Your Free Strategy Session
                  <ArrowRight size={16} />
                </a>
                <Link
                  href={getLocalePath('/services', locale)}
                  className="h-12 px-7 border border-[#d0c8c0] dark:border-[#2a2a2a] hover:border-[#0068d6] dark:hover:border-[#0068d6] hover:text-[#0068d6] text-[#171717] dark:text-white font-semibold rounded-[10px] inline-flex items-center gap-2 transition-all text-[15px]"
                >
                  Explore Our Services
                </Link>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>
                <span className="text-[13px] text-[#888888] dark:text-[#666666]">
                  4.9 / 5 · Trusted by businesses in 4 countries
                </span>
              </div>
            </div>

            {/* Right column, analytics dashboard graphic */}
            <div className="hidden lg:flex flex-col gap-3">

              {/* Chart card */}
              <div
                className="bg-white dark:bg-[#111111] rounded-[20px] border border-[#ede8e2] dark:border-[#1e1e1e] p-6"
                style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.07)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[10px] font-semibold text-[#aaaaaa] uppercase tracking-[0.12em] mb-1">
                      Organic Traffic Growth
                    </p>
                    <p
                      className="text-[30px] font-bold text-[#171717] dark:text-white leading-none"
                      style={{ letterSpacing: '-0.03em' }}
                    >
                      +89%
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0fdf4] dark:bg-[#022c22] rounded-full">
                    <TrendingUp size={11} className="text-[#22c55e]" />
                    <span className="text-[11px] font-semibold text-[#22c55e]">6 months</span>
                  </div>
                </div>

                {/* SVG line chart */}
                <svg viewBox="0 0 320 88" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0068d6" stopOpacity="0.13" />
                      <stop offset="100%" stopColor="#0068d6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="29" x2="320" y2="29" stroke="#f0ebe4" strokeWidth="1" />
                  <line x1="0" y1="54" x2="320" y2="54" stroke="#f0ebe4" strokeWidth="1" />
                  <line x1="0" y1="79" x2="320" y2="79" stroke="#f0ebe4" strokeWidth="1" />
                  <path
                    d="M0 82 C40 79, 65 77, 90 71 C115 65, 135 69, 160 59 C185 49, 210 39, 235 26 C260 13, 290 7, 320 3 L320 88 L0 88Z"
                    fill="url(#heroChartFill)"
                  />
                  <path
                    d="M0 82 C40 79, 65 77, 90 71 C115 65, 135 69, 160 59 C185 49, 210 39, 235 26 C260 13, 290 7, 320 3"
                    stroke="#0068d6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="90" cy="71" r="4" fill="white" stroke="#0068d6" strokeWidth="2" />
                  <circle cx="160" cy="59" r="4" fill="white" stroke="#0068d6" strokeWidth="2" />
                  <circle cx="235" cy="26" r="4" fill="white" stroke="#0068d6" strokeWidth="2" />
                  <circle cx="320" cy="3" r="5" fill="#0068d6" />
                </svg>
              </div>

              {/* 2-column metric cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#0068d6] rounded-[16px] p-5">
                  <p className="text-[10px] font-semibold text-white/55 uppercase tracking-[0.12em] mb-2">ROAS</p>
                  <p
                    className="text-[30px] font-bold text-white leading-none mb-1"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    3.8×
                  </p>
                  <p className="text-[11px] text-white/50">e-commerce avg</p>
                </div>
                <div
                  className="bg-white dark:bg-[#111111] rounded-[16px] border border-[#ede8e2] dark:border-[#1e1e1e] p-5"
                  style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}
                >
                  <p className="text-[10px] font-semibold text-[#aaaaaa] uppercase tracking-[0.12em] mb-2">CPL Reduction</p>
                  <p
                    className="text-[30px] font-bold text-[#0068d6] leading-none mb-1"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    52%
                  </p>
                  <p className="text-[11px] text-[#aaaaaa]">vs prev agency</p>
                </div>
              </div>

              {/* Bottom warm accent metric */}
              <div
                className="bg-white dark:bg-[#111111] rounded-[16px] border border-[#ede8e2] dark:border-[#1e1e1e] p-4 flex items-center justify-between"
                style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-[10px] bg-[#fff7ed] dark:bg-[#f59e0b]/10 flex items-center justify-center shrink-0">
                    <Zap size={16} className="text-[#f59e0b]" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#171717] dark:text-white leading-tight">Wasted Spend</p>
                    <p className="text-[10px] text-[#aaaaaa]">Eliminated on first audit</p>
                  </div>
                </div>
                <p
                  className="text-[24px] font-bold text-[#f59e0b] shrink-0"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  61%
                </p>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="mt-16 pt-10 border-t border-[#e8e0d8] dark:border-[#1a1a1a]">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#aaaaaa] dark:text-[#444444] font-semibold mb-6">
              Certified Partners &amp; Platform Experts
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
              {['Google Partner', 'Meta Business Partner', 'Microsoft Advertising', 'HubSpot Solutions', 'Semrush Certified'].map(
                (name) => (
                  <span key={name} className="text-[13px] font-semibold text-[#b8b2aa] dark:text-[#3a3a3a]">
                    {name}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────── */}
      <section className="py-12 border-y border-[#1a1208]" style={{ background: '#0d0804' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-6 md:py-2 text-center ${i > 0 ? 'border-l border-[#1e160c]' : ''}`}
              >
                <p
                  className="text-[50px] font-black leading-none mb-2 text-white"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {stat.value}
                </p>
                <p className="text-[10px] font-semibold text-white/65 uppercase tracking-[0.16em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-[#faf7f2] dark:bg-[#0d0d0d]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[600px] mb-16">
            <p className="text-[11px] font-semibold text-[#0068d6] uppercase tracking-[0.15em] mb-4">
              What We Do
            </p>
            <h2
              className="text-[42px] sm:text-[52px] font-bold leading-[1.08] text-[#171717] dark:text-white mb-5"
              style={{ letterSpacing: '-0.035em' }}
            >
              Full-Service Digital Marketing Solutions
            </h2>
            <p className="text-[17px] text-[#666666] dark:text-[#888888] leading-[1.75]">
              We Drive Growth Through a Multi-Channel Digital Marketing Strategy, one that is
              cohesive, measurable, and built around your business goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-white dark:bg-[#111111] rounded-[16px] border border-[#ede8e2] dark:border-[#1e1e1e] p-7 flex flex-col hover:border-[#0068d6]/40 dark:hover:border-[#0068d6]/30 transition-all duration-300"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded-[10px] bg-[#f0f7ff] dark:bg-[#0068d6]/10 flex items-center justify-center group-hover:bg-[#0068d6] transition-all duration-300">
                      <Icon size={20} className="text-[#0068d6] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[11px] font-bold text-[#d0c8c0] dark:text-[#2a2a2a] tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="inline-block px-2.5 py-0.5 bg-[#f5f0ea] dark:bg-white/5 rounded-[5px] text-[10px] font-bold text-[#888888] dark:text-[#666666] uppercase tracking-[0.1em] mb-3 w-fit">
                    {service.label}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#171717] dark:text-white mb-3 leading-[1.3]">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-[#666666] dark:text-[#888888] leading-[1.75] mb-5 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-[13px] text-[#555555] dark:text-[#888888]">
                        <CheckCircle size={12} className="text-[#0068d6] shrink-0" />
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
              className="inline-flex items-center gap-2 h-11 px-7 bg-[#171717] dark:bg-white hover:opacity-80 text-white dark:text-[#171717] font-semibold rounded-[8px] text-[14px] transition-opacity"
            >
              View All Services
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY EXCEL ────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#080808]">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Founder callout */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16 p-7 bg-[#fdf9f5] dark:bg-[#0d0d0d] rounded-[20px] border border-[#e8e0d8] dark:border-[#1e1e1e]">
            <Image
              src="/profile.jpeg"
              alt="Wali Nori, Founder of Excel Consultancy"
              width={72}
              height={72}
              loading="lazy"
              className="rounded-full object-cover shrink-0"
              style={{ boxShadow: '0 0 0 3px rgba(0,104,214,0.18)' }}
            />
            <div>
              <p className="text-[15px] font-bold text-[#171717] dark:text-white">Wali Nori</p>
              <p className="text-[13px] text-[#0068d6] font-medium mb-2">Founder & Lead Strategist at Excel Consultancy</p>
              <p className="text-[14px] text-[#666666] dark:text-[#888888] leading-[1.7]">
                Digital marketing specialist with hands-on experience across SEO, paid media, and AI-driven strategy. I work directly with every client, no account managers, no junior handoffs. When you work with Excel, you work with me.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold text-[#0068d6] uppercase tracking-[0.15em] mb-4">
                Why Excel
              </p>
              <h2
                className="text-[40px] sm:text-[50px] font-bold leading-[1.08] text-[#171717] dark:text-white mb-6"
                style={{ letterSpacing: '-0.035em' }}
              >
                We are a Full-Service Digital Marketing Agency Built for Results.
              </h2>
              <p className="text-[16px] text-[#666666] dark:text-[#888888] leading-[1.8] mb-8">
                Businesses of all sizes and industries trust us to manage their digital marketing.
                We don&apos;t sell meetings or reports, we deliver measurable revenue growth
                through a performance system where every investment is tracked to outcomes.
              </p>
              <div className="space-y-0">
                {[
                  ['Flat-fee pricing', 'No percentage of spend. Our incentives are aligned with your results, not your budget size.'],
                  ['AI-powered operations', 'We leverage machine learning to optimise campaigns, content, and attribution faster than any manual process.'],
                  ['Full-funnel visibility', 'From first impression to closed deal, we track every touchpoint and attribute revenue correctly.'],
                  ['GDPR & privacy-first', 'Fully compliant measurement built for global privacy regulations, no compromises.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4 py-5 border-b border-[#f0ebe4] dark:border-[#181818] last:border-0">
                    <div className="w-[3px] rounded-full bg-[#0068d6] shrink-0 self-stretch opacity-50" />
                    <div>
                      <p className="text-[15px] font-semibold text-[#171717] dark:text-white mb-0.5">{title}</p>
                      <p className="text-[14px] text-[#666666] dark:text-[#888888] leading-[1.65]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {RESULTS.map((item, i) => (
                <div
                  key={item.label}
                  className={`rounded-[16px] p-7 ${
                    i === 0
                      ? 'bg-[#0068d6]'
                      : 'bg-[#faf7f2] dark:bg-[#0d0d0d] border border-[#e8e0d8] dark:border-[#1e1e1e]'
                  }`}
                >
                  <p
                    className={`text-[44px] font-bold leading-none mb-2 ${
                      i === 0 ? 'text-white' : 'text-[#0068d6]'
                    }`}
                    style={{ letterSpacing: '-0.035em' }}
                  >
                    {item.value}
                  </p>
                  <p className={`text-[12px] font-semibold mb-0.5 ${i === 0 ? 'text-white' : 'text-[#171717] dark:text-white'}`}>
                    {item.label}
                  </p>
                  <p className={`text-[11px] ${i === 0 ? 'text-white/65' : 'text-[#aaaaaa] dark:text-[#555555]'}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#faf7f2] dark:bg-[#0d0d0d]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#0068d6] uppercase tracking-[0.15em] mb-4">
              Client Results
            </p>
            <h2
              className="text-[40px] sm:text-[50px] font-bold text-[#171717] dark:text-white"
              style={{ letterSpacing: '-0.035em' }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {[
              {
                quote: 'Excel is a professional with achievable objectives set, highly recommended.',
                name: 'Speed Wreckers',
                title: 'Perth, WA · Automotive',
                stars: 5,
              },
              {
                quote: 'Excel has great professional services and affordable for any SMEs. Highly recommended.',
                name: 'Auto Point Car Removal',
                title: 'Perth, WA · Automotive',
                stars: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-[#111111] rounded-[20px] border border-[#e8e0d8] dark:border-[#1e1e1e] p-8 flex flex-col relative overflow-hidden"
                style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}
              >
                <div
                  className="absolute top-4 right-6 text-[96px] leading-none select-none pointer-events-none"
                  style={{ fontWeight: 700, color: 'rgba(0,104,214,0.06)' }}
                >
                  &ldquo;
                </div>
                <div className="flex mb-5">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-[16px] text-[#333333] dark:text-[#cccccc] leading-[1.8] mb-6 flex-1 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-[#f0ebe4] dark:border-[#1a1a1a]">
                  <div className="w-8 h-8 rounded-full bg-[#eef5ff] dark:bg-[#0068d6]/15 flex items-center justify-center text-[#0068d6] text-[11px] font-bold shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#171717] dark:text-white">{t.name}</p>
                    <p className="text-[11px] text-[#aaaaaa] dark:text-[#555555]">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI ───────────────────────────────────────────────────── */}
      <section id="ai" className="py-24 relative overflow-hidden" style={{ background: '#060d1f' }}>
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,104,214,0.18) 0%, transparent 65%)' }}
        />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="max-w-[620px] mb-16">
            <p className="text-[11px] font-semibold text-[#60a5fa] uppercase tracking-[0.15em] mb-4">
              AI-Powered Marketing
            </p>
            <h2
              className="text-[42px] sm:text-[52px] font-bold text-white leading-[1.08] mb-5"
              style={{ letterSpacing: '-0.035em' }}
            >
              Harnessing AI, Machine Learning &amp;{' '}
              <span className="text-[#60a5fa]">the Latest Technology</span>
            </h2>
            <p className="text-[17px] text-white/55 leading-[1.8]">
              We embed artificial intelligence into every layer of your digital marketing
              strategy, delivering smarter results, faster optimisation, and sustainable
              competitive advantage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AI_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-[16px] border border-white/8 bg-white/[0.04] p-7 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-[#0068d6]/15 flex items-center justify-center mb-5 group-hover:bg-[#0068d6]/25 transition-colors">
                    <Icon size={20} className="text-[#60a5fa]" />
                  </div>
                  <h3 className="text-[16px] font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-[14px] text-white/50 leading-[1.75]">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14">
            <Link
              href={getLocalePath('/ai', locale)}
              className="inline-flex items-center gap-2 h-11 px-7 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-[8px] text-[14px] transition-colors border border-white/15 hover:border-white/25"
            >
              Explore AI Marketing Solutions
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────────────────── */}
      <section id="blog" className="py-24 bg-white dark:bg-[#080808]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] font-semibold text-[#0068d6] uppercase tracking-[0.15em] mb-4">
                Resources
              </p>
              <h2
                className="text-[40px] sm:text-[50px] font-bold text-[#171717] dark:text-white leading-[1.08] mb-3"
                style={{ letterSpacing: '-0.035em' }}
              >
                Marketing Insights &amp; Resources
              </h2>
              <p className="text-[16px] text-[#666666] dark:text-[#888888] leading-[1.7] max-w-[480px]">
                Expert guides, case studies, and data-driven strategies from the Excel team.
              </p>
            </div>
            <Link
              href={getLocalePath('/blog', locale)}
              className="shrink-0 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0068d6] hover:underline underline-offset-4"
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
                className="group bg-[#faf7f2] dark:bg-[#0d0d0d] rounded-[16px] border border-[#e8e0d8] dark:border-[#1e1e1e] overflow-hidden hover:border-[#0068d6]/35 dark:hover:border-[#0068d6]/25 transition-all duration-300 flex flex-col"
              >
                {post.image && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="px-2.5 py-0.5 bg-[#eef5ff] dark:bg-[#0068d6]/10 text-[#0068d6] text-[10px] font-bold rounded-[5px] uppercase tracking-[0.1em]">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-bold text-[#171717] dark:text-white leading-[1.45] mb-3 group-hover:text-[#0068d6] transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-[#666666] dark:text-[#888888] leading-[1.65] mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-[11px] text-[#aaaaaa] dark:text-[#555555] mt-auto">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} />
                      {new Date(post.date).toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
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
        </div>
      </section>

      {/* ── CONTACT + FAQ ────────────────────────────────────────── */}
      <ContactSection />

    </div>
  );
}
