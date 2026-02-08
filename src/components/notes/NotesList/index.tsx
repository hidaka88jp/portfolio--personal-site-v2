import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { getNotesList } from '@/lib/microcms';
import type { TechStack } from '@/lib/microcms';
import type { NotesSearchParams } from '@/types/notes';

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

  const limit = 3;
  const offset = (currentPage - 1) * limit;
  const notes = await getNotesList({ filters, limit, offset });

  const totalPages = Math.ceil(notes.totalCount / limit);

  return (
    <section>
      <ul>
        {notes.contents.length === 0 ? (
          <li>
            <p>No notes found.</p>
          </li>
        ) : (
          notes.contents.map((note) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
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
