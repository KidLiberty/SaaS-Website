export function formatCompactNumber(number: number) {
  return new Intl.NumberFormat(undefined, { notation: 'compact' }).format(number)
}