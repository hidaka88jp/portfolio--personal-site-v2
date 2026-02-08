import { getWorksList } from '@/lib/microcms';

import TopSectionTitle from '@/components/shared/TopSectionTitle';
import WorkCard from '@/components/shared/WorkCard';

export default async function TopWorks() {
  const WORKS_LIST_LIMIT = 50; // Limit the number of works displayed
  const works = await getWorksList({ limit: WORKS_LIST_LIMIT });

  return (
    <section id='works' className='pb-16 sm:pb-28'>
      <TopSectionTitle title='Works' subTitle="What I've built" />
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
        {works.contents.map((work) => (
          <WorkCard
            key={work.id}
            id={work.id}
            title={work.title}
            thumbnail={work.thumbnail}
            category={work.category}
          />
        ))}
      </div>
    </section>
  );
}
