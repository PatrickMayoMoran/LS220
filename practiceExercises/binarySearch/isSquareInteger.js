/*
ORIGINAL SOLUTION - not binary search...
function isSquareInteger(number) {
  for (let i = 1; i*i <= number; i++) {
    if (i * i === number) return true;
  }

  return false;
}
*/

function isSquareInteger(num) {
  let left = 0;
  let right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let product = mid * mid;
    if (product === num) {
      return true;
    } else if (product < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.
