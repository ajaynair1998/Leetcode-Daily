function threeSumClosest(nums,target)
{
    // First sort the array in ascending
    nums.sort((a,b) => a-b)
    

    // to get target value 0
    let mainPointer
    let leftPointer,rightPointer
    let leftValue,rightValue
    let currentValue

    // final Minimum to return
    let finalMinimum=Number.MAX_SAFE_INTEGER

    // To calculate each absolute Difference and each current minimum
    let currentDifference=Number.MAX_SAFE_INTEGER
    let currentMinimumDifference=Number.MAX_SAFE_INTEGER

  

    for(mainPointer=0;mainPointer < nums.length-2;mainPointer++)
    {
        leftPointer=mainPointer+1
        rightPointer=nums.length-1

      

        // To prevent duplicates
        if (nums[mainPointer] == nums[mainPointer -1])
        {
            continue;
        }
        
        while(leftPointer < rightPointer)
        {
            

            // get the current left and right values
            [leftValue,rightValue]=[nums[leftPointer],nums[rightPointer]]
            
            // calculate the current sum of three pointers
            currentValue= nums[mainPointer] + leftValue  + rightValue

            // Now calculate current minimum -> for that we need absolute differrence IMPPPPP
            currentDifference=Math.abs(target - currentValue)
            
            // now checking if it satisfies or not else mmove the left or right pointer according to your need
            if(currentDifference < currentMinimumDifference)
            {
                finalMinimum=currentValue
                currentMinimumDifference=currentDifference
            }
            if(currentValue < target)
            {
                leftPointer++
            }

             if(currentValue > target)
            {
                rightPointer--
                
            }
            

            else if(currentValue == target)
            {
                break
            }
        }

    }

    return finalMinimum
}

            
            


console.log(threeSumClosest([-1,2,1,-4], target = 1))