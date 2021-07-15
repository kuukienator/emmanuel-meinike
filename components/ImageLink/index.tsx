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
  <div className="p-2 flex flex-col overflow-hidden sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-6 text-copy justify-between items-end">
    <div className="border-b-4 border-primary sm:border-none">
      <Link href={url}>
        <a target="_blank" className="block overflow-hidden">
          <img
            className="transform transition duration-50 hover:scale-110 hover:opacity-50"
            src={image}
            alt={altText}
            style={{ height: '300px', objectFit: 'cover', width: '100%' }}
          />
        </a>
      </Link>
      <div className="py-2 h-24">
        <p className="font-bold text-lg">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default ImageLink;
