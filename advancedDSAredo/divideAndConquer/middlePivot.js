function partition(array, low = 0, high = array.length -1) {
  let pivotIndex = Math.floor((low + high) / 2);
  let pivot = array[pivotIndex];

  [array[low], array[pivotIndex]] = [array[pivotIndex], array[low]];

  let left = low + 1;
  let right = high;

  while (left <= right) {
    while (left <= right && array[left] < pivot) {
      left++;
    }

    while (left <= right && array[right] >= pivot) {
      right--;
    }

    if (left < right) {
      [array[left], array[right]] = [array[right], array[left]];
    }
  }

  [array[low], array[right]] = [array[right], array[low]];

  return right;
}

function quicksort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    let pivotIndex = partition(array, low, high);
    quicksort(array, low, pivotIndex - 1);
    quicksort(array, pivotIndex + 1, high);
  }
}

const arr = [7, 3, 9, 8, 5, 1];
quicksort(arr);
console.log(arr); // Output: [1, 3, 5, 7, 8, 9]

