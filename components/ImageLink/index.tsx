import Link from 'next/link';
import CustomLink from '../Link';
import React, { FC } from 'react';

type ImageWithDimensions = {
  url: string;
  w: number;
};

type Props = {
  image: string;
  images: Array<ImageWithDimensions>;
  altText: string;
  title: string;
  description: string;
  url: string;
};

const createSrcSet = (images: Array<ImageWithDimensions>) =>
  images.map((i) => `${i.url} ${i.w}w`).join(',');

export const ImageLink: FC<Props> = ({
  altText,
  description,
  image,
  title,
  url,
  images,
}) => (
  <div className="p-2 flex flex-col overflow-hidden sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-6 text-copy justify-between items-end">
    <div className="border-b-4 border-primary sm:border-none">
      <Link
        href={url}
        target="_blank"
        className="block overflow-hidden"
        rel="noopener noreferrer"
      >
        <img
          className="transform transition duration-50 hover:scale-110 hover:opacity-50"
          src={image}
          srcSet={createSrcSet(images)}
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
          alt={altText}
          loading="lazy"
          style={{ height: '300px', objectFit: 'cover', width: '100%' }}
        />
      </Link>
      <div className="py-2 h-24">
        <p className="font-bold text-lg">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default ImageLink;
