import React, { FC } from 'react';

type Props = {
  leftContent?: string;
  children?: React.ReactNode;
};

const SectionHeader: FC<Props> = ({ children, leftContent }) => (
  <h2 className="font-serif text-3xl text-primary text-left mt-8 mb-8 font-bold py-3 relative rounded-xl md:text-5xl">
    <div className="flex">
      {leftContent && <span className="mr-3 text-primary">{leftContent}</span>}
      {children}
    </div>
  </h2>
);

export default SectionHeader;
