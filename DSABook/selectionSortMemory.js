function selectionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

let array = [8, 3, 1, 2, 5];
console.log(selectionSort(array));
