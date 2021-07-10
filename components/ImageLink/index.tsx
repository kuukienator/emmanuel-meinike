import Link from 'next/link';
import CustomLink from '../Link';
import React, { FC } from 'react';

type Props = {
  image: string;
  altText: string;
  title: string;
  description: string;
  url: string;
};

const ImageLink: FC<Props> = ({ altText, description, image, title, url }) => (
  <div className="flex flex-col overflow-hidden box-content sm:w-1/2 lg:w-1/3 xl:w-1/4 pb-3 text-copy justify-between items-end">
    <div className="m-2 bg-primary border-t-2 border-l-2 border-r-2 border-primary overflow-hidden">
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
      <div className="p-2 h-24">
        <p className="font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default ImageLink;
