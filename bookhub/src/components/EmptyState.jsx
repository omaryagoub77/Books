import PropTypes from 'prop-types'
import Button from './Button'

function EmptyState({
  title = 'No books found',
  message = '',
  actionLabel = '',
  onAction,
}) {
  return (
    <div className="empty-state" role="status">
      <span className="empty-state__icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10.5" cy="10.5" r="6" />
          <path d="m15 15 4.5 4.5" />
          <path d="M8.5 10.5h4" />
        </svg>
      </span>
      <h3 className="empty-state__title">{title}</h3>
      {message && <p className="empty-state__message">{message}</p>}
      {actionLabel && (
        <Button label={actionLabel} variant="secondary" onClick={onAction} />
      )}
    </div>
  )
}

EmptyState.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
}

export default EmptyState
