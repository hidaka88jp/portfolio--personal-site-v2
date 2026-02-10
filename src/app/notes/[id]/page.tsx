import { getNoteDetail } from '@/lib/microcms';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/formatDate';
import Image from 'next/image';
import TechStackLabel from '@/components/shared/TechStackLabel';
import LinkButton from '@/components/shared/LinkButton';
import { FaRegClock } from 'react-icons/fa6';

type NoteDetailPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ from?: string; draftKey?: string }>;
};

export async function generateMetadata({ params, searchParams }: NoteDetailPageProps) {
  const { id } = await params;
  const { draftKey } = await searchParams;

  const note = await getNoteDetail(id, draftKey);

  if (!note) return {};
  return {
    title: note.title,
  };
}

export default async function NoteDetailPage({ params, searchParams }: NoteDetailPageProps) {
  const { from: rawFrom, draftKey } = await searchParams;
  const from = rawFrom ? decodeURIComponent(rawFrom) : '/notes';
  const backLabel = from.includes('#notes') ? 'Back to Top' : 'Back to Notes';

  const { id } = await params;
  const note = await getNoteDetail(id, draftKey);

  if (!note) return notFound();

  return (
    <>
      <section className='relative mb-8 w-full sm:mb-20 sm:h-60'>
        <div className='relative mb-10 h-52 w-full sm:absolute sm:top-0 sm:right-0 sm:mb-0 sm:block sm:h-full sm:w-3/5'>
          <Image
            src='/images/notes-hero.webp'
            alt='Notes hero'
            fill
            className='object-cover'
            priority
            sizes='(max-width: 768px) 100vw, 60vw'
          />
        </div>
        <div className='hidden h-full px-4 sm:block sm:px-8'>
          <div className='mx-auto h-full w-full max-w-94 sm:max-w-5xl'>
            <div className='flex h-full flex-col items-center gap-2.5 sm:items-start sm:justify-center'>
              <h1 className='font-inconsolata text-4xl'>Notes</h1>
              <p className='font-inconsolata'>What I Learned</p>
              <div className='bg-accent h-0.5 w-7' />
            </div>
          </div>
        </div>
      </section>
      <section>
        <article className='px-4 pb-16 sm:px-8 sm:pb-28'>
          <div className='mx-auto w-full max-w-94 sm:max-w-2xl'>
            <h1 className='mb-2 text-2xl font-medium'>{note.title}</h1>
            <div className='mb-3 flex flex-col sm:flex-row sm:items-center sm:gap-3.5'>
              <div className='text-gray flex shrink-0 items-center gap-1'>
                <FaRegClock size={18} />
                <p>{formatDate(note.publishedAt ?? note.createdAt)}</p>
              </div>
              <TechStackLabel techStacks={note.techStack} className='gap-1.5' />
            </div>
            <Image
              src={note.thumbnail.url}
              alt={`${note.title} thumbnail`}
              height={note.thumbnail.height}
              width={note.thumbnail.width}
              className='mb-10 w-full object-cover sm:mb-14'
            />
            <div
              className='article mb-10 md:mb-14'
              dangerouslySetInnerHTML={{ __html: note.content }}
            />
            <div className='flex flex-col items-center justify-center'>
              <LinkButton href={from}>{backLabel}</LinkButton>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
