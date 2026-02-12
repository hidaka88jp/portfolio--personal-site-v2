type BuildPaginationStateParams = {
  limit: number;
  currentPage: number;
  totalCount: number;
  currentCategory?: string;
};

export function buildPaginationState({
  limit,
  currentPage,
  totalCount,
  currentCategory,
}: BuildPaginationStateParams) {
  // Calculate total pages for pagination
  const totalPages = Math.ceil(totalCount / limit);

  // Determine previous and next page URLs
  const prevUrl = `/notes?page=${currentPage - 1}${currentCategory ? `&category=${currentCategory}` : ''}`;
  const nextUrl = `/notes?page=${currentPage + 1}${currentCategory ? `&category=${currentCategory}` : ''}`;

  return {
    currentPage,
    totalPages,
    currentCategory,
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
    prevUrl,
    nextUrl,
  };
}
