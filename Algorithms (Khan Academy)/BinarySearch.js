/**
 * # Binary Search
 * 
 * ## Steps
 * 1. Let min = 0 and max = n-1.
 * 2. Compute guess as the average of max and min, rounded down (so that it is an integer). 
 * 3. If array[guess] equals target, then stop. You found it! Return guess.
 * 4. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
 * 5. Otherwise, the guess was too high. Set max = guess - 1.
 * 6. Go back to step 2.
 */
const arr = new Array(100)
for (var i = 0; i < 101; i++) {
  arr[i] = i
}

const correctAnswer = Math.floor(Math.random() * (100 - 1) + 1)

let count = 0

/**
 * This function assumes that the list is sorted
 * @param {Number} n 
 * @param {Array} list 
 */
function binarySearch (n, list) {
  let min = 0
  let max = list.length - 1

  /**
   * Let us say that the correct answer is 67
   * On our first pass, 
   */
  while (true) {
    count++
    // Get half of the current max
    const currentIndex = Math.floor((min + max) / 2)
    const currentValue = list[currentIndex]

    if (currentValue === n) {
      return
    }

    if (currentValue < n) {
      /**
       * Because the current is less than our correct answer, we
       * should now start with the number directly after the current number
       */
      min = currentIndex + 1
    } else if (currentValue > n) {
      /**
       * Because the current is more than our correct answer, we 
       * should now end with the number directly before the current number
       */
      max = currentIndex - 1
    }
  }
}

binarySearch(correctAnswer, arr)
console.log('fn() executed ', count, ' times.') // eslint-disable-line
