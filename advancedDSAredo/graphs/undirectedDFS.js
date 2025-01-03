// Implement a function `dfs` that accepts two arguments: an adjacency
// list representing an undirected graph, and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

/* RECURSIVE
function dfs(adjList, source) {
  // implementation goes here
  const visited = new Set();

  function visit(vertex) {
    console.log(vertex);
    visited.add(vertex);
    let neighbors = adjList.get(vertex);
    neighbors.forEach(n => {
      if (!visited.has(n)) {
        visit(n);
      }
    });
  }

  visit(source);
}
*/

// STACK
function dfs(adjList, source) {
  const visited = new Set();
  const vertices = [source];

  while (vertices.length > 0) {
    let vertex = vertices.pop();
    console.log(vertex);
    visited.add(vertex);
    let neighbors = adjList.get(vertex);
    neighbors.forEach(v => {
      if (!visited.has(v)) vertices.push(v);
    });
  }
}

const adjList = new Map();
adjList.set(1, [2]);
adjList.set(2, [1, 3]);
adjList.set(3, [2]);

dfs(adjList, 1); // 1, 2, 3
