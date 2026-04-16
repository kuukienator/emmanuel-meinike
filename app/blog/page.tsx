import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ema (Emmanuel Meinike) - blog',
  description: 'Emmanuel Meinike blog',
};

const BlogPage = () => (
  <div>
    <main className="mt-8 px-4 md:px-10">
      <h1
        className="mb-8 text-left font-bold text-4xl sm:text-6xl"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        <p>Welcome to my blog!</p>
      </h1>
      <p className="text-xl">There are no entries yet 😢</p>
    </main>
  </div>
);

export default BlogPage;
