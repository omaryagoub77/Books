import PropTypes from 'prop-types'

function Footer({
  brand = 'BookHub',
  tagline = 'Read. Learn. Grow.',
  links = [],
  copyright = '',
}) {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand-block">
          <a className="footer__brand" href="#top">
            {brand}
          </a>
          {tagline && <p className="footer__tagline">{tagline}</p>}
        </div>

        {links.length > 0 && (
          <nav className="footer__links" aria-label="Footer">
            {links.map(({ label, href }) => (
              <a key={href} className="footer__link" href={href}>
                {label}
              </a>
            ))}
          </nav>
        )}

        {copyright && <p className="footer__copyright">{copyright}</p>}
      </div>
    </footer>
  )
}

Footer.propTypes = {
  brand: PropTypes.string,
  tagline: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ),
  copyright: PropTypes.string,
}

export default Footer
