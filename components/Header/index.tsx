import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HEADER_LINKS = [
  {
    path: '/',
    label: 'Home.',
  },
  {
    path: '/links',
    label: 'Links.',
  },
  {
    path: '/apps',
    label: 'Apps.',
  },
  // {
  //   path: '/projects',
  //   label: 'Projects.',
  // },
  // {
  //   path: '/blog',
  //   label: 'Blog.',
  // },
];

const Header = () => {
  const router = useRouter();
  return (
    <header className="font-light flex flex-row-reverse font-serif justify-between px-4 pt-2 pb-2 md:px-10 text-lg flex-row items-center bg-primary text-highlight xl:px-24">
      <nav>
        <ul className="flex">
          {HEADER_LINKS.map((l) => {
            const isActive = l.path === router.pathname;
            const styles = isActive
              ? { color: 'white', background: 'black' }
              : {};
            const classes = isActive
              ? 'p-1 px-1 mx-1 font-bold'
              : 'p-1 px-1 mx-1';
            return (
              <li className={classes} key={l.label + l.path}>
                <Link href={l.path}>{l.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
