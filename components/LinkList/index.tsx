import React, { FC } from 'react';

export type LinkElement = {
  url: string;
  label: string;
};

type Props = {
  links: Array<LinkElement>;
};

const LinkList: FC<Props> = ({ links }) => (
  <ul className="flex justify-center pb-4 text-secondary font-bold">
    {links.map((c) => (
      <li key={c.url} className="mx-2 p-1 border-b-2 border-secondary">
        <a href={c.url}>{c.label.toUpperCase()}</a>
      </li>
    ))}
  </ul>
);

export default LinkList;
