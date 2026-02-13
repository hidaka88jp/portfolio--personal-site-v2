import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaArrowDownShortWide } from 'react-icons/fa6';
import { getNotesList } from '@/lib/microcms';
import type { TechStack } from '@/lib/microcms';
import type { NotesSearchParams } from '@/types/notes';
import { TECH_STACKS } from '@/constants/techStacks';
import TechStackLabel from '@/components/shared/TechStackLabel';
import { buildNotesQueryState } from '@/lib/buildNotesQueryState';
import { buildPaginationState } from '@/lib/buildPaginationState';

type NotesListProps = {
  searchParams: NotesSearchParams;
  techStacks: TechStack[];
};

export default async function NotesList({ searchParams, techStacks }: NotesListProps) {
  const base = buildNotesQueryState({
    page: searchParams.page,
    category: searchParams.category,
    techStacks,
  });

  if (base.isInvalidPage) {
    return <h2>Invalid Page</h2>;
  }

  const notes = await getNotesList({
    filters: base.filters,
    limit: base.limit,
    offset: base.offset,
  });

  const pagination = buildPaginationState({
    limit: base.limit,
    currentPage: base.currentPage,
    totalCount: notes.totalCount,
    currentCategory: base.currentCategory,
  });

  // Get the tech stack data for the current category
  const techStack = base.currentCategory
    ? TECH_STACKS.find((s) => s.id === base.currentCategory)
    : undefined;
  const Icon = techStack?.Icon;

  return (
    <section>
      {/* Selected Tech Stack */}
      <div className='mb-8 flex items-end justify-between lg:block'>
        <div
          className={clsx(
            'flex w-fit items-center gap-2 rounded-md border px-2 py-1',
            base.currentCategory ? 'text-white' : 'border-gray text-gray bg-transparent'
          )}
          style={
            base.currentCategory
              ? { backgroundColor: techStack?.color, borderColor: techStack?.color }
              : {}
          }
        >
          {Icon && base.currentCategory && <Icon className='h-5 w-5 sm:h-6 sm:w-6' />}
          <p className='text-xl sm:text-2xl'>{base.currentCategory ? techStack?.name : 'ALL'}</p>
        </div>
        <Link
          href='#category'
          className='text-gray flex items-center gap-0.5 border-b lg:hidden'
          aria-label='Jump to category filter'
        >
          <FaArrowDownShortWide className='h-4 w-4' />
          <p>Category</p>
        </Link>
      </div>
      <ul className='space-y-9 sm:space-y-10'>
        {notes.contents.length === 0 ? (
          <li>
            <p>No notes found.</p>
          </li>
        ) : (
          notes.contents.map((note) => (
            <li
              className='w-full cursor-pointer border-b border-gray-400 pb-2 hover:opacity-70 sm:border-r-0 sm:pb-4'
              key={note.id}
            >
              <Link
                href={{
                  pathname: `/notes/${note.id}`,
                  query: {
                    from: base.listUrl,
                  },
                }}
                className='grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-7'
              >
                <Image
                  src={note.thumbnail.url}
                  alt={`${note.title} thumbnail`}
                  height={note.thumbnail.height}
                  width={note.thumbnail.width}
                  className='col-span-1 aspect-3/2 w-full object-cover sm:col-span-1'
                />
                <div className='col-span-1 sm:col-span-2'>
                  <TechStackLabel techStacks={note.techStack} className='pt-0 sm:pt-2' />
                  <h3>{note.title}</h3>
                </div>
              </Link>
            </li>
          ))
        )}
      </ul>
      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <nav className='border-gray mx-auto mt-6 flex w-fit items-center gap-5 rounded-md border px-4 py-1'>
          {pagination.hasPrev ? (
            <Link
              href={pagination.prevUrl}
              className='hover:text-accent flex items-center gap-1 px-1.5'
            >
              <IoIosArrowBack className='h-5 w-5' />
              Prev
            </Link>
          ) : (
            <span className='flex cursor-default items-center gap-1 px-1.5 text-gray-300'>
              <IoIosArrowBack className='h-5 w-5' />
              Prev
            </span>
          )}
          <div className='bg-gray h-3 w-px' />
          <p className='text-sm'>
            {pagination.currentPage} / {pagination.totalPages}
          </p>
          <div className='bg-gray h-3 w-px' />
          {pagination.hasNext ? (
            <Link
              href={pagination.nextUrl}
              className='hover:text-accent flex items-center gap-1 px-1.5'
            >
              Next
              <IoIosArrowForward className='h-5 w-5' />
            </Link>
          ) : (
            <span className='flex cursor-default items-center gap-1 px-1.5 text-gray-300'>
              Next
              <IoIosArrowForward className='h-5 w-5' />
            </span>
          )}
        </nav>
      )}
    </section>
  );
}
