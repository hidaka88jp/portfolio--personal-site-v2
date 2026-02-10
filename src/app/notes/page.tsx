import Image from 'next/image';
import { Suspense } from 'react';
import type { NotesSearchParams } from '@/types/notes';
import { getTechStackList } from '@/lib/microcms';
import NotesList from '@/components/notes/NotesList';
import LinkButton from '@/components/shared/LinkButton';
import TechStackList from '@/components/notes/TechStackList';

type NotesPageProps = {
  searchParams: Promise<NotesSearchParams>;
};

export const metadata = {
  title: 'Notes',
};

export default async function NotesPage({ searchParams }: NotesPageProps) {
  const techStacks = await getTechStackList();
  const params = await searchParams;

  return (
    <>
      <section className='relative mb-12 w-full sm:mb-20 sm:h-72 lg:h-96'>
        <div className='relative mb-10 h-52 w-full sm:absolute sm:top-0 sm:right-0 sm:mb-0 sm:block sm:h-72 sm:w-3/5 lg:h-full'>
          <Image
            src='/images/notes-hero.webp'
            alt='Notes hero'
            fill
            className='object-cover'
            priority
            sizes='(max-width: 1024px) 100vw, 60vw'
          />
        </div>
        <div className='h-full px-4 sm:px-8'>
          <div className='mx-auto h-full w-full max-w-94 sm:max-w-5xl'>
            <div className='flex h-full flex-col items-center gap-2.5 sm:items-start sm:justify-center'>
              <h1 className='font-inconsolata text-4xl'>Notes</h1>
              <p className='font-inconsolata'>What I Learned</p>
              <div className='bg-accent h-0.5 w-7' />
            </div>
          </div>
        </div>
      </section>
      <section className='px-4 pb-16 sm:px-8 sm:pb-28'>
        <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
          <div className='mb-10 grid grid-cols-1 gap-5 md:mb-14 lg:grid-cols-4'>
            <div className='lg:order-2 lg:col-span-3'>
              <Suspense fallback={<p>Loading notes...</p>}>
                <NotesList searchParams={params} techStacks={techStacks.contents} />
              </Suspense>
            </div>
            <div className='pt-5 lg:order-1 lg:col-span-1 lg:pt-20'>
              <div className='lg:hidden'>
                <h3 id='category' className='border-accent mb-5 border-l-2 pl-2 text-xl'>
                  Category
                </h3>
              </div>
              <TechStackList techStacks={techStacks.contents} />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <LinkButton href={'/#notes'} aria-label='Back to top page Notes section'>
              Back to Top
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
