function maximumSubArray(nums)
{
    let currentMax=Number.MIN_SAFE_INTEGER

    // one pointer to iterate the array
    let pointer=0
    
    // temporary variable to store current sum
    let currentSum=0

    while(pointer < nums.length)
    {
            currentSum=currentSum+nums[pointer]

            if(currentSum > currentMax)
            {
                currentMax=currentSum
                
            }
            if(currentSum < 0)
            {
                currentSum=0
                
            }
            pointer++
            
            
    }
    return currentMax

}

console.log(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]))