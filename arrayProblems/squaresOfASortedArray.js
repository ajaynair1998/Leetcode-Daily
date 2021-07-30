function squaresOfSortedArray(nums)
{
    let start=0
    let end=nums.length-1
    let finalArray=[]

    // temporary variables to store left and right pointing values
    while(start <= end)
    {
        currentValueLeft=nums[start]**2
        currentValueRight=nums[end]**2
        

        if(currentValueLeft > currentValueRight)
        {
            finalArray.unshift(currentValueLeft)
            start++
        }
        else
        {
            finalArray.unshift(currentValueRight)
            end--
        }
    }
    return finalArray
}

console.log(squaresOfSortedArray([-4,-1,0,3,10]))