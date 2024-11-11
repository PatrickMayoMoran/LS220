// 1 - Time and Space Complexity?
function test(n) {
  for (let i = 0; i < n; i++) {
    console.log("Hello!");
  }
}
// ANSWER:
// Time: O(N) -> linear, directly scales with size of n because of iteration
//               up to N
// Space: O(1) -> No auxiliary space needed, regardless of n size

// 2 - Time and Space Complexity?
function test(n) {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      console.log("Hello!");
    }
  }
}

// ANSWER:
// TIME: Quadratic, O(N^2) -> nested loop means we get N^2
// Space: O(1) -> No auxiliary space needed regardless of n size

// 3 - Time and Space Complexity?
function test(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
}
// ANSWER:
// TIME: O(N) -> Linear, single iteration of size n
// Space: O(N) -> auxiliary space needed of collection size for 
//                result collection being built

// 4 - Time and Space Complexity?
function test(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      sum += 1;
    }
  }
  return sum;
}
// ANSWER:
// Time: O(N^2) -> Quadratic because of nested loop
// Space: O(1) -> space needed for storing sum is the same no matter n size

// 5 - Time and Space Complexity?
function test(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
    for (let j = 0; j < n; j++) {
      result[i] += j;
    }
  }
  return result;
}
// ANSWER:
// Time: O(N^2) -> Quadratic because of nested loops
// Space: O(N) -> Result size is directly proportional to n
//                incrementing within nested loop does not change storage needed

// 6 - Time and Space Complexity?
function test(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log("Hello!");
      }
    }
  }
}
// ANSWER:
// Time: O(N^3) -> Cubic, because of triple nested loop
// Space: O(1) -> no additional storage needed

// 7 - Time and Space Complexity?
function test(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(new Array(n).fill(0));
  }
  return result;
}
// ANSWER:
// Time: O(N^2) -> Quadratic, the fill operation is a nested n loop within iteration
//                 because it iterating through the array size to set element to 0
// Space: O(N^2) -> Quadratic, result array has n arrays and each of those has n 
//                  elements, so total space is n * n for arrays and elements

// 8 - Time and Space Complexity?
function test(n) {
  for (let i = n; i >= 1; i /= 2) {
    console.log("Hello!");
  }
}
// ANSWER:
// Time: O(logN) -> each iteration reduces size of remaining problem by half
//                  aka repeated division, the opposite of repeated multiplication
//                  aka log, the opposite of exponentiation
// Space: O(1) -> No auxiliary space needed


// 9 - Time and Space Complexity?
function test(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}
// ANSWER: 
// Time: O(N^2) -> Quadratic, nested loop, every n iteration get n sub iterations
// Space: O(N^2) -> Quadratic, for every n element added to matrix array, it gets n entries

// 10 - Time and Space Complexity?
function test(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      console.log("Hello!");
    }
  }
}
// ANSWER:
// Time: O(NlogN) -> every n iteration gets a logN iteration
// Space: O(1) -> no auxiliary space needed, regardless of n

// 11
function test(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 100; j++) {
      console.log("Hello!");
    }
  }
}
// ANSWER:
// Time: O(N) -> linear, constant of 100 is removed because scale of time changes with n
// Space: O(1) -> no auxiliary space needed

// 12
function test(n, m) {
  for (let i = 0; i < n; i++) {
    console.log("Hello!");
  }
  for (let j = 0; j < m; j++) {
    console.log("World!");
  }
}
// ANSWER:
// Time: O(N) + O(M) -> two different collections, each of their size matters
// Space: O(1) -> no auxiliary storage needed

// 13
function test(n) {
  for (let i = 0; i < 2 * n; i++) {
    console.log("Hello!");
  }
}
// ANSWER:
// Time: O(N) -> Linear, 2 is a constant 
// Space: O(1) -> no auxiliary space needed

// 14
function test(n) {
  let count = 0;
  for (let i = n; i > 1; i = Math.floor(i / 2)) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  return count;
}
// Time: O(NlogN) -> outer loop is logN because of halving, inner is N
// Space: O(1) -> no auxiliary space needed regardless of n
