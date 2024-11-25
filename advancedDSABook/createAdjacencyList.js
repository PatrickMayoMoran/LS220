const edgeList = [
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
  [3, 5],
  [5, 6],
];

function createAdjacencyList(edgeList) {
  const adjacencyList = new Map();

  edgeList.forEach(([a, b]) => {
    if (adjacencyList.has(a)) {
      adjacencyList.get(a).push(b);
    } else {
      adjacencyList.set(a, [b]);
    }

    if (adjacencyList.has(b)) {
      adjacencyList.get(b).push(a);
    } else {
      adjacencyList.set(b, [a]);
    }
  });

  return adjacencyList;
}

console.log(createAdjacencyList(edgeList));
