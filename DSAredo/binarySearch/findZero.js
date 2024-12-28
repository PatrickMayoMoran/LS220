function findZeroPosition(array) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === 0) {
      return mid;
    } else if (array[mid] < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

console.log(findZeroPosition([-7, -5, -3, 0, 2])); // 3
console.log(findZeroPosition([3,5,7,9,11])); // 0
console.log(findZeroPosition([-3,-2,-1,1,2,3])); // 3
