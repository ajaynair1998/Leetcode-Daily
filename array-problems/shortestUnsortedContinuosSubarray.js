function findUnsortedSubarray(nums)
{
    let unsortedStartIndex
    let unsortedEndIndex

    // To find Minimum and maximum in the subarray
    let minimum=Number.MAX_SAFE_INTEGER
    let maximum=Number.MIN_SAFE_INTEGER

    // Actual indexes of minimum and maximum
    let actualIndexMinimum
    let actualIndexMaximum

    // iterate the array from the left to find the starting of the unsorted subarray
    for(let leftPointer=0;leftPointer<nums.length-1;leftPointer++)
    {
        if(nums[leftPointer] > nums[leftPointer + 1])
        {
            unsortedStartIndex = leftPointer 
            break
        }
    }

    // If the whole array is sorted we wont find a start index , in that case return 0
    // as the unsorted subarray length
    if(unsortedStartIndex === undefined)
    {
        return 0
    }

    // Now Iterate from the right and find the ending of the unsorted subarray
    for(let rightPointer=nums.length-1;rightPointer >0;rightPointer--)
    {
        if(nums[rightPointer] < nums[rightPointer - 1])
        {
            unsortedEndIndex=rightPointer
            break
        }
    }

    // Now iterate throught the sub array and find the minimum and maximum numbers
    for(let i=unsortedStartIndex;i<=unsortedEndIndex;i++)
    {
        minimum=Math.min(minimum,nums[i])
        maximum=Math.max(maximum,nums[i])
    }

    // Now to find the indexes where the minimum and maximum value belongs in the full array
    // ACTUAL INDEX OF MINIMUM ->
    for(let i=0;i<nums.length;i++)
    {
        if(minimum < nums[i])
        {
            actualIndexMinimum=i
            break
        }
    }
    // ACTUAL INDEX OF MAXIMUM ->
    for (let i=nums.length-1;i>=0;i--)
    {
        if(maximum > nums[i])
        {
            actualIndexMaximum=i
            break
        }
    }

    return [actualIndexMaximum + 1 - actualIndexMinimum]

    

}


console.log(findUnsortedSubarray([2,6,4,8,10,9,15]))