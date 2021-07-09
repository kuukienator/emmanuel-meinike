import React, { FC } from 'react';

type Props = {
    title: string,
    text: string,
    href: string,
    image: {
        alt: string,
        src: string
    }
}

const PreviewLink: FC<Props> = ({ title, href, image, text }) => {
    return (
        <a href={href} rel="noopener" target="_blank" className="px-2">
            <span>{title}</span>
            <figure>
                <img className="rounded-md border-4 border-black" src={image.src} alt={image.alt} style={{ width: "200px" }} />
                <figcaption className="text-center">{text}</figcaption>
            </figure>
        </a>
    )
}

export default PreviewLink;