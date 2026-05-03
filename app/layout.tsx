import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: 'Excel — Digital Marketing Consultancy',
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
      </head>
      <body className="font-sans antialiased bg-white dark:bg-[#0a0a0a] text-[#171717] dark:text-white transition-colors duration-200 overflow-x-hidden">
        <ThemeProvider>{children}</ThemeProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-22V9SS61ZH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-22V9SS61ZH');`}
        </Script>
      </body>
    </html>
  );
}
