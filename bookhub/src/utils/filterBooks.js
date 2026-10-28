export const ALL_CATEGORIES = 'All'

/**
 * Filters a book collection by a case-insensitive title/author query and an
 * optional category. Pure: returns a new array and never mutates the input.
 */
export function filterBooks(
  books = [],
  { query = '', category = ALL_CATEGORIES } = {},
) {
  if (!Array.isArray(books)) return []

  const term = String(query ?? '')
    .trim()
    .toLowerCase()

  return books.filter((book) => {
    if (!book) return false

    const title = String(book.title ?? '').toLowerCase()
    const author = String(book.author ?? '').toLowerCase()
    const matchesQuery =
      term === '' || title.includes(term) || author.includes(term)
    const matchesCategory =
      category === ALL_CATEGORIES || book.category === category

    return matchesQuery && matchesCategory
  })
}

export default filterBooks
