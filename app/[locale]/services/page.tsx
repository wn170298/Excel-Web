import Link from 'next/link';
import { CheckCircle2, ArrowRight, Check, Minus } from 'lucide-react';
import { FaqAccordion } from '@/components/ui/faq-accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Pricing — Excel Consultancy',
  description: 'Four transparent pricing plans — from one-time Launch (€2,000) to full-service Market Leader (€3,000/month). No hidden fees. No lock-in beyond agreed terms.',
};

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

const servicePillars = [
  {
    number: '01',
    title: 'SEO & Content',
    description: 'Technical audits, keyword strategy, on-page execution, and content publishing. Not just recommendations — actual implementation that moves rankings.',
    includes: ['Full technical SEO audit', 'Keyword research & mapping', 'On-page optimisation', 'Content calendar & publishing', 'Rank tracking & reporting'],
    tools: ['Google Search Console', 'SEMrush', 'Ahrefs'],
  },
  {
    number: '02',
    title: 'Paid Media',
    description: 'Full campaign setup, creative briefing, audience configuration, and ongoing bid management. One, two, or three channels depending on your plan.',
    includes: ['Campaign architecture & setup', 'Audience segmentation', 'Creative briefing & copy', 'Bid strategy & optimisation', 'Cross-channel attribution'],
    tools: ['Google Ads', 'Meta Ads', 'LinkedIn Ads'],
  },
  {
    number: '03',
    title: 'Web & Landing Pages',
    description: 'High-converting pages built for speed and lead capture. Every page tested against a clear conversion goal before going live.',
    includes: ['High-converting website builds', 'Lead capture system', 'Mobile-responsive design', 'Core Web Vitals optimisation', 'A/B testing setup'],
    tools: ['Next.js', 'Webflow', 'Google Optimize'],
  },
  {
    number: '04',
    title: 'Marketing Automation',
    description: 'CRM configuration, lead scoring, email sequences, and workflow automation. Sales and marketing finally in sync — working from the same data.',
    includes: ['CRM setup & customisation', 'Lead scoring model', 'Email nurture sequences', 'Sales handoff automation', 'Lifecycle stage configuration'],
    tools: ['HubSpot', 'Mailchimp', 'Zapier'],
  },
  {
    number: '05',
    title: 'Analytics & Attribution',
    description: 'Proper event tracking, conversion attribution, and a live dashboard that shows what\'s actually driving revenue — not just top-of-funnel traffic.',
    includes: ['GA4 implementation', 'GTM event tracking', 'Looker Studio dashboards', 'Multi-touch attribution model', 'CRM revenue connection'],
    tools: ['GA4', 'Google Tag Manager', 'Looker Studio'],
  },
  {
    number: '06',
    title: 'Privacy & Compliance',
    description: 'GDPR-aligned by default. Consent Mode v2, server-side GTM where required, and data processing documentation for EU clients.',
    includes: ['Consent Mode v2 setup', 'CMP integration (Cookiebot/OneTrust)', 'Server-side GTM (optional)', 'GDPR data processing docs', 'Audit & compliance review'],
    tools: ['Google Consent Mode v2', 'Server-side GTM', 'Cookiebot'],
  },
];

const plans = [
  {
    name: 'Launch',
    price: '€2,000',
    priceAUD: 'A$3,285',
    billing: 'one-time',
    tagline: 'Your complete digital foundation, delivered once.',
    description: 'For businesses that need a complete foundation to start generating leads or sales. Delivered as a one-time project with a defined scope and timeline.',
    timeline: '2–3 weeks',
    contract: 'One-time project',
    outcome: 'A fully working acquisition system ready to generate first results',
    features: [
      'High-converting website or landing page',
      'Lead capture system (forms + tracking setup)',
      'Basic SEO setup (technical + on-page)',
      'Social media account setup',
      'Analytics setup (GA4, pixels, conversion events)',
      'Google Search Console configuration',
      'Mobile-responsive design',
      'Basic on-page speed optimisation',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    price: '€1,200',
    priceAUD: 'A$1,971',
    billing: '/month',
    tagline: 'Consistent performance, month after month.',
    description: 'For businesses that already have traction and want consistent, measurable performance. A structured monthly retainer with clear deliverables.',
    timeline: '6–12 month contract',
    contract: '6–12 months',
    outcome: 'Predictable organic traffic growth and lead generation',
    features: [
      'Everything in Launch',
      'Monthly SEO execution (content + technical)',
      'Keyword rank tracking & reporting',
      'Landing page updates and optimisation',
      'Email marketing setup (up to 3 sequences)',
      'Monthly performance report',
      'Lead capture and CRM maintenance',
      'Priority support response',
    ],
    cta: 'Start Growing',
    featured: true,
  },
  {
    name: 'Scale',
    price: '€2,000',
    priceAUD: 'A$3,285',
    billing: '/month',
    tagline: 'Aggressive growth with controlled acquisition costs.',
    description: 'For businesses ready to grow aggressively without losing efficiency. Everything in Growth, plus paid advertising and content production.',
    timeline: '12–24 month contract',
    contract: '12–24 months',
    outcome: 'Scalable growth with controlled acquisition costs',
    features: [
      'Everything in Growth',
      'Paid ads setup (Google or Meta)',
      'Paid ads management (single channel)',
      'Advanced SEO strategy (keywords + content plan)',
      'Social media content management',
      'A/B testing (landing pages & ads)',
      'Basic ad creatives & copywriting',
      'Graphic design support',
    ],
    cta: 'Scale Up',
    featured: false,
  },
  {
    name: 'Market Leader',
    price: '€3,000',
    priceAUD: 'A$4,928',
    billing: '/month',
    tagline: 'Own your category. Built for companies that play to win.',
    description: 'For companies aiming to dominate their category. A complete growth engine with multi-channel execution, full CRM lifecycle, and strategic direction.',
    timeline: '24+ month contract',
    contract: '24+ months',
    outcome: 'Full acquisition system ownership and category-level growth',
    features: [
      'Everything in Scale',
      'SEO management (ongoing optimisation & execution)',
      'Multi-channel paid ads (Google + Meta + LinkedIn)',
      'Full ads management & scaling',
      'Weekly campaign optimisation',
      'Full content production system',
      'CRM & lifecycle marketing (email + retention)',
      'Advanced analytics & attribution insights',
      'Growth roadmap ownership & strategic direction',
    ],
    cta: 'Dominate Your Market',
    featured: false,
  },
];

const comparisonRows = [
  { feature: 'Website / landing page',        launch: 'Build',   growth: 'Updates', scale: 'Updates',   market: 'Updates'       },
  { feature: 'GA4 + conversion tracking',     launch: true,      growth: true,      scale: true,         market: true            },
  { feature: 'SEO execution',                 launch: 'Basic',   growth: 'Monthly', scale: 'Advanced',   market: 'Full ongoing'  },
  { feature: 'Email sequences',               launch: false,     growth: '3 max',   scale: 'Included',   market: 'Full lifecycle' },
  { feature: 'CRM / lead scoring',            launch: false,     growth: 'Basic',   scale: 'Advanced',   market: 'Full buildout' },
  { feature: 'Paid ads',                      launch: false,     growth: false,     scale: '1 channel',  market: '3 channels'    },
  { feature: 'A/B testing',                   launch: false,     growth: false,     scale: true,         market: true            },
  { feature: 'Looker Studio dashboard',       launch: false,     growth: 'Monthly', scale: 'Weekly',     market: 'Weekly'        },
  { feature: 'Weekly optimisation calls',     launch: false,     growth: false,     scale: false,        market: true            },
  { feature: 'GDPR / Consent Mode v2',        launch: true,      growth: true,      scale: true,         market: true            },
  { feature: 'Growth roadmap ownership',      launch: false,     growth: false,     scale: false,        market: true            },
];

const tools = [
  'Google Analytics 4', 'Google Tag Manager', 'Google Search Console',
  'Google Ads', 'Meta Ads Manager', 'LinkedIn Ads', 'HubSpot CRM',
  'SEMrush', 'Ahrefs', 'Looker Studio', 'Mailchimp', 'Consent Mode v2',
];

const faqs = [
  {
    q: 'Are there any setup fees?',
    a: 'No hidden setup fees. The Launch plan is a one-time project price. Recurring plans start charging from the first month of work — no onboarding surcharge.',
  },
  {
    q: 'Can I start with Launch and upgrade later?',
    a: 'Yes. Many clients start with the Launch package to establish a digital foundation, then move to Growth or Scale once they have initial traction and want ongoing support.',
  },
  {
    q: 'Do you work with businesses outside of Australia?',
    a: 'Yes — all services are delivered remotely. Current clients are based in Australia, Italy, Germany, and the UK. Time zones are managed via async communication and scheduled video calls.',
  },
  {
    q: 'What tools and platforms do you work with?',
    a: 'Google Analytics 4, GTM, Google Search Console, Google Ads, Meta Ads, LinkedIn Ads, HubSpot, SEMrush, Ahrefs, Looker Studio, and Mailchimp. We adapt to your existing stack wherever possible.',
  },
  {
    q: 'How are results reported?',
    a: 'Every plan includes a monthly performance report. Scale and Market Leader plans include a live Looker Studio dashboard updated weekly with key metrics from all active channels.',
  },
  {
    q: 'Is GDPR compliance included?',
    a: 'Yes. All tracking setups include GDPR-aware configuration by default — Consent Mode v2, proper cookie consent integration, and data processing documentation for EU-based clients.',
  },
  {
    q: 'What is the minimum contract length?',
    a: 'Growth plans run on 6–12 month contracts. Scale requires 12–24 months. Market Leader is 24+ months. These longer terms reflect the compounding nature of the work — SEO and automation take time to realise their full value.',
  },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check size={16} className="text-[#0a0a0a] mx-auto" />;
  if (value === false) return <Minus size={14} className="text-[#cccccc] mx-auto" />;
  return <span className="text-[12.5px] text-[#555555] font-medium">{value}</span>;
}

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div>

      {/* ── HERO ────────────────────────────────────────────────────────────────── */}
      <section className="border-b border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-[12px] font-semibold text-[#2563eb] bg-[#eff6ff]">
            Transparent pricing · No hidden fees
          </div>
          <h1 className="text-[52px] font-semibold tracking-[-0.15rem] text-[#0a0a0a] mb-5 max-w-[680px] leading-[1.07]">
            Four plans. One methodology.
          </h1>
          <p className="text-[18px] text-[#555555] max-w-[540px] leading-[1.65]">
            Whether you're launching from zero or scaling an active operation, every plan is built on the same technical foundation — proper tracking, real attribution, and systems your team can own.
          </p>
        </div>
      </section>

      {/* ── SERVICE PILLARS ──────────────────────────────────────────────────────── */}
      <section className="border-b border-[#e8e8e8] bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="mb-12">
            <div className="text-[11px] font-semibold uppercase tracking-[0.10em] text-[#808080] mb-3">What's included</div>
            <h2 className="text-[36px] font-semibold tracking-[-0.12rem] text-[#0a0a0a] leading-[1.12]">
              Every engagement covers all six pillars.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicePillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-6 rounded-[8px] bg-white"
                style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 2px rgba(0,0,0,0.03)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-bold text-[#808080] tracking-wider">{pillar.number}</span>
                  <h3 className="text-[15px] font-semibold text-[#0a0a0a] tracking-[-0.02em]">{pillar.title}</h3>
                </div>
                <p className="text-[13.5px] text-[#666666] leading-[1.60] mb-4">{pillar.description}</p>
                <ul className="space-y-1.5 mb-4">
                  {pillar.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-[#0a0a0a]" />
                      <span className="text-[13px] text-[#4d4d4d]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#f0f0f0]">
                  {pillar.tools.map((tool) => (
                    <span key={tool} className="text-[11px] font-medium text-[#555555] px-2 py-0.5 rounded-full bg-[#f5f5f5]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING CARDS ────────────────────────────────────────────────────────── */}
      <section className="border-b border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="mb-12">
            <div className="text-[11px] font-semibold uppercase tracking-[0.10em] text-[#808080] mb-3">Choose your growth stage</div>
            <h2 className="text-[36px] font-semibold tracking-[-0.12rem] text-[#0a0a0a] leading-[1.12]">
              Transparent pricing for every stage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[10px] overflow-hidden flex flex-col ${plan.featured ? 'bg-[#0a0a0a]' : 'bg-white'}`}
                style={{ boxShadow: plan.featured ? 'none' : '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 2px rgba(0,0,0,0.03)' }}
              >
                {/* Plan header */}
                <div className={`p-6 pb-5 border-b ${plan.featured ? 'border-[rgba(255,255,255,0.10)]' : 'border-[#ebebeb]'}`}>
                  {plan.featured && (
                    <div className="inline-flex items-center gap-1 mb-3 px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#0a0a0a] bg-white w-fit">
                      ✦ Most Popular
                    </div>
                  )}
                  <div className={`text-[11px] font-semibold uppercase tracking-wider mb-2 ${plan.featured ? 'text-[rgba(255,255,255,0.40)]' : 'text-[#808080]'}`}>
                    {plan.name}
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-[34px] font-semibold tracking-[-0.12rem] ${plan.featured ? 'text-white' : 'text-[#0a0a0a]'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-[13px] ${plan.featured ? 'text-[rgba(255,255,255,0.40)]' : 'text-[#808080]'}`}>
                      {plan.billing}
                    </span>
                  </div>
                  <p className={`text-[11px] mb-3 ${plan.featured ? 'text-[rgba(255,255,255,0.35)]' : 'text-[#808080]'}`}>
                    {plan.priceAUD} AUD
                  </p>
                  <p className={`text-[13px] leading-[1.55] ${plan.featured ? 'text-[rgba(255,255,255,0.60)]' : 'text-[#666666]'}`}>
                    {plan.tagline}
                  </p>
                </div>

                {/* Features */}
                <div className="p-6 flex-1">
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2 size={13} className={`shrink-0 mt-0.5 ${plan.featured ? 'text-emerald-400' : 'text-[#0a0a0a]'}`} />
                        <span className={`text-[13px] leading-[1.45] ${plan.featured ? 'text-[rgba(255,255,255,0.70)]' : 'text-[#4d4d4d]'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meta */}
                <div className={`px-6 py-3 text-[11.5px] border-t ${plan.featured ? 'border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.35)]' : 'border-[#ebebeb] text-[#808080]'}`}>
                  <div>Contract: {plan.contract}</div>
                </div>

                {/* CTA */}
                <div className="p-6 pt-4">
                  <Link
                    href={getLocalePath('/book', locale)}
                    className={`w-full h-10 rounded-[6px] text-[13.5px] font-medium inline-flex items-center justify-center transition-opacity hover:opacity-80 ${
                      plan.featured ? 'bg-white text-[#0a0a0a]' : 'bg-[#0a0a0a] text-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <Link
                    href={getLocalePath('/book', locale)}
                    className={`w-full mt-2 text-[12px] font-medium inline-flex items-center justify-center gap-1 py-1.5 hover:opacity-60 transition-opacity ${
                      plan.featured ? 'text-[rgba(255,255,255,0.40)]' : 'text-[#808080]'
                    }`}
                  >
                    Or book a call first <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────────────── */}
      <section className="border-b border-[#e8e8e8] bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="mb-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.10em] text-[#808080] mb-3">Feature comparison</div>
            <h2 className="text-[32px] font-semibold tracking-[-0.10rem] text-[#0a0a0a] leading-[1.15]">
              What's in each plan.
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[8px] bg-white" style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}>
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-[#e8e8e8]">
                  <th className="text-left px-6 py-4 text-[11px] font-semibold text-[#808080] uppercase tracking-wider w-[40%]">Feature</th>
                  {['Launch', 'Growth', 'Scale', 'Market Leader'].map((plan, i) => (
                    <th key={plan} className={`text-center px-4 py-4 text-[11px] font-semibold uppercase tracking-wider ${i === 1 ? 'text-[#0a0a0a] bg-[#f7f7f7]' : 'text-[#808080]'}`}>
                      {plan}
                      {i === 1 && <span className="ml-1.5 text-[9px] font-bold text-white bg-[#0a0a0a] px-1.5 py-0.5 rounded-full">★</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i < comparisonRows.length - 1 ? 'border-b border-[#f0f0f0]' : ''}>
                    <td className="px-6 py-3.5 text-[13.5px] text-[#0a0a0a] font-medium">{row.feature}</td>
                    {[row.launch, row.growth, row.scale, row.market].map((val, j) => (
                      <td key={j} className={`px-4 py-3.5 text-center ${j === 1 ? 'bg-[#f7f7f7]' : ''}`}>
                        <CellValue value={val} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TOOLS ────────────────────────────────────────────────────────────────── */}
      <section className="border-b border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="text-[11px] font-semibold uppercase tracking-[0.10em] text-[#808080] mb-6">Tech stack</div>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-[#0a0a0a]"
                style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.10)' }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────────── */}
      <section className="border-b border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.10em] text-[#808080] mb-3">FAQ</div>
              <h2 className="text-[32px] font-semibold tracking-[-0.10rem] text-[#0a0a0a] leading-[1.20] mb-4">
                Frequently asked questions.
              </h2>
              <p className="text-[15px] text-[#555555] leading-[1.65]">
                Don't see your question? Book a free 30-minute call and ask directly.
              </p>
            </div>
            <div>
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6 py-20 text-center">
          <h2 className="text-[36px] font-semibold tracking-[-0.10rem] text-white mb-4 leading-[1.15]">
            Not sure which plan is right?
          </h2>
          <p className="text-[16px] mb-8 max-w-[440px] mx-auto leading-[1.65]" style={{ color: 'rgba(255,255,255,0.50)' }}>
            Book a free 30-minute call. We'll assess your current setup and recommend the right starting point — with no obligation to proceed.
          </p>
          <Link
            href={getLocalePath('/book', locale)}
            className="h-11 px-8 text-[14px] font-medium text-[#0a0a0a] bg-white rounded-[6px] inline-flex items-center gap-2 hover:opacity-85 transition-opacity"
          >
            Book a Free Consultation <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
