export function percentage(value: number): string {
  return `${Math.round(value * 100 * 100) / 100}%`
}
