import type React from 'react';
import type { FC } from 'react';

type Props = {
  leftContent?: string;
  children?: React.ReactNode;
};

const SectionHeader: FC<Props> = ({ children, leftContent }) => (
  <h2 className="relative mt-8 mb-8 rounded-xl py-3 text-left font-bold font-serif text-3xl text-primary md:text-5xl">
    <div className="flex">
      {leftContent && <span className="mr-3 text-primary">{leftContent}</span>}
      {children}
    </div>
  </h2>
);

export default SectionHeader;
