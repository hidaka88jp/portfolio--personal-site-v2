import type { Metadata, Viewport } from 'next';
import './globals.css';
import clsx from 'clsx';

import { Inter } from 'next/font/google';
import { Inconsolata } from 'next/font/google';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
});

if (!process.env.SITE_URL) {
  throw new Error('SITE_URL is not defined');
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL),
  title: {
    template: '%s | TAKANORI HIDAKA',
    default: 'TAKANORI HIDAKA',
  },
  description: "Showcasing my projects and things I've learned",

  openGraph: {
    siteName: 'TAKANORI HIDAKA',
    description: "Showcasing my projects and things I've learned",
    images: ['/ogp.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={clsx(inter.variable, inconsolata.variable, 'scroll-smooth')}>
      <body className='text-gray flex min-h-screen flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
