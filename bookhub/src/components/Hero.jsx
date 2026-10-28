import PropTypes from 'prop-types'
import Button from './Button'

const COVER_POSITIONS = ['left', 'center', 'right']

function getCoverPosition(index, total) {
  if (total === 1) return 'center'
  if (total === 2) return index === 0 ? 'left' : 'right'
  return COVER_POSITIONS[index] ?? 'center'
}

function Hero({
  eyebrow = '',
  title = 'Discover great books',
  subtitle = '',
  actionLabel = 'Browse books',
  onAction,
  note = '',
  featuredBooks = [],
}) {
  const covers = featuredBooks.slice(0, 3)

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}
        <h1 className="hero__title" id="hero-title">
          {title}
        </h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        <div className="hero__actions">
          <Button label={actionLabel} onClick={onAction} />
        </div>
        {note && <p className="hero__note">{note}</p>}
      </div>

      {covers.length > 0 && (
        <div className="hero__art" aria-hidden="true">
          <span className="hero__glow" />
          <div className="hero__covers">
            {covers.map((book, index) => (
              <div
                key={book.id ?? index}
                className={`hero__cover hero__cover--${getCoverPosition(index, covers.length)}`}
              >
                {book.cover && <img src={book.cover} alt="" />}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

Hero.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  note: PropTypes.string,
  featuredBooks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      cover: PropTypes.string,
    }),
  ),
}

export default Hero
