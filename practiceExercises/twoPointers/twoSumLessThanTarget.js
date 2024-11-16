function twoSumLessThanTarget(nums, target) {
  nums.sort((a,b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  let maxSum = -1;

  while (start < end) {
    currentSum = nums[start] + nums[end];
    if (currentSum < target) {
      maxSum = Math.max(maxSum, currentSum);
      start++;
    } else {
      end--;
    }
  }

  return maxSum;
}

console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
// All test cases should log true
