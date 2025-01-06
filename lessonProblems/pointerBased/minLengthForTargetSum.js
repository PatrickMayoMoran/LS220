// Write a function named `minLengthForTargetSum` that
// determines the minimal length of a contiguous subarray
// within an array of positive integers, `nums`. This
// subarray should have a sum that is greater than or
// equal to a specified positive integer, `target`. The
// function should return the length of this subarray.
// If no such subarray exists, return 0.

// Example:
// Input: nums = [4, 2, 5, 7], target = 10
// Output: 2
// Explanation: In this example, the shortest subarray that
//              meets or exceeds the target sum of 10 is [5, 7].
//              This subarray sums to 12, which is greater than
//              the target sum of 10. The length of this
//              subarray is 2.
/*

GOAL: return the length of the shortest subarray where the numbers
      sum to greater than or equal to a target value

INPUT: array of positive integers and a target
OUTPUT: integer (length of subarray)

ALGORITHM:
  start pointer at 0
  end pointer at length - 1
  result as 0

  while start less than or equal to the end
    array is slice from beginning to end
    sum is the reduction of array from start to end
    if sum greater than or equal to target
      end minus start assigned to result
      if num[start] is less than num[end]
        start incremenet
      else
        decrement end
    else 
      break;
  
  return result.length
*/

/* START-END POINTER STRATEGY
function minLengthForTargetSum(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let result = 0;

  while (start <= end) {
    let sub = nums.slice(start, end + 1);
    let sum = sub.reduce((acc, next) => acc + next);
    if (sum >= target) {
      result = end - start + 1;
      if (nums[start] < nums[end]) {
        start++;
      } else {
        end--;
      }
    } else {
      break;
    }
  }

  return result;
}
*/

// ANCHOR RUNNER POINTER STRATEGY
function minLengthForTargetSum(nums, target) {
  let anchor = 0;
  let runner = 0;
  let shortest = nums.length + 1;
  let sum = 0;

  while (runner < nums.length) {
    sum += nums[runner];
    while (sum >= target) {
      shortest = Math.min(shortest, (runner - anchor + 1));
      sum -= nums[anchor];
      anchor++;
    }
    runner++;
  }
  /*
  while (runner < nums.length && anchor <= runner) {
    if (sum >= target) {
      shortest = shortest ? Math.min(shortest, (runner - anchor + 1)) : runner - anchor + 1;
      sum -= nums[anchor];
      anchor++;
    } else {
      runner++;
      sum += nums[runner];
    }
  }
  */

  return shortest === nums.length + 1 ? 0 : shortest;
}

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 3, 4, 5], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);

// All test cases should log true

