import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import BookList from './components/BookList'
import EmptyState from './components/EmptyState'
import books from './data/books'
import filterBooks, { ALL_CATEGORIES } from './utils/filterBooks'
import './App.css'

const navLinks = [
  { label: 'Home', href: '#top', active: true },
  { label: 'Featured', href: '#featured' },
]

const categories = [...new Set(books.map((book) => book.category))]

const categoryOptions = [
  { value: ALL_CATEGORIES, label: 'All categories' },
  ...categories.map((category) => ({
    value: category,
    label: category,
  })),
]

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES)

  const filteredBooks = filterBooks(books, {
    query: searchQuery,
    category: selectedCategory,
  })
  const hasActiveFilters =
    searchQuery.trim() !== '' || selectedCategory !== ALL_CATEGORIES

  const handleBrowse = () => {
    document
      .getElementById('featured')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedCategory(ALL_CATEGORIES)
  }

  const resultCountLabel = hasActiveFilters
    ? `${filteredBooks.length} of ${books.length} books`
    : `${books.length} books`

  const trimmedQuery = searchQuery.trim()
  let emptyMessage = 'There are no books in the library yet.'

  if (trimmedQuery) {
    const categorySuffix =
      selectedCategory === ALL_CATEGORIES ? '' : ` in ${selectedCategory}`
    emptyMessage = `No titles or authors match "${trimmedQuery}"${categorySuffix}. Try a different search or category.`
  } else if (selectedCategory !== ALL_CATEGORIES) {
    emptyMessage = `There are no ${selectedCategory} books in the library yet. Try another category.`
  }

  return (
    <div className="app" id="top">
      <Navbar
        brand="BookHub"
        links={navLinks}
        actionLabel="Browse books"
        onAction={handleBrowse}
      />

      <main className="app__main container">
        <Hero
          eyebrow="Welcome to BookHub"
          title="Discover your next great read"
          subtitle="A small, carefully chosen shelf of books on code, habits and big ideas. Read. Learn. Grow."
          actionLabel="Browse books"
          onAction={handleBrowse}
          note={`${books.length} hand-picked titles to get you started`}
          featuredBooks={books.slice(0, 3)}
        />

        <section
          className="featured"
          id="featured"
          aria-labelledby="featured-title"
        >
          <div className="section-heading">
            <div>
              <h2 className="section-heading__title" id="featured-title">
                Featured books
              </h2>
              <p className="section-heading__subtitle">
                Search by title or author, or filter by category.
              </p>
            </div>
            <p
              className="section-heading__count"
              aria-live="polite"
              aria-atomic="true"
            >
              {resultCountLabel}
            </p>
          </div>

          <div className="browse-toolbar">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by title or author..."
              label="Search books by title or author"
            />
            <CategoryFilter
              value={selectedCategory}
              options={categoryOptions}
              onChange={setSelectedCategory}
              label="Filter books by category"
            />
          </div>

          {filteredBooks.length > 0 ? (
            <BookList books={filteredBooks} actionLabel="View details" />
          ) : (
            <EmptyState
              title="No books found"
              message={emptyMessage}
              actionLabel={hasActiveFilters ? 'Clear filters' : ''}
              onAction={handleClearFilters}
            />
          )}
        </section>
      </main>
    </div>
  )
}

export default App
