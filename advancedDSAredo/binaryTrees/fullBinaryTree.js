function isFull(root) {
  function helper(node) {
    if (node.left === null && node.right === null) return true;
    return helper(node.left) && helper(node.right);
  }

  helper(root);
}
