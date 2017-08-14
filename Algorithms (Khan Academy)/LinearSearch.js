var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

const correctAnswer = 67

/**
 * This will be used to keep a count of how many times the 
 * function is executed in order to find the correct answer.
 */
let count = 0

function findAnswer (n, list) {
  for (var i = 0; i < list.length; i++) {
    count++
    if (list[i] === n) return
  }
}

findAnswer(correctAnswer, primes)

console.log('fn() executed ', count, ' times.') // eslint-disable-line
