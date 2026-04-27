import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Wali Nori — Excel Consultancy',
  description: 'Meet Wali Nori — digital marketing consultant and founder of Excel. 3 years building marketing infrastructure for SMEs across Australia and Europe.',
};

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

const tools = [
  'Google Analytics 4', 'Google Search Console', 'Google Tag Manager',
  'Google Ads', 'Meta Ads Manager', 'HubSpot CRM',
  'SEMrush', 'Ahrefs', 'Looker Studio', 'Mailchimp',
];

const values = [
  {
    title: 'Systems over tactics',
    description: "I don't do one-off fixes. Every engagement builds something permanent — a system that keeps working after I step back.",
  },
  {
    title: 'Data before decisions',
    description: 'Every recommendation is grounded in analytics. If the data contradicts the brief, I say so — clearly and with alternatives.',
  },
  {
    title: 'GDPR-aware by default',
    description: 'Every tracking setup I build includes compliant consent management — not as an afterthought, but as a non-negotiable starting point.',
  },
  {
    title: 'Remote, responsive',
    description: 'All work is delivered remotely across time zones. Async communication keeps things moving without scheduling bottlenecks.',
  },
];

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-[12px] font-medium text-[#0068d6] bg-[#ebf5ff]">
              Founder & Consultant
            </div>
            <h1 className="text-[52px] font-semibold tracking-[-0.15rem] text-[#171717] mb-5 leading-[1.05]">
              Wali Nori<br />
              <span className="text-[#808080]">Digital Marketing<br />Consultant</span>
            </h1>
            <p className="text-[17px] text-[#4d4d4d] leading-[1.7] mb-6 max-w-[480px]">
              I'm a marketing operations specialist based in Perth, Australia, serving clients across Europe and the Asia-Pacific. I founded Excel to solve one specific problem: most SMEs have the right tools — they're just not connected.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href={getLocalePath('/book', locale)}
                className="h-10 px-5 text-[14px] font-medium text-white bg-[#171717] rounded-[6px] inline-flex items-center hover:opacity-90 transition-opacity"
              >
                Book a Call
              </Link>
              <a
                href="https://www.linkedin.com/in/walinoorzad/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 text-[14px] font-medium text-[#171717] rounded-[6px] inline-flex items-center gap-2 hover:bg-[#fafafa] transition-colors"
                style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-[300px] h-[380px] rounded-[12px] overflow-hidden"
              style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 8px 24px rgba(0,0,0,0.08)' }}
            >
              <Image
                src="/profile.jpeg"
                alt="Wali Nori — Excel Consultancy"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-y border-[#ebebeb] py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '3 Years', label: 'Operating independently' },
              { value: '5+ Clients', label: 'Across 4 countries' },
              { value: 'BA Marketing', label: 'With Minor in Entrepreneurship' },
              { value: '€12K+', label: 'Monthly recurring revenue' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[28px] font-semibold tracking-[-0.08rem] text-[#171717]">{stat.value}</div>
                <div className="text-[13px] text-[#808080] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[36px] font-semibold tracking-[-0.1rem] text-[#171717] mb-6">
              The Problem I Solve
            </h2>
            <div className="space-y-4 text-[16px] text-[#4d4d4d] leading-[1.75]">
              <p>
                Most SMEs have the right tools — HubSpot isn't talking to Google Ads. GA4 data doesn't match the CRM. Email sequences trigger on the wrong signals. Their data is in five places and none of it tells a coherent story.
              </p>
              <p>
                I started Excel to fix exactly that. Over three years, I've built marketing infrastructure for businesses across Australia and Europe — each time focused on the same outcome: a system where your CRM, your ads, and your analytics work together to tell you what's actually driving revenue.
              </p>
              <p>
                My background is in marketing operations — I hold a Bachelor of Arts in Marketing with a Minor in Entrepreneurship, and I've spent three years building hands-on expertise with the tools that power B2B growth.
              </p>
              <p>
                I work remotely, communicate clearly, and deliver systems that your team can own — not black boxes that require a consultant to interpret.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[36px] font-semibold tracking-[-0.1rem] text-[#171717] mb-6">
              Technical Expertise
            </h2>
            <p className="text-[16px] text-[#666666] leading-[1.65] mb-6">
              Platforms and tools I work with across every engagement:
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-full text-[13px] font-medium text-[#171717]"
                  style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-[8px] bg-[#fafafa]" style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}>
              <p className="text-[13px] font-medium text-[#171717] mb-1">Education</p>
              <p className="text-[15px] font-semibold text-[#171717]">Bachelor of Arts in Marketing</p>
              <p className="text-[14px] text-[#666666]">Minor in Entrepreneurship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[#ebebeb] py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[36px] font-semibold tracking-[-0.1rem] text-[#171717] mb-12 text-center">
            How I Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-white rounded-[8px]"
                style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 2px rgba(0,0,0,0.04), 0px 0px 0px 1px #fafafa' }}
              >
                <h3 className="text-[15px] font-semibold text-[#171717] mb-3">{value.title}</h3>
                <p className="text-[14px] text-[#666666] leading-[1.6]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#ebebeb] py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-semibold tracking-[-0.08rem] text-[#171717] mb-4">
            Ready to work together?
          </h2>
          <p className="text-[16px] text-[#666666] mb-8">
            Book a free 30-minute strategy call or send a message.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href={getLocalePath('/book', locale)}
              className="h-11 px-6 text-[14px] font-medium text-white bg-[#171717] rounded-[6px] inline-flex items-center hover:opacity-90 transition-opacity"
            >
              Book a Consultation <ArrowRight size={16} className="ml-2" />
            </Link>
            <a
              href="mailto:hello@get-excel.com"
              className="h-11 px-5 text-[14px] font-medium text-[#171717] rounded-[6px] inline-flex items-center gap-2 hover:bg-[#fafafa] transition-colors"
              style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
            >
              <Mail size={16} /> hello@get-excel.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
