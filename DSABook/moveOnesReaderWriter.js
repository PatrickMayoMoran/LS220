function moveOnes(array) {
  let reader = 0;
  let writer = 0;

  while (reader < array.length) {
    if (array[reader] !== 1) {
      array[writer] = array[reader];
      writer++;
    }
    reader++;
  }

  while (writer < array.length) {
    array[writer] = 1;
    writer++;
  }

  return array;
}

const nums1 = [1, 2, 1, 4, 8];
const transformedNums1 = moveOnes(nums1);
console.log(nums1 === transformedNums1); // true
console.log(transformedNums1); // [2, 4, 8, 1, 1]

const nums2 = [3, 1, 5, 1, 1, 4, 8, 1];
const transformedNums2 = moveOnes(nums2);
console.log(nums2 === transformedNums2); // true
console.log(transformedNums2); // [3, 5, 4, 8, 1, 1, 1, 1]
