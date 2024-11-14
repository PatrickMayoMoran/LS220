// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

/*
  GOAL: return whichever is smaller - the number of positive numbers
        or the number of negative numbers

  INPUT: array
  OUTPUT: integer

  RULES/EXAMPLES/QUESTIONS:
    Empty Array returns 0
    zero is neither positive or negative

  ALGORITHM
    Binary search
    set lastNegative = -1
    starting left is 0
    starting right is one minus length
    negativeCount = 0;
    positiveCount = 0;

    while left is less than or equal to right
      calc mid
      if mid is negative,
        set lastNegative to mid
        left is mid + 1;
      if mid is positive,
        right is mid - 1
      if mid is 0,
        negative count is mid
        positive is length minus mid minus 1

     return Math.min(negativeCount, positiveCount);

*/

function lastNegativeIndex(nums) {
  let lastNegative = -1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= 0) {
      right = mid - 1;
    } else if (nums[mid] < 0) {
      lastNegative = mid;
      left = mid + 1;
    }
  }

  return lastNegative;
}

function firstPositiveIndex(nums) {
  let firstPositive = nums.length
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= 0) {
      left = mid + 1;
    } else if (nums[mid] > 0) {
      firstPositive = mid;
      right = mid - 1;
    }
  }

  return firstPositive;
}

function minimumCount(nums) {
  let lastNegative = lastNegativeIndex(nums);
  let firstPositive = firstPositiveIndex(nums);

  let negativeCount = lastNegative + 1;
  let positiveCount = nums.length - firstPositive;

  return Math.min(negativeCount, positiveCount);
}

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.
