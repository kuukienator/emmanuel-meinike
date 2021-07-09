import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HEADER_LINKS = [
  {
    path: '/',
    label: 'Home.',
  },
  {
    path: '/projects',
    label: 'Projects.',
  },
  {
    path: '/blog',
    label: 'Blog.',
  },
];

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex justify-between px-4 pt-2 pb-2 md:px-10 text-lg flex-row items-center">
      <div
        className="font-bold border-2 p-1 rounded-xl"
        style={{ fontFamily: '"Roboto Slab", serif', borderColor: 'black' }}
      >
        EM
      </div>
      <nav>
        <ul className="flex">
          {HEADER_LINKS.map((l) => {
            const isActive = l.path === router.pathname;
            const styles = isActive
              ? { color: 'white', background: 'black' }
              : {};
            const classes = isActive ? 'mx-2 p-1 border-b-2' : 'p-1 mx-2';
            return (
              <li className={classes} key={l.label + l.path}>
                <Link href={l.path}>
                  <a>{l.label}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
