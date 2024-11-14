function findZeroPosition(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === 0) {
      return mid;
    } else if (nums[mid] < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

console.log(findZeroPosition([-7, -5, -3, 0, 2])); // 3
console.log(findZeroPosition([3, 5, 7, 9, 11])); // 0
console.log(findZeroPosition([-8, -7, -5, -2, -1])); // 5
