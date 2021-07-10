import Link from 'next/link';
import React, { FC } from 'react';

type Props = {
  image: string;
  altText: string;
  title: string;
  description: string;
  url: string;
};

const ImageLink: FC<Props> = ({ altText, description, image, title, url }) => (
  <div className="border-2 overflow-hidden p-2 box-border sm:w-1/2 lg:w-1/3 xl:w-1/4">
    <Link href={url}>
      <a target="_blank">
        <img
          className="hover:scale-125"
          src={image}
          alt={altText}
          style={{ height: '300px', objectFit: 'cover', width: '100%' }}
        />
      </a>
    </Link>
    <div className="p-2">
      <p className="font-bold">{title}</p>
      <p>{description}</p>
    </div>
    <Link href={url}>
      <a target="_blank">View</a>
    </Link>
  </div>
);

export default ImageLink;
