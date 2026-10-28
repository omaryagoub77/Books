import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookCard from './components/BookCard'
import books from './data/books'
import './App.css'

const navLinks = [
  { label: 'Home', href: '#top', active: true },
  { label: 'Featured', href: '#featured' },
]

function App() {
  const handleBrowse = () => {
    document
      .getElementById('featured')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
                Explore our collection of amazing books.
              </p>
            </div>
            <p className="section-heading__count">{books.length} books</p>
          </div>

          <div className="book-grid">
            {books.map((book) => (
              <BookCard key={book.id} book={book} actionLabel="View details" />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
