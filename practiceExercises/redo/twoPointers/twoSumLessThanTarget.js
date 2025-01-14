/*
In this problem, you're given an array of integers nums and a target integer target. Your objective is to find the maximum sum that can be obtained by adding two distinct elements from the array, where this sum is less than the target.

Requirements:

    The input will be an array of integers, nums, and a target integer, target.
    You need to find the maximum value of nums[i] + nums[j] where i != j and nums[i] + nums[j] < target.
    If no such pair exists, return -1.

GOAL: return the smallest sum of two numbers from the array that's still
      bigger than the target number

INPUT Array and target
OUTPUT integer

RULES QUESTIONS EXAMPLES 
  INPUT
    array empty? no
    array only valid positive integers? Yes
    Target valid integer? yes
  OUTPUT integer

DSA
  initialize greatestSum to -1
  have anchor at 0,
  have runner at 1
  have sum at anchor plus runner

  while runner is less than nums length and number at runner is less than target
    sum is anchor plus runner
    if sum is greater than greatestSum and less than target
      reassign greatestSum
      runner ++
    if sum is greater than or equal to target
      anchor++
    if sum is less than greatest Sum and less than target
      runner++

  return greatestSum 
*/

function twoSumLessThanTarget(nums, target) {
  nums.sort((a,b) => a - b);

  let anchor = 0;
  let runner = 1;
  let greatestSum = -1;

  while (runner < nums.length && nums[runner] < target && anchor < target) {
    let sum = nums[anchor] + nums[runner];
    if (sum > greatestSum && sum < target) {
      greatestSum = sum;
      runner++;
    } else if (sum < greatestSum) {
      runner++;
    } else if (sum >= target) {
      anchor++;
    }
  }

  return greatestSum;
}

console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
// All test cases should log true
