import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Ema (Emmanuel Meinike) - blog',
  description: 'Emmanuel Meinike blog',
};

const BlogPage = () => (
  <div>
    <main className="px-4 mt-8 md:px-10">
      <h1
        className="text-4xl text-left mb-8 font-bold sm:text-6xl"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        <p>Welcome to my blog!</p>
      </h1>
      <p className="text-xl">There are no entries yet 😢</p>
    </main>
  </div>
);

export default BlogPage;
