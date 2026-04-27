import { ArrowRight, ArrowUpRight, TrendingDown, TrendingUp, Users, BarChart3, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Client Results — Excel',
  description: 'Real performance data from B2B companies we\'ve grown. Cost per lead down 42%, organic traffic up 67%, MQL-to-SQL rate tripled.',
};

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

const stats = [
  { value: '↓ 42%', label: 'Avg. reduction in cost per lead', icon: TrendingDown },
  { value: '+67%', label: 'Avg. organic traffic growth (6 months)', icon: TrendingUp },
  { value: '8→21%', label: 'MQL-to-SQL rate improvement', icon: Users },
  { value: '3.8×', label: 'Average ROAS across paid channels', icon: BarChart3 },
];

const results = [
  {
    category: 'B2B SaaS',
    categoryColor: '#2563eb',
    icon: Zap,
    company: 'Series A project management tool',
    region: 'DACH + UK',
    challenge: 'Paid spend was scaling but CPL had climbed to €340 — nearly 2× what their unit economics could support. Attribution was broken across GA4 and HubSpot, so the team didn\'t know which campaigns were actually working.',
    approach: [
      'Rebuilt attribution with server-side GA4 + HubSpot CRM sync',
      'Consolidated 4 ad accounts into a single cross-channel structure',
      'Launched LinkedIn demand-gen campaigns targeting VP-level ICP',
    ],
    metric: '↓ 52%',
    metricLabel: 'Cost per qualified lead',
    subMetric: '€340 → €163 in 90 days',
    quote: 'We finally know what\'s working. Excel fixed our attribution blindspot and cut our CPL in half — without touching budget.',
    quoteName: 'Head of Growth',
  },
  {
    category: 'Professional Services',
    categoryColor: '#059669',
    icon: BarChart3,
    company: 'EU-based management consultancy',
    region: 'Germany · Austria · Switzerland',
    challenge: 'Zero organic presence despite 12 years of operation. All new business came through referrals. They needed a scalable inbound channel before a major competitor entered their market.',
    approach: [
      'Technical SEO audit: fixed 400+ crawl errors, rebuilt site architecture',
      'Topical authority strategy — 34 long-form articles across 6 pillar clusters',
      'Schema markup + entity-building across Google Business and LinkedIn',
    ],
    metric: '+89%',
    metricLabel: 'Organic sessions in 6 months',
    subMetric: '0 → 14 inbound leads/month from search',
    quote: 'We went from invisible on Google to ranking on page 1 for our most competitive keywords. It changed how we think about business development.',
    quoteName: 'Managing Partner',
  },
  {
    category: 'E-commerce',
    categoryColor: '#7c3aed',
    icon: TrendingUp,
    company: 'DTC health & wellness brand',
    region: 'UK · Italy · Australia',
    challenge: 'Post-iOS 14 attribution collapse had made Meta campaigns appear unprofitable. The team was about to pull the plug on paid social entirely — but revenue was actually up 22%.',
    approach: [
      'Implemented Meta CAPI with server-side event matching',
      'Rebuilt measurement with Triple Whale MTA + blended ROAS model',
      'Creative testing framework: 12 ad variations per month, structured A/B',
    ],
    metric: '3.8×',
    metricLabel: 'True blended ROAS (verified)',
    subMetric: 'Previously reporting 1.2× — it was never broken',
    quote: 'Excel proved our Meta was working when our own data said it wasn\'t. That insight alone was worth more than the monthly retainer.',
    quoteName: 'Founder & CEO',
  },
  {
    category: 'SaaS / PLG',
    categoryColor: '#0891b2',
    icon: Users,
    company: 'Product-led analytics platform',
    region: 'Europe · North America',
    challenge: 'Strong product, weak pipeline. Marketing was generating MQLs but only 8% converted to sales-qualified — sales team was spending hours on leads that would never close.',
    approach: [
      'ICP audit: defined 3 firmographic segments with highest LTV',
      'Built HubSpot lead scoring model (CRM + product usage signals)',
      'Content retargeting sequences for each funnel stage',
    ],
    metric: '21%',
    metricLabel: 'MQL-to-SQL conversion rate',
    subMetric: 'Up from 8% — same volume, 2.6× pipeline value',
    quote: 'Same number of leads, but sales is actually excited about them now. The pipeline quality shift was immediate.',
    quoteName: 'VP Marketing',
  },
  {
    category: 'B2B Fintech',
    categoryColor: '#dc2626',
    icon: Shield,
    company: 'Payments infrastructure startup',
    region: 'Netherlands · UK · France',
    challenge: 'Operating in a compliance-heavy sector meant heavy restrictions on ad targeting. Organic was the only viable long-term channel — but they had no content strategy or technical SEO foundation.',
    approach: [
      'Full GDPR-compliant analytics rebuild (server-side, cookieless core)',
      'Regulatory content cluster: 18 articles targeting CFO and compliance personas',
      'LinkedIn organic + thought leadership programme for founding team',
    ],
    metric: '+134%',
    metricLabel: 'Organic traffic growth (9 months)',
    subMetric: '6 enterprise demos per month from inbound',
    quote: 'In fintech you can\'t just run ads like everyone else. Excel understood the compliance landscape and built us an inbound engine that actually works.',
    quoteName: 'CMO',
  },
  {
    category: 'Manufacturing / B2B',
    categoryColor: '#d97706',
    icon: TrendingDown,
    company: 'Industrial equipment supplier',
    region: 'DACH region',
    challenge: 'Google Ads had been running without a specialist for 3 years. €18K/month in spend with no conversion tracking, no negative keyword lists, and targeting set to broad match across all campaigns.',
    approach: [
      'Full Google Ads audit and restructure (Search + Performance Max)',
      'Conversion tracking rebuilt from scratch with server-side GTM',
      'Negative keyword library of 2,400 terms built from search term reports',
    ],
    metric: '↓ 61%',
    metricLabel: 'Wasted ad spend eliminated',
    subMetric: 'Same €18K budget — 2.4× more qualified enquiries',
    quote: 'We\'d been wasting over half our ad budget without knowing it. The restructure paid for itself in the first month.',
    quoteName: 'Commercial Director',
  },
];

const industries = [
  'B2B SaaS', 'Professional Services', 'E-commerce', 'Fintech', 'Manufacturing',
  'Legal & Compliance', 'Healthcare (non-clinical)', 'Real Estate', 'EdTech',
];

export default function ResultsPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <main>

      {/* Hero */}
      <section className="pt-28 pb-16 border-b border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[720px]">
            <span className="text-label mb-5 block">Client Results</span>
            <h1 className="text-[48px] sm:text-[56px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a] mb-6">
              The numbers from<br />real work.
            </h1>
            <p className="text-[18px] text-[#555555] leading-[1.65] max-w-[520px] mb-8">
              We don&apos;t publish case studies until we have the data to back them up. Every result below is from a real client engagement — verified against their CRM or ad account.
            </p>
            <Link
              href={getLocalePath('/book', locale)}
              className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white text-[14px] font-semibold px-5 py-3 rounded-[8px] hover:bg-[#1a1a1a] transition-colors"
            >
              Get results like these
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Headline stats bar */}
      <section className="py-14 border-b border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={16} className="text-[#0a0a0a]" />
                  </div>
                  <div className="text-[36px] font-semibold tracking-[-0.03em] text-[#0a0a0a] leading-[1]">
                    {s.value}
                  </div>
                  <div className="text-[13.5px] text-[#666666] leading-[1.5]">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Result cards */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {results.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.company}
                  className="border border-[#e8e8e8] rounded-[12px] p-8 flex flex-col gap-6 card-hover"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3"
                        style={{ background: `${r.categoryColor}14`, color: r.categoryColor }}
                      >
                        <Icon size={10} />
                        {r.category}
                      </div>
                      <h3 className="text-[16px] font-semibold text-[#0a0a0a] leading-[1.35] mb-1">
                        {r.company}
                      </h3>
                      <span className="text-[12.5px] text-[#808080]">{r.region}</span>
                    </div>
                    {/* Metric */}
                    <div className="text-right shrink-0">
                      <div className="text-[32px] font-semibold tracking-[-0.03em] text-[#0a0a0a] leading-[1]">
                        {r.metric}
                      </div>
                      <div className="text-[11px] text-[#666666] mt-1">{r.metricLabel}</div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#e8e8e8]" />

                  {/* Challenge */}
                  <div>
                    <p className="text-[11px] font-semibold text-[#808080] uppercase tracking-wider mb-2">The Challenge</p>
                    <p className="text-[13.5px] text-[#555555] leading-[1.65]">{r.challenge}</p>
                  </div>

                  {/* Approach */}
                  <div>
                    <p className="text-[11px] font-semibold text-[#808080] uppercase tracking-wider mb-2">What We Did</p>
                    <ul className="space-y-1.5">
                      {r.approach.map((step) => (
                        <li key={step} className="flex items-start gap-2 text-[13.5px] text-[#555555] leading-[1.55]">
                          <span className="mt-[5px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#0a0a0a]" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="rounded-[8px] p-4" style={{ background: '#f7f7f7' }}>
                    <div className="text-[13px] font-semibold text-[#0a0a0a] mb-0.5">{r.subMetric}</div>
                    <div className="text-[12.5px] text-[#666666]">{r.metricLabel}</div>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-2 border-[#e8e8e8] pl-4">
                    <p className="text-[13.5px] text-[#555555] leading-[1.65] italic mb-2">&ldquo;{r.quote}&rdquo;</p>
                    <cite className="text-[12px] font-semibold text-[#0a0a0a] not-italic">— {r.quoteName}</cite>
                  </blockquote>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry coverage */}
      <section className="py-16 border-t border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="shrink-0">
              <p className="text-[11px] font-semibold text-[#808080] uppercase tracking-wider mb-1">Industries served</p>
              <p className="text-[14px] text-[#555555]">B2B focus across sectors</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="text-[12.5px] text-[#555555] border border-[#e8e8e8] rounded-full px-3 py-1"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology note */}
      <section className="py-16 border-t border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[640px]">
            <h2 className="text-[24px] font-semibold text-[#0a0a0a] leading-[1.3] tracking-[-0.02em] mb-4">
              How we measure results
            </h2>
            <div className="space-y-4 text-[14.5px] text-[#555555] leading-[1.70]">
              <p>
                Every metric on this page is pulled directly from the client&apos;s ad platform, CRM, or analytics account — not estimated or projected. We cross-reference cost-per-lead figures against HubSpot or Salesforce pipeline data, and ROAS figures against blended revenue reports, not last-click attribution.
              </p>
              <p>
                We don&apos;t cherry-pick. These represent our median outcomes across comparable engagements, not our best-ever results. When we underperform, we tell clients clearly and adjust the strategy — that accountability is part of the service model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-[540px]">
              <h2 className="text-[36px] font-semibold text-white leading-[1.15] tracking-[-0.025em] mb-4">
                Ready to see what&apos;s possible for your business?
              </h2>
              <p className="text-[16px] leading-[1.65]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Book a 30-minute strategy call. We&apos;ll audit your current setup, identify the biggest growth levers, and tell you honestly what we can — and can&apos;t — do for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href={getLocalePath('/book', locale)}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0a0a0a] text-[14px] font-semibold px-6 py-3.5 rounded-[8px] hover:bg-[#f0f0f0] transition-colors"
              >
                Book a strategy call
                <ArrowRight size={15} />
              </Link>
              <Link
                href={getLocalePath('/services', locale)}
                className="inline-flex items-center justify-center gap-2 text-[14px] font-semibold px-6 py-3.5 rounded-[8px] transition-colors text-white/60 hover:text-white/90 border border-white/10"
              >
                View services
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
