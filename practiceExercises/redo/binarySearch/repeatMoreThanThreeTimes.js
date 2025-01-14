/*
Given an array nums, sorted in ascending order (where elements are equal to or increase as you move through the array), determine if a specified number, target, appears more than three times in the array. The function should return true if target is found at least four times, and false otherwise.

GOAL: Return true or false whether or not a given number appears
      more than 3 times in a given, sorted array

INPUT: array, target integer
OUTPUT: Boolean

RULES QUESTIONS EXAMPLES
  INPUT
    2 Arguments? yes
    first sorted array of integers? Yes
    Any other numeric values? No
    Empty array? Yes, return false
    second
      Always an integer? yes

  RULES
    Target must appear 4 or more times (more than 3) for true
    array is sorted
    must use binary search

DSA
  Helper functions
    findLeft index
    findRight index

  findLeft
    When have I found the left index?
      When mid is the target number and is greater than whatever is to the left
    Check if first element is target,
      if so, return 0
    left 0, right of length - 1
    while left is less than equal to right
      calculate mid index
      have a candidate
      if candidate is equal to the target and greater than what's to the left
        return mid index
      if candidate is greater than or equal to the target and greater than or
      equal what's to the left,
        search left (move right to mid - 1)
      if candidate is less than the target,
        search right (left to mid + 1)

    return -1;

    findRight
      - check ending index first, if so return that
      left of 0
      right of length - 1

      while left is less than or equal to right
      calculate mid
      have candidate element
      if candidate equals target and is less than element to the right
        return mid index
      if candidate equals or is less than the target and is less than or equal to
      what's to the right
        search right (left mid + 1)
      else
        search left (right is mid - 1)

  right minus the left + 1 is the number of occurrences
  return numberofoccurrences is greater than 3
*/

function findLeft(array, target) {
  if (array[0] === target) return 0;

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let candidate = array[mid];
    if (candidate === target &&& candidate > array[mid - 1]) {
      return mid;
    } else if (candidate >= target && candidate >= array[mid - 1]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

function isTargetFrequent(array, target) {
  if (array.length <= 3) return false;

  return findLeft(array, target);
}

function findRight(array, target) {
}
console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.
