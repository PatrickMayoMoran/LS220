function isTargetFrequent(nums, target) {
  let leftIndex = findLeftEdge(nums, target);
  let rightIndex = findRightEdge(nums, target);
  return ((rightIndex > 0 && leftIndex > 0) && rightIndex - leftIndex >= target - 1);
}

function findLeftEdge(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let leftEdge = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currentNum = nums[mid];

    if (currentNum >= target) {
      leftEdge = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return leftEdge;
}

function findRightEdge(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let rightEdge = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currentNum = nums[mid];

    if (currentNum <= target) {
      rightEdge = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return rightEdge;
}

console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.
