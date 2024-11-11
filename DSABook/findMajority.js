// Given an array of numbers, return its majority element.

// The majority element is the value in the array that appears
// as at least half of the elements in the array.

// It is guaranteed that only one majority element exists in the array.

// Test Cases:

/*
  return the number that appears at least half in array


*/
/*
OBJECT solution
function findMajority(array) {
  let counts = {};
  let half = Math.ceil(array.length / 2);
  for (let i = 0; i < array.length; i += 1) {
    let num = array[i];
    if (counts[num]) {
      counts[num] += 1;
      if (counts[num] >= half) return num;
    } else {
      counts[num] = 1;
    }
  }
}
*/
function findMajority(array) {
  let counts = new Map();
  let half = Math.ceil(array.length / 2);

  for (let i = 0; i < array.length; i += 1) {
    let num = array[i];
    if (counts.has(num)) {
      counts.set(num, counts.get(num) + 1);
      if (counts.get(num) >= half) return num;
    } else {
      counts.set(num, 1);
    }
  }
}

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);

// All test cases should log true
