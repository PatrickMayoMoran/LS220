function chaosInTheGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const cache = new Map();

  function pathsToCoord(row, col) {
    if (row === 0 || col === 0) {
      return 1;
    }

    const key = `${row} ${col}`;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const paths = pathsToCoord(row - 1, col) + pathsToCoord(row, col - 1);

    cache.set(key, paths);

    return paths;
  }

  return pathsToCoord(rows - 1, cols - 1);
}

const grid1 = [[""]];
const grid2 = [
  ["", ""],
  ["", ""],
];
const grid3 = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
const grid5 = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];
console.log(chaosInTheGrid(grid1) === 1);
console.log(chaosInTheGrid(grid2) === 2);
console.log(chaosInTheGrid(grid3) === 6);
console.log(chaosInTheGrid(grid4) === 15);
console.log(chaosInTheGrid(grid5) === 252);
// All test cases should log true
