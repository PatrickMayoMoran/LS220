let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function binarySearch(sortedArray, target) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (sortedArray[mid] === target) {
      return mid;
    } else if (sortedArray[mid] > target) {
      end = mid -1; // mid is larger than target, so move end to middle and search the left half
    } else { // mid is smaller than target, so move start to middle and search the right half
      start = mid + 1
    }
  }

  return - 1;
}

console.log(binarySearch(testArray, 13));
console.log(binarySearch(testArray, 21));
