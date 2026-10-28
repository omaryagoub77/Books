import PropTypes from 'prop-types'
import BookCard from './BookCard'

function BookList({ books = [], actionLabel = 'View details', onSelect }) {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          actionLabel={actionLabel}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
      rating: PropTypes.number,
      reviews: PropTypes.number,
      cover: PropTypes.string,
    }),
  ),
  actionLabel: PropTypes.string,
  onSelect: PropTypes.func,
}

export default BookList
