import React, { FC } from 'react';

type Props = {
  leftContent?: string;
};

const SectionHeader: FC<Props> = ({ children, leftContent }) => (
  <h2
    className="text-xl text-left mt-8 mb-8 font-bold p-3"
    style={{ fontFamily: "'Roboto Slab', serif", background: 'white' }}
  >
    <div className="flex">
      {leftContent && (
        <span className="mr-3" style={{ color: 'rgba(148,187,233,1)' }}>
          {leftContent}
        </span>
      )}
      {children}
    </div>
  </h2>
);

export default SectionHeader;
