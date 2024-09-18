export function getDaysDifference(date: string) {
  //Difference between dates
  const updatedAtDate = new Date(date)
  const todaysDate = new Date()
  const daysDifference = Math.floor(
    (todaysDate.getTime() - updatedAtDate.getTime()) / (1000 * 3600 * 24),
  )

  return daysDifference
}
