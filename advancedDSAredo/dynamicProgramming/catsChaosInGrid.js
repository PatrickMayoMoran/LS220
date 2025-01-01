// You are given a grid represented as a
// nested array filled with strings.

// Chaos is standing at the top-left corner of
// the grid and can move either down or right at
// any point in time. However, there are sleeping
// cats in certain squares, represented by the
// letter "C" in the grid, and Chaos cannot go through
// these squares.

// Determine the number of distinct paths Chaos
// can take to reach a bowl of treats placed at
// the bottom-right corner of the grid.

// Define a function `chaosInTheGridWithCats` that,
// given a nested array, returns the number of
// unique paths that Chaos can take to reach the
//  bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "C", ""],
  ["", "", ""],
];

// There is only one distinct path Chaos can take:
// 1. Down -> Right -> Right

function chaosInTheGridWithCats(grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let cache = new Map();

  function helper(row, col) {
    if (grid[row][col] === 'C') return 0;
    if (row === 0 && col === 0) return 1;
    if (row === 0) return helper(row, col - 1);
    if (col === 0) return helper(row - 1, col);

    let key = `${row} ${col}`;
    if (cache.has(key)) return cache.get(key);

    let result = helper(row - 1, col) + helper(row, col - 1);
    cache.set(key, result);
    return result;
  }

  return helper(rows - 1, cols - 1);
}

// Test Cases:

const grid1 = [
  ["", "C"],
  ["", ""],
];
const grid2 = [["", "C"]];
const grid3 = [
  ["", "", ""],
  ["", "C", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", "C"],
  ["", "C", "", "", ""],
  ["", "", "", "C", ""],
];
const grid5 = [
  ["", "", "", "", "C", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "C", "", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
];

console.log(chaosInTheGridWithCats(grid1) === 1);
console.log(chaosInTheGridWithCats(grid2) === 0);
console.log(chaosInTheGridWithCats(grid3) === 2);
console.log(chaosInTheGridWithCats(grid4) === 2);
console.log(chaosInTheGridWithCats(grid5) === 43);
