import { useId } from 'react'
import PropTypes from 'prop-types'

function CategoryFilter({
  value = 'All',
  options = [],
  onChange,
  label = 'Filter books by category',
  id,
}) {
  const generatedId = useId()
  const selectId = id ?? generatedId

  return (
    <div className="category-filter">
      <label className="sr-only" htmlFor={selectId}>
        {label}
      </label>
      <div className="category-filter__select-wrap">
        <select
          id={selectId}
          className="category-filter__select"
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="category-filter__chevron" aria-hidden="true">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 8 4 4 4-4" />
          </svg>
        </span>
      </div>
    </div>
  )
}

CategoryFilter.propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  onChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
}

export default CategoryFilter
