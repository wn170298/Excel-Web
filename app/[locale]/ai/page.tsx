import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Bot,
  Brain,
  Sparkles,
  TrendingUp,
  Target,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Cpu,
  LineChart,
  Layers,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI-Powered Digital Marketing — Excel Consultancy',
  description:
    'We embed artificial intelligence into every layer of your digital marketing strategy — AI-driven SEO, smart PPC bidding, automated content, predictive analytics, and privacy-safe measurement.',
  keywords: [
    'AI digital marketing',
    'AI SEO',
    'smart PPC bidding',
    'marketing automation AI',
    'predictive analytics marketing',
    'AI attribution',
    'machine learning marketing',
  ],
};

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

const AI_CAPABILITIES = [
  {
    icon: Bot,
    title: 'AI-Driven SEO',
    tagline: 'Machine learning at the scale of Google itself.',
    description:
      'Modern SEO is no longer about keywords and backlinks alone. Google\'s ranking algorithms now incorporate hundreds of AI-driven signals — and beating them requires AI-driven strategy. Excel uses machine learning models to analyse search patterns at scale, surface semantic content gaps competitors miss, identify entity relationships that improve topical authority, and optimise for AI-powered search features including Google\'s AI Overviews and SGE. We also ensure your content is well-positioned for AI discovery tools like ChatGPT and Perplexity, which are reshaping how people find information online.',
    bullets: [
      'Semantic content gap analysis across thousands of queries',
      'Entity-based optimisation for topical authority',
      'AI Overview and Search Generative Experience optimisation',
      'LLM discoverability — ChatGPT, Perplexity, and Gemini visibility',
      'Automated rank tracking and content decay alerts',
    ],
  },
  {
    icon: Brain,
    title: 'Smart PPC Bidding',
    tagline: 'Real-time bid optimisation no human can match.',
    description:
      'Google\'s Smart Bidding has fundamentally changed PPC management. The opportunity is no longer in manual bid adjustments — it\'s in feeding the algorithm the highest-quality signals possible. Excel\'s AI bid strategy layer works with Google\'s machine learning to provide enriched conversion data, proper audience segmentation, and the campaign structure that helps smart bidding models reach their full potential faster. The result is a cost-per-acquisition curve that trends downward as the model learns, rather than plateauing at an inefficient baseline.',
    bullets: [
      'Conversion data enrichment for smarter algorithm training',
      'Target CPA and Target ROAS strategy by campaign type',
      'Portfolio bid strategies for multi-campaign budget efficiency',
      'Automated budget reallocation toward winning ad groups',
      'Auction insights monitoring and competitor signal integration',
    ],
  },
  {
    icon: Sparkles,
    title: 'Automated Content at Scale',
    tagline: 'AI-assisted content that maintains quality and brand voice.',
    description:
      'Content at scale is no longer optional for competitive SEO — but quality cannot be sacrificed for volume. Excel uses AI-assisted content workflows to dramatically reduce time-to-publish for SEO content programmes while maintaining editorial standards. Our process uses AI for research, outline generation, and first-draft production, with human editors responsible for fact-checking, brand voice alignment, and final quality review. The result is 3–5× the content output at the same or lower cost, without the quality drop that pure AI content generates.',
    bullets: [
      'AI-assisted research and outline generation',
      'Templated content frameworks for high-volume programmatic pages',
      'Human editorial review on every published piece',
      'Brand voice and tone consistency checks',
      'Automated internal linking and on-page SEO optimisation',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    tagline: 'Anticipate opportunities and risks before they materialise.',
    description:
      'Reactive marketing is expensive. By the time you notice a trend in your data, a competitor may already be capitalising on it. Excel\'s predictive analytics layer surfaces leading indicators — seasonal demand shifts, competitor activity patterns, audience behaviour changes — weeks before they show up in standard reports. We build custom models calibrated to your specific business and market, giving you the ability to pre-position campaigns, adjust budgets, and capture demand as it builds rather than chasing it after the fact.',
    bullets: [
      'Seasonal demand forecasting for budget pre-positioning',
      'Churn risk scoring for existing customer retention campaigns',
      'Lead quality prediction from first-touch behaviour signals',
      'Competitor activity monitoring and early-warning alerts',
      'Custom reporting dashboards with forward-looking KPIs',
    ],
  },
  {
    icon: Target,
    title: 'Intelligent Attribution',
    tagline: 'Cut through last-click bias to see what\'s truly driving revenue.',
    description:
      'Last-click attribution is a lie that has cost businesses billions in misallocated marketing spend. It credits the final touchpoint before conversion while ignoring every impression, search, and piece of content that built the intent to buy. Excel implements ML-powered data-driven attribution models that analyse the actual conversion paths of your customers — giving each touchpoint credit proportional to its measurable influence on the decision. The result is a truer picture of channel ROI, which leads to dramatically better budget allocation decisions.',
    bullets: [
      'GA4 data-driven attribution model implementation',
      'Cross-channel de-duplication of conversion credit',
      'Assisted conversion analysis for upper-funnel channels',
      'Custom attribution models for long B2B sales cycles',
      'Revenue attribution reporting from first touch to close',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-Safe Measurement',
    tagline: 'Full measurement accuracy without compromising compliance.',
    description:
      'Third-party cookies are disappearing, consent rates are declining, and regulatory frameworks like GDPR and the Australian Privacy Act have fundamentally changed what data you can collect and how. Excel builds measurement infrastructure that operates correctly in this constrained environment — using server-side tagging, consent mode v2, and AI-enhanced conversion modelling to recover the measurement signal lost to consent restrictions. You stay fully compliant while maintaining the data quality needed to run high-performing campaigns.',
    bullets: [
      'Server-side Google Tag Manager implementation',
      'Consent Mode v2 configuration and compliance audit',
      'AI-enhanced conversion modelling for unconsented traffic',
      'First-party data strategy and customer data platform setup',
      'GDPR and Australian Privacy Act compliance verification',
    ],
  },
];

const HOW_IT_WORKS = [
  {
    icon: Layers,
    title: 'Audit & Baseline',
    desc: 'We assess your current data infrastructure, campaign performance, and where AI can have the biggest immediate impact on your results.',
  },
  {
    icon: Cpu,
    title: 'Infrastructure Setup',
    desc: 'Clean measurement, server-side tracking, and the data pipelines that AI models need to function at their best are established first.',
  },
  {
    icon: Zap,
    title: 'AI Layer Activation',
    desc: 'AI bidding, content workflows, predictive models, and attribution are activated in stages — measured against baselines to confirm lift.',
  },
  {
    icon: LineChart,
    title: 'Continuous Optimisation',
    desc: 'Models improve as they accumulate more data. Monthly strategy reviews ensure the AI layer is tuned to your evolving business goals.',
  },
];

export default function AIPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-24 bg-[#0f172a] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse at center, #0068d6 0%, transparent 65%)' }}
        />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/15">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#60a5fa]" />
            <span className="text-[12px] font-semibold text-[#60a5fa] tracking-wide">AI-Powered Marketing</span>
          </div>
          <h1 className="text-[40px] sm:text-[52px] lg:text-[62px] font-bold leading-[1.1] text-white max-w-[820px] mb-6">
            Harnessing AI, Machine Learning &amp;{' '}
            <span className="text-[#60a5fa]">the Latest Technology</span>{' '}
            for Your Business.
          </h1>
          <p className="text-[18px] text-white/60 leading-[1.7] max-w-[620px] mb-10">
            We embed artificial intelligence into every layer of your digital marketing strategy — delivering smarter results, faster optimisation, and sustainable competitive advantage that compounds over time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/wali-noorzad12/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-7 bg-[#0068d6] hover:bg-[#0055b3] text-white font-semibold rounded-[8px] inline-flex items-center gap-2 transition-colors text-[15px]"
            >
              Book a Free AI Marketing Audit
              <ArrowRight size={16} />
            </a>
            <a
              href="#capabilities"
              className="h-12 px-7 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-[8px] inline-flex items-center gap-2 transition-colors text-[15px]"
            >
              See Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* ── INTRO STATEMENT ──────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[13px] font-semibold text-[#0068d6] uppercase tracking-wider mb-3">Why AI Marketing</p>
              <h2 className="text-[34px] sm:text-[40px] font-bold text-[#171717] dark:text-white leading-[1.15] mb-5">
                The agencies that do not adopt AI will be left behind. We will not let that happen to your business.
              </h2>
              <p className="text-[16px] text-[#555555] dark:text-[#888888] leading-[1.75] mb-6">
                AI is not a trend in digital marketing — it is the new infrastructure. Google&apos;s ad algorithms, search ranking systems, and audience targeting tools are all AI-native. Running campaigns without AI-aligned strategy means operating at a permanent disadvantage against competitors who have embraced it.
              </p>
              <p className="text-[16px] text-[#555555] dark:text-[#888888] leading-[1.75]">
                At Excel, every service we deliver is AI-augmented. Not because it is a selling point, but because it produces measurably better results — faster optimisation, more accurate attribution, and content that scales without sacrificing quality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '10×', label: 'Faster content production', desc: 'vs. manual workflows' },
                { value: '40%', label: 'Lower CPA on average', desc: 'with AI bid strategies' },
                { value: '3×', label: 'More conversion signal', desc: 'via server-side tracking' },
                { value: '100%', label: 'Privacy compliant', desc: 'GDPR & Australian Privacy Act' },
              ].map((item) => (
                <div key={item.label} className="bg-[#f5f7fa] dark:bg-[#111111] rounded-[14px] border border-[#ebebeb] dark:border-[#2a2a2a] p-6">
                  <p className="text-[38px] font-bold text-[#0068d6] leading-none mb-1.5">{item.value}</p>
                  <p className="text-[13px] font-semibold text-[#171717] dark:text-white mb-0.5">{item.label}</p>
                  <p className="text-[12px] text-[#999999] dark:text-[#555555]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AI CAPABILITIES ──────────────────────────────────────── */}
      <section id="capabilities" className="py-24 bg-[#f5f7fa] dark:bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[13px] font-semibold text-[#0068d6] uppercase tracking-wider mb-3">Core Capabilities</p>
            <h2 className="text-[34px] sm:text-[42px] font-bold text-[#171717] dark:text-white leading-[1.15] mb-4">
              Six AI-Powered Marketing Capabilities
            </h2>
            <p className="text-[17px] text-[#666666] dark:text-[#888888] max-w-[560px] mx-auto leading-[1.7]">
              Each capability is a layer of intelligence applied to your marketing — individually powerful, exponentially effective when combined.
            </p>
          </div>

          <div className="space-y-8">
            {AI_CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-white dark:bg-[#161616] rounded-[16px] border border-[#ebebeb] dark:border-[#2a2a2a] p-8 lg:p-10"
                >
                  <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 rounded-[12px] bg-[#f0f7ff] dark:bg-[#0068d6]/15 flex items-center justify-center">
                          <Icon size={24} className="text-[#0068d6]" />
                        </div>
                        <span className="text-[12px] font-bold text-[#0068d6] bg-[#f0f7ff] dark:bg-[#0068d6]/15 px-3 py-1 rounded-full">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-[24px] font-bold text-[#171717] dark:text-white mb-2">{cap.title}</h3>
                      <p className="text-[14px] font-semibold text-[#0068d6] mb-4">{cap.tagline}</p>
                      <p className="text-[15px] text-[#555555] dark:text-[#888888] leading-[1.75]">{cap.description}</p>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-[#171717] dark:text-white mb-4 uppercase tracking-wide">Key capabilities</h4>
                      <div className="space-y-3">
                        {cap.bullets.map((b) => (
                          <div key={b} className="flex gap-3">
                            <CheckCircle size={16} className="text-[#0068d6] shrink-0 mt-0.5" />
                            <span className="text-[14px] text-[#555555] dark:text-[#888888] leading-[1.6]">{b}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <Link
                          href={getLocalePath('/contact', locale)}
                          className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#0068d6] hover:underline"
                        >
                          Learn how this applies to your business
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold text-[#60a5fa] uppercase tracking-wider mb-3">Our Approach</p>
            <h2 className="text-[34px] sm:text-[42px] font-bold text-white leading-[1.15] mb-4">
              How We Implement AI Into Your Marketing
            </h2>
            <p className="text-[17px] text-white/60 max-w-[540px] mx-auto leading-[1.7]">
              AI without clean data and the right infrastructure produces noise, not results. We build the foundation first.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-[14px] border border-white/10 bg-white/5 p-7"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-[10px] bg-[#0068d6]/20 flex items-center justify-center">
                      <Icon size={20} className="text-[#60a5fa]" />
                    </div>
                    <span className="text-[12px] font-bold text-[#60a5fa]">STEP {String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[14px] text-white/55 leading-[1.7]">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AI + SERVICES LINK ───────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#f5f7fa] dark:bg-[#111111] rounded-[20px] border border-[#ebebeb] dark:border-[#2a2a2a] p-10 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[13px] font-semibold text-[#0068d6] uppercase tracking-wider mb-3">AI Across All Services</p>
                <h2 className="text-[30px] sm:text-[36px] font-bold text-[#171717] dark:text-white leading-[1.2] mb-4">
                  Every service we deliver is AI-augmented — not as an add-on, but by design.
                </h2>
                <p className="text-[15px] text-[#555555] dark:text-[#888888] leading-[1.75]">
                  Our SEO, PPC, social advertising, web development, automation, and analytics services all incorporate AI tooling at the execution layer. This is what lets a lean team achieve results that would normally require a large in-house marketing department.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href={getLocalePath('/services', locale)}
                  className="inline-flex items-center justify-between p-5 bg-white dark:bg-[#161616] rounded-[12px] border border-[#ebebeb] dark:border-[#2a2a2a] hover:border-[#0068d6]/40 transition-colors group"
                >
                  <span className="text-[15px] font-semibold text-[#171717] dark:text-white">Explore All Services</span>
                  <ArrowRight size={16} className="text-[#0068d6] group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href={getLocalePath('/contact', locale)}
                  className="inline-flex items-center justify-between p-5 bg-[#0068d6] rounded-[12px] hover:bg-[#0055b3] transition-colors group"
                >
                  <span className="text-[15px] font-semibold text-white">Book a Free AI Marketing Audit</span>
                  <ArrowRight size={16} className="text-white group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
