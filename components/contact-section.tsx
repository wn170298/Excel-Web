'use client';

import { useState } from 'react';
import { Send, CheckCircle2, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What services does Excel Consultancy offer?',
    a: 'Excel is a full-service digital marketing consultancy. We specialise in SEO, Pay-Per-Click advertising, social media advertising, web design & development, marketing automation, and analytics & attribution — all designed to work together as a single growth engine.',
  },
  {
    q: 'How much does digital marketing cost?',
    a: 'Investment varies based on your goals and scale. Our managed plans start from €1,200/month. We use flat-fee pricing — no percentage of ad spend — so our incentives are aligned with your results, not your budget size. Book a free consultation and we\'ll recommend the right approach.',
  },
  {
    q: 'How long before I see results?',
    a: 'PPC campaigns can drive qualified leads within days. SEO compounds over 3–6 months and continues growing long-term. We set transparent expectations from day one and share a clear 90-day roadmap so you always know what to expect.',
  },
  {
    q: 'What makes Excel different from other agencies?',
    a: 'We treat digital marketing as a procurement system — every euro spent must generate a measurable return. We use AI-driven tools, flat-fee pricing, and full-funnel attribution tracking. No vanity metrics, no bloated retainers — just growth that shows up in your bottom line.',
  },
  {
    q: 'Do you work with businesses outside Europe?',
    a: 'Absolutely. Based in Rome, Italy, we serve clients across Europe, the UK, Australia, the UAE, and beyond. Our strategies are built for international scalability, and we are fully GDPR compliant.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#ebebeb] dark:border-[#2a2a2a]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="text-[15px] font-medium text-[#171717] dark:text-white">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#666666] dark:text-[#888888] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="pb-4 text-[14px] text-[#666666] dark:text-[#888888] leading-[1.7]">{a}</p>
      )}
    </div>
  );
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Valid email is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'd72a364d-db1d-482c-ad9b-0735a4bb98c0',
          subject: 'New Strategy Session Request — Excel Consultancy',
          from_name: 'Excel Website',
          replyto: form.email,
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          company: form.company || 'Not provided',
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setSubmitted(true);
    } catch {
      // Show a user-facing error without crashing the form
      setErrors({ message: 'Something went wrong. Please try again or email us directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-[8px] border text-[14px] outline-none transition-all ' +
    'bg-white dark:bg-[#1a1a1a] border-[#ebebeb] dark:border-[#2a2a2a] ' +
    'text-[#171717] dark:text-white placeholder:text-[#aaaaaa] dark:placeholder:text-[#555555] ' +
    'focus:border-[#0068d6] focus:ring-2 focus:ring-[#0068d6]/15';

  return (
    <section
      id="contact"
      className="py-24 bg-[#f5f7fa] dark:bg-[#111111]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left — headline + FAQ */}
          <div>
            <p className="text-[13px] font-semibold text-[#0068d6] uppercase tracking-wider mb-3">
              Free Strategy Session
            </p>
            <h2 className="text-[36px] sm:text-[42px] font-bold leading-[1.15] text-[#171717] dark:text-white mb-5">
              Work With a Results-Driven Digital Marketing Agency.{' '}
              <span className="text-[#0068d6]">Get Your Free Audit.</span>
            </h2>
            <p className="text-[16px] text-[#666666] dark:text-[#888888] leading-[1.7] mb-6">
              Book a free 30-minute strategy call — valued at $2,000. We&apos;ll audit your current
              digital presence, identify your biggest growth opportunities, and give you a clear,
              actionable plan. No commitment. No sales pitch.
            </p>
            <div className="flex flex-col gap-3 mb-10">
              {[
                'Full audit of your current SEO, paid ads & analytics',
                'Identification of your 3 biggest untapped growth levers',
                'A clear 90-day action plan you can use — with or without us',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-[#0068d6] shrink-0 mt-0.5" />
                  <p className="text-[14px] text-[#555555] dark:text-[#888888]">{item}</p>
                </div>
              ))}
            </div>

            <h3 className="text-[18px] font-semibold text-[#171717] dark:text-white mb-4">
              Frequently Asked Questions
            </h3>
            <div>
              {FAQS.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div className="bg-white dark:bg-[#161616] rounded-[16px] border border-[#ebebeb] dark:border-[#2a2a2a] p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 size={52} className="text-[#0068d6] mb-4" />
                  <h3 className="text-[22px] font-bold text-[#171717] dark:text-white mb-2">
                    Message Received!
                  </h3>
                  <p className="text-[15px] text-[#666666] dark:text-[#888888]">
                    We&apos;ll be in touch within 24 hours to schedule your free strategy session.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-[20px] font-bold text-[#171717] dark:text-white mb-6">
                    Get Your Free Digital Audit
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your name *"
                          aria-label="Your name"
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          className={inputClass}
                        />
                        {errors.name && (
                          <p className="mt-1 text-[12px] text-red-500">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email address *"
                          aria-label="Email address"
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          className={inputClass}
                        />
                        {errors.email && (
                          <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="Phone number"
                        aria-label="Phone number"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className={inputClass}
                      />
                      <input
                        type="text"
                        placeholder="Company name"
                        aria-label="Company name"
                        value={form.company}
                        onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Tell us about your goals and current challenges *"
                        aria-label="Your message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className={`${inputClass} resize-none`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-[12px] text-red-500">{errors.message}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-12 bg-[#0068d6] hover:bg-[#0055b3] disabled:opacity-60 text-white font-semibold rounded-[8px] flex items-center justify-center gap-2 transition-colors"
                    >
                      <Send size={16} />
                      {submitting ? 'Sending…' : 'Send Message'}
                    </button>
                    <p className="text-center text-[12px] text-[#999999] dark:text-[#555555]">
                      Free strategy session · Valued at $2,000 · Reply within 24h
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
