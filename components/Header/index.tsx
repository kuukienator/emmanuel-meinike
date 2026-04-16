'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    path: '/projects',
    label: 'Stuff.',
  },
  {
    path: '/apps',
    label: 'Apps.',
  },
  // {
  //   path: '/blog',
  //   label: 'Blog.',
  // },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-row flex-row-reverse items-center justify-between bg-primary px-4 pt-2 pb-2 font-light font-serif text-highlight text-lg md:px-10 xl:px-24">
      <nav>
        <ul className="flex">
          {HEADER_LINKS.map((l) => {
            const isActive = l.path === pathname;
            const _styles = isActive
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
