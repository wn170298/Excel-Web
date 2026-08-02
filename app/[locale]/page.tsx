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
      'Build authority through technical SEO, strategic content, and link building—your organic foundation for paid amplification.',
    highlights: ['Technical Foundation', 'Authority Building', 'Organic Momentum', 'Keyword Strategy', 'Content Integration', 'Link Building'],
  },
  {
    icon: MousePointerClick,
    title: 'Pay-Per-Click (PPC)',
    label: 'PPC',
    description:
      'Scale proven organic keywords with paid ads. AI-powered bidding eliminates waste and maximizes return on every pound spent.',
    highlights: ['Smart Bidding', 'Keyword Scaling', 'ROI Maximization', 'Waste Elimination', 'AI-Powered Optimization', 'Performance Tracking'],
  },
  {
    icon: Share2,
    title: 'Social Media Advertising',
    label: 'Social',
    description:
      'Reach your ideal customers where they are—Meta, LinkedIn, TikTok—with precision targeting and strategic creative.',
    highlights: ['Precision Targeting', 'Strategic Creative', 'Audience Segments', 'Lead Generation', 'Brand Awareness', 'Multi-Platform'],
  },
  {
    icon: Globe,
    title: 'Web Design & Development',
    label: 'Web Dev',
    description:
      'Fast, high-converting websites built to turn traffic into revenue. Every page optimized for your goals.',
    highlights: ['Conversion Optimization', 'Performance Engineering', 'Mobile-First Design', 'Revenue-Focused', 'A/B Testing', 'User Experience'],
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    label: 'Automation',
    description:
      'Nurture leads automatically through intelligent email, CRM workflows, and behavioral triggers. Never lose a warm lead.',
    highlights: ['Email Sequences', 'CRM Integration', 'Behavioral Triggers', 'Lead Nurturing', 'Warm Lead Capture', 'Sales Enablement'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Attribution',
    label: 'Analytics',
    description:
      'Know exactly where your revenue comes from. Full-funnel tracking, GDPR-compliant, no black boxes.',
    highlights: ['Full-Funnel Tracking', 'Conversion Attribution', 'Revenue Clarity', 'GDPR-Compliant', 'Custom Dashboards', 'Actionable Insights'],
  },
];

const AI_FEATURES = [
  {
    icon: Bot,
    title: 'Automated Optimization',
    description:
      'Continuous A/B testing, bid adjustments, and audience refinement happen 24/7 without manual intervention, keeping your campaigns optimised across changing market conditions.',
  },
  {
    icon: Brain,
    title: 'Smart Bid Management',
    description:
      'AI optimises ad spend across channels in real-time, automatically shifting budget toward high-intent, high-converting keywords to maximise every pound of paid spend.',
  },
  {
    icon: Sparkles,
    title: 'AI-Assisted Content',
    description:
      'Create SEO content at scale without sacrificing quality. AI identifies content gaps, optimises for search intent, and maintains your voice across every page.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description:
      'Anticipate customer behaviour and identify high-conversion prospects before they\'re ready to buy. Focus your budget on the audiences most likely to convert.',
  },
  {
    icon: Target,
    title: 'Intelligent Attribution',
    description:
      'ML-powered attribution cuts through last-click bias to reveal the true revenue drivers across your entire funnel. Know exactly which touchpoints drive conversions.',
  },
  {
    icon: ShieldCheck,
    title: 'Conversion Modeling',
    description:
      'Privacy-compliant conversion modelling keeps your bidding signals strong while staying fully GDPR-compliant. Measure what matters without compromising customer privacy.',
  },
];

const STATS = [
  { value: '3+', label: 'Years of Excellence' },
  { value: '4', label: 'Countries Served' },
  { value: '91%', label: 'Campaign Success Rate' },
  { value: '28+', label: 'Expert Resources' },
];

const RESULTS = [
  { label: 'Cost Per Lead', value: '52%', desc: 'reduction vs. previous agency' },
  { label: 'Organic Traffic', value: '+89%', desc: 'growth in 6 months' },
  { label: 'E-Commerce ROAS', value: '3.8×', desc: 'average across clients' },
  { label: 'Wasted Budget', value: '61%', desc: 'eliminated on first audit' },
];

const recentPosts = blogPosts.slice(0, 6);

const PARTNERS = [
  {
    name: 'Google',
    badge: 'Partner',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: 'Meta',
    badge: 'Business Partner',
    icon: (
      <svg viewBox="0 0 36 20" aria-hidden="true" width="36" height="20">
        <defs>
          <linearGradient id="metaGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#0082FB"/>
            <stop offset="100%" stopColor="#00B2FF"/>
          </linearGradient>
        </defs>
        <path d="M10 2C6.5 2 4 5.5 4 10s2.5 8 6 8c2.5 0 4.5-2 6-5.5C17.5 16 19.5 18 22 18c3.5 0 6-3.5 6-8S25.5 2 22 2c-2.5 0-4.5 2-6 5.5C14.5 4 12.5 2 10 2z" fill="url(#metaGrad)"/>
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    badge: 'Advertising',
    icon: (
      <svg viewBox="0 0 21 21" aria-hidden="true" width="20" height="20">
        <rect x="0" y="0" width="10" height="10" fill="#F25022"/>
        <rect x="11" y="0" width="10" height="10" fill="#7FBA00"/>
        <rect x="0" y="11" width="10" height="10" fill="#00A4EF"/>
        <rect x="11" y="11" width="10" height="10" fill="#FFB900"/>
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    badge: 'Solutions Partner',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
        <circle cx="12" cy="12" r="3.5" fill="#FF7A59"/>
        <rect x="11.25" y="4" width="1.5" height="4.5" rx="0.75" fill="#FF7A59"/>
        <rect x="11.25" y="15.5" width="1.5" height="4.5" rx="0.75" fill="#FF7A59"/>
        <rect x="4" y="11.25" width="4.5" height="1.5" rx="0.75" fill="#FF7A59"/>
        <rect x="15.5" y="11.25" width="4.5" height="1.5" rx="0.75" fill="#FF7A59"/>
        <circle cx="12" cy="5.5" r="1.75" fill="#FF7A59"/>
        <circle cx="12" cy="18.5" r="1.75" fill="#FF7A59"/>
        <circle cx="5.5" cy="12" r="1.75" fill="#FF7A59"/>
        <circle cx="18.5" cy="12" r="1.75" fill="#FF7A59"/>
      </svg>
    ),
  },
  {
    name: 'Semrush',
    badge: 'Certified',
    icon: (
      <svg viewBox="0 0 22 22" aria-hidden="true" width="22" height="22">
        <circle cx="11" cy="11" r="10" fill="#FF642D"/>
        <text x="11" y="15.5" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="sans-serif">S</text>
      </svg>
    ),
  },
];

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'Excel Consultancy',
    url: 'https://get-excel.com',
    logo: 'https://get-excel.com/logo.webp',
    email: 'excel@theexcelagency.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Rome', addressRegion: 'Lazio', addressCountry: 'IT' },
    areaServed: 'Worldwide',
    description: 'Full-service digital marketing agency specialising in SEO, PPC, social media advertising, web design, marketing automation, and AI-powered analytics.',
    sameAs: ['https://www.linkedin.com/in/wali-nori/'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How is Excel different from other digital marketing agencies?', acceptedAnswer: { '@type': 'Answer', text: "Most agencies specialize in one channel and hand you fragmented reports. Excel connects SEO, paid ads, web design, analytics, and automation into one integrated system. We're founder-led (you work directly with Wali), use flat-fee pricing (no percentage of spend), and layer AI throughout for real optimization—not buzzwords." } },
      { '@type': 'Question', name: 'How long before I see results?', acceptedAnswer: { '@type': 'Answer', text: 'PPC campaigns can drive qualified leads within days. SEO compounds over 3–6 months. Most clients see meaningful improvement within 30–60 days once strategy is live.' } },
      { '@type': 'Question', name: "What's the pricing model?", acceptedAnswer: { '@type': 'Answer', text: 'We use flat-fee pricing based on scope and complexity. No percentage of ad spend. This aligns our incentives with your growth, not your budget size. Most managed plans start from €1,200/month. Book a free strategy session for a custom quote.' } },
      { '@type': 'Question', name: 'Do you work with businesses outside Europe?', acceptedAnswer: { '@type': 'Answer', text: "We work with clients worldwide—any industry, any size. We're fully GDPR-compliant and operate across time zones. Whether you're in Perth, Europe, or beyond, we can help." } },
      { '@type': 'Question', name: 'Will I work directly with Wali?', acceptedAnswer: { '@type': 'Answer', text: "Yes. Wali works on strategy for every client and is involved in key decisions. You won't be handed off to a junior coordinator or account manager." } },
      { '@type': 'Question', name: 'What is the minimum commitment?', acceptedAnswer: { '@type': 'Answer', text: "We recommend a 3-month minimum to see meaningful results. That said, let's talk about your situation in a strategy session—we can discuss what makes sense for you." } },
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
                Most agencies optimize one channel.{' '}
                <span className="text-[#0068d6]">We deliver growth across all of them.</span>
              </h1>

              <p className="text-[17px] sm:text-[18px] text-[#555555] dark:text-[#888888] leading-[1.8] max-w-[540px] mb-10">
                Siloed marketing wastes time and money. You need a growth partner who connects
                every touchpoint, measures what actually matters, and scales what works. That's
                Excel.
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
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#aaaaaa] dark:text-[#444444] font-semibold mb-7">
              Premium Partner
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-7 gap-x-2">
              {PARTNERS.map((partner, i) => (
                <div
                  key={partner.name}
                  className={`flex items-center justify-center gap-2.5 opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-default${
                    i === PARTNERS.length - 1 ? ' col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  {partner.icon}
                  <div>
                    <p className="text-[12px] font-bold text-[#333333] dark:text-[#cccccc] leading-tight">
                      {partner.name}
                    </p>
                    <p className="text-[10px] text-[#aaaaaa] dark:text-[#555555] leading-tight">
                      {partner.badge}
                    </p>
                  </div>
                </div>
              ))}
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

      {/* ── PROBLEM ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#080808]">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <p className="text-[11px] font-semibold text-[#0068d6] uppercase tracking-[0.15em] mb-4">
            The Problem
          </p>
          <h2
            className="text-[32px] sm:text-[40px] font-bold leading-[1.2] text-[#171717] dark:text-white mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            Most businesses aren&apos;t losing to competitors. They&apos;re losing to their own marketing stack.
          </h2>
          <div className="text-left space-y-4 mb-8">
            <p className="text-[15px] text-[#666666] dark:text-[#888888] leading-[1.7]">
              You hire an SEO agency. A separate PPC freelancer. A social media manager. Each optimizes their own channel&mdash;and none talk to each other. SEO keywords never make it into ad campaigns. Attribution becomes guessing. Five invoices, five vendors, no accountability.
            </p>
            <p className="text-[15px] text-[#666666] dark:text-[#888888] leading-[1.7]">
              That&apos;s not a marketing problem. It&apos;s a coordination problem&mdash;and it&apos;s costing you money every day.
            </p>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#faf7f2] dark:bg-[#0d0d0d]">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <p className="text-[11px] font-semibold text-[#0068d6] uppercase tracking-[0.15em] mb-4">
            The Solution
          </p>
          <h2
            className="text-[32px] sm:text-[40px] font-bold leading-[1.2] text-[#171717] dark:text-white mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            One integrated system beats five broken vendors.
          </h2>
          <div className="text-left space-y-4 mb-8">
            <p className="text-[15px] text-[#666666] dark:text-[#888888] leading-[1.7]">
              SEO research feeds directly into paid campaigns. Analytics reveal which visitors convert. Pages are built to maximize traffic you&apos;re already paying for. Automation nurtures leads. AI optimizes everything in real-time.
            </p>
            <p className="text-[15px] text-[#666666] dark:text-[#888888] leading-[1.7]">
              One team. One system. Every dollar tracked. That&apos;s the Excel difference.
            </p>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ───────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#080808]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold text-[#0068d6] uppercase tracking-[0.15em] mb-4">
              See It In Action
            </p>
            <h2
              className="text-[32px] sm:text-[40px] font-bold leading-[1.2] text-[#171717] dark:text-white mb-4"
              style={{ letterSpacing: '-0.03em' }}
            >
              Speed Wreckers: 66 → 787.67 conversions.
            </h2>
            <p className="text-[15px] text-[#666666] dark:text-[#888888] leading-[1.7] max-w-[620px] mx-auto">
              Perth auto removal, one disconnected ad account. Fifteen months with integrated SEO, paid, and analytics. Here&apos;s what happened.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Before */}
            <div className="rounded-[20px] p-8 bg-[#faf7f2] dark:bg-[#0d0d0d] border border-[#e8e0d8] dark:border-[#1e1e1e]">
              <p className="text-[11px] font-semibold text-[#999999] uppercase tracking-[0.12em] mb-6">
                Before Excel
              </p>
              <div className="space-y-5">
                <div>
                  <p
                    className="text-[32px] font-bold leading-none text-[#171717] dark:text-white mb-1"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    3K
                  </p>
                  <p className="text-[13px] text-[#666666] dark:text-[#888888]">Clicks</p>
                </div>
                <div>
                  <p
                    className="text-[32px] font-bold leading-none text-[#171717] dark:text-white mb-1"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    66
                  </p>
                  <p className="text-[13px] text-[#666666] dark:text-[#888888]">Conversions</p>
                </div>
                <div>
                  <p
                    className="text-[32px] font-bold leading-none text-[#171717] dark:text-white mb-1"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    $7.62K
                  </p>
                  <p className="text-[13px] text-[#666666] dark:text-[#888888]">Ad Spend</p>
                </div>
                <div>
                  <p
                    className="text-[32px] font-bold leading-none text-[#171717] dark:text-white mb-1"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    ~$115
                  </p>
                  <p className="text-[13px] text-[#666666] dark:text-[#888888]">Cost Per Conversion</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="rounded-[20px] p-8 bg-[#eef5ff] dark:bg-[#0068d6]/10 border border-[#0068d6]/25">
              <p className="text-[11px] font-semibold text-[#0068d6] uppercase tracking-[0.12em] mb-6">
                After Excel (15 Months)
              </p>
              <div className="space-y-5">
                <div>
                  <p
                    className="text-[32px] font-bold leading-none text-[#0068d6] mb-1"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    25.2K <span className="text-[15px] font-semibold text-[#0068d6]/70">(8.4×)</span>
                  </p>
                  <p className="text-[13px] text-[#666666] dark:text-[#888888]">Clicks</p>
                </div>
                <div>
                  <p
                    className="text-[32px] font-bold leading-none text-[#0068d6] mb-1"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    787.67 <span className="text-[15px] font-semibold text-[#0068d6]/70">(+1,092%)</span>
                  </p>
                  <p className="text-[13px] text-[#666666] dark:text-[#888888]">Conversions</p>
                </div>
                <div>
                  <p
                    className="text-[32px] font-bold leading-none text-[#0068d6] mb-1"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    $80.7K
                  </p>
                  <p className="text-[13px] text-[#666666] dark:text-[#888888]">Ad Spend</p>
                </div>
                <div>
                  <p
                    className="text-[32px] font-bold leading-none text-[#0068d6] mb-1"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    ~$102
                  </p>
                  <p className="text-[13px] text-[#666666] dark:text-[#888888]">Cost Per Conversion</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[17px] sm:text-[18px] font-semibold text-[#171717] dark:text-white leading-[1.7] text-center mb-16">
            8.4× more clicks. Nearly 12× more conversions. And a lower cost per conversion than
            when they started. That&apos;s what happens when every channel is built to feed the
            others instead of compete with them.
          </p>

          {/* Auto Point referral */}
          <div className="rounded-[20px] p-8 bg-[#faf7f2] dark:bg-[#0d0d0d] border border-[#e8e0d8] dark:border-[#1e1e1e]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <p className="text-[11px] font-semibold text-[#0068d6] uppercase tracking-[0.15em] mb-2">
                  Referred by Speed Wreckers
                </p>
                <h3
                  className="text-[22px] sm:text-[26px] font-bold text-[#171717] dark:text-white"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Auto Point Car Removal
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-[#0068d6] bg-[#eef5ff] dark:bg-[#0068d6]/15 px-3 py-1.5 rounded-full self-start sm:self-auto">
                Early Results
              </span>
            </div>
            <p className="text-[15px] text-[#666666] dark:text-[#888888] leading-[1.8] mb-6">
              Speed Wreckers liked their numbers enough to send us a competitor in the same
              industry. Auto Point&apos;s results from their first stretch working with Excel:
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p
                  className="text-[28px] font-bold leading-none text-[#171717] dark:text-white mb-1"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  39
                </p>
                <p className="text-[12px] text-[#666666] dark:text-[#888888]">Conversions</p>
              </div>
              <div>
                <p
                  className="text-[28px] font-bold leading-none text-[#171717] dark:text-white mb-1"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  $3.17K
                </p>
                <p className="text-[12px] text-[#666666] dark:text-[#888888]">Ad Spend</p>
              </div>
              <div>
                <p
                  className="text-[28px] font-bold leading-none text-[#171717] dark:text-white mb-1"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  $81
                </p>
                <p className="text-[12px] text-[#666666] dark:text-[#888888]">Cost Per Conversion</p>
              </div>
            </div>
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
              className="text-[32px] sm:text-[40px] font-bold leading-[1.2] text-[#171717] dark:text-white mb-4"
              style={{ letterSpacing: '-0.035em' }}
            >
              Full-Service Digital Marketing
            </h2>
            <p className="text-[15px] text-[#666666] dark:text-[#888888] leading-[1.7]">
              Cohesive, measurable, built around your goals.
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
                I built Excel because I was tired of agencies that specialize in one channel, hide behind reports, and hand you off to a junior coordinator. I work directly with every client, run strategy, and stay accountable. When you work with Excel, you get someone who knows what they're doing.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold text-[#0068d6] uppercase tracking-[0.15em] mb-4">
                Why Excel
              </p>
              <h2
                className="text-[32px] sm:text-[40px] font-bold leading-[1.2] text-[#171717] dark:text-white mb-4"
                style={{ letterSpacing: '-0.035em' }}
              >
                Why Excel
              </h2>
              <p className="text-[15px] text-[#666666] dark:text-[#888888] leading-[1.7] mb-8">
                We deliver measurable revenue growth where every investment is tracked to outcomes.
              </p>
              <div className="space-y-0">
                {[
                  ['Flat-Fee, Aligned Pricing', 'Our incentives aligned with your results, not budget size. Only win when you grow.'],
                  ['Full-Stack Integration', 'Connect SEO, paid, web, analytics, automation into one system. No silos.'],
                  ['AI-Powered Optimization', 'ML handles bidding, content scoring, attribution at scale. Faster, smarter than manual.'],
                  ['Founder-Led, Client-Focused', 'Wali works on every client. No junior coordinator handoffs.'],
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
              Client Testimonials
            </p>
            <h2
              className="text-[40px] sm:text-[50px] font-bold text-[#171717] dark:text-white"
              style={{ letterSpacing: '-0.035em' }}
            >
              Trusted by Growing Businesses
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
              We don&apos;t use AI as a marketing gimmick. It&apos;s the backbone of how we optimize your entire system in real-time—faster and smarter than any manual process.
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
                Practical guides on growth strategy, paid media, SEO, and marketing automation. Built from real client work and actual results.
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
