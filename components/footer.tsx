import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Mail, MapPin, ArrowUpRight, Phone } from 'lucide-react';

function getLocalePath(path: string, locale: string) {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

export default function Footer({ locale }: { locale: string }) {
  const services = [
    { href: `${getLocalePath('/services', locale)}#seo`,        label: 'Search Engine Optimisation' },
    { href: `${getLocalePath('/services', locale)}#ppc`,        label: 'Paid Advertising (PPC)' },
    { href: `${getLocalePath('/services', locale)}#social`,     label: 'Social Media Advertising' },
    { href: `${getLocalePath('/services', locale)}#web`,        label: 'Web Design & Development' },
    { href: `${getLocalePath('/services', locale)}#automation`, label: 'Marketing Automation' },
    { href: `${getLocalePath('/services', locale)}#analytics`,  label: 'Analytics & Attribution' },
  ];

  const resources = [
    { href: getLocalePath('/blog', locale), label: 'All Articles' },
    { href: getLocalePath('/ai', locale), label: 'AI Marketing' },
    { href: getLocalePath('/blog', locale), label: 'Performance Marketing' },
    { href: getLocalePath('/blog', locale), label: 'Privacy Guides' },
    { href: getLocalePath('/privacy', locale), label: 'Privacy Policy' },
  ];

  return (
    <footer className="border-t border-[#e8e8e8] dark:border-[#2a2a2a] bg-[#fafafa] dark:bg-[#0d0d0d]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2">
            <Link href={getLocalePath('/', locale)}>
              <Image
                src="/logo.webp"
                alt="Excel"
                width={80}
                height={25}
                className="h-6 w-auto mb-4 dark:invert"
              />
            </Link>
            <p className="text-[14px] text-[#666666] dark:text-[#888888] leading-[1.65] max-w-[240px] mb-5">
              Digital marketing infrastructure for businesses that mean business.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hello@get-excel.com"
                className="flex items-center gap-2 text-[13px] text-[#666666] dark:text-[#888888] hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
              >
                <Mail size={13} />
                hello@get-excel.com
              </a>
              <a
                href="tel:+393444424021"
                className="flex items-center gap-2 text-[13px] text-[#666666] dark:text-[#888888] hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
              >
                <Phone size={13} />
                +39 344 442 4021
              </a>
              <div className="flex items-center gap-2 text-[13px] text-[#666666] dark:text-[#888888]">
                <MapPin size={13} />
                Rome, Italy · serving globally
              </div>
              <a
                href="https://www.linkedin.com/in/wali-nori/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] text-[#666666] dark:text-[#888888] hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
              >
                <Linkedin size={13} />
                LinkedIn
                <ArrowUpRight size={11} className="text-[#808080]" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#0a0a0a] dark:text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13.5px] text-[#666666] dark:text-[#888888] hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#0a0a0a] dark:text-white uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13.5px] text-[#666666] dark:text-[#888888] hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-[#e8e8e8] dark:border-[#2a2a2a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-[#999999] dark:text-[#555555]">
            © {new Date().getFullYear()} Excel Consultancy. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <p className="text-[12px] text-[#999999] dark:text-[#555555]">
              GDPR compliant. Serving clients worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
