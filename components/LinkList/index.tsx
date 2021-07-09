import React, { FC } from 'react';

export type LinkElement = {
  url: string;
  label: string;
};

type Props = {
  links: Array<LinkElement>;
};

const LinkList: FC<Props> = ({ links }) => (
  <ul className="flex justify-center mb-4">
    {links.map((c) => (
      <li key={c.url} className="border-r-2 px-4 last:border-r-0">
        <a className="hover:border-b-2" href={c.url}>
          {c.label.toUpperCase()}
        </a>
      </li>
    ))}
  </ul>
);

export default LinkList;
