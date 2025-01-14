/*
In this problem, you're given an array of numbers nums, and a specific integer k. Your objective is to compute the average value of each contiguous subarray of length k within the given array.

Requirements:

    The input will be an array of numbers and an integer k.
    You need to find the average of every contiguous subarray of size k in the array.
    The output should be an array containing these averages.

GOAL: Return an array with averages of the subarrays of the given size, contiguous

INPUT: Array, integer
OUTPUT: Array of integers

RULES, QUESTIONS, EXAMPLES
  Arguments
    Array of integers and integer? Yes
    Second integer argument valid subarray size? Yes
    Empty array? No
    Positive and negative integers only (no NaN, infinity) Yes
    Any additional arguments? no
    Round to one decimal? Yes

    OUTPUT mutated or new? New array

DSA
  Array
  Two pointers - windowStart and windowEnd

  initialize result array
  initialize start at 0
  initialize windowEnd at 0;
  initialize rollingSum at 0;

  while windowEnd is less than k,
    add nums at windowEnd to rollingSum
    increment windowEnd

  while windowEnd is less than the length of nums,
    add to result rollingSum / k rounded to 1
    decrement rollingSum by nums at windowStart
    increment windowStart
    increment windowEnd
    add nums at windowEnd to rolling sum

  return result

*/

function findAverages(nums, k) {
  const result = [];
  let start = 0;
  let end = 0;
  let rollingSum = 0;

  while (end < k) {
    rollingSum += nums[end];
    end++;
  }

  let average = rollingSum / k;
  result.push(average);

  while (end < nums.length) {
    rollingSum += nums[end] - nums[start];
    start++;
    end++;
    average = rollingSum / k;
    result.push(average);
  }

  return result;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]
