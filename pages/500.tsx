import React, { FC } from 'react';
import Head from 'next/head';
import Link from '../components/Link';
import ErrorContainer from '../components/ErrorContainer';

const GIFS = ['https://media.giphy.com/media/xUPGcLyG1vxvvkE2U8/giphy.gif'];

const Custom500: FC = () => {
  return (
    <>
      <Head>
        <title>Ema (Emmanuel Meinike) - 500</title>
        <meta name="description" content="Emmanuel Meinike 500" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorContainer
        gifs={GIFS}
        label="500"
        message={
          <>
            Something went really wrong, maybe you should go{' '}
            <Link url="/" label="Home" />.
          </>
        }
      />
    </>
  );
};

export default Custom500;
