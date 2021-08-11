/**
 * Returns a new shuffled array.
 * Does not modify the original array
 * @param array
 * @returns
 */
export function shuffle(array: string[]): string[] {
  const newArray = JSON.parse(JSON.stringify(array))

  let currentIndex = newArray.length
  let temporaryValue
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = newArray[currentIndex]
    newArray[currentIndex] = newArray[randomIndex]
    newArray[randomIndex] = temporaryValue
  }

  return newArray
}
