'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const plans = [
  { id: 'launch', name: 'Launch', price: '€2,000', billing: 'one-time', popular: false },
  { id: 'growth', name: 'Growth', price: '€1,200', billing: '/month', popular: true },
  { id: 'scale', name: 'Scale', price: '€2,000', billing: '/month', popular: false },
  { id: 'market-leader', name: 'Market Leader', price: '€3,000', billing: '/month', popular: false },
];

export default function RegisterPage() {
  const [selectedPlan, setSelectedPlan] = useState('growth');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', country: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-[800px] mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-[44px] font-semibold tracking-[-0.12rem] text-[#171717] mb-4">
          Start Growing with Excel
        </h1>
        <p className="text-[17px] text-[#666666]">
          Select a plan and tell us about your business. We'll be in touch within 24 hours.
        </p>
      </div>

      {/* Steps indicator */}
      <div className="flex items-center justify-center gap-4 mb-10">
        {[{ n: 1, label: 'Select plan' }, { n: 2, label: 'Your details' }].map(({ n, label }) => (
          <div key={n} className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-semibold ${
                step >= n ? 'bg-[#171717] text-white' : 'bg-[#ebebeb] text-[#808080]'
              }`}
            >
              {step > n ? <CheckCircle2 size={14} /> : n}
            </div>
            <span className={`text-[13px] font-medium ${step >= n ? 'text-[#171717]' : 'text-[#808080]'}`}>{label}</span>
            {n < 2 && <div className={`w-12 h-px mx-2 ${step > n ? 'bg-[#171717]' : 'bg-[#ebebeb]'}`} />}
          </div>
        ))}
      </div>

      {submitted ? (
        <div
          className="p-12 rounded-[12px] bg-white text-center"
          style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 2px rgba(0,0,0,0.04)' }}
        >
          <div className="w-12 h-12 rounded-full bg-[#171717] flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={22} className="text-white" />
          </div>
          <h2 className="text-[24px] font-semibold text-[#171717] mb-3">You're in the queue</h2>
          <p className="text-[15px] text-[#666666] mb-6 max-w-[360px] mx-auto">
            I've received your details and I'll reach out within 24 hours to confirm your selected plan and next steps.
          </p>
          <Link href="/" className="text-[14px] font-medium text-[#0072f5] underline">Return to homepage</Link>
        </div>
      ) : step === 1 ? (
        /* Step 1 — Plan selection */
        <div>
          <h2 className="text-[18px] font-semibold text-[#171717] mb-5">Which plan fits your current stage?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`p-5 rounded-[8px] text-left transition-all ${
                  selectedPlan === plan.id
                    ? 'bg-[#171717] text-white'
                    : 'bg-white hover:bg-[#fafafa]'
                }`}
                style={{
                  boxShadow: selectedPlan === plan.id
                    ? 'none'
                    : '0px 0px 0px 1px rgba(0,0,0,0.08)',
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className={`text-[12px] font-semibold uppercase tracking-wider ${selectedPlan === plan.id ? 'text-[rgba(255,255,255,0.5)]' : 'text-[#808080]'}`}>
                    {plan.name}
                  </span>
                  {plan.popular && (
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${selectedPlan === plan.id ? 'bg-white text-[#171717]' : 'bg-[#ebf5ff] text-[#0068d6]'}`}>
                      Popular
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-[28px] font-semibold tracking-[-0.08rem] ${selectedPlan === plan.id ? 'text-white' : 'text-[#171717]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-[13px] ${selectedPlan === plan.id ? 'text-[rgba(255,255,255,0.4)]' : 'text-[#808080]'}`}>
                    {plan.billing}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep(2)}
            className="w-full h-11 text-[15px] font-medium text-white bg-[#171717] rounded-[6px] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Continue with {plans.find(p => p.id === selectedPlan)?.name} <ArrowRight size={16} />
          </button>
          <p className="text-center text-[13px] text-[#808080] mt-4">
            Not sure?{' '}
            <Link href="/book" className="text-[#0072f5] underline">Book a free call first</Link>
          </p>
        </div>
      ) : (
        /* Step 2 — Details form */
        <form onSubmit={handleSubmit} className="space-y-5">
          <div
            className="px-5 py-4 rounded-[8px] bg-[#fafafa] flex items-center justify-between mb-2"
            style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
          >
            <div>
              <span className="text-[12px] font-medium text-[#808080]">Selected plan</span>
              <span className="ml-2 text-[14px] font-semibold text-[#171717]">
                {plans.find(p => p.id === selectedPlan)?.name}
              </span>
            </div>
            <button onClick={() => setStep(1)} className="text-[13px] text-[#0072f5] underline">Change</button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith', required: true },
              { key: 'email', label: 'Work Email', type: 'email', placeholder: 'jane@company.com', required: true },
              { key: 'company', label: 'Company', type: 'text', placeholder: 'Acme Ltd', required: true },
              { key: 'phone', label: 'Phone (optional)', type: 'tel', placeholder: '+61 400 000 000', required: false },
            ].map(({ key, label, type, placeholder, required }) => (
              <div key={key}>
                <label className="block text-[13px] font-medium text-[#171717] mb-1.5">
                  {label} {required && <span className="text-[#808080]">*</span>}
                </label>
                <input
                  type={type}
                  required={required}
                  value={formData[key as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  placeholder={placeholder}
                  className="w-full h-10 px-3 text-[14px] text-[#171717] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)]"
                  style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[#171717] mb-1.5">Anything else we should know?</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Current tools, biggest challenges, timeline expectations..."
              className="w-full px-3 py-2.5 text-[14px] text-[#171717] bg-white rounded-[6px] outline-none focus:ring-2 focus:ring-[hsla(212,100%,48%,0.3)] resize-none"
              style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.12)' }}
            />
          </div>

          <div className="text-[12px] text-[#808080] leading-[1.6]">
            By submitting, you agree to our <Link href="/privacy" className="text-[#0072f5] underline">Privacy Policy</Link>. Your data will only be used to process your enquiry and will not be shared with third parties.
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="h-11 px-5 text-[14px] font-medium text-[#171717] rounded-[6px] hover:bg-[#fafafa] transition-colors"
              style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 h-11 text-[15px] font-medium text-white bg-[#171717] rounded-[6px] hover:opacity-90 transition-opacity"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
