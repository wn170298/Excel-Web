import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  ArrowRight, Search, TrendingUp, Globe, Zap,
  BarChart3, Shield, CheckCircle2, ArrowUpRight,
} from 'lucide-react';
import { AnimatedMetrics } from '@/components/ui/animated-metrics';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1';
import { testimonials } from '@/lib/testimonials-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Excel — Digital Marketing Consultancy | Perth & Europe',
  description: 'Excel builds marketing infrastructure for high-performing SMEs — tracking, paid media, and automation connected from day one. Based in Perth, serving globally.',
};

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

const services = [
  {
    icon: Search,
    title: 'SEO & Content',
    description: 'Technical audits, on-page structure, and content strategy that builds durable organic growth — not short-term ranking tricks.',
  },
  {
    icon: TrendingUp,
    title: 'Paid Advertising',
    description: 'Google, Meta, and LinkedIn campaigns managed to a single source of truth — your real cost per acquisition, not platform-reported ROAS.',
  },
  {
    icon: Globe,
    title: 'Web Design & Dev',
    description: 'High-converting sites and landing pages built for speed, lead capture, and search visibility. Every page tested against a clear conversion goal.',
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'CRM setup, lead scoring, email sequences, and workflow automation that scales without adding headcount.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Attribution',
    description: "GA4, Looker Studio dashboards, and multi-touch attribution that shows what's actually driving closed revenue — not just click traffic.",
  },
  {
    icon: Shield,
    title: 'Privacy & Compliance',
    description: 'Consent Mode v2, server-side GTM, and GDPR-aligned tracking built in from the start. Not bolted on after a legal notice.',
  },
];

const stats = [
  { value: '3+',    label: 'Years operating'              },
  { value: '4',     label: 'Countries served'             },
  { value: '91%',   label: 'Post-migration conv. coverage'},
  { value: '€12K+', label: 'Client MRR managed'          },
  { value: '28',    label: 'Articles published'           },
];

const results = [
  { metric: '↓42%',  detail: 'Cost Per Lead',   context: 'A$340 → A$198 in six weeks',  color: 'text-emerald-400' },
  { metric: '+67%',  detail: 'Organic Traffic', context: '90-day lift post-audit',        color: 'text-emerald-400' },
  { metric: '8→21%', detail: 'MQL-to-SQL Rate', context: 'after lead scoring rebuild',   color: 'text-emerald-400' },
];

const processSteps = [
  {
    number: '01',
    title: 'Audit',
    description: "We map your full marketing stack — what tools you have, how they're connected, and where data drops off. Most audits surface two or three structural issues that have been costing money for months.",
  },
  {
    number: '02',
    title: 'Build',
    description: "We connect what needs connecting, fix what's broken, and build the missing pieces — from tracking to automation to landing pages — to your exact specifications.",
  },
  {
    number: '03',
    title: 'Grow',
    description: "With the foundation right, we run ongoing optimisation — SEO, paid ads, email — grounded in data that's finally telling a coherent story.",
  },
];

const plans = [
  {
    name: 'Launch',
    price: '€2,000',
    billing: 'one-time',
    description: 'Your complete digital foundation, delivered once.',
    features: ['High-converting website', 'GA4 + conversion tracking', 'SEO technical setup', 'Social media setup'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    price: '€1,200',
    billing: '/month',
    description: 'Consistent, measurable performance month after month.',
    features: ['Everything in Launch', 'Monthly SEO execution', 'Email sequences (3)', 'Monthly performance report'],
    cta: 'Start Growing',
    featured: true,
  },
  {
    name: 'Scale',
    price: '€2,000',
    billing: '/month',
    description: 'Aggressive growth with controlled acquisition costs.',
    features: ['Everything in Growth', 'Paid ads (Google or Meta)', 'A/B testing', 'Weekly Looker Studio dashboard'],
    cta: 'Scale Up',
    featured: false,
  },
  {
    name: 'Market Leader',
    price: '€3,000',
    billing: '/month',
    description: 'Full-service growth engine for category dominance.',
    features: ['Everything in Scale', 'Multi-channel ads', 'Full CRM lifecycle', 'Growth roadmap ownership'],
    cta: 'Dominate',
    featured: false,
  },
];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('home');

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ────────────────────────────────────────────────────────────────── */}
      <section
        className="relative"
        style={{ minHeight: 'calc(100vh - 64px)', background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* White-dot grid texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.032) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Ambient glow — centred on the right panel area */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none hidden lg:block"
          style={{
            top: '50%', right: '8%', transform: 'translateY(-50%)',
            width: '580px', height: '580px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, rgba(37,99,235,0.04) 45%, transparent 70%)',
            filter: 'blur(64px)',
          }}
        />
        {/* Subtle top-left warmth */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            top: '-80px', left: '10%',
            width: '500px', height: '400px',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.015) 0%, transparent 65%)',
          }}
        />

        <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: 'calc(100vh - 64px)' }}>
          {/* Left: text */}
          <div className="flex flex-col justify-center px-6 py-24 lg:pr-16">
            <div
              className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-full text-[12px] font-semibold w-fit"
              style={{ background: 'rgba(52,211,153,0.10)', color: 'rgba(52,211,153,0.90)', border: '1px solid rgba(52,211,153,0.18)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t('heroBadge')}
            </div>

            <h1 className="text-[54px] sm:text-[66px] font-semibold tracking-[-0.18rem] text-white leading-[1.03] mb-6">
              {t('heroLine1')}<br />
              {t('heroLine2')}<br />
              {t('heroLine3')}
            </h1>

            <p className="text-[17px] leading-[1.75] mb-8 max-w-[460px]" style={{ color: 'rgba(255,255,255,0.50)' }}>
              {t('heroSubtitle')}
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href={getLocalePath('/book', locale)}
                className="h-11 px-6 text-[15px] font-medium text-[#0a0a0a] bg-white rounded-[6px] inline-flex items-center gap-2 hover:bg-[#e8e8e8] transition-colors"
              >
                {t('heroPrimary')} <ArrowRight size={15} />
              </Link>
              <Link
                href={getLocalePath('/results', locale)}
                className="h-11 px-5 text-[15px] font-medium rounded-[6px] inline-flex items-center gap-1.5 transition-colors hover:bg-white/5"
                style={{ color: 'rgba(255,255,255,0.60)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                See Client Results <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-10 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-[12px] font-medium" style={{ color: 'rgba(255,255,255,0.30)' }}>Trusted by SMEs in</div>
              <div className="flex items-center gap-2 flex-wrap">
                {['🇦🇺 AU', '🇮🇹 IT', '🇩🇪 DE', '🇬🇧 UK'].map((flag) => (
                  <span key={flag} className="text-[12px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)' }}>
                    {flag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: metrics panel */}
          <div className="hidden lg:flex items-center justify-center relative z-10">
            <AnimatedMetrics />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────────────── */}
      <section className="py-12" style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[32px] font-semibold tracking-[-0.10rem] leading-none mb-1.5" style={{ color: 'rgba(255,255,255,0.92)' }}>
                  {stat.value}
                </div>
                <div className="text-[12px] font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION ───────────────────────────────────────────────────── */}
      <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.10em] text-[#808080] mb-4">The Problem</div>
            <h2 className="text-[36px] font-semibold tracking-[-0.12rem] text-[#0a0a0a] mb-6 leading-[1.15]">
              Most SMEs have the right tools. They're just not connected.
            </h2>
            <p className="text-[16px] text-[#555555] leading-[1.75]">
              HubSpot isn't talking to Google Ads. GA4 numbers don't match the CRM. Email sequences fire on the wrong signals. Your data lives in five places and none of it tells a coherent story — so decisions default to gut feel, budgets get wasted, and growth stalls.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.10em] text-[#2563eb] mb-4">The Excel Approach</div>
            <h2 className="text-[36px] font-semibold tracking-[-0.12rem] text-[#0a0a0a] mb-6 leading-[1.15]">
              We build the infrastructure that connects them.
            </h2>
            <p className="text-[16px] text-[#555555] leading-[1.75]">
              Every engagement starts with a full stack audit — we map what you have, find where data drops off, and build the connections that turn disconnected tools into a working growth system. A marketing setup your team can own, interrogate, and scale.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────────────── */}
      <section className="border-t border-[#e8e8e8] bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.10em] text-[#808080] mb-3">Services</div>
              <h2 className="text-[36px] font-semibold tracking-[-0.12rem] text-[#0a0a0a] leading-[1.12]">
                {t('servicesHeadline')}
              </h2>
            </div>
            <Link
              href={getLocalePath('/services', locale)}
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#2563eb] hover:opacity-70 transition-opacity shrink-0"
            >
              View all plans <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="p-6 rounded-[8px] bg-white card-hover"
                  style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 2px rgba(0,0,0,0.03)' }}
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-[7px] bg-[#0a0a0a] mb-4">
                    <Icon size={16} className="text-white" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#0a0a0a] tracking-[-0.02em] mb-2">{service.title}</h3>
                  <p className="text-[13.5px] text-[#666666] leading-[1.60]">{service.description}</p>
                </div>
              );
            })}
            {/* CTA card */}
            <div className="p-6 rounded-[8px] bg-[#0a0a0a] flex flex-col justify-between min-h-[180px]">
              <div>
                <div className="w-9 h-9 rounded-[7px] flex items-center justify-center mb-4" style={{ background: 'rgba(255,255,255,0.10)' }}>
                  <ArrowRight size={16} className="text-white" />
                </div>
                <h3 className="text-[15px] font-semibold text-white tracking-[-0.02em] mb-2">Custom stack?</h3>
                <p className="text-[13.5px] leading-[1.60]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Every business is different. Let's design the right system for yours.
                </p>
              </div>
              <Link
                href={getLocalePath('/book', locale)}
                className="mt-5 text-[13px] font-medium text-white inline-flex items-center gap-1.5 hover:opacity-60 transition-opacity"
              >
                Book a call <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS SNAPSHOT ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.10em] mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Client Results
              </div>
              <h2 className="text-[36px] font-semibold tracking-[-0.12rem] text-white leading-[1.12]">
                The numbers from real engagements.
              </h2>
            </div>
            <Link
              href={getLocalePath('/results', locale)}
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-emerald-400 hover:opacity-70 transition-opacity shrink-0"
            >
              See all case studies <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {results.map((r) => (
              <div
                key={r.detail}
                className="p-8 rounded-[10px]"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className={`text-[52px] font-semibold tracking-[-0.12rem] leading-none mb-3 ${r.color}`}>
                  {r.metric}
                </div>
                <div className="text-[17px] font-semibold text-white mb-1.5">{r.detail}</div>
                <div className="text-[13px]" style={{ color: 'rgba(255,255,255,0.40)' }}>{r.context}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[12px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
            All metrics from real client engagements. No composite averages. No estimated projections.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────────────── */}
      <section className="border-y border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="mb-14">
            <div className="text-[11px] font-semibold uppercase tracking-[0.10em] text-[#808080] mb-3">Process</div>
            <h2 className="text-[36px] font-semibold tracking-[-0.12rem] text-[#0a0a0a] leading-[1.12]">
              How every engagement works.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {processSteps.map((step) => (
              <div key={step.number}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#0a0a0a] flex items-center justify-center shrink-0">
                    <span className="text-[12px] font-bold text-white">{step.number}</span>
                  </div>
                  <div className="h-px flex-1 bg-[#e8e8e8] md:hidden" />
                </div>
                <h3 className="text-[20px] font-semibold text-[#0a0a0a] tracking-[-0.03em] mb-3">{step.title}</h3>
                <p className="text-[15px] text-[#555555] leading-[1.70]">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-[#e8e8e8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[15px] text-[#555555] max-w-[480px] leading-[1.65]">
              Every engagement starts with a free 30-minute audit call. We map your current setup and identify the highest-leverage change — no obligation to proceed.
            </p>
            <Link
              href={getLocalePath('/book', locale)}
              className="shrink-0 h-11 px-6 text-[14px] font-medium text-white bg-[#0a0a0a] rounded-[6px] inline-flex items-center gap-2 hover:opacity-85 transition-opacity"
            >
              Book the Audit Call <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-[#e8e8e8] py-24 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-[12px] font-semibold text-[#0a0a0a] bg-white border border-[#e8e8e8]">
              Client Testimonials
            </div>
            <h2 className="text-[34px] font-semibold tracking-[-0.10rem] text-[#0a0a0a] mb-3 leading-[1.15]">
              {t('testimonialsHeadline')}
            </h2>
            <p className="text-[16px] text-[#666666]">Real results. In their own words.</p>
          </div>

          <div className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={16} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={20} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={18} />
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW ──────────────────────────────────────────────────────── */}
      <section className="border-b border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <div className="text-[11px] font-semibold uppercase tracking-[0.10em] text-[#808080] mb-3">Pricing</div>
            <h2 className="text-[36px] font-semibold tracking-[-0.12rem] text-[#0a0a0a] mb-4 leading-[1.12]">
              {t('pricingHeadline')}
            </h2>
            <p className="text-[16px] text-[#666666] max-w-[460px] mx-auto leading-[1.65]">
              {t('pricingSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[8px] p-6 flex flex-col ${plan.featured ? 'bg-[#0a0a0a]' : 'bg-white'}`}
                style={{ boxShadow: plan.featured ? 'none' : '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 2px rgba(0,0,0,0.03)' }}
              >
                {plan.featured && (
                  <div className="inline-flex items-center gap-1 mb-4 px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#0a0a0a] bg-white w-fit">
                    ✦ Most Popular
                  </div>
                )}
                <div className={`text-[11px] font-semibold uppercase tracking-wider mb-2 ${plan.featured ? 'text-[rgba(255,255,255,0.4)]' : 'text-[#808080]'}`}>
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-[30px] font-semibold tracking-[-0.10rem] ${plan.featured ? 'text-white' : 'text-[#0a0a0a]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-[13px] ${plan.featured ? 'text-[rgba(255,255,255,0.45)]' : 'text-[#808080]'}`}>
                    {plan.billing}
                  </span>
                </div>
                <p className={`text-[13px] mt-2 mb-5 leading-[1.55] ${plan.featured ? 'text-[rgba(255,255,255,0.55)]' : 'text-[#666666]'}`}>
                  {plan.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className={`shrink-0 mt-0.5 ${plan.featured ? 'text-emerald-400' : 'text-[#0a0a0a]'}`} />
                      <span className={`text-[13px] ${plan.featured ? 'text-[rgba(255,255,255,0.70)]' : 'text-[#4d4d4d]'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={getLocalePath('/book', locale)}
                  className={`h-9 rounded-[6px] text-[13px] font-medium inline-flex items-center justify-center transition-opacity hover:opacity-80 ${
                    plan.featured ? 'bg-white text-[#0a0a0a]' : 'bg-[#0a0a0a] text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={getLocalePath('/services', locale)}
              className="text-[14px] font-medium text-[#555555] hover:text-[#0a0a0a] inline-flex items-center gap-1.5 transition-colors"
            >
              Compare all plan features <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6 py-28 text-center">
          <div className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-full text-[12px] font-semibold" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Free 30-minute strategy call
          </div>
          <h2 className="text-[46px] sm:text-[56px] font-semibold tracking-[-0.15rem] text-white mb-5 max-w-[620px] mx-auto leading-[1.05]">
            {t('ctaHeadline')}
          </h2>
          <p className="text-[17px] mb-10 max-w-[460px] mx-auto leading-[1.65]" style={{ color: 'rgba(255,255,255,0.50)' }}>
            {t('ctaSubtitle')}
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href={getLocalePath('/book', locale)}
              className="h-12 px-8 text-[15px] font-medium text-[#0a0a0a] bg-white rounded-[6px] inline-flex items-center gap-2 hover:opacity-85 transition-opacity"
            >
              {t('ctaPrimary')} <ArrowRight size={15} />
            </Link>
            <Link
              href={getLocalePath('/services', locale)}
              className="h-12 px-6 text-[15px] font-medium inline-flex items-center gap-1.5 hover:opacity-60 transition-opacity"
              style={{ color: 'rgba(255,255,255,0.50)' }}
            >
              {t('ctaSecondary')} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
