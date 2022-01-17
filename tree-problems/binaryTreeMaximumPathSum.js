function maxPathSum(root) {
  let max = Number.MIN_SAFE_INTEGER;

  // make the helper function an arraow function since we want to edit the max in global scope
  let helper = (node) => {
    if (!node || node === null) {
      return 0;
    }

    // calculate the left branch sum
    let leftBranchSum = helper(node.left);
    let rightBranchSum = helper(node.right);

    // Now campare the different sums and check which is greater
    let currentMaxBranch = Math.max(
      Math.max(leftBranchSum, rightBranchSum) + node.val,
      node.val
    );
    let nodeMaxSum = Math.max(
      currentMaxBranch,
      leftBranchSum + node.val + rightBranchSum
    );
    max = Math.max(nodeMaxSum, max);
    return currentMaxBranch;
  };

  helper(root);
  return max;
}
