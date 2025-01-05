// Given the root node of a binary tree, implement a
// function `inorderTraversal` that returns an
// array containing the values of the nodes visited in
// an inorder traversal.

// Your task is to implement the function iteratively using a stack.
/*
GOAL: return values from a binary tree resulting from in order traversal

INPUT: root of a tree
OUTPUT: array of values from tree

RULES:
  LNR processing pattern
    Add the left node
    begin process again!
    process node
    add the right

DATA STRUCTURE: array as stack

ALGORITHM:
  initialize result array
  if root is null, return result array

  initialize stack with root

  while stack is not empty,
    current node is top of the stack
    if current node has a left child,
      add it to top
      continue
    current node assigned to pop off the stack
    add node value to our result
    if node has a right child, add it to stack

  return result
*/

/* ORIGINAL SOLUTION - Use set to mark visited nodes and avoid reprocessing
function inorderTraversal(root) {
  const result = [];
  if (root === null) return result;

  const stack = [root];
  const seen = new Set();

  while (stack.length > 0) {
    let node = stack[stack.length - 1];
    if (node.left !== null && !seen.has(node)) {
      stack.push(node.left);
      seen.add(node);
      continue;
    }

    node = stack.pop();
    result.push(node.val);
    if (node.right !== null) stack.push(node.right);
  }

  return result;
}
*/

function inorderTraversal(root) {
}

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function for test cases
function buildTree(arr) {
  if (arr.length === 0) {
    return null;
  }

  const nodes = [];

  const val = arr.shift();
  const root = new Node(val);
  nodes.push(root);

  while (arr.length > 0) {
    const curr = nodes.shift();

    const leftVal = arr.shift();
    if (leftVal !== null) {
      curr.left = new Node(leftVal);
      nodes.push(curr.left);
    }

    if (arr.length > 0) {
      const rightVal = arr.shift();
      if (rightVal !== null) {
        curr.right = new Node(rightVal);
        nodes.push(curr.right);
      }
    }
  }

  return root;
}

// Test Cases:

const tree1 = buildTree([1, null, 2, 3]);
console.log(inorderTraversal(tree1)); // Output: [1, 3, 2]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(inorderTraversal(tree2)); // Output: [2, 1, 4, 5, 3]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(inorderTraversal(tree3)); // Output: [1, 2, 3, 5]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(inorderTraversal(tree4)); // Output: [5, 6, 10, 11, 12, 15, 21]
