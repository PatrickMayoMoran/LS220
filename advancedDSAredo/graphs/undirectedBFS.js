// Implement a function `bfs` that accepts two arguments: the adjacency list
// representing an undirected graph and a starting vertex (source).
// The function should print the vertices in breadth-first
// traversal order.

function bfs(adjList, source) {
  // implementation goes here
  const visited = new Set([source]);
  const queue = [source];

  while (queue.length > 0) {
    const vertex = queue.shift();
    console.log(vertex);

    let neighbors = adjList.get(vertex);
    neighbors.forEach(v => {
      if (!visited.has(v)) {
        queue.push(v);
        visited.add(v);
      }
    });
  }
}

const adjList = new Map();
adjList.set(1, [2, 3]);
adjList.set(2, [1, 4]);
adjList.set(3, [1, 4, 5]);
adjList.set(4, [2, 3]);
adjList.set(5, [3, 6]);
adjList.set(6, [5]);

console.log(bfs(adjList, 1)); // 1, 2, 3, 4, 5, 6 or 1, 3, 2, 5, 4, 6
