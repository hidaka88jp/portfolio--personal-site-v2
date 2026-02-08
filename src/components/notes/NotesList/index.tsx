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

  return (
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
  );
}
