// Write a function named `minLengthForTargetSum` that
// determines the minimal length of a contiguous subarray
// within an array of positive integers, `nums`. This
// subarray should have a sum that is greater than or
// equal to a specified positive integer, `target`.
// The function should return the length of this
// subarray. If no such subarray exists, return 0.

// The time complexity of your solution should be O(NlogN).

// Example:
// Input: nums = [4, 2, 5, 7], target = 10
// Output: 2
// Explanation: In this example, the shortest subarray that
//              meets or exceeds the target sum of 10 is [5, 7].
//              This subarray sums to 12, which is greater than
//              the target sum of 10. The length of this subarray is 2.

/*
GOAL: return the length of the shortest subarray whose elements
      sum to or exceed the target number given

INPUT: array of integers, target sum
OUTPUT: integer length of smallest subarray

RULES:
  Must use binary search
  Time complexity of solution is O(NlogN)
    What does this mean?
    - logN: Binary search step, halving the remaining iterations
            This could also occur through doubling the length of potential
            solution?
    - N: Single iteration through the collection, something that scales directly
          with the collection size

ALGORITHM:
  - Use Binary Search of potential lengths to eliminate needing to check
    certain lengths
  - Use sliding pointers for a window to see if a subarray of that length works

  left is smallest possible subarry, 1
  right is largest possible subarray, length
  smallest length is length + 1

  while left is smaller than or equal to right,
    mid is this mid length of left and right
    check to see if this length is valid
  if it is,
    save it as smallest length so far
    right is mid - 1
  if it's not
    left is mid + 1 (need to look for longer lengths)

  if smallest length is equal to length plus one, return 0, otherwise return length
*/
function isValidLength(nums, target, windowSize) {
  let runner = 0;
  let anchor = 0;
  let sum = 0;

  while (runner < windowSize) {
    sum += nums[runner];
    runner++;
  }

  if (sum >= target) return true;

  while (runner < nums.length) {
    sum -= nums[anchor];
    anchor++;
    sum += nums[runner];
    runner++;
    if (sum >= target) return true;
  }

  return false;
}

function minLengthForTargetSum(nums, target) {
  let left = 1;
  let right = nums.length;
  let smallest = nums.length + 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let validLength = isValidLength(nums, target, mid);

    if (validLength) {
      smallest = validLength;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (smallest === nums.length + 1) {
    return 0;
  } else {
    return smallest;
  }
}

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 5, 4, 3], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);

// All test cases should log true
