import React, { FC } from 'react';

type Props = {
  image: string;
  altText: string;
  title: string;
  description: string;
};

const ImageLink: FC<Props> = ({ altText, description, image, title }) => (
  <div className="border-2 m-2">
    <img
      src={image}
      alt={altText}
      style={{ height: '300px', objectFit: 'cover' }}
    />
    <div className="p-2">
      <p className="font-bold">{title}</p>
      <p>{description}</p>
    </div>
  </div>
);

export default ImageLink;
