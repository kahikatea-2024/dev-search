export function getDaysDifference(date: string) {
  // Validate ISO 8601 format
  const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/
  if (!isoRegex.test(date)) {
    return 'date is invalid'
  }

  //Difference between dates
  const updatedAtDate = new Date(date)
  const todaysDate = new Date()
  const daysDifference = Math.floor(
    (todaysDate.getTime() - updatedAtDate.getTime()) / (1000 * 3600 * 24),
  )

  return daysDifference >= 0
    ? `${daysDifference} days ago`
    : 'date is in the future'
}
