// Write a function `findMax` that finds the maximum element in
// a rotated sorted array.

// A rotated sorted array is an array that was originally sorted
// in ascending order, but has been rotated (shifted) by some
// number of positions. The function should take an array of
// integers as input, representing the rotated sorted array,
// and it should return the maximum element in the array.
// The array is guaranteed to have at least one element.

// The solution should be in O(logN) time complexity.

// Example:
// Input: nums = [8, 9, 10, 2, 5, 6]
// Output: 10
// Explanation: The original sorted array [2, 5, 6, 8, 9, 10]
//              was rotated 3 times.

/*
  We are looking for the rotation point, aka the old element 0!
  key insight - the spot we're looking for is the index where either:
    (last element)
    element is greater than what's to the left AND is last element
    (first element)
    element is greater than what's to the right AND is first element
    (some middle element)
    element is greater than what's the the left and right OR

  So, have our lefts and rights and then
    calculate the mid
    if mid is 0
      check if element is greater than what's to the right
      if so, return that element
    if mid is nums.length - 1 (aka the length of the array
      check if element is greater than what's to the left
      if so, return element
    else
      check if element is greater than what's to the right AND what's to the left
      if so, return element
      if not, 
        save element to the left and element to the right
        if left is greater than right,
          adjust left and right pointers to search left
        if right is greater than left
          adjust left and right to search right
*/
function findMax(nums) {
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let candidate = nums[mid];

  

    if (mid === 0) {
      if (candidate > nums[mid + 1]) {
        return candidate;
      } else {
        return nums[mid + 1];
      }
    } else if (mid === nums.length - 1) {
      if (candidate > nums[mid - 1]) {
        return candidate;
      } else {
        return nums[mid - 1];
      }
    } else {
      let toTheRight = nums[mid + 1];
      let toTheLeft = nums[mid - 1];
      if (candidate > toTheLeft && candidate > toTheRight) return candidate;
      if (toTheRight > toTheLeft) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
}

console.log(findMax([8, 9, 10, 2, 5, 6]) === 10);
console.log(findMax([15, 18, 2, 3, 6, 12]) === 18);
console.log(findMax([7, 8, 2, 3, 4, 5, 6]) === 8);
console.log(findMax([3, 1]) === 3);
console.log(findMax([5]) === 5);
console.log(findMax([9, 10, 11, 12, 13, 14, 15, 1, 2, 3]) === 15);
console.log(findMax([4, 5, 1, 2, 3]) === 5);
console.log(findMax([23, 34, 38, 40, 41, 14, 15, 16, 17, 18, 19, 20, 21]) === 41);
console.log(findMax([100, 200, 300, 400, 500]) === 500);
console.log(findMax([45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 44]) === 63);
console.log(findMax([11, 13, 15, 17, 19, 21, 1, 3, 5, 7, 9]) === 21);
