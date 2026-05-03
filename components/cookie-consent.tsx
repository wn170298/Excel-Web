'use client';

import { useState, useEffect } from 'react';

declare function gtag(...args: unknown[]): void;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
    else if (consent === 'granted') grantConsent();
  }, []);

  function grantConsent() {
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted' });
    }
  }

  const accept = () => {
    localStorage.setItem('cookie-consent', 'granted');
    grantConsent();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'denied');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 bg-white dark:bg-[#161616] border-t border-[#ebebeb] dark:border-[#2a2a2a] shadow-lg"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-[13px] text-[#555555] dark:text-[#888888] leading-[1.6] max-w-[680px]">
          We use cookies to understand how visitors use our site (Google Analytics). No personal data is sold.{' '}
          <a href="/privacy" className="underline hover:text-[#0068d6] transition-colors">
            Privacy Policy
          </a>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="h-9 px-4 text-[13px] font-medium rounded-[6px] border border-[#ebebeb] dark:border-[#2a2a2a] text-[#555555] dark:text-[#888888] hover:border-[#aaaaaa] transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="h-9 px-4 text-[13px] font-semibold rounded-[6px] bg-[#0068d6] text-white hover:bg-[#0055b3] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
