// You are provided with a 2D grid map where each cell is either
//  marked as a tree ('T') or open land ('O'). Your goal is to
// count the number of distinct forest regions on the map. A forest
// region consists of a contiguous group of tree cells ('T'). For
// this problem, two tree cells are considered connected if they
// share an edge horizontally or vertically, but not diagonally.

// Write a function numOfForests that accepts a nested array grid
// representing the 2D map. The function should return the total
// number of forest regions in the grid.

/*
GOAL: Count and return the number of distinct forests

INPUT: grid/matrix, array of arrays
OUTPUT: integer

RULES:
  What is distinct forest? 
    Series of contiguous forest squares
    forest touches on top, left, right, or down boundary, not a diagonal

DATA STRCUTRES
  Use existing grid

ALGORITHM
  Depth first search
    If a square is forest, visit above, below, left, and right
    Mark each square as visited
    Increment forest count by 1
    continue with search

  When do we visit a square?
    When it is in bounds
      row is greater than 0 and less than rows
      col is greater than 0 and less than cols
*/
function numOfForests(grid) {
  // implementation goes here

  let forestCount = 0;
  if (grid.length === 0) return forestCount;

  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(row, col) {
    if (
      row < 0 || row >= rows ||
      col < 0 || col >= cols ||
      grid[row][col] !== 'T'
    ) {
      return;
    } else {
      grid[row][col] = 'V';
      dfs(row - 1, col); // above
      dfs(row + 1, col); // below
      dfs(row, col - 1); // left
      dfs(row, col + 1); // right
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 'T') {
        dfs(row, col);
        forestCount += 1;
      }
    }
  }

  return forestCount;
}

const grid1 = [];
console.log(numOfForests(grid1) === 0);

const grid2 = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O']
];
console.log(numOfForests(grid2) === 0);
const grid3 = [
  ['T', 'T', 'O'],
  ['T', 'T', 'O'],
  ['O', 'O', 'O']
];
console.log(numOfForests(grid3) === 1);
const grid4 = [
  ['O', 'O', 'T', 'T', 'O'],
  ['T', 'T', 'O', 'T', 'O'],
  ['T', 'T', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'T', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
];
console.log(numOfForests(grid4) === 3);

const grid5 = [
  ['T', 'T', 'T'],
  ['T', 'O', 'T'],
  ['T', 'T', 'T']
];
console.log(numOfForests(grid5) === 1);

const grid6 = [
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T']
];
console.log(numOfForests(grid6) === 9);

const grid7 = [
  ['T', 'T', 'T'],
  ['T', 'T', 'T'],
  ['T', 'T', 'T']
];
console.log(numOfForests(grid7) === 1);

// All test cases should log true
