import React, { FC } from 'react';
import Link, { LinkElement } from '../Link';

type Props = {
  links: Array<LinkElement>;
};

const LinkList: FC<Props> = ({ links }) => (
  <ul className="flex justify-center pb-4">
    {links.map((c) => (
      <li key={c.url}>
        <Link label={c.label} url={c.url} />
      </li>
    ))}
  </ul>
);

export default LinkList;
