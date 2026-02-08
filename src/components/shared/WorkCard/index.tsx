import Image from 'next/image';
import Link from 'next/link';

import type { Works } from '@/lib/microcms';

type WorkCardProps = Pick<Works, 'id' | 'title' | 'category' | 'thumbnail'>;

export default function WorkCard({ id, title, category, thumbnail }: WorkCardProps) {
  return (
    <Link className='block' href={`/${id}`} aria-label={`View details for ${title}`}>
      <div className='group relative w-full cursor-pointer pr-6 hover:opacity-85'>
        <div className='overflow-hidden border-r-2 border-b-2 border-gray-200'>
          <Image
            src={thumbnail.url}
            alt={`${title} thumbnail`}
            height={thumbnail.height}
            width={thumbnail.width}
            className='aspect-square w-full object-cover object-top pr-2 pb-2 transition-transform duration-300 group-hover:scale-[1.03]'
          />
        </div>
        <p className='font-inconsolata absolute top-0 right-0 origin-top-left translate-x-full rotate-90 font-light text-gray-400'>
          {category}
        </p>
      </div>
    </Link>
  );
}
