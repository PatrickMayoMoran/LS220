// Given a list of numbers,
// find two numbers in the list that add up to ten
// and return them. If no such pair exists, return null.

// It is guaranteed that there is either exactly one pair of numbers
// that satisfies the condition, or no pairs at all.

// Test Cases:

/*
function generatePairs(array) {
  let pairs = [];
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      pairs.push([array[i], array[j]]);
    }
  }
  return pairs;
}
*/

function findPair(array) {
  for (let i = 0; i < array.length - 2; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      let n1 = array[i];
      let n2 = array[j];
      let pair = [n1, n2];
      if (addToTen(n1, n2)) return pair;
    }
  }

    return null;
}

/*
  let pair = pairs.filter(([n1, n2]) => addToTen(n1, n2));
  if (pair.length === 0) return null;
  return pair.flat();
}
*/

function addToTen(num1, num2) {
  return (num1 + num2) === 10;
}

console.log(findPair([2, 3, 9, 7])); // Output: [3, 7]
console.log(findPair([10, 6, -1, 2])); // null
console.log(findPair([1, 2, 5, 6])); // null
console.log(findPair([1, 3, 6, 10, 4, 5])); // [6, 4]
console.log(findPair([4, -5, 3, 15, 5])); // [-5, 15]
