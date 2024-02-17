import Header from '@/components/layouts/Header';
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
    <html lang="ua">
      <body className={montserrat.className}>
        <Header />
        <main className="container">{children}</main>
        <footer>This is footer</footer>
      </body>
    </html>
  );
}
