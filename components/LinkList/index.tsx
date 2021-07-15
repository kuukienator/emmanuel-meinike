import React, { FC } from 'react';
import Link, { LinkElement } from '../Link';

type Props = {
  links: Array<LinkElement>;
};

const LinkList: FC<Props> = ({ links }) => (
  <ul className="flex justify-center pb-4 text-white">
    {links.map((c) => (
      <li key={c.url} className="mx-2">
        <Link label={c.label} url={c.url} />
      </li>
    ))}
  </ul>
);

export default LinkList;
