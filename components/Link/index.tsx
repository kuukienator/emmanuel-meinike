import type { FC } from 'react';

export type LinkElement = {
  url: string;
  label: string;
  blank?: boolean;
};

const Link: FC<LinkElement> = ({ label, url, blank }) => (
  <a
    className="border-current border-b-2 px-1 font-bold hover:bg-copy hover:text-highlight"
    target={blank ? '_blank' : '_self'}
    rel="noopener noreferrer"
    href={url}
  >
    {label.toUpperCase()}
  </a>
);

export default Link;
