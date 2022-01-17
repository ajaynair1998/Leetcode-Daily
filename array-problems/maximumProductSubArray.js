function maximiumProductSubArray(nums)
{

    if(nums.length === 0)
    {
        return 0
    }

    let finalResult=nums[0]
    let maxPositive=nums[0]
    let maxNegative=nums[0]


    // temporary variable for storing current value
    let currentValue

    // temporary variable for storing current maxpositive
    let temp
    for (let pointer=1;pointer<nums.length;pointer++)
    {
        currentValue=nums[pointer]
        temp=maxPositive
        // calculate the maximum positive till now
        maxPositive=Math.max(maxPositive*currentValue,currentValue,maxNegative*currentValue)
        
        // maximum negative
        maxNegative=Math.min(currentValue,currentValue*temp,maxNegative*currentValue)
       
        // Now take the maximum 
       finalResult=Math.max(maxPositive,maxNegative,finalResult)
    }

    return finalResult

}

console.log(maximiumProductSubArray([3,-1,4]))