import React, { FC } from 'react';

export type LinkElement = {
  url: string;
  label: string;
  blank?: boolean;
};

const Link: FC<LinkElement> = ({ label, url, blank }) => (
  <a
    className="px-1 border-b-2 font-bold hover:text-highlight hover:bg-copy border-current"
    target={blank ? '_blank' : '_self'}
    rel="noopener noreferrer"
    href={url}
  >
    {label.toUpperCase()}
  </a>
);

export default Link;
