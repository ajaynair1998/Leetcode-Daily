function isSubtree(root, subRoot) {
  let result = false

  result = iterateThroughTheTree(root, subRoot, result)

  return result
}

function checkIfIdenticalNodes(nodeOne, nodeTwo) {
  if (nodeOne === nodeTwo) {
    return true
  }

  if (!nodeOne || !nodeTwo) {
    return false
  }

  if (nodeOne.val !== nodeTwo.val) {
    return false
  }

  return (
    checkIfIdenticalNodes(nodeOne.left, nodeTwo.left) &&
    checkIfIdenticalNodes(nodeOne.right, nodeTwo.right)
  )
}

function iterateThroughTheTree(root, subRoot, result) {
  if (!root) return false

  if (root.val === subRoot.val) {
    result = checkIfIdenticalNodes(root, subRoot)
  }

  if (result) {
    return true
  }

  return (
    iterateThroughTheTree(root.left, subRoot, false) ||
    iterateThroughTheTree(root.right, subRoot, false)
  )
}
