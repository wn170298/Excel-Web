'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'it', label: 'IT', full: 'Italiano' },
  { code: 'de', label: 'DE', full: 'Deutsch' },
];

export default function LanguageToggle({ locale, isDark }: { locale: string; isDark?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    const knownLocales = ['en', 'it', 'de'];

    if (knownLocales.includes(segments[1])) {
      if (newLocale === 'en') {
        segments.splice(1, 1);
      } else {
        segments[1] = newLocale;
      }
    } else {
      if (newLocale !== 'en') {
        segments.splice(1, 0, newLocale);
      }
    }

    const newPath = segments.join('/') || '/';
    router.push(newPath);
    if (typeof window !== 'undefined') {
      localStorage.setItem('excel-locale', newLocale);
    }
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-[13px] font-medium transition-colors px-2 py-1 rounded-md ${isDark ? 'text-white/60 hover:text-white hover:bg-white/10' : 'text-[#666666] hover:text-[#171717] hover:bg-[#fafafa]'}`}
        aria-label="Switch language"
      >
        {locale.toUpperCase()}
        <ChevronDown size={12} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          className="absolute top-full right-0 mt-1 bg-white rounded-[8px] py-1 w-28 z-50"
          style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 4px 12px rgba(0,0,0,0.08)' }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`w-full px-3 py-2 text-left text-[13px] hover:bg-[#fafafa] transition-colors flex items-center gap-2 ${
                locale === lang.code ? 'text-[#171717] font-semibold' : 'text-[#4d4d4d] font-medium'
              }`}
            >
              <span className="font-mono text-[11px] text-[#808080] w-6">{lang.label}</span>
              <span>{lang.full}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
