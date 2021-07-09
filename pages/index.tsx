import Head from 'next/head';
import ImageLink from '../components/ImageLink';
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

const CONTACT = [
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

const CODE = [
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

      <main className="px-4 mt-8">
        <h1 className="text-4xl text-center mb-8 sm:text-6xl">
          Hi, I&apos;m Emmanuel 👋
        </h1>
        <p className="mb-4">
          I&apos;m a web developer and creative coder. I like building things
          big and small. The languages I currently like working with are
          Javascript (and Typescript) while using frameworks like React, NodeJS
          and the browser Canvas. I dabble in other languages like C# and Scala
          from time to time as well.
        </p>

        <SectionHeader># Wanna see some cool things?</SectionHeader>
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
        {/* <iframe
          height={600}
          style={{ width: '100%' }}
          scrolling="no"
          title="Saul Bass-ified"
          src="https://codepen.io/kuukienator/embed/preview/qBrKVYQ?default-tab=result"
          frameBorder="no"
          loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        >
          See the Pen{' '}
          <a href="https://codepen.io/kuukienator/pen/qBrKVYQ">
            Saul Bass-ified
          </a>{' '}
          by Emmanuel Meinike (
          <a href="https://codepen.io/kuukienator">@kuukienator</a>) on{' '}
          <a href="https://codepen.io">CodePen</a>.
        </iframe> */}
        <SectionHeader># Wanna see some code?</SectionHeader>
        <SectionHeader># Wanna talk and connect?</SectionHeader>
      </main>

      <footer className="text-center">Emmanuel Meinike - 2021</footer>
    </div>
  );
}
