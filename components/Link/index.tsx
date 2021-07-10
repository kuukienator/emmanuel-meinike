import React, { FC } from 'react';

export type LinkElement = {
  url: string;
  label: string;
  blank?: boolean;
};

const Link: FC<LinkElement> = ({ label, url, blank }) => (
  <a
    className="mx-2 p-1 px-2 border-b-2 border-secondary text-secondary font-bold hover:text-copy hover:bg-secondary"
    target={blank ? '_blank' : '_self'}
    rel="noreferrer"
    href={url}
  >
    {label.toUpperCase()}
  </a>
);

export default Link;
