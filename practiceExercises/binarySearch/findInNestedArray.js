function searchArray(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currNum = array[mid];
    if (currNum === target) {
      return true;
    } else if (currNum > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

function findInNestedArray(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currentArray = array[mid];
    if (target >= currentArray[0] && target <= currentArray[currentArray.length - 1]) {
      return searchArray(currentArray, target);
    } else if (target < currentArray[0]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 80) === false);

// All test cases should return true.
