import Header from '@/components/layouts/Header';
import PageWrapper from '@/components/layouts/PageWrapper';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';

const montserrat = Montserrat({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Maxi Market',
  description: 'Marketplace where you can buy anything',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="ua">
      <body className={montserrat.className + ' h-full'}>
        <PageWrapper>
          <Header />
          <main className="container flex-auto">{children}</main>
          <footer>This is footer</footer>
        </PageWrapper>
      </body>
    </html>
  );
}
