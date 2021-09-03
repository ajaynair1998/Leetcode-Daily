function invertTree(root)
{
    if(!root)
    {
        return null
    }

    let queue=[root]

    while(queue.length)
    {
        // shift removes the first item from the left of the array
        let currentNode=queue.shift()

        swap(currentNode)

        if(currentNode.left)
        {
            queue.push(currentNode.left)
        }

        if(currentNode.right)
        {
            queue.push(currentNode.right)
        }
        
    }
    return root
}

function swap(node)
{
    [node.left,node.right]=[node.right.node.left]
}












