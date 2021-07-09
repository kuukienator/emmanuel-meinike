import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header className="flex justify-end px-4 pt-2 pb-2 border-b-2 md:px-10">
    <nav>
      <ul className="flex">
        <li className="px-2 border-r-2 last:border-r-0">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="px-2 border-r-2 last:border-r-0">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li className="px-2 border-r-2 last:border-r-0">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
