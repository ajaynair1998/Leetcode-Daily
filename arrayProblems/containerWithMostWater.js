function maxArea(height)
{
    let leftPointer=0
    let rightPointer=height.length-1
    let maxArea=Number.MIN_SAFE_INTEGER

    // for storing the temporary area for each iteratiom
    let currentAvailableArea

    while(leftPointer < rightPointer)
    {
        currentAvailableArea=Math.min(height[leftPointer],height[rightPointer]) * (rightPointer - leftPointer)
        maxArea=Math.max(maxArea,currentAvailableArea)

        if(height[leftPointer]<= height[rightPointer])
        {
            leftPointer++
        }
        else
        {
            rightPointer--
        }
    }
    
    return maxArea
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]))