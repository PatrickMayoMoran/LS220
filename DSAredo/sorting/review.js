let array = [5, 3, 1, 9, 7, 2, 4, 8, 6];

/* Bubble Sort
Time: O(N^2)
best case time: O(N), when few swaps required - mostly sorted array
Space: O(1) - no additional space requirements that scale with the size of the array
How? Bubble refers to an imaginary bubble around two adjacent elements,
      swapping if necessary
      Iterate through, swapping as needed, building the sorted array from
      back to front
*/

function bubbleSort(array) {
  const len = array.length;
  let swapped = false;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  return array;
}

function selectionSort(array) {
}

function insertionSort(array) {
}

console.log(bubbleSort(array));
console.log(selectionSort(array));
console.log(insertionSort(array));
