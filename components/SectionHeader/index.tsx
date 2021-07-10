import React, { FC } from 'react';

type Props = {
  leftContent?: string;
};

const SectionHeader: FC<Props> = ({ children, leftContent }) => (
  <h2 className="font-serif text-xl text-secondary text-left mt-8 mb-8 font-bold p-3 bg-primary relative">
    <div className="w-full h-full block absolute -z-10 bg-secondary"></div>
    <div className="flex">
      {leftContent && (
        <span className="mr-3 text-secondary">{leftContent}</span>
      )}
      {children}
    </div>
  </h2>
);

export default SectionHeader;
