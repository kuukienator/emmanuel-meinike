import React, { FC } from 'react';

export type LinkElement = {
  url: string;
  label: string;
  blank?: boolean;
};

const Link: FC<LinkElement> = ({ label, url, blank }) => (
  <a
    className="px-1 border-b-2 font-bold hover:text-white hover:bg-black"
    target={blank ? '_blank' : '_self'}
    rel="noreferrer"
    href={url}
  >
    {label.toUpperCase()}
  </a>
);

export default Link;
