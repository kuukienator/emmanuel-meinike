import type { Metadata } from 'next';
import ImageLink from '../../components/ImageLink';
import SectionHeader from '../../components/SectionHeader';
import { STUFF } from '../../data/stuff';

export const metadata: Metadata = {
  title: 'Ema (Emmanuel Meinike) - projects',
  description: 'Emmanuel Meinike projects',
};

const ProjectsPage = () => (
  <div>
    <main className="mt-8 px-4 md:px-10">
      <SectionHeader leftContent="#">Here is more Stuff!</SectionHeader>
      <div className="flex flex-col flex-wrap sm:flex-row items-center">
        {STUFF.map((i) => (
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
    </main>
  </div>
);

export default ProjectsPage;
