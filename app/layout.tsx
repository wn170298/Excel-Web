import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';
import CookieConsent from '@/components/cookie-consent';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: 'Excel | Digital Marketing Consultancy',
    template: '%s | Excel',
  },
  description:
    'Excel helps brands reach their full online digital marketing potential through SEO, PPC, social media advertising, and AI-powered strategies.',
  metadataBase: new URL('https://get-excel.com'),
  openGraph: {
    type: 'website',
    siteName: 'Excel Consultancy',
    images: [{ url: '/logo.webp' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash: set dark class before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark');})();`,
          }}
        />
        {/* GA4 Consent Mode v2 — defaults to denied until user accepts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'analytics_storage':'denied','ad_storage':'denied','wait_for_update':500});`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#fdf9f5] dark:bg-[#080808] text-[#171717] dark:text-white transition-colors duration-200 overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NKNJGC6S"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider>
          <div className="grain-overlay" aria-hidden />
          {children}
          <CookieConsent />
        </ThemeProvider>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NKNJGC6S');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-22V9SS61ZH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`gtag('js',new Date());gtag('config','G-22V9SS61ZH',{'anonymize_ip':true});`}
        </Script>
      </body>
    </html>
  );
}
