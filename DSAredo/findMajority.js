// Given an array of numbers, return its majority element.

// The majority element is the value in the array that appears
// as at least half of the elements in the array.

// It is guaranteed that only one majority element exists in the array.

function findMajority(array) {
  let counts = new Map();
  let majorityCount = Math.ceil(array.length / 2);
  for (let i = 0; i < array.length; i++) {
    if (counts.has(array[i])) {
      counts.set(array[i], counts.get(array[i]) + 1);
    } else {
      counts.set(array[i], 1);
    }
    
    if (counts.get(array[i]) >= majorityCount) return array[i];
  }
}
// Test Cases:

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);

// All test cases should log true

