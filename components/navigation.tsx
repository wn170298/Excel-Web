'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './language-toggle';

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

export default function Navigation({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => {
    const localePath = getLocalePath(path, locale);
    return pathname === localePath || pathname.startsWith(localePath + '/');
  };

  const homePath = getLocalePath('/', locale);
  const isHomepage = pathname === homePath || pathname === '/';
  const isDark = isHomepage && !scrolled;

  const navLinks = [
    { href: '/services', label: t('services') },
    { href: '/results',  label: t('results')  },
    { href: '/blog',     label: t('resources') },
    { href: '/about',    label: t('about')     },
  ];

  return (
    <nav
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{
        background: isDark ? 'rgba(10,10,10,0.85)' : 'rgba(255,255,255,0.95)',
        boxShadow: scrolled
          ? isDark
            ? '0px 1px 0px rgba(255,255,255,0.07)'
            : '0px 1px 0px rgba(0,0,0,0.08)'
          : 'none',
        transition: 'background 0.3s ease, box-shadow 0.2s ease',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href={getLocalePath('/', locale)} className="flex items-center shrink-0">
          <Image
            src="/logo.webp"
            alt="Excel"
            width={96}
            height={30}
            priority
            className="h-7 w-auto"
            style={{
              filter: isDark ? 'invert(1) brightness(10)' : 'none',
              transition: 'filter 0.3s ease',
            }}
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getLocalePath(link.href, locale)}
              className={`px-3.5 py-1.5 rounded-[6px] text-[13.5px] font-medium transition-all ${
                isActive(link.href)
                  ? isDark
                    ? 'text-white bg-white/10'
                    : 'text-[#0a0a0a] bg-[#f5f5f5]'
                  : isDark
                  ? 'text-white/55 hover:text-white hover:bg-white/10'
                  : 'text-[#555555] hover:text-[#0a0a0a] hover:bg-[#f5f5f5]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle locale={locale} isDark={isDark} />
          <Link
            href={getLocalePath('/book', locale)}
            className={`h-9 px-4 text-[13px] font-medium rounded-[6px] inline-flex items-center hover:opacity-85 transition-opacity ${
              isDark ? 'text-[#0a0a0a] bg-white' : 'text-white bg-[#0a0a0a]'
            }`}
          >
            {t('bookCta')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-[6px] transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-[#f5f5f5]'}`}
          style={{ color: isDark ? 'rgba(255,255,255,0.70)' : '#0a0a0a' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-6 py-5 flex flex-col gap-1"
          style={{
            background: isDark ? '#0a0a0a' : '#ffffff',
            borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#e8e8e8',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getLocalePath(link.href, locale)}
              className={`text-[15px] font-medium py-2.5 px-3 rounded-[6px] transition-colors ${
                isActive(link.href)
                  ? isDark ? 'text-white bg-white/10' : 'text-[#0a0a0a] bg-[#f5f5f5]'
                  : isDark ? 'text-white/60' : 'text-[#555555]'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div
            className="pt-3 flex items-center justify-between border-t mt-2"
            style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#e8e8e8' }}
          >
            <LanguageToggle locale={locale} isDark={isDark} />
            <Link
              href={getLocalePath('/book', locale)}
              className={`h-9 px-4 text-[13px] font-medium rounded-[6px] inline-flex items-center ${
                isDark ? 'text-[#0a0a0a] bg-white' : 'text-white bg-[#0a0a0a]'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {t('bookCta')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
