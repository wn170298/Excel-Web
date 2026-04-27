'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Calendar, Clock, MessageSquare, ArrowRight } from 'lucide-react';

const steps = [
  { label: 'Book', active: true },
  { label: 'Confirm', active: false },
  { label: 'Prepare', active: false },
];

const whatToExpect = [
  { icon: Clock, title: '30 minutes', description: 'A focused, time-bounded conversation — no wandering agendas.' },
  { icon: MessageSquare, title: 'Your situation, first', description: "We start with your business, your current stack, and where you're stuck." },
  { icon: CheckCircle2, title: 'A clear recommendation', description: "You'll leave with a clear picture of what your marketing setup should look like — and what it would cost." },
];

export default function BookPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    employees: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20">
      {/* Header */}
      <div className="max-w-[600px] mb-16">
        <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-[12px] font-medium text-[#0068d6] bg-[#ebf5ff]">
          <Calendar size={12} />
          Free 30-minute strategy call
        </div>
        <h1 className="text-[48px] font-semibold tracking-[-0.15rem] text-[#171717] mb-4 leading-[1.07]">
          Book a Free<br />Strategy Call
        </h1>
        <p className="text-[17px] text-[#4d4d4d] leading-[1.65]">
          30 minutes, no commitment. A clear picture of what your marketing stack should look like — and what it would cost to get there.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <div>
          {submitted ? (
            <div
              className="p-10 rounded-[12px] bg-white text-center"
              style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 2px rgba(0,0,0,0.04)' }}
            >
              <div className="w-12 h-12 rounded-full bg-[#171717] flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={22} className="text-white" />
              </div>
              <h2 className="text-[24px] font-semibold text-[#171717] tracking-[-0.05rem] mb-3">
                Request received
              </h2>
              <p className="text-[15px] text-[#666666] leading-[1.65] mb-6">
                I'll reply within 24 hours to confirm a time that works for you. Check your inbox (and spam folder, just in case).
              </p>
              <a
                href="mailto:hello@get-excel.com"
                className="text-[14px] font-medium text-[#0072f5] underline"
              >
                hello@get-excel.com
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-[#171717] mb-1.5">
                    Your Name <span className="text-[#808080]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full h-10 px-3 text-[14px] text-[#171717] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)]"
                    style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
                    placeholder="Wali Nori"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#171717] mb-1.5">
                    Work Email <span className="text-[#808080]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full h-10 px-3 text-[14px] text-[#171717] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)]"
                    style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-[#171717] mb-1.5">Company Name</label>
                  <input
                    type="text"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full h-10 px-3 text-[14px] text-[#171717] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)]"
                    style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
                    placeholder="Acme Ltd"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#171717] mb-1.5">Website</label>
                  <input
                    type="url"
                    value={formState.website}
                    onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                    className="w-full h-10 px-3 text-[14px] text-[#171717] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)]"
                    style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
                    placeholder="https://yoursite.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-[#171717] mb-1.5">Company Size</label>
                  <select
                    value={formState.employees}
                    onChange={(e) => setFormState({ ...formState, employees: e.target.value })}
                    className="w-full h-10 px-3 text-[14px] text-[#171717] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)]"
                    style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1–10 employees</option>
                    <option value="11-50">11–50 employees</option>
                    <option value="51-200">51–200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#171717] mb-1.5">Monthly Marketing Budget</label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    className="w-full h-10 px-3 text-[14px] text-[#171717] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)]"
                    style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
                  >
                    <option value="">Select budget</option>
                    <option value="under-1k">Under €1,000</option>
                    <option value="1k-3k">€1,000–€3,000</option>
                    <option value="3k-10k">€3,000–€10,000</option>
                    <option value="10k+">€10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#171717] mb-1.5">
                  What would you like to discuss? <span className="text-[#808080]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3 py-2.5 text-[14px] text-[#171717] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)] resize-none"
                  style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
                  placeholder="Tell me about your current setup, what's not working, and what outcome you're looking for."
                />
              </div>

              <div className="text-[12px] text-[#808080] leading-[1.6]">
                By submitting, you consent to being contacted about your enquiry. Your data is processed in accordance with our{' '}
                <Link href="/privacy" className="text-[#0072f5] underline">Privacy Policy</Link>. We do not share your data with third parties.
              </div>

              <button
                type="submit"
                className="w-full h-11 text-[15px] font-medium text-white bg-[#171717] rounded-[6px] hover:opacity-90 transition-opacity"
              >
                Request a Consultation
              </button>
            </form>
          )}
        </div>

        {/* Info panel */}
        <div>
          <h2 className="text-[22px] font-semibold text-[#171717] tracking-[-0.05rem] mb-6">
            What to expect
          </h2>
          <div className="space-y-6 mb-10">
            {whatToExpect.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-[6px] bg-[#fafafa] flex items-center justify-center shrink-0" style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}>
                    <Icon size={16} className="text-[#171717]" />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-[#171717] mb-1">{item.title}</div>
                    <div className="text-[14px] text-[#666666] leading-[1.55]">{item.description}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-6 rounded-[8px] bg-[#fafafa]" style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}>
            <div className="text-[13px] font-semibold text-[#171717] uppercase tracking-wider mb-3">Prefer email?</div>
            <p className="text-[14px] text-[#666666] mb-3">Send a message directly and I'll respond within 24 hours.</p>
            <a
              href="mailto:hello@get-excel.com"
              className="text-[14px] font-medium text-[#171717] inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
            >
              hello@get-excel.com <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
