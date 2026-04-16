import type { Metadata } from 'next';
import type { FC } from 'react';
import ImageLink from '../components/ImageLink';
import Link, { type LinkElement } from '../components/Link';
import Section, { BackgroundType } from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import { CODE, CONTACT } from '../data';
import { STUFF } from '../data/stuff';

export const metadata: Metadata = {
  title: 'Ema (Emmanuel Meinike) - landing page',
  description: 'Emmanuel Meinike landing page',
};

type ExternalLinkProps = {
  name: string;
  links: Array<LinkElement>;
};

const ExternalLink: FC<ExternalLinkProps> = ({ name, links }) => {
  const link = links.find((l) => l.label === name);
  return <Link url={link?.url || ''} label={link?.label || ''} />;
};

export default function Page() {
  return (
    <main className="relative text-copy">
      <Section backgroundType={BackgroundType.Primary}>
        <div className="flex flex-col md:mb-6 md:flex-row">
          <img
            width="250px"
            height="250px"
            className="h-full self-center rounded-full bg-cover bg-no-repeat md:mr-6"
            src="/images/me-500.jpg"
            srcSet="/images/me-250.jpg, /images/me-500.jpg 2x"
            alt="Emmanuel Meinike - Headshot"
            style={{ backgroundImage: 'url(/images/me-100-dither.jpg)' }}
          />
          <h1 className="my-8 text-left font-bold font-serif text-4xl text-highlight sm:text-6xl lg:text-7xl">
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
        <div className="mb-8 h-2 w-full max-w-xl bg-highlight"></div>
        <p className="mb-4 max-w-xl text-highlight text-xl">
          I like building things big and small. Currently I focus on using web
          technologies to build awesome user experiences and express myself
          creatively.
        </p>
        <p className="mb-4 max-w-xl text-highlight text-xl">
          You can hit me up on <ExternalLink links={CONTACT} name="Twitter" />{' '}
          or send me an <ExternalLink links={CONTACT} name="E-mail" /> if you
          have any questions.
        </p>
      </Section>
      <Section>
        <SectionHeader leftContent="#">
          Wanna see some cool things?
        </SectionHeader>
        <div className="flex flex-col flex-wrap items-center sm:flex-row">
          {STUFF.filter((i) => i.highlight === true).map((i) => (
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
        <SectionHeader leftContent="#">Wanna know more about me?</SectionHeader>
        <p className="mb-2">
          Working with Javascript (and Typescript) while using frameworks like
          React/NextJS, NodeJS and the browser Canvas make me happy. I also
          dabble in other languages like C# and Scala from time to time as well.
        </p>
        <p className="mb-2">
          Apart from this, I also enjoy drawing, 3D modelling and game
          developement. As you can see, I also try my hand in designing every
          now and then.
        </p>
      </Section>
      <Section backgroundType={BackgroundType.Primary}>
        <p className="my-10 flex flex-col text-center font-bold font-serif text-2xl text-highlight">
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
          <ExternalLink links={CODE} name="GitHub" />. For smaller sketches and
          ideas, checkout my <ExternalLink links={CODE} name="Codepen" />.
        </p>
      </Section>
      <Section>
        <SectionHeader leftContent="#">Wanna talk and connect?</SectionHeader>
        <p className="mb-2">
          We can connect on
          <ExternalLink links={CONTACT} name="Twitter" /> or you can reach out
          with <ExternalLink links={CONTACT} name="E-mail" />. I you want to see
          a more formal overview, head on over to{' '}
          <ExternalLink links={CONTACT} name="LinkedIn" /> or{' '}
          <ExternalLink links={CONTACT} name="Xing" />.
        </p>
      </Section>
      <Section backgroundType={BackgroundType.Primary}>
        <p className="my-10 flex flex-col text-center font-bold font-serif text-2xl text-highlight">
          <span>
            Thanks for stopping by <span className="font-normal">👋</span>.
          </span>
          <span>See you later.</span>
        </p>
      </Section>
    </main>
  );
}
