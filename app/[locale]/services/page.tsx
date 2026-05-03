import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  MousePointerClick,
  Share2,
  Globe,
  Zap,
  BarChart3,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Clock,
} from 'lucide-react';
import JsonLd from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Digital Marketing Services — Excel Consultancy',
  description:
    'Full-service digital marketing solutions: SEO, PPC, social media advertising, web design, marketing automation, and analytics. Data-driven strategies built around your business goals.',
  keywords: [
    'digital marketing services',
    'international SEO agency',
    'global PPC management',
    'social media advertising',
    'web design development',
    'marketing automation',
    'analytics attribution',
  ],
};

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

const SERVICES = [
  {
    id: 'seo',
    icon: Search,
    label: 'SEO',
    title: 'Search Engine Optimisation',
    tagline: 'Sustainable organic growth that compounds month over month.',
    description:
      'Organic search is the highest-ROI channel available to most businesses — but only when done correctly. Excel builds SEO strategies grounded in technical excellence, semantic authority, and content that earns rankings rather than renting them. We compound your visibility over time so that your growth curve keeps bending upward even when ad budgets stay flat.',
    highlights: [
      { label: 'Technical SEO Audits', desc: 'Crawlability, Core Web Vitals, structured data, and indexation health checks.' },
      { label: 'Keyword & Intent Strategy', desc: 'Map the full search journey — from awareness queries to high-intent buying signals.' },
      { label: 'Content Optimisation', desc: 'Existing pages restructured and enhanced to outrank competitors for target terms.' },
      { label: 'Link Building', desc: 'White-hat authority acquisition from relevant, high-DA publications.' },
      { label: 'Local SEO', desc: 'Google Business Profile optimisation, citation building, and map pack dominance.' },
      { label: 'Enterprise SEO', desc: 'Scalable frameworks for large sites — faceted navigation, international hreflang, and programmatic optimisation.' },
    ],
    process: [
      { step: '01', title: 'Audit & Baseline', desc: 'Full technical and content audit to benchmark where you stand and identify quick wins.' },
      { step: '02', title: 'Strategy & Roadmap', desc: 'Prioritised 90-day roadmap aligned to your business goals and competitive gaps.' },
      { step: '03', title: 'Execution', desc: 'Technical fixes, content production, and link acquisition running in parallel.' },
      { step: '04', title: 'Measure & Compound', desc: 'Monthly reporting, ranking tracking, and iterative improvements to sustain growth.' },
    ],
    stat: { value: '+89%', label: 'Average organic traffic growth in 6 months' },
  },
  {
    id: 'ppc',
    icon: MousePointerClick,
    label: 'PPC',
    title: 'Pay-Per-Click Advertising',
    tagline: 'Every euro treated as a procurement investment — not an expense.',
    description:
      'PPC done wrong is a money furnace. PPC done right is a customer-buying machine. Excel manages paid search across Google, Microsoft Bing, and ChatGPT Ads with a single focus: generating qualified leads and sales at a cost-per-acquisition that makes your business more profitable. We use Google Premier Partner-level strategy, AI-assisted bid management, and relentless negative keyword discipline to eliminate wasted spend from day one.',
    highlights: [
      { label: 'Google Search & Shopping', desc: 'High-intent keyword targeting with advanced match types and smart bidding strategies.' },
      { label: 'Microsoft Bing Ads', desc: 'Lower CPCs, higher average order values — a frequently overlooked channel.' },
      { label: 'ChatGPT Ads (Emerging)', desc: 'Early access to AI-native ad placements as the landscape evolves.' },
      { label: 'Remarketing', desc: 'Re-engage warm audiences across display, YouTube, and search with precision segmentation.' },
      { label: 'Google Shopping', desc: 'Feed optimisation and PMAX campaigns for e-commerce revenue growth.' },
      { label: 'Conversion Rate Optimisation', desc: 'Landing page testing and copy experimentation to improve post-click performance.' },
    ],
    process: [
      { step: '01', title: 'Account Audit', desc: 'Forensic analysis of existing campaigns — wasted spend identified within the first week.' },
      { step: '02', title: 'Campaign Architecture', desc: 'Intent-based campaign structures with airtight negative keyword lists.' },
      { step: '03', title: 'Launch & Learn', desc: 'Controlled launch with aggressive data collection to validate assumptions fast.' },
      { step: '04', title: 'Scale & Optimise', desc: 'Budget shifted toward proven performers; losers cut ruthlessly. Weekly reporting.' },
    ],
    stat: { value: '52%', label: 'Average cost-per-lead reduction vs. prior agency' },
  },
  {
    id: 'social',
    icon: Share2,
    label: 'Social Ads',
    title: 'Social Media Advertising',
    tagline: 'Precision targeting to build brand and generate high-quality leads.',
    description:
      'Social media advertising bridges the gap between brand awareness and bottom-funnel demand capture. Excel runs paid social across Meta (Facebook & Instagram), LinkedIn, and TikTok — selecting the right mix based on where your audience actually spends time and what creative formats drive the best cost-per-outcome for your specific offer. Creative strategy, audience segmentation, and conversion tracking are all built in-house.',
    highlights: [
      { label: 'Facebook & Instagram Ads', desc: 'Full-funnel campaigns — from broad awareness to retargeting warm website visitors.' },
      { label: 'LinkedIn Ads', desc: 'B2B lead generation targeting by job title, company size, industry, and seniority.' },
      { label: 'TikTok Ads', desc: 'Native-feel video creative that performs at scale for younger, high-engagement audiences.' },
      { label: 'Creative Strategy', desc: 'Ad concepts, copy frameworks, and creative direction aligned to platform best practices.' },
      { label: 'Audience Targeting', desc: 'First-party data, lookalike modelling, and interest stacking for maximum relevance.' },
      { label: 'Retargeting Architecture', desc: 'Multi-touch retargeting sequences that move prospects from consideration to conversion.' },
    ],
    process: [
      { step: '01', title: 'Audience Research', desc: 'Identify your ideal customer segments and where they are most active and receptive.' },
      { step: '02', title: 'Creative Development', desc: 'Ad concepts and copy developed for each funnel stage and platform format.' },
      { step: '03', title: 'Testing Framework', desc: 'A/B tests on audiences, creatives, and offers to find your cost-efficient winners.' },
      { step: '04', title: 'Scale Winners', desc: 'Proven creative-audience combinations scaled with strict frequency and fatigue monitoring.' },
    ],
    stat: { value: '3.8×', label: 'Average verified ROAS for e-commerce clients' },
  },
  {
    id: 'web',
    icon: Globe,
    label: 'Web Dev',
    title: 'Web Design & Development',
    tagline: 'High-converting websites and landing pages built for performance.',
    description:
      'Your website is your highest-leverage conversion asset. Excel designs and builds websites and landing pages on fast, scalable infrastructure — prioritising conversion rate, page speed, and mobile experience above all else. Whether you need a campaign-specific landing page or a full site rebuild, every design decision is tested against one question: does this help more visitors become customers?',
    highlights: [
      { label: 'Landing Page Design', desc: 'Campaign-specific pages built to convert traffic from paid ads, SEO, and email.' },
      { label: 'Full Website Builds', desc: 'Scalable Next.js sites with CMS integration, fast load times, and clean architecture.' },
      { label: 'Conversion Optimisation', desc: 'CRO audits, heatmap analysis, and structured A/B testing programmes.' },
      { label: 'Performance Engineering', desc: 'Core Web Vitals optimisation — sub-2s load times, high Lighthouse scores.' },
      { label: 'Mobile-First Design', desc: 'Every design is built mobile-first, tested across devices before launch.' },
      { label: 'Analytics Integration', desc: 'GA4, Tag Manager, and conversion tracking configured correctly from day one.' },
    ],
    process: [
      { step: '01', title: 'Discovery & Wireframe', desc: 'Map the user journey, define conversion goals, and produce annotated wireframes.' },
      { step: '02', title: 'Design & Copy', desc: 'High-fidelity designs with conversion-focused copy — reviewed and approved before build.' },
      { step: '03', title: 'Build & QA', desc: 'Development on proven stack; cross-browser, cross-device QA before launch.' },
      { step: '04', title: 'Launch & Optimise', desc: 'Tracked launch with post-go-live CRO analysis and iterative improvements.' },
    ],
    stat: { value: '61%', label: 'Wasted ad spend eliminated on first audit' },
  },
  {
    id: 'automation',
    icon: Zap,
    label: 'Automation',
    title: 'Marketing Automation',
    tagline: 'Nurture leads at scale without adding headcount.',
    description:
      'Most businesses lose warm leads to silence — the enquiry comes in, life gets busy, and the prospect goes cold. Marketing automation builds the infrastructure that ensures every lead is followed up correctly, every time, regardless of your team\'s capacity. Excel designs and implements email sequences, CRM workflows, and lead scoring systems that keep your pipeline full and your conversion rates consistent.',
    highlights: [
      { label: 'Email Sequences', desc: 'Behaviour-triggered nurture sequences that guide prospects from interest to purchase.' },
      { label: 'CRM Integration', desc: 'HubSpot, ActiveCampaign, and Salesforce configuration aligned to your sales process.' },
      { label: 'Lead Scoring', desc: 'Predictive models that surface your hottest prospects so sales knows who to call first.' },
      { label: 'Behavioural Triggers', desc: 'Actions and workflows triggered by real-time signals: page visits, email opens, form fills.' },
      { label: 'Drip Campaigns', desc: 'Multi-step educational sequences that build trust and reduce time-to-conversion.' },
      { label: 'Sales Enablement', desc: 'Automated handoff from marketing to sales with full context and lead history.' },
    ],
    process: [
      { step: '01', title: 'Funnel Mapping', desc: 'Map every stage of your buyer journey and identify where leads are currently lost.' },
      { step: '02', title: 'Tech Stack Setup', desc: 'CRM and email platform configured or audited and optimised for your workflow.' },
      { step: '03', title: 'Sequence Build', desc: 'Segmented email sequences and automation rules built and tested in staging.' },
      { step: '04', title: 'Monitor & Improve', desc: 'Open rates, click rates, and conversion rates tracked weekly with continuous improvement.' },
    ],
    stat: { value: '4×', label: 'Typical increase in lead follow-up speed' },
  },
  {
    id: 'analytics',
    icon: BarChart3,
    label: 'Analytics',
    title: 'Analytics & Attribution',
    tagline: 'Know exactly where your revenue comes from — down to the channel and keyword.',
    description:
      'Bad data leads to bad decisions. Most businesses are running campaigns blind — last-click attribution in Google Ads while GA4 is misconfigured and half their conversions go untracked. Excel builds full-funnel tracking and attribution infrastructure that gives you accurate, consent-compliant data across every channel. With clean measurement, you can confidently scale what works and cut what doesn\'t.',
    highlights: [
      { label: 'GA4 Setup & Audit', desc: 'Correct event taxonomy, enhanced e-commerce tracking, and cross-domain configuration.' },
      { label: 'Conversion Tracking', desc: 'Every goal tracked accurately — calls, forms, purchases, and micro-conversions.' },
      { label: 'Multi-Touch Attribution', desc: 'Data-driven attribution models that reveal the true influence of each channel.' },
      { label: 'Custom Dashboards', desc: 'Looker Studio dashboards showing the metrics that matter — revenue, CPA, ROAS.' },
      { label: 'GDPR & Privacy Compliance', desc: 'Consent mode v2, server-side tagging, and cookieless measurement strategies.' },
      { label: 'Monthly Reporting', desc: 'Clear, concise reports focused on business outcomes — not vanity metrics.' },
    ],
    process: [
      { step: '01', title: 'Tracking Audit', desc: 'Full review of current analytics setup — find what\'s missing, duplicated, or wrong.' },
      { step: '02', title: 'Implementation', desc: 'Clean GA4 configuration, Tag Manager setup, and conversion tracking via server-side.' },
      { step: '03', title: 'Attribution Modelling', desc: 'Data-driven attribution applied across channels with cross-channel de-duplication.' },
      { step: '04', title: 'Dashboard & Cadence', desc: 'Live reporting dashboard and monthly strategic review with actionable recommendations.' },
    ],
    stat: { value: '100%', label: 'Conversion tracking accuracy achieved post-setup' },
  },
];

const PROOF_POINTS = [
  { icon: Award, label: 'Google Premier Partner', desc: 'Certified at the highest tier of the Google Partner programme.' },
  { icon: Users, label: 'Global Clientele', desc: 'Clients across Europe, the UK, the Middle East, and beyond.' },
  { icon: TrendingUp, label: '91% Campaign Success Rate', desc: 'Across all active client campaigns over the past 12 months.' },
  { icon: Clock, label: 'Flat-Fee Pricing', desc: 'No percentage of ad spend. Our incentives align with your results.' },
];

const FAQS = [
  { q: 'How long does it take to see results from SEO?', a: 'Initial improvements in rankings and organic traffic typically appear within 60–90 days. Significant, compounding growth happens at the 6-month mark as domain authority builds. We set transparent expectations from day one and share a 90-day roadmap so you always know what is coming.' },
  { q: 'Do you manage Google Ads for businesses of all sizes?', a: 'Yes. We work with businesses spending from $1,500/month in ad budget up to $50,000+/month. Our flat-fee model means our advice is the same regardless of your budget — we have no incentive to inflate spend.' },
  { q: 'What social media platforms do you advertise on?', a: 'We run paid campaigns on Meta (Facebook & Instagram), LinkedIn, and TikTok. Platform selection depends on where your audience spends time and which formats drive the best cost-per-outcome for your offer.' },
  { q: 'Do you build websites on a specific platform?', a: 'We build on Next.js for performance-critical projects and WordPress/Webflow for content-heavy sites. Every project includes Core Web Vitals optimisation, mobile-first design, and integrated analytics from day one.' },
  { q: 'What does "flat-fee pricing" mean in practice?', a: 'You pay a fixed monthly management fee regardless of how much you spend in ads. Traditional agencies charge 10–20% of ad spend, which creates an incentive to inflate your budget. Our flat fee means our only incentive is to improve your results.' },
  { q: 'Are you GDPR compliant?', a: 'Yes. We implement Consent Mode v2, server-side tagging, and privacy-first measurement infrastructure that fully complies with GDPR and other applicable privacy regulations in the markets we serve.' },
];

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div>
      <JsonLd data={faqSchema} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-24 bg-white dark:bg-[#0a0a0a] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-30 dark:opacity-15"
          style={{ background: 'radial-gradient(ellipse at center, #0068d625 0%, transparent 70%)' }}
        />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#f0f7ff] dark:bg-[#0068d6]/15 border border-[#cce0ff] dark:border-[#0068d6]/30">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0068d6]" />
            <span className="text-[12px] font-semibold text-[#0068d6] tracking-wide">Full-Service Digital Marketing</span>
          </div>
          <h1 className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.1] text-[#171717] dark:text-white max-w-[800px] mb-6">
            We Drive Growth Through a{' '}
            <span className="text-[#0068d6]">Multi-Channel Digital Marketing Strategy.</span>
          </h1>
          <p className="text-[18px] text-[#555555] dark:text-[#888888] leading-[1.7] max-w-[600px] mb-10">
            Every service we offer is designed to work together — SEO, PPC, social media, web development, automation, and analytics — as a single, cohesive growth engine built around your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/wali-noorzad12/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-7 bg-[#0068d6] hover:bg-[#0055b3] text-white font-semibold rounded-[8px] inline-flex items-center gap-2 transition-colors text-[15px]"
            >
              Get a Free Strategy Session
              <ArrowRight size={16} />
            </a>
            <a
              href="#seo"
              className="h-12 px-7 border border-[#ebebeb] dark:border-[#2a2a2a] hover:bg-[#f5f5f5] dark:hover:bg-white/5 text-[#171717] dark:text-white font-semibold rounded-[8px] inline-flex items-center gap-2 transition-colors text-[15px]"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────── */}
      <section className="bg-[#0068d6] py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '3+', label: 'Years of Excellence' },
              { value: '4', label: 'Countries Served' },
              { value: '91%', label: 'Campaign Success Rate' },
              { value: '6', label: 'Core Service Areas' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[32px] sm:text-[40px] font-bold leading-none mb-1">{stat.value}</p>
                <p className="text-[13px] font-medium text-white/70 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ─────────────────────────────────────── */}
      {SERVICES.map((service, idx) => {
        const Icon = service.icon;
        const isEven = idx % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 ${isEven ? 'bg-[#f5f7fa] dark:bg-[#111111]' : 'bg-white dark:bg-[#0a0a0a]'}`}
          >
            <div className="max-w-[1200px] mx-auto px-6">

              {/* Service header */}
              <div className="mb-14">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-[12px] bg-[#f0f7ff] dark:bg-[#0068d6]/15 flex items-center justify-center">
                    <Icon size={24} className="text-[#0068d6]" />
                  </div>
                  <span className="px-3 py-1 bg-[#f5f5f5] dark:bg-white/5 rounded-[6px] text-[11px] font-semibold text-[#666666] dark:text-[#888888] uppercase tracking-wider">
                    {service.label}
                  </span>
                </div>
                <h2 className="text-[34px] sm:text-[42px] font-bold text-[#171717] dark:text-white leading-[1.15] mb-3 max-w-[720px]">
                  {service.title}
                </h2>
                <p className="text-[16px] font-semibold text-[#0068d6] mb-5">{service.tagline}</p>
                <p className="text-[17px] text-[#555555] dark:text-[#888888] leading-[1.75] max-w-[760px]">
                  {service.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-14">
                {/* Highlights */}
                <div>
                  <h3 className="text-[18px] font-bold text-[#171717] dark:text-white mb-6">
                    What&apos;s included
                  </h3>
                  <div className="space-y-4">
                    {service.highlights.map((h) => (
                      <div key={h.label} className="flex gap-3">
                        <CheckCircle size={18} className="text-[#0068d6] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[14px] font-semibold text-[#171717] dark:text-white">{h.label}</p>
                          <p className="text-[13.5px] text-[#666666] dark:text-[#888888] leading-[1.65]">{h.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process + Stat */}
                <div>
                  <h3 className="text-[18px] font-bold text-[#171717] dark:text-white mb-6">
                    Our process
                  </h3>
                  <div className="space-y-5 mb-8">
                    {service.process.map((p) => (
                      <div key={p.step} className="flex gap-4">
                        <span className="text-[13px] font-bold text-[#0068d6] w-7 shrink-0 mt-0.5">{p.step}</span>
                        <div>
                          <p className="text-[14px] font-semibold text-[#171717] dark:text-white mb-0.5">{p.title}</p>
                          <p className="text-[13.5px] text-[#666666] dark:text-[#888888] leading-[1.65]">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Result stat */}
                  <div className="rounded-[14px] bg-[#0068d6]/8 dark:bg-[#0068d6]/15 border border-[#0068d6]/20 p-6">
                    <p className="text-[34px] sm:text-[42px] font-bold text-[#0068d6] leading-none mb-1">{service.stat.value}</p>
                    <p className="text-[14px] text-[#555555] dark:text-[#888888]">{service.stat.label}</p>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  href={getLocalePath('/contact', locale)}
                  className="inline-flex items-center gap-2 h-11 px-6 bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-semibold rounded-[8px] text-[14px] hover:opacity-85 transition-opacity"
                >
                  Discuss {service.label} Requirements
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── WHY EXCEL ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0068d6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[34px] sm:text-[42px] font-bold text-white leading-[1.15] mb-4">
              Why Businesses Choose Excel
            </h2>
            <p className="text-[17px] text-white/70 max-w-[560px] mx-auto leading-[1.7]">
              We are not a typical agency. We are a performance system built to generate measurable revenue growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROOF_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.label} className="bg-white/10 rounded-[14px] border border-white/20 p-7">
                  <Icon size={24} className="text-white mb-4" />
                  <p className="text-[16px] font-bold text-white mb-2">{point.label}</p>
                  <p className="text-[13.5px] text-white/65 leading-[1.65]">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f5f7fa] dark:bg-[#111111]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[13px] font-semibold text-[#0068d6] uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-[32px] sm:text-[38px] font-bold text-[#171717] dark:text-white leading-[1.15]">
              Common Questions
            </h2>
          </div>
          <div className="space-y-0">
            {FAQS.map((item) => (
              <div key={item.q} className="border-b border-[#ebebeb] dark:border-[#2a2a2a] py-6">
                <p className="text-[16px] font-semibold text-[#171717] dark:text-white mb-2">{item.q}</p>
                <p className="text-[14.5px] text-[#666666] dark:text-[#888888] leading-[1.75]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-[760px] mx-auto px-6 text-center">
          <h2 className="text-[34px] sm:text-[42px] font-bold text-[#171717] dark:text-white leading-[1.15] mb-5">
            Ready to grow your business with digital marketing that actually works?
          </h2>
          <p className="text-[17px] text-[#555555] dark:text-[#888888] leading-[1.7] mb-10">
            Book a free 30-minute strategy session. We&apos;ll audit your current digital presence, identify your biggest growth levers, and give you a clear plan — no commitment required.
          </p>
          <a
            href="https://calendly.com/wali-noorzad12/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-8 bg-[#0068d6] hover:bg-[#0055b3] text-white font-semibold rounded-[8px] text-[15px] transition-colors"
          >
            Book Your Free Strategy Session
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

    </div>
  );
}
