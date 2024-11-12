function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

let array = [1, 5, 7, 2, 3, 8];
console.log(insertionSort(array));
