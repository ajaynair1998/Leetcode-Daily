class TreeNode
{
    constructor(val, left, right)
    {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}



function buildTree(preorder, inorder)
{
    if (!inorder.length) return null

    let root = new TreeNode(preorder.shift());

    let indexOfRoot = inorder.indexOf(root.val);
    let rightSubTree = inorder.slice(indexOfRoot + 1, inorder.length)
    let leftSubTree = inorder.slice(0, indexOfRoot);

    root.left = buildTree(preorder, leftSubTree)
    root.right = buildTree(preorder, rightSubTree)

    return root




}





