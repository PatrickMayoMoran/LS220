/*
ORIGINAL SOLUTION
function findAverages(numbers, size) {
  let anchor = 0;
  let runner = 0;
  const len = numbers.length;
  const averages = [];

  while ((anchor + size) <= len) {
    runner = anchor;
    let sum = 0;
    let count = 0;
    while (count < size) {
      sum += numbers[runner];
      count++;
      runner ++;
    }

    averages.push(sum / size);
    anchor++;
  }

  return averages;
}
*/
/*
// PROVIDED SOLUTION
function findAverages(numbers, size) {
  let result = [];
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < numbers.length; right++) {
    windowSum += numbers[right];

    if (right >= size - 1) {
      result.push(windowSum / size);
      windowSum -= numbers[left];
      left++;
    }
  }

  return result;
}
*/

// ALTERNATE SOLUTION
function findAverages(nums, k) {
  let windowSum = 0;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    windowSum += nums[i];

    if (i >= k - 1) {
      result.push(windowSum / k);
      windowSum -= nums[i - k + 1];
    }
  }

  return result;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]
