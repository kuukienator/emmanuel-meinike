import React, { FC } from 'react';

export enum BackgroundType {
  Primary = 'Primary',
}

type Props = {
  backgroundColor?: string;
  backgroundType?: BackgroundType;
};

const Section: FC<Props> = ({ children, backgroundColor, backgroundType }) => {
  const classes = `p-4 md:px-10 ${
    backgroundType === BackgroundType.Primary ? 'bg-primary text-copy' : ''
  }`;
  return <section className={classes}>{children}</section>;
};

export default Section;
