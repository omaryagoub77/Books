import { useId, useRef } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function SearchBar({
  value = '',
  onChange,
  placeholder = 'Search by title or author…',
  label = 'Search books by title or author',
  id,
}) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const inputRef = useRef(null)

  const handleClear = () => {
    onChange?.('')
    inputRef.current?.focus()
  }

  return (
    <div className="search-bar" role="search">
      <label className="sr-only" htmlFor={inputId}>
        {label}
      </label>
      <span className="search-bar__icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16.2 16.2 4.3 4.3" />
        </svg>
      </span>
      <input
        ref={inputRef}
        id={inputId}
        className="search-bar__input"
        type="search"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck="false"
      />
      {value && (
        <Button
          variant="ghost"
          size="sm"
          className="search-bar__clear"
          aria-label="Clear search"
          onClick={handleClear}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </Button>
      )}
    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
}

export default SearchBar
