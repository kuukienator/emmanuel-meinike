import Head from 'next/head';
import React from 'react';
import BackToTop from '../components/BackToTop';
import ImageLink from '../components/ImageLink';
import Link, { LinkElement } from '../components/Link';
import LinkList from '../components/LinkList';
import Section, { BackgroundType } from '../components/Section';
import SectionHeader from '../components/SectionHeader';

/*
#ff4d5a, #213145

#f7ceda, #0233cb

*/

type ImageLinkType = {
  image: string;
  altText: string;
  title: string;
  description: string;
  url: string;
};

const IMAGE_LINKS: Array<ImageLinkType> = [
  {
    image: '/images/color-palette-generator-desktop-1.jpg',
    altText: 'Color palette generator screenshot - 1',
    title: 'Color palette Generator',
    description: 'An app to create color palettes from images.',
    url: 'https://kuukienator.github.io/color-palette-generator/',
  },
  {
    image: '/images/give-me-amos-desktop-1.jpg',
    altText: 'Give me Amos screenshot - 1',
    title: 'Give me Amos!',
    description: 'Get the best Amos GIFs around.',
    url: 'https://give-me-amos.vercel.app/',
  },
  {
    image: '/images/where-to-go-desktop-1.jpg',
    altText: 'Where to go screenshot - 1',
    title: 'Where to go?',
    description: 'Find awesome places around you for food and drinks.',
    url: 'https://where-to-go-azure.vercel.app/',
  },
  {
    image: '/images/saul-bassified-desktop-1.jpg',
    altText: 'Saul bassified screenshot - 1',
    title: 'Saul bassified',
    description: 'Create posters inspired by the great Saul Bass.',
    url: 'https://codepen.io/kuukienator/full/qBrKVYQ',
  },
  {
    image: '/images/generative-eggs-desktop-1.jpg',
    altText: 'Generative eggs screenshot - 1',
    title: 'Generative Eggs',
    description: 'Create some random sunny-side up eggs. Delecious.',
    url: 'https://codepen.io/kuukienator/full/mdrQeOm',
  },
  // {
  //   image: '/images/2021.00001.01.jpg',
  //   altText: 'Some circles screenshot - 1',
  //   title: 'Some circles',
  //   description: 'Just some circles',
  //   url: 'https://codepen.io/kuukienator/full/PoWyQKM',
  // },
  {
    image: '/images/exploring-dithering-1.jpg',
    altText: 'Exploring Dithering screenshot - 1',
    title: 'Exploring Dithering',
    description: 'Playing around with dithering for images',
    url: 'https://observablehq.com/@kuukienator/exploring-dithering',
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

const COMPACT_CONTACTS = ['Twitter', 'E-mail'];
const CONTACT_COMPACT = CONTACT.filter((c) =>
  COMPACT_CONTACTS.includes(c.label)
);

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
    <>
      <Head>
        <title>Emmanuel Meinike - landing page</title>
        <meta name="description" content="Emmanuel Meinike landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        {/* <BackToTop /> */}
        <Section backgroundType={BackgroundType.Primary}>
          <div className="flex flex-col md:flex-row md:mb-6">
            <img
              width="250px"
              className="rounded-full h-full self-center md:mr-6"
              src="/images/me-dither-3.png"
              alt="Emmanuel Meinike - Dithered"
            />
            <h1 className="font-serif text-4xl text-left my-8 font-bold sm:text-6xl text-white lg:text-7xl">
              <p>Hi, I&apos;m Ema 👋,</p>
              <p>web developer and creative coder.</p>
            </h1>
          </div>
          {/* <h1 className="font-serif text-4xl text-left my-8 font-bold sm:text-6xl text-white lg:text-7xl">
            <p>Hi, I&apos;m Emmanuel 👋,</p>
            <p>web developer and creative coder.</p>
          </h1> */}
          <div className="w-full h-2 bg-white mb-8 max-w-xl"></div>
          <p className="mb-4 text-xl text-white">
            I like building things big and small. Currently I focus on using web
            technologies to build awesome user experiences and express myself
            creatively.
          </p>
          <p className="mb-4 text-xl text-white">
            You can hit me up on{' '}
            <Link
              url={CONTACT.find((e) => e.label === 'Twitter')?.url || ''}
              label="Twitter"
            />{' '}
            or send me an{' '}
            <Link
              url={CONTACT.find((e) => e.label === 'E-mail')?.url || ''}
              label="E-mail"
            />{' '}
            if you have any questions.
          </p>

          {/* <LinkList links={CONTACT_COMPACT} /> */}
        </Section>
        <Section>
          <SectionHeader leftContent="#">
            Wanna see some cool things?
          </SectionHeader>
          <div className="flex flex-col flex-wrap sm:flex-row">
            {IMAGE_LINKS.map((i) => (
              <ImageLink
                key={i.image + i.altText}
                altText={i.altText}
                description={i.description}
                image={i.image}
                title={i.title}
                url={i.url}
              />
            ))}
          </div>
          <div className="flex flex-row-reverse">
            <Link url="/projects" label="see more stuff &gt;" />
          </div>
        </Section>
        <Section>
          <SectionHeader leftContent="#">
            Wanna know more about me?
          </SectionHeader>
          <p className="mb-2">
            Working with Javascript (and Typescript) while using frameworks like
            React/NextJS, NodeJS and the browser Canvas make me happy. I also
            dabble in other languages like C# and Scala from time to time as
            well.
          </p>
          <p className="mb-2">
            Apart from this, I also enjoy drawing, 3D modelling and game
            developement. As you can see, I also try my hand in designing every
            now and then.
          </p>
        </Section>
        <Section backgroundType={BackgroundType.Primary}>
          <p className="font-serif flex flex-col my-10 text-2xl text-center font-bold text-white">
            <span>Hold on there! Hope you are having an awesome day 😎✌.</span>
            <span>Scroll on!</span>
          </p>
        </Section>
        <Section>
          <SectionHeader leftContent="#">Wanna see some code?</SectionHeader>
          <p className="mb-2">
            You can find my bigger projects and apps on{' '}
            <Link
              url={CODE.find((e) => e.label === 'Github')?.url || ''}
              label="Github"
            />
            . For smaller sketches and ideas, checkout my{' '}
            <Link
              url={CODE.find((e) => e.label === 'Codepen')?.url || ''}
              label="Codepen"
            />
            .
          </p>
        </Section>
        <Section>
          <SectionHeader leftContent="#">Wanna talk and connect?</SectionHeader>
          <p className="mb-2">
            We can connect on{' '}
            <Link
              url={CONTACT.find((e) => e.label === 'Twitter')?.url || ''}
              label="Twitter"
            />{' '}
            or you can reach out with{' '}
            <Link
              url={CONTACT.find((e) => e.label === 'E-mail')?.url || ''}
              label="E-mail"
            />
            . I you want to see a more formal overview, head on over to{' '}
            <Link
              url={CONTACT.find((e) => e.label === 'LinkedIn')?.url || ''}
              label="LinkedIn"
            />{' '}
            or{' '}
            <Link
              url={CONTACT.find((e) => e.label === 'Xing')?.url || ''}
              label="Xing"
            />
            .
          </p>
        </Section>
        <Section backgroundType={BackgroundType.Primary}>
          <p className="font-serif flex flex-col my-10 text-2xl text-center font-bold text-white">
            <span>Thanks for stopping by 👋.</span>
            <span>See you later.</span>
          </p>
        </Section>
      </main>
    </>
  );
}
