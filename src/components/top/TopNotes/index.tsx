import { getNotesList } from '@/lib/microcms';

import LinkButton from '@/components/shared/LinkButton';
import NoteCard from '@/components/shared/NoteCard';

import TopSectionTitle from '@/components/shared/TopSectionTitle';

export default async function TopNotes() {
  const TOP_NOTES_LIST_LIMIT = 3; // Limit the number of notes displayed
  const notes = await getNotesList({ limit: TOP_NOTES_LIST_LIMIT });

  return (
    <section id='notes' className='pb-16 sm:pb-28'>
      <TopSectionTitle title='Notes' subTitle="What I've learned" />
      <div className='grid grid-cols-1 gap-9 pb-10 lg:grid-cols-3 lg:gap-8'>
        {notes.contents.map((note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            title={note.title}
            thumbnail={note.thumbnail}
            techStack={note.techStack}
          />
        ))}
      </div>
      <div className='flex justify-center'>
        <LinkButton href='/notes'>View All</LinkButton>
      </div>
    </section>
  );
}
