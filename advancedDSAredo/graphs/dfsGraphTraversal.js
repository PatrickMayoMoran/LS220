// Implement a function `dfs` that accepts two arguments: the adjacency list
// representing a directed acyclic graph and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

/* STACK VERSION
function dfs(adjList, source) {
  // implementation goes here
  const stack = [source];
  while (stack.length > 0) {
    let vertex = stack.pop();
    console.log(vertex);
    stack.push(...adjList.get(vertex));
  }
}
*/

// RECURSION
function dfs(adjList, source) {
  function helper(vertex) {
    console.log(vertex);
    let neighbors = adjList.get(vertex);
    neighbors.forEach(n => helper(n));
  }

  helper(source);
}

const adjList = new Map();
adjList.set(1, []);
adjList.set(2, [1, 3, 4]);
adjList.set(3, [5]);
adjList.set(4, [6]);
adjList.set(5, []);
adjList.set(6, []);
adjList.set(7, [6]);

dfs(adjList, 2); // 2, 4, 6, 3, 5, 1 or 2, 1, 3, 5, 4, 6

// Note that the output can vary based on the order in
// which you process neighbors. These two outputs are
// the most likely, but other valid orders exist.
