import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import ImageLink from '../components/ImageLink';
import LinkList, { LinkElement } from '../components/LinkList';
import SectionHeader from '../components/SectionHeader';

type ImageLinkType = {
  image: string;
  altText: string;
  title: string;
  description: string;
};

const IMAGE_LINKS: Array<ImageLinkType> = [
  {
    image: '/images/color-palette-generator-desktop-1.png',
    altText: 'Color palette generator screenshot - 1',
    title: 'Color palette Generator',
    description: 'An app to create color palettes from images.',
  },
  {
    image: '/images/give-me-amos-desktop-1.png',
    altText: 'Give me Amos screenshot - 1',
    title: 'Give me Amos!',
    description: 'Get the best Amos GIFs around.',
  },
  {
    image: '/images/where-to-go-desktop-1.png',
    altText: 'Where to go screenshot - 1',
    title: 'Where to go?',
    description: 'Find awesome places around you for food and drinks.',
  },
];

const CONTACT: Array<LinkElement> = [
  {
    label: 'Xing',
    url: 'https://www.xing.com/profile/Emmanuel_Meinike/cv',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/emmanuel-meinike-11185541',
  },
  {
    label: 'E-mail',
    url: 'mailto:emmanuel.meinike@gmail.com',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/kuukienator',
  },
];

const CODE: Array<LinkElement> = [
  {
    label: 'GitHub',
    url: 'https://github.com/kuukienator',
  },
  {
    label: 'Codepen',
    url: 'https://codepen.io/kuukienator',
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Emmanuel Meinike - landing page</title>
        <meta name="description" content="Emmanuel Meinike landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 mt-8 md:px-10">
        <h1
          className="text-4xl text-left mb-8 font-bold sm:text-6xl"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          <p>Hi, I&apos;m Emmanuel 👋.</p>
          <p>Web developer and creative coder.</p>
        </h1>
        <p className="mb-4 text-lg">
          I like building things big and small. The languages I currently like
          working with are Javascript (and Typescript) while using frameworks
          like React, NodeJS and the browser Canvas. I dabble in other languages
          like C# and Scala from time to time as well.
        </p>

        <SectionHeader leftContent="#">
          Wanna see some cool things?
        </SectionHeader>
        <div className="flex flex-col sm:flex-row">
          {IMAGE_LINKS.map((i) => (
            <ImageLink
              key={i.image + i.altText}
              altText={i.altText}
              description={i.description}
              image={i.image}
              title={i.title}
            />
          ))}
        </div>
        <div>
          <Link href="/projects">
            <a>see more &gt;</a>
          </Link>
        </div>
        <SectionHeader leftContent="#">Wanna see some code?</SectionHeader>
        <LinkList links={CODE} />
        <SectionHeader leftContent="#">Wanna talk and connect?</SectionHeader>
        <LinkList links={CONTACT} />
      </main>
    </div>
  );
}
