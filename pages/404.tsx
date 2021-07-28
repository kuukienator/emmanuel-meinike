import React, { FC } from 'react';
import Head from 'next/head';
import Link from '../components/Link';
import ErrorContainer from '../components/ErrorContainer';

const GIFS = [
  'https://media.giphy.com/media/VhzOTQPuNZwM0xMIOn/giphy.gif',
  'https://media.giphy.com/media/xRvMWkuZt2ChfdtdUv/giphy.gif',
  'https://media.giphy.com/media/1pIBvIHRtLNOsDXXzA/giphy.gif',
  'https://media.giphy.com/media/RJiEXM2vreYQFdagyA/giphy.gif',
  'https://media.giphy.com/media/24FCKQU007NTI0YoZO/giphy.gif',
  'https://media.giphy.com/media/1zKf0WqsXFhssE2c7e/giphy.gif',
];

const Custom404: FC = () => {
  return (
    <>
      <Head>
        <title>Ema (Emmanuel Meinike) - 404</title>
        <meta name="description" content="Emmanuel Meinike 404" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorContainer
        gifs={GIFS}
        label="404"
        message={
          <>
            You look lost, maybe you should go <Link url="/" label="Home" />.
          </>
        }
      />
    </>
  );
};

export default Custom404;
