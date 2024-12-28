function findRangeOfThrees(array) {
  return [findLeftMost(array), findRightMost(array)];
}

function findLeftMost(array) {
  let left = 0;
  let right = array.length - 1;
  let leftMost = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === 3) {
      leftMost = mid;
      right = mid - 1;
    } else if (array[mid] > 3) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return leftMost;
}

function findRightMost(array) {
  let left = 0;
  let right = array.length - 1;
  let rightMost = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === 3) {
      rightMost = mid;
      left = mid + 1;
    } else if (array[mid] < 3) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

   return rightMost;
}

console.log(findRangeOfThrees([1, 2, 3, 3, 3, 3, 3, 4, 5])); // [2, 6]
console.log(findRangeOfThrees([1, 2, 5, 5, 6, 9, 10]));      // [-1, -1]
console.log(findRangeOfThrees([]));                          // [-1, -1]
