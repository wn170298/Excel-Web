import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');

  const services = [
    { href: '/services', label: 'SEO & Content' },
    { href: '/services', label: 'Paid Advertising' },
    { href: '/services', label: 'Web Design & Dev' },
    { href: '/services', label: 'Marketing Automation' },
    { href: '/services', label: 'Analytics & Attribution' },
    { href: '/services', label: 'Privacy & Compliance' },
  ];

  const company = [
    { href: '/about',   label: t('aboutUs') },
    { href: '/results', label: 'Client Results' },
    { href: '/book',    label: t('bookConsultation') },
    { href: '/contact', label: t('contact') },
  ];

  const resources = [
    { href: '/blog',                        label: t('allArticles') },
    { href: '/blog?category=privacy',       label: t('privacyGuides') },
    { href: '/blog?category=attribution',   label: t('attributionGuides') },
    { href: '/blog?category=performance',   label: t('performanceGuides') },
    { href: '/blog?category=email',         label: t('emailGuides') },
    { href: '/privacy',                     label: t('privacyPolicy') },
  ];

  return (
    <footer className="border-t border-[#e8e8e8] bg-[#fafafa]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Link href={getLocalePath('/', locale)}>
              <Image src="/logo.webp" alt="Excel" width={80} height={25} className="h-6 w-auto mb-4" />
            </Link>
            <p className="text-[14px] text-[#666666] leading-[1.65] max-w-[240px] mb-5">
              {t('tagline')}
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hello@get-excel.com"
                className="flex items-center gap-2 text-[13px] text-[#666666] hover:text-[#0a0a0a] transition-colors"
              >
                <Mail size={13} />
                hello@get-excel.com
              </a>
              <div className="flex items-center gap-2 text-[13px] text-[#666666]">
                <MapPin size={13} />
                Perth, Australia · serving globally
              </div>
              <a
                href="https://www.linkedin.com/in/walinoorzad/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] text-[#666666] hover:text-[#0a0a0a] transition-colors"
              >
                <Linkedin size={13} />
                LinkedIn
                <ArrowUpRight size={11} className="text-[#808080]" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#0a0a0a] uppercase tracking-wider mb-4">{t('services')}</h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={getLocalePath(item.href, locale)}
                    className="text-[13.5px] text-[#666666] hover:text-[#0a0a0a] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#0a0a0a] uppercase tracking-wider mb-4">{t('company')}</h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={getLocalePath(item.href, locale)}
                    className="text-[13.5px] text-[#666666] hover:text-[#0a0a0a] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#0a0a0a] uppercase tracking-wider mb-4">{t('resources')}</h4>
            <ul className="space-y-2.5">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={getLocalePath(item.href, locale)}
                    className="text-[13.5px] text-[#666666] hover:text-[#0a0a0a] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#e8e8e8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-[#999999]">{t('copyright')}</p>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <p className="text-[12px] text-[#999999]">{t('gdprNote')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
