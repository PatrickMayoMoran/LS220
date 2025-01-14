/*
In this problem, you're presented with a nested array, matrix, which has two key characteristics:

    Each subarray in the matrix is sorted in ascending order.
    The first element of each subarray is larger than the final element of the preceding subarray.

Your task is to determine whether a given integer, target, exists within this nested array.

The time complexity of your solution should be O(log(M*N)).

Example test cases:


GOAL: return true or false whether or not the given number exists in one of the subarrays
INPUT: array of arrays and an integer
OUTPUT: boolean

RULES QUESTIONS EXAMPLES: 
  INPUT:
    always array of valid sub integer arrays? yes
    emtpy outer array? Yes - false
    empty inner arrays? yes - false
    target always valid integer? Yes

    first number of array greater than last number of previous

DSA
  nested arrays
  Two binary searches?
    Search nested arrays, check if our value is greater than or equal to first
    and less than or equal to last

    Then, search that array for target number

  helper functions
    findInArray
    given an array of numbers and a target, return true or false whether it's there
    left of 0
    right of array length - 1

    while left <= right
      calculate mid index
      get mid index number
      if mid number is target
        return true
      if mid number is greater than target
        search left
      otherwise
        search right

     return false

  left 0
  right array length - 1

  while left is less than right
  calcualte mid
    if mid0 is less than or equal to target and mid(length - 1) is greater than
    return findInArray of that array
  otherwise if mid(end) is less than target
    move left
  otherwise
    move right

  return false
*/
function findInArray(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let candidate = array[mid];

    if (candidate === target) {
      return true;
    } else if (candidate < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

function findInNestedArray(outer, target) {
  let left = 0;
  let right = outer.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let candidate = outer[mid];

    if (candidate[0] <= target && candidate[candidate.length - 1] >= target) {
      return findInArray(candidate, target);
    } else if (candidate[candidate.length - 1] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
console.log(findInArray([16, 20, 24], 20));
console.log(findInArray([16, 21, 24], 20));
console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

// All test cases should return true.
