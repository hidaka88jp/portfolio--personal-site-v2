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

type NotesListProps = {
  searchParams: NotesSearchParams;
  techStacks: TechStack[];
};

export default async function NotesList({ searchParams, techStacks }: NotesListProps) {
  const validCategoryIds = techStacks.map((stack) => stack.id);

  const { page, category } = searchParams;
  const currentPage = page ? Number(page) : 1;

  if (!Number.isInteger(currentPage) || currentPage < 1) {
    return <h2>Invalid Page</h2>;
  }

  const currentCategory = category && validCategoryIds.includes(category) ? category : undefined;
  const filters = currentCategory ? `techStack[contains]${currentCategory}` : undefined;

  const limit = 5;
  const offset = (currentPage - 1) * limit;
  const notes = await getNotesList({ filters, limit, offset });

  // Calculate total pages for pagination
  const totalPages = Math.ceil(notes.totalCount / limit);

  // Get the tech stack data for the current category
  const techStack = currentCategory ? TECH_STACKS.find((s) => s.id === currentCategory) : undefined;
  const Icon = techStack?.Icon;

  // Construct current URL with query parameters for Link components
  const listParams = new URLSearchParams();

  if (page) listParams.set('page', page);
  if (currentCategory) listParams.set('category', currentCategory);

  const listUrl = listParams.toString().length > 0 ? `/notes?${listParams.toString()}` : '/notes';

  return (
    <section>
      {/* Selected Tech Stack */}
      <div className='mb-8 flex items-end justify-between lg:block'>
        <div
          className={clsx(
            'flex w-fit items-center gap-2 rounded-md border px-2 py-1',
            currentCategory ? 'text-white' : 'border-gray text-gray bg-transparent'
          )}
          style={
            currentCategory
              ? { backgroundColor: techStack?.color, borderColor: techStack?.color }
              : {}
          }
        >
          {Icon && currentCategory && <Icon className='h-5 w-5 sm:h-6 sm:w-6' />}
          <p className='text-xl sm:text-2xl'>{currentCategory ? techStack?.name : 'ALL'}</p>
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
                    from: listUrl,
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
      {totalPages > 1 && (
        <nav className='border-gray mx-auto mt-6 flex w-fit items-center gap-5 rounded-md border px-4 py-1'>
          {currentPage === 1 ? (
            <span className='flex cursor-default items-center gap-1 px-1.5 text-gray-300'>
              <IoIosArrowBack className='h-5 w-5' />
              Prev
            </span>
          ) : (
            <Link
              href={`/notes?page=${currentPage - 1}${currentCategory ? `&category=${currentCategory}` : ''}`}
              className='hover:text-accent flex items-center gap-1 px-1.5'
            >
              <IoIosArrowBack className='h-5 w-5' />
              Prev
            </Link>
          )}
          <div className='bg-gray h-3 w-px' />
          <p className='text-sm'>
            {currentPage} / {totalPages}
          </p>
          <div className='bg-gray h-3 w-px' />
          {currentPage === totalPages ? (
            <span className='flex cursor-default items-center gap-1 px-1.5 text-gray-300'>
              Next
              <IoIosArrowForward className='h-5 w-5' />
            </span>
          ) : (
            <Link
              href={`/notes?page=${currentPage + 1}${currentCategory ? `&category=${currentCategory}` : ''}`}
              className='hover:text-accent flex items-center gap-1 px-1.5'
            >
              Next
              <IoIosArrowForward className='h-5 w-5' />
            </Link>
          )}
        </nav>
      )}
    </section>
  );
}
