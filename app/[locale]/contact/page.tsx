'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Linkedin, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20">
      {/* Header */}
      <div className="max-w-[560px] mb-16">
        <h1 className="text-[52px] font-semibold tracking-[-0.15rem] text-[#171717] mb-4 leading-[1.05]">
          Let's Build Your<br />Marketing System
        </h1>
        <p className="text-[17px] text-[#4d4d4d] leading-[1.65]">
          Ready to connect your tools and start measuring what matters? Send a message or book a call directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
        {/* Form */}
        <div>
          {submitted ? (
            <div
              className="p-12 rounded-[12px] bg-white text-center"
              style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 2px rgba(0,0,0,0.04)' }}
            >
              <div className="w-12 h-12 rounded-full bg-[#171717] flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={22} className="text-white" />
              </div>
              <h2 className="text-[22px] font-semibold text-[#171717] mb-3">Message sent</h2>
              <p className="text-[15px] text-[#666666] max-w-[320px] mx-auto leading-[1.65]">
                I'll respond within 24 hours. Check your inbox — and spam folder just in case.
              </p>
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
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full h-10 px-3 text-[14px] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)]"
                    style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#171717] mb-1.5">
                    Work Email <span className="text-[#808080]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full h-10 px-3 text-[14px] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)]"
                    style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-[#171717] mb-1.5">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Ltd"
                    className="w-full h-10 px-3 text-[14px] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)]"
                    style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#171717] mb-1.5">Service of Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-10 px-3 text-[14px] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)]"
                    style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
                  >
                    <option value="">Select a service</option>
                    <option value="launch">Launch Package</option>
                    <option value="growth">Growth Retainer</option>
                    <option value="scale">Scale Plan</option>
                    <option value="market-leader">Market Leader</option>
                    <option value="audit">Stack Audit</option>
                    <option value="other">Other / Not sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#171717] mb-1.5">
                  Message <span className="text-[#808080]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your current marketing setup, what's broken, and what outcome you're looking for."
                  className="w-full px-3 py-2.5 text-[14px] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)] resize-none"
                  style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
                />
              </div>

              <div className="text-[12px] text-[#808080] leading-[1.6]">
                Your data is processed in accordance with GDPR and the Australian Privacy Act. It will only be used to respond to your enquiry and will not be shared with third parties. See our{' '}
                <Link href="/privacy" className="text-[#0072f5] underline">Privacy Policy</Link>.
              </div>

              <button
                type="submit"
                className="w-full h-11 text-[15px] font-medium text-white bg-[#171717] rounded-[6px] hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact info sidebar */}
        <div className="space-y-6">
          {/* Profile card */}
          <div
            className="p-6 rounded-[8px] bg-white"
            style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 2px rgba(0,0,0,0.04), 0px 0px 0px 1px #fafafa' }}
          >
            <div className="flex items-center gap-4 mb-5">
              <Image
                src="/profile.jpeg"
                alt="Wali Nori"
                width={56}
                height={56}
                className="rounded-full object-cover"
                style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
              />
              <div>
                <div className="text-[16px] font-semibold text-[#171717]">Wali Nori</div>
                <div className="text-[13px] text-[#666666]">Founder, Excel Consultancy</div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:hello@get-excel.com"
                className="flex items-center gap-3 text-[14px] text-[#4d4d4d] hover:text-[#171717] transition-colors"
              >
                <Mail size={15} className="text-[#808080]" />
                hello@get-excel.com
              </a>
              <a
                href="https://www.linkedin.com/in/walinoorzad/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[14px] text-[#4d4d4d] hover:text-[#171717] transition-colors"
              >
                <Linkedin size={15} className="text-[#808080]" />
                linkedin.com/in/walinoorzad
              </a>
              <div className="flex items-center gap-3 text-[14px] text-[#4d4d4d]">
                <MapPin size={15} className="text-[#808080]" />
                Perth, Australia (GMT+8)
              </div>
              <div className="flex items-center gap-3 text-[14px] text-[#4d4d4d]">
                <Clock size={15} className="text-[#808080]" />
                Response within 24 hours
              </div>
            </div>
          </div>

          {/* GDPR note */}
          <div
            className="p-5 rounded-[8px] bg-[#fafafa]"
            style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              <span className="text-[12px] font-semibold text-[#171717] uppercase tracking-wider">GDPR Compliant</span>
            </div>
            <p className="text-[13px] text-[#666666] leading-[1.55]">
              All communications comply with GDPR and the Australian Privacy Act. Your data is never sold or shared with third parties.
            </p>
          </div>

          {/* Book call CTA */}
          <div
            className="p-5 rounded-[8px] bg-[#171717]"
          >
            <p className="text-[14px] text-white font-medium mb-1">Prefer a call?</p>
            <p className="text-[13px] text-[rgba(255,255,255,0.5)] mb-4">
              Book a free 30-minute strategy session directly.
            </p>
            <Link
              href="/book"
              className="w-full h-9 rounded-[6px] text-[13px] font-medium text-[#171717] bg-white inline-flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
