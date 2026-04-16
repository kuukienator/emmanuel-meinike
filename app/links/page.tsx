import type { Metadata } from 'next';
import type { LinkElement } from '../../components/Link';
import { CODE, CONTACT } from '../../data';

export const metadata: Metadata = {
  title: 'Ema (Emmanuel Meinike) - links',
  description: 'Emmanuel Meinike links',
};

const LinksPage = () => {
  const links: Array<LinkElement> = [...CODE, ...CONTACT];
  return (
    <main className="flex flex-grow flex-col items-center justify-center bg-primary px-4 py-8 md:px-10">
      <h1 className="mb-8 text-left font-bold font-serif text-4xl text-highlight sm:text-6xl">
        <p>Ema&#39;s Links</p>
      </h1>
      <div className="flex flex-col text-center text-xl uppercase">
        {links.map((link) => (
          <a
            className="mb-3 w-36 bg-highlight p-3 text-copy hover:opacity-80"
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

export default LinksPage;
