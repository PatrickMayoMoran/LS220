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

  for (let i = 0; i < len - 1; i++) {
    let swapped = false;

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

/*
Selection Sort
Time: O(N^2) because we are repeatedly iterating through the collection to select
      the smallest element and move it to the front
Space: O(1) - no additional space requirements that scale with the size of the collection
How? Build from left to right by selecting the smallest element and moving to the next      spot
*/

function selectionSort(array) {
  const len = array.length;

  for (let i = 0; i < len - 1; i++) {
    let smallest = i;

    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }

    if (smallest !== i) {
      [array[i], array[smallest]] = [array[smallest], array[i]];
    }
  }

  return array;
}

function insertionSort(array) {
}

console.log(bubbleSort(array));
console.log(selectionSort(array));
console.log(insertionSort(array));
