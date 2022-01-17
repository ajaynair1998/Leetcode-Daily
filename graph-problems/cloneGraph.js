function cloneGraph(node, copy = {}) {
  if (!node) {
    return null;
  }

  //   we can use any data structure
  // so we will use an object to store as an adjacency list
  if (copy[node.val] === undefined) {
    copy[node.val] = new Node(node.val);
    copy[node.val].neighbors = node.neighbors.map((neighbor) =>
      cloneGraph(neighbor, copy)
    );
  }

  return copy[node.val];
}
