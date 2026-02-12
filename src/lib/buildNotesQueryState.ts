import type { TechStack } from '@/lib/microcms';

type buildNotesQueryStateParams = {
  page?: string;
  category?: string;
  techStacks: TechStack[];
};

export function buildNotesQueryState({ page, category, techStacks }: buildNotesQueryStateParams) {
  const validCategoryIds = techStacks.map((stack) => stack.id);

  const currentPage = page ? Number(page) : 1;

  const isInvalidPage = !Number.isInteger(currentPage) || currentPage < 1;

  const currentCategory = category && validCategoryIds.includes(category) ? category : undefined;
  const filters = currentCategory ? `techStack[contains]${currentCategory}` : undefined;

  // Construct current URL with query parameters for Link components
  const listParams = new URLSearchParams();

  if (currentPage > 1) listParams.set('page', currentPage.toString());
  if (currentCategory) listParams.set('category', currentCategory);

  const listUrl = listParams.toString().length > 0 ? `/notes?${listParams.toString()}` : '/notes';

  // For pagination, we will use limit and offset based on the current page
  const limit = 5;
  const offset = (currentPage - 1) * limit;

  return {
    currentPage,
    currentCategory,
    isInvalidPage,
    listUrl,
    filters,
    limit,
    offset,
  };
}
