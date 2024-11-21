function partition(array, low = 0, high = array.length - 1) {
  const pivotIndex = Math.floor((low + high) / 2);
  const pivot = array[pivotIndex];

  // swap pivot element with first element to allow for left
  // and right pointers to eventually cross
  // We will move it back to middle later!
  // This is the step that is not needed if we are using first element
  // as the pivot

  [array[pivotIndex], array[low]] = [array[low], array[pivotIndex]];

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

function quickSort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    const pivotIndex = partition(array, low, high);
    quickSort(array, low, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, high);
  }
}

const array = [7, 3, 9, 8, 5, 1];
quickSort(array);
console.log(array);
