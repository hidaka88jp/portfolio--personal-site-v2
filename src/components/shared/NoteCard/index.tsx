import Image from 'next/image';
import Link from 'next/link';
import TechStackLabel from '@/components/shared/TechStackLabel';
import type { Notes } from '@/lib/microcms';

type NotesCardProps = Pick<Notes, 'id' | 'title' | 'techStack' | 'thumbnail'>;

export default function NoteCard({ id, title, techStack, thumbnail }: NotesCardProps) {
  return (
    <Link
      href={`/notes/${id}?from=${encodeURIComponent('/#notes')}`}
      className='relative grid w-full cursor-pointer grid-cols-2 gap-3 border-b border-gray-400 pb-2 hover:opacity-70 lg:block lg:border-r lg:pb-6'
    >
      <Image
        src={thumbnail.url}
        alt={`${title} thumbnail`}
        height={thumbnail.height}
        width={thumbnail.width}
        className='col-span-1 object-cover lg:aspect-3/2 lg:w-full'
      />
      <div className='col-span-1 pr-1'>
        {/* badge */}
        <TechStackLabel techStacks={techStack} className='pt-0 lg:pt-2' />
        {/* title */}
        <h3>{title}</h3>
      </div>
    </Link>
  );
}
