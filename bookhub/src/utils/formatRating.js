const MAX_RATING = 5

/**
 * Formats a numeric rating for display, e.g. 4.5 -> "4.5".
 * Invalid values return a neutral placeholder instead of crashing the UI.
 */
export function formatRating(rating) {
  const value = Number(rating)

  if (!Number.isFinite(value)) {
    return '—'
  }

  const clamped = Math.min(Math.max(value, 0), MAX_RATING)
  return clamped.toFixed(1)
}

export default formatRating
