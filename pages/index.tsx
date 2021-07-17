import Head from 'next/head';
import React, { FC } from 'react';
// import BackToTop from '../components/BackToTop';
import ImageLink from '../components/ImageLink';
import Link, { LinkElement } from '../components/Link';
// import LinkList from '../components/LinkList';
import Section, { BackgroundType } from '../components/Section';
import SectionHeader from '../components/SectionHeader';

type ImageLinkType = {
  image: string;
  altText: string;
  title: string;
  description: string;
  url: string;
};

type ExternalLinkProps = {
  name: string;
  links: Array<LinkElement>;
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

const ExternalLink: FC<ExternalLinkProps> = ({ name, links }) => {
  const link = links.find((l) => l.label === name);
  return <Link url={link?.url || ''} label={link?.label || ''} />;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Ema (Emmanuel Meinike) - landing page</title>
        <meta name="description" content="Emmanuel Meinike landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Section backgroundType={BackgroundType.Primary}>
          <div className="flex flex-col md:flex-row md:mb-6">
            <img
              width="250px"
              height="250px"
              className="rounded-full h-full self-center md:mr-6"
              src="/images/me-500.jpg"
              srcSet="/images/me-250.jpg 250w, /images/me-500.jpg 500w"
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
            You can hit me up on <ExternalLink links={CONTACT} name="Twitter" />{' '}
            or send me an <ExternalLink links={CONTACT} name="E-mail" /> if you
            have any questions.
          </p>
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
            <ExternalLink links={CODE} name="GitHub" />. For smaller sketches
            and ideas, checkout my <ExternalLink links={CODE} name="Codepen" />.
          </p>
        </Section>
        <Section>
          <SectionHeader leftContent="#">Wanna talk and connect?</SectionHeader>
          <p className="mb-2">
            We can connect on
            <ExternalLink links={CONTACT} name="Twitter" /> or you can reach out
            with <ExternalLink links={CONTACT} name="E-mail" />. I you want to
            see a more formal overview, head on over to{' '}
            <ExternalLink links={CONTACT} name="LinkedIn" /> or{' '}
            <ExternalLink links={CONTACT} name="Xing" />.
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
