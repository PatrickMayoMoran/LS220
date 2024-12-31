function partition(array, low = 0, high = array.length - 1) {
  const pivotIndex = low;
  const pivot = array[pivotIndex];
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

  // swap pivot with right 
  [array[pivotIndex], array[right]] = [array[right], array[pivotIndex]];

  return right;
}

function quicksort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    const pivotIndex = partition(array, low, high);
    quicksort(array, low, pivotIndex - 1);
    quicksort(array, pivotIndex + 1, high);
  }
}

const array = [7,3,9,8,5,1];
quicksort(array);
console.log(array);
