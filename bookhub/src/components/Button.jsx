import PropTypes from 'prop-types'

function Button({
  label = '',
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  ...rest
}) {
  const classNames = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    fullWidth ? 'button--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={classNames}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children ?? label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

export default Button
