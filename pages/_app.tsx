import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ColorSchemeToggle from '../components/ColorSchemeToggle';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

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
