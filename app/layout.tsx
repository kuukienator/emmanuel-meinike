import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Rubik, Zilla_Slab } from 'next/font/google';

import './globals.css';
import 'tailwindcss/tailwind.css';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-rubik',
});

const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-zilla-slab',
});

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${zillaSlab.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
