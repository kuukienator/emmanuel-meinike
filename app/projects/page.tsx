import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Ema (Emmanuel Meinike) - projects',
  description: 'Emmanuel Meinike projects',
};

const ProjectsPage = () => (
  <div>
    <main className="px-4 mt-8 md:px-10">
      <h1
        className="text-4xl text-left mb-8 font-bold sm:text-6xl"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        <p>Here are my Projects</p>
      </h1>
      <p className="text-xl">There are no projects yet 😢</p>
    </main>
  </div>
);

export default ProjectsPage;
