import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Bulk Report — Bulk Freight Trucking Industry News',
    template: '%s | Bulk Report',
  },
  description:
    'Industry news, market updates, and regulatory insights for bulk freight haulers. Powered by BulkLoads.com.',
  openGraph: {
    type: 'website',
    siteName: 'Bulk Report',
    locale: 'en_US',
  },
  metadataBase: new URL('https://bulkreport.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
