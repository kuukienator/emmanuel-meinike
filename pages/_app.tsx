import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ColorSchemeToggle from '../components/ColorSchemeToggle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {/* <ColorSchemeToggle /> */}
      <Footer />
    </>
  );
}
export default MyApp;
