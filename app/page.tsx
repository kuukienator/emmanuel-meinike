import React, { FC } from 'react';
import { Metadata } from 'next';
import Section, { BackgroundType } from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import ImageLink from '../components/ImageLink';
import Link, { LinkElement } from '../components/Link';
import { CODE, CONTACT } from '../data';

export const metadata: Metadata = {
  title: 'Ema (Emmanuel Meinike) - landing page',
  description: 'Emmanuel Meinike landing page',
};

type ImageLinkType = {
  image: string;
  images: Array<{ url: string; w: number }>;
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
    images: [
      { url: '/images/color-palette-generator-desktop-1-300x.jpg', w: 300 },
      { url: '/images/color-palette-generator-desktop-1-600x.jpg', w: 600 },
      { url: '/images/color-palette-generator-desktop-1-900x.jpg', w: 900 },
      { url: '/images/color-palette-generator-desktop-1-1200x.jpg', w: 1200 },
    ],
    altText: 'Color palette generator screenshot - 1',
    title: 'Color palette Generator',
    description: 'An app to create color palettes from images.',
    url: 'https://kuukienator.github.io/color-palette-generator/',
  },
  {
    image: '/images/aspect-ratio-calculator-desktop-1.png',
    images: [
      { url: '/images/aspect-ratio-calculator-desktop-1-300x.png', w: 300 },
      { url: '/images/aspect-ratio-calculator-desktop-1-600x.png', w: 600 },
      { url: '/images/aspect-ratio-calculator-desktop-1-900x.png', w: 900 },
      { url: '/images/aspect-ratio-calculator-desktop-1-1200x.png', w: 1200 },
    ],
    altText: 'Aspect Ratio Calculator screenshot - 1',
    title: 'Aspect Ratio Calculator',
    description: 'An app to calculate aspect ratios.',
    url: 'https://kuukienator.github.io/aspect-ratio-calculator/',
  },
  {
    image: '/images/give-me-amos-desktop-1.jpg',
    images: [
      { url: '/images/give-me-amos-desktop-1-300x.jpg', w: 300 },
      { url: '/images/give-me-amos-desktop-1-600x.jpg', w: 600 },
      { url: '/images/give-me-amos-desktop-1-900x.jpg', w: 900 },
      { url: '/images/give-me-amos-desktop-1-1200x.jpg', w: 1200 },
    ],
    altText: 'Give me Amos screenshot - 1',
    title: 'Give me Amos!',
    description: 'Get the best Amos GIFs around.',
    url: 'https://give-me-amos.vercel.app/',
  },
  {
    image: '/images/where-to-go-desktop-1.jpg',
    images: [
      { url: '/images/where-to-go-desktop-1-300x.jpg', w: 300 },
      { url: '/images/where-to-go-desktop-1-600x.jpg', w: 600 },
      { url: '/images/where-to-go-desktop-1-900x.jpg', w: 900 },
      { url: '/images/where-to-go-desktop-1-1200x.jpg', w: 1200 },
    ],
    altText: 'Where to go screenshot - 1',
    title: 'Where to go?',
    description: 'Find awesome places around you for food and drinks.',
    url: 'https://where-to-go-azure.vercel.app/',
  },
  {
    image: '/images/saul-bassified-desktop-1.jpg',
    images: [
      { url: '/images/saul-bassified-desktop-1-300x.jpg', w: 300 },
      { url: '/images/saul-bassified-desktop-1-600x.jpg', w: 600 },
      { url: '/images/saul-bassified-desktop-1-900x.jpg', w: 900 },
      { url: '/images/saul-bassified-desktop-1-1200x.jpg', w: 1200 },
    ],
    altText: 'Saul bassified screenshot - 1',
    title: 'Saul bassified',
    description: 'Create posters inspired by the great Saul Bass.',
    url: 'https://codepen.io/kuukienator/full/qBrKVYQ',
  },
  {
    image: '/images/generative-eggs-desktop-1.jpg',
    images: [
      { url: '/images/generative-eggs-desktop-1-300x.jpg', w: 300 },
      { url: '/images/generative-eggs-desktop-1-600x.jpg', w: 600 },
      { url: '/images/generative-eggs-desktop-1-900x.jpg', w: 900 },
      { url: '/images/generative-eggs-desktop-1-1200x.jpg', w: 1200 },
    ],
    altText: 'Generative eggs screenshot - 1',
    title: 'Generative Eggs',
    description: 'Create some random sunny-side up eggs. Delecious.',
    url: 'https://codepen.io/kuukienator/full/mdrQeOm',
  },
  {
    image: '/images/exploring-dithering-1.jpg',
    images: [
      { url: '/images/exploring-dithering-1-300x.jpg', w: 300 },
      { url: '/images/exploring-dithering-1-600x.jpg', w: 600 },
      { url: '/images/exploring-dithering-1-900x.jpg', w: 900 },
      { url: '/images/exploring-dithering-1-1200x.jpg', w: 1200 },
    ],
    altText: 'Exploring Dithering screenshot - 1',
    title: 'Exploring Dithering',
    description: 'Playing around with dithering for images',
    url: 'https://observablehq.com/@kuukienator/exploring-dithering',
  },
];

const ExternalLink: FC<ExternalLinkProps> = ({ name, links }) => {
  const link = links.find((l) => l.label === name);
  return <Link url={link?.url || ''} label={link?.label || ''} />;
};

export default function Page() {
  return (
    <>
      <main className="relative text-copy">
        <Section backgroundType={BackgroundType.Primary}>
          <div className="flex flex-col md:flex-row md:mb-6">
            <img
              width="250px"
              height="250px"
              className="rounded-full h-full self-center bg-no-repeat bg-cover md:mr-6"
              src="/images/me-500.jpg"
              srcSet="/images/me-250.jpg, /images/me-500.jpg 2x"
              alt="Emmanuel Meinike - Headshot"
              style={{ backgroundImage: 'url(/images/me-100-dither.jpg)' }}
            />
            <h1 className="font-serif text-4xl text-left my-8 font-bold sm:text-6xl text-highlight lg:text-7xl">
              <p>
                Hi, I&apos;m Ema <span className="font-normal">👋</span>,
              </p>
              <p>web developer and creative coder.</p>
            </h1>
          </div>
          {/* <h1 className="font-serif text-4xl text-left my-8 font-bold sm:text-6xl text-highlight lg:text-7xl">
            <p>Hi, I&apos;m Emmanuel 👋,</p>
            <p>web developer and creative coder.</p>
          </h1> */}
          <div className="w-full h-2 bg-highlight mb-8 max-w-xl"></div>
          <p className="mb-4 text-xl text-highlight max-w-xl">
            I like building things big and small. Currently I focus on using web
            technologies to build awesome user experiences and express myself
            creatively.
          </p>
          <p className="mb-4 text-xl text-highlight max-w-xl">
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
                images={i.images}
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
          <p className="font-serif flex flex-col my-10 text-2xl text-center font-bold text-highlight">
            <span>
              Hold on there! Hope you are having an awesome day{' '}
              <span className="font-normal">😎✌</span>.
            </span>
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
          <p className="font-serif flex flex-col my-10 text-2xl text-center font-bold text-highlight">
            <span>
              Thanks for stopping by <span className="font-normal">👋</span>.
            </span>
            <span>See you later.</span>
          </p>
        </Section>
      </main>
    </>
  );
}
