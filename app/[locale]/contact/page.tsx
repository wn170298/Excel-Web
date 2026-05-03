import type { Metadata } from 'next';
import { Mail, MapPin, Linkedin, ArrowUpRight, Phone, CalendarDays } from 'lucide-react';
import ContactSection from '@/components/contact-section';

export const metadata: Metadata = {
  title: 'Contact Excel Consultancy — Book a Free Strategy Session',
  description:
    'Book a free 30-minute digital marketing strategy session. We\'ll audit your current digital presence, identify growth opportunities, and give you a clear action plan — no commitment required.',
  keywords: [
    'contact digital marketing agency',
    'book free strategy session',
    'digital marketing consultation',
    'Excel Consultancy contact',
    'Perth digital marketing agency',
  ],
};

const OFFICES = [
  {
    city: 'Perth',
    country: 'Australia',
    flag: '🇦🇺',
    detail: 'Western Australia · Primary Office',
    serving: 'Serving all of Australia',
  },
  {
    city: 'Europe',
    country: 'Remote',
    flag: '🇪🇺',
    detail: 'UK, Italy, Germany & beyond',
    serving: 'Serving the EU & UK',
  },
  {
    city: 'UAE',
    country: 'Remote',
    flag: '🇦🇪',
    detail: 'Dubai & Abu Dhabi',
    serving: 'Serving the Middle East',
  },
];

const QUICK_LINKS = [
  { icon: CalendarDays, label: 'Book instantly', value: 'Book a 30-min strategy call', href: 'https://calendly.com/wali-noorzad12/30min' },
  { icon: Phone, label: 'Call us directly', value: '+39 344 442 4021', href: 'tel:+393444424021' },
  { icon: Mail, label: 'Email us', value: 'hello@get-excel.com', href: 'mailto:hello@get-excel.com' },
  { icon: Linkedin, label: 'Connect on LinkedIn', value: 'linkedin.com/in/walinoorzad', href: 'https://www.linkedin.com/in/walinoorzad/' },
];

export default function ContactPage() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="pt-20 pb-16 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#f0f7ff] dark:bg-[#0068d6]/15 border border-[#cce0ff] dark:border-[#0068d6]/30">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0068d6]" />
            <span className="text-[12px] font-semibold text-[#0068d6] tracking-wide">Free Strategy Session</span>
          </div>
          <h1 className="text-[40px] sm:text-[52px] font-bold leading-[1.1] text-[#171717] dark:text-white max-w-[700px] mb-5">
            Talk to a Digital Marketing Expert Today.
          </h1>
          <p className="text-[18px] text-[#555555] dark:text-[#888888] leading-[1.7] max-w-[580px] mb-8">
            Book a free 30-minute strategy session — valued at $2,000. No sales pitch. Just a clear audit of your digital marketing and an honest action plan to grow your business.
          </p>
          <a
            href="https://calendly.com/wali-noorzad12/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-7 bg-[#0068d6] hover:bg-[#0055b3] text-white font-semibold rounded-[8px] text-[15px] transition-colors"
          >
            <CalendarDays size={16} />
            Book Your Free Session — Instant Scheduling
          </a>
        </div>
      </section>

      {/* ── QUICK CONTACT + LOCATIONS ────────────────────────────── */}
      <section className="pb-12 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Quick links */}
            {QUICK_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-5 bg-[#f5f7fa] dark:bg-[#111111] rounded-[14px] border border-[#ebebeb] dark:border-[#2a2a2a] hover:border-[#0068d6]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-[#f0f7ff] dark:bg-[#0068d6]/15 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#0068d6]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-[#999999] dark:text-[#555555] uppercase tracking-wide mb-0.5">{item.label}</p>
                    <p className="text-[13px] font-medium text-[#171717] dark:text-white truncate group-hover:text-[#0068d6] transition-colors">
                      {item.value}
                    </p>
                  </div>
                  {item.href.startsWith('http') && (
                    <ArrowUpRight size={14} className="text-[#999999] dark:text-[#555555] shrink-0 ml-auto" />
                  )}
                </a>
              );
            })}

          </div>
        </div>
      </section>

      {/* ── CONTACT FORM + FAQ ───────────────────────────────────── */}
      <ContactSection />

      {/* ── OFFICES ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-10">
            <p className="text-[13px] font-semibold text-[#0068d6] uppercase tracking-wider mb-3">Locations</p>
            <h2 className="text-[28px] font-bold text-[#171717] dark:text-white">Where We Operate</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="p-7 bg-[#f5f7fa] dark:bg-[#111111] rounded-[16px] border border-[#ebebeb] dark:border-[#2a2a2a]"
              >
                <div className="text-[32px] mb-4">{office.flag}</div>
                <p className="text-[20px] font-bold text-[#171717] dark:text-white mb-1">{office.city}</p>
                <p className="text-[13px] text-[#666666] dark:text-[#888888] mb-1">{office.detail}</p>
                <p className="text-[12px] font-semibold text-[#0068d6]">{office.serving}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
