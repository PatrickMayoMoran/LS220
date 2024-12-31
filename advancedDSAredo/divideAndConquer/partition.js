function partition(array) {
  const pivot = array[0];
  let left = 1;
  let right = array.length - 1;

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
  [array[0], array[right]] = [array[right], array[0]];

  return array;
}
console.log(partition([7,3,9,8,5,1]));
