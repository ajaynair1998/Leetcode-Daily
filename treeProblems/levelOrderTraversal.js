function levelOrder(root)
{
    let mainQueue=[root]
    let finalResult=[]

    if(root===null)return[]
    
    while(mainQueue.length)
    {
        let length=mainQueue.length
        let currentNode
        let tempResult=[]

        for(let i=0;i<length;i++)
        {
            currentNode=mainQueue.shift()
            tempResult.push(currentNode.val)
            if(currentNode.left!=null)
            {
                mainQueue.push(currentNode.left)

            }
            if(currentNode.right!=null)
            {
                mainQueue.push(currentNode.right)
            }
            
        }

        finalResult.push(tempResult)
        
    }
    return finalResult
}



