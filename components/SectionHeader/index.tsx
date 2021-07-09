import React, { FC } from 'react';

const SectionHeader: FC = ({ children }) => (
  <h2
    className="text-xl text-center mt-8 mb-8 font-bold"
    style={{ fontFamily: "'Roboto Slab', serif" }}
  >
    {children}
  </h2>
);

export default SectionHeader;
