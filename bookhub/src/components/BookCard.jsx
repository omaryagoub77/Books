import PropTypes from 'prop-types'
import Button from './Button'
import formatRating from '../utils/formatRating'

const STAR_COUNT = 5

function BookCard({ book = {}, actionLabel = 'View details', onSelect }) {
  const {
    title = 'Untitled book',
    author = 'Unknown author',
    category = '',
    rating,
    reviews,
    cover,
  } = book

  const numericRating = Number(rating)
  const safeRating = Number.isFinite(numericRating)
    ? Math.min(Math.max(numericRating, 0), STAR_COUNT)
    : 0
  const ratingLabel = formatRating(rating)
  const hasReviews = reviews !== undefined && reviews !== null && reviews !== ''
  const coverAlt = `Cover of ${title}`
  const categorySlug = category
    ? category
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
    : 'general'
  const handleSelect = onSelect ? () => onSelect(book) : undefined

  return (
    <article className="book-card">
      <div className="book-card__media">
        <div className="book-card__cover-frame">
          {cover ? (
            <img
              className="book-card__cover"
              src={cover}
              alt={coverAlt}
              loading="lazy"
            />
          ) : (
            <div
              className="book-card__cover book-card__cover--placeholder"
              role="img"
              aria-label={coverAlt}
            >
              {title.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      </div>

      <div className="book-card__body">
        {category && (
          <span className="book-card__category" data-category={categorySlug}>
            {category}
          </span>
        )}

        <h3 className="book-card__title">{title}</h3>
        <p className="book-card__author">{author}</p>

        <p className="book-card__rating">
          <span
            className="book-card__stars"
            style={{ '--rating-fill': `${(safeRating / STAR_COUNT) * 100}%` }}
            aria-hidden="true"
          >
            <span className="book-card__stars-track">★★★★★</span>
            <span className="book-card__stars-fill">★★★★★</span>
          </span>
          <span className="sr-only">Rated </span>
          <span className="book-card__rating-value">{ratingLabel}</span>
          <span className="sr-only"> out of 5</span>
          {hasReviews && (
            <span className="book-card__reviews">({reviews} reviews)</span>
          )}
        </p>

        <div className="book-card__actions">
          <Button
            label={actionLabel}
            size="sm"
            fullWidth
            onClick={handleSelect}
          />
        </div>
      </div>
    </article>
  )
}

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    cover: PropTypes.string,
  }),
  actionLabel: PropTypes.string,
  onSelect: PropTypes.func,
}

export default BookCard
