function dfs(adjList, source, visited = new Set()) {
  const stack = [source];

  while (stack.length > 0) {
    let curr = stack.pop();
    console.log(curr);
    visited.add(curr);
    let neighbors = adjList.get(curr);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
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
