'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

type ConsentPrefs = { analytics: boolean; advertising: boolean };

function applyGtag(analytics: boolean, advertising: boolean) {
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: advertising ? 'granted' : 'denied',
      personalization_storage: advertising ? 'granted' : 'denied',
    });
  }
}

function loadStored(): ConsentPrefs | null {
  try {
    const raw = localStorage.getItem('cookie-consent');
    if (!raw) return null;
    // Legacy format (plain string)
    if (raw === 'granted') return { analytics: true, advertising: true };
    if (raw === 'denied') return { analytics: false, advertising: false };
    return JSON.parse(raw) as ConsentPrefs;
  } catch {
    return null;
  }
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`shrink-0 w-10 h-6 rounded-full transition-colors duration-200 flex items-center ${
        checked ? 'bg-[#0068d6] justify-end pr-1' : 'bg-[#d4d4d4] dark:bg-[#444] justify-start pl-1'
      }`}
    >
      <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
    </button>
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState<ConsentPrefs>({ analytics: false, advertising: false });

  useEffect(() => {
    const stored = loadStored();
    if (!stored) {
      setVisible(true);
    } else {
      applyGtag(stored.analytics, stored.advertising);
    }
  }, []);

  const save = (analytics: boolean, advertising: boolean) => {
    localStorage.setItem('cookie-consent', JSON.stringify({ analytics, advertising }));
    applyGtag(analytics, advertising);
    setVisible(false);
    setShowModal(false);
  };

  const acceptAll = () => save(true, true);
  const declineAll = () => save(false, false);
  const savePrefs = () => save(prefs.analytics, prefs.advertising);

  if (!visible) return null;

  return (
    <>
      {/* Preferences modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div className="w-full max-w-[480px] bg-white dark:bg-[#161616] rounded-[16px] border border-[#ebebeb] dark:border-[#2a2a2a] shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#ebebeb] dark:border-[#2a2a2a]">
              <h2 className="text-[15px] font-semibold text-[#171717] dark:text-white">Cookie Preferences</h2>
              <button
                onClick={() => setShowModal(false)}
                aria-label="Close preferences"
                className="text-[#999] hover:text-[#171717] dark:hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-5 py-4 space-y-5">
              {/* Essential */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[14px] font-medium text-[#171717] dark:text-white">Essential</p>
                  <p className="text-[12px] text-[#666] dark:text-[#888] mt-0.5 leading-[1.5]">
                    Required for the site to function. Cannot be disabled.
                  </p>
                </div>
                <div className="shrink-0 w-10 h-6 rounded-full bg-[#0068d6] flex items-center justify-end pr-1 opacity-50 cursor-not-allowed">
                  <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[14px] font-medium text-[#171717] dark:text-white">Analytics</p>
                  <p className="text-[12px] text-[#666] dark:text-[#888] mt-0.5 leading-[1.5]">
                    Google Analytics helps us understand how visitors use our site so we can improve it.
                  </p>
                </div>
                <Toggle
                  checked={prefs.analytics}
                  onChange={() => setPrefs((p) => ({ ...p, analytics: !p.analytics }))}
                />
              </div>

              {/* Advertising */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[14px] font-medium text-[#171717] dark:text-white">Advertising</p>
                  <p className="text-[12px] text-[#666] dark:text-[#888] mt-0.5 leading-[1.5]">
                    Enables personalised ads and remarketing via Google Ads.
                  </p>
                </div>
                <Toggle
                  checked={prefs.advertising}
                  onChange={() => setPrefs((p) => ({ ...p, advertising: !p.advertising }))}
                />
              </div>
            </div>

            <div className="flex gap-3 px-5 py-4 border-t border-[#ebebeb] dark:border-[#2a2a2a]">
              <button
                onClick={savePrefs}
                className="flex-1 h-10 text-[13px] font-semibold rounded-[8px] bg-[#0068d6] text-white hover:bg-[#0055b3] transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 h-10 text-[13px] font-semibold rounded-[8px] border border-[#0068d6] text-[#0068d6] hover:bg-[#0068d6]/5 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom banner */}
      <div
        role="dialog"
        aria-label="Cookie consent"
        aria-modal="true"
        className="fixed bottom-0 left-0 right-0 z-[100] bg-white dark:bg-[#161616] border-t border-[#ebebeb] dark:border-[#2a2a2a] shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
        style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
      >
        <div className="max-w-[1200px] mx-auto px-4 pt-4 sm:px-6 sm:pt-5 pb-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 justify-between pb-4 sm:pb-5">
            <p className="text-[13px] text-[#555555] dark:text-[#888888] leading-[1.6]">
              We use cookies to understand how visitors use our site (Google Analytics). No personal data is sold.{' '}
              <a href="/privacy" className="underline hover:text-[#0068d6] transition-colors">
                Privacy Policy
              </a>
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={declineAll}
                className="flex-1 sm:flex-none h-9 px-3 text-[13px] font-medium rounded-[6px] border border-[#ebebeb] dark:border-[#2a2a2a] text-[#555555] dark:text-[#888888] hover:border-[#aaaaaa] transition-colors whitespace-nowrap"
              >
                Decline
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="flex-1 sm:flex-none h-9 px-3 text-[13px] font-medium rounded-[6px] border border-[#ebebeb] dark:border-[#2a2a2a] text-[#555555] dark:text-[#888888] hover:border-[#aaaaaa] transition-colors whitespace-nowrap"
              >
                Preferences
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 sm:flex-none h-9 px-3 text-[13px] font-semibold rounded-[6px] bg-[#0068d6] text-white hover:bg-[#0055b3] transition-colors whitespace-nowrap"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
