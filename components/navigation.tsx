'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './theme-provider';

const NAV_LINKS = [
  { path: '/services', label: 'Services' },
  { path: '/ai',       label: 'AI' },
  { path: '/blog',     label: 'Blog' },
  { path: '/contact',  label: 'Contact' },
];

function getPageHref(path: string, locale: string) {
  return locale === 'en' ? path : `/${locale}${path}`;
}

function getHomePath(locale: string) {
  return locale === 'en' ? '/' : `/${locale}`;
}

export default function Navigation({ locale }: { locale: string }) {
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isHome = pathname === getHomePath(locale);
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActive = (path: string) => {
    const href = getPageHref(path, locale);
    return pathname === href || pathname.startsWith(href + '/');
  };

  const getLinkClass = (path: string) => {
    const active = isActive(path);
    return `px-3.5 py-1.5 rounded-[6px] text-[13.5px] font-medium transition-all ${
      isDark
        ? active
          ? 'text-white bg-white/10'
          : 'text-white/65 hover:text-white hover:bg-white/10'
        : active
          ? 'text-[#0a0a0a] bg-[#f0f0f0]'
          : 'text-[#555555] hover:text-[#0a0a0a] hover:bg-[#f5f5f5]'
    }`;
  };

  const getMobileLinkClass = (path: string) => {
    const active = isActive(path);
    return `text-[15px] font-medium py-2.5 px-3 rounded-[6px] transition-colors ${
      isDark
        ? active
          ? 'text-white bg-white/10'
          : 'text-white/60 hover:text-white hover:bg-white/10'
        : active
          ? 'text-[#0a0a0a] bg-[#f0f0f0]'
          : 'text-[#555555] hover:text-[#0a0a0a] hover:bg-[#f5f5f5]'
    }`;
  };

  const navBg = isDark
    ? scrolled ? 'bg-[#0a0a0a]/95 border-b border-white/10' : 'bg-[#0a0a0a]/85'
    : scrolled ? 'bg-white/95 border-b border-[#ebebeb]' : 'bg-white/85';

  return (
    <nav className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${navBg}`}>
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <a
          href={getHomePath(locale)}
          onClick={handleLogoClick}
          className="flex items-center shrink-0"
        >
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
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5 flex-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              href={getPageHref(link.path, locale)}
              className={getLinkClass(link.path)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: theme + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={`p-2 rounded-[6px] transition-colors ${
              isDark
                ? 'text-white/65 hover:text-white hover:bg-white/10'
                : 'text-[#555555] hover:text-[#0a0a0a] hover:bg-[#f5f5f5]'
            }`}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="https://calendly.com/wali-noorzad12/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`h-9 px-4 text-[13px] font-semibold rounded-[6px] inline-flex items-center hover:opacity-85 transition-opacity ${
              isDark ? 'bg-white text-[#0a0a0a]' : 'bg-[#0a0a0a] text-white'
            }`}
          >
            Book a Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-[6px] transition-colors ${
            isDark ? 'text-white/70 hover:bg-white/10' : 'text-[#0a0a0a] hover:bg-[#f5f5f5]'
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className={`md:hidden border-t px-6 py-5 flex flex-col gap-1 ${
            isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-[#e8e8e8]'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              href={getPageHref(link.path, locale)}
              onClick={() => setMobileOpen(false)}
              className={getMobileLinkClass(link.path)}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={`pt-3 flex items-center justify-between border-t mt-2 ${
              isDark ? 'border-white/10' : 'border-[#e8e8e8]'
            }`}
          >
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`p-2 rounded-[6px] transition-colors ${
                isDark ? 'text-white/65 hover:bg-white/10' : 'text-[#555555] hover:bg-[#f5f5f5]'
              }`}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="https://calendly.com/wali-noorzad12/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className={`h-9 px-4 text-[13px] font-semibold rounded-[6px] inline-flex items-center ${
                isDark ? 'bg-white text-[#0a0a0a]' : 'bg-[#0a0a0a] text-white'
              }`}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
