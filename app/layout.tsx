import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Excel — Digital Marketing Consultancy',
    template: '%s | Excel',
  },
  description: 'Excel helps SMEs build high-performance marketing infrastructure — SEO, paid ads, automation, and analytics that actually work together.',
  metadataBase: new URL('https://get-excel.com'),
  openGraph: {
    type: 'website',
    siteName: 'Excel Consultancy',
    images: [{ url: '/logo.webp' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased bg-white text-[#171717]">
        {children}
      </body>
    </html>
  );
}
