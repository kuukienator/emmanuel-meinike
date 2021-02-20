import React, { FC } from 'react';

type Props = {
    title: string,
    href: string,
    image: {
        alt: string,
        src: string
    }
}

const PreviewLink: FC<Props> = ({ title, href, image }) => {
    return (
        <a href={href} rel="noopener" target="_blank">
            <figure>
                <img src={image.src} alt={image.alt} style={{ width: "200px" }} />
                <figcaption>{title}</figcaption>
            </figure>
        </a>
    )
}

export default PreviewLink;