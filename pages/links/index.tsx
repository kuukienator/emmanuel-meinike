import Head from 'next/head';
import React, { FC } from 'react';
import { LinkElement } from '../../components/Link';
import { CODE, CONTACT } from '../../data';

export async function getStaticProps({}) {
  return {
    props: { links: [...CODE, ...CONTACT] },
  };
}

const Links: FC<{ links: Array<LinkElement> }> = ({ links }) => (
  <>
    <Head>
      <title>Ema (Emmanuel Meinike) - links</title>
      <meta name="description" content="Emmanuel Meinike links" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="px-4 mt-8 md:px-10 flex justify-center flex-col items-center">
      <h1 className="font-serif text-4xl text-left mb-8 font-bold sm:text-6xl">
        <p>Ema&#39;s Links</p>
      </h1>
      <div className="flex flex-col text-xl text-center uppercase">
        {links.map((link) => (
          <a
            className="border-4 p-3 px-10 mb-3 bg-primary text-highlight hover:opacity-80"
            key={link.label + link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </main>
  </>
);

export default Links;
