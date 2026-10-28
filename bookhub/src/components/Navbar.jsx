import PropTypes from 'prop-types'
import Button from './Button'

function Navbar({
  brand = 'BookHub',
  links = [],
  actionLabel = 'Browse books',
  onAction,
}) {
  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a className="navbar__brand" href="#top" aria-label={`${brand} home`}>
          <span className="navbar__logo" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 6.4C10.3 4.9 8 4.1 5.4 4.1c-.9 0-1.7.1-2.4.4v14.9c.7-.2 1.5-.3 2.4-.3 2.6 0 4.9.8 6.6 2.3 1.7-1.5 4-2.3 6.6-2.3.9 0 1.7.1 2.4.3V4.5c-.7-.3-1.5-.4-2.4-.4-2.6 0-4.9.8-6.6 2.3Z" />
              <path d="M12 6.4v15" />
            </svg>
          </span>
          <span>{brand}</span>
        </a>

        {links.length > 0 && (
          <nav className="navbar__links" aria-label="Primary">
            {links.map(({ label, href, active = false }) => (
              <a
                key={href}
                className={`navbar__link${active ? ' navbar__link--active' : ''}`}
                href={href}
                aria-current={active ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
        )}

        {actionLabel && (
          <div className="navbar__actions">
            <Button label={actionLabel} size="sm" onClick={onAction} />
          </div>
        )}
      </div>
    </header>
  )
}

Navbar.propTypes = {
  brand: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      active: PropTypes.bool,
    }),
  ),
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
}

export default Navbar
