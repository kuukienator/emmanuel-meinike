import React from 'react';
import { LinkElement } from '../../components/Link';
import { APPS } from '../../data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ema (Emmanuel Meinike) - apps',
  description: 'Emmanuel Meinike apps',
};

const AppsPage = () => {
  const links: Array<LinkElement> = [...APPS];
  return (
    <main className="px-4 py-8 md:px-10 flex justify-center flex-col items-center bg-primary flex-grow">
      <h1 className="font-serif text-4xl text-left mb-8 font-bold sm:text-6xl text-highlight">
        <p>Ema&#39;s Apps</p>
      </h1>
      <div className="flex flex-col text-xl text-center uppercase">
        {links.map((link) => (
          <a
            className="p-3  mb-3 bg-highlight text-copy hover:opacity-80 w-64"
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
  );
};

export default AppsPage;
