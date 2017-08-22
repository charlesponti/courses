// Original
function brokenSwap (array, firstIndex, secondIndex) {
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = array[firstIndex]
}

function swap (array, firstIndex, secondIndex) {
  const item1 = array[firstIndex]
  const item2 = array[secondIndex]

  array[firstIndex] = item2
  array[secondIndex] = item1
}

function otherSwap (array, firstIndex, secondIndex) {
  const items = [ array[firstIndex], array[secondIndex] ]
  array[firstIndex] = items[1]
  array[secondIndex] = items[0]
}

var testArray = [7, 9, 4]

swap(testArray, 0, 1)

console.log(testArray)

module.exports = {
  brokenSwap,
  swap,
  otherSwap
}
