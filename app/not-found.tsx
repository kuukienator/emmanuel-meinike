import React, { FC } from 'react';
import Head from 'next/head';
import Link from '../components/Link';
import ErrorContainer from '../components/ErrorContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ema (Emmanuel Meinike) - 404',
  description: 'Emmanuel Meinike 404',
};

const GIFS = [
  'https://media.giphy.com/media/VhzOTQPuNZwM0xMIOn/giphy.gif',
  'https://media.giphy.com/media/xRvMWkuZt2ChfdtdUv/giphy.gif',
  'https://media.giphy.com/media/1pIBvIHRtLNOsDXXzA/giphy.gif',
  'https://media.giphy.com/media/RJiEXM2vreYQFdagyA/giphy.gif',
  'https://media.giphy.com/media/24FCKQU007NTI0YoZO/giphy.gif',
  'https://media.giphy.com/media/1zKf0WqsXFhssE2c7e/giphy.gif',
];

const NotFound: FC = () => {
  return (
    <ErrorContainer
      gifs={GIFS}
      label="404"
      message={
        <>
          You look lost, maybe you should go <Link url="/" label="Home" />.
        </>
      }
    />
  );
};

export default NotFound;
