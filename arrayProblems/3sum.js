function threeSum(nums)
{
    // First sort the array in ascending
    nums.sort((a,b) => a-b)
    

    // to get target value 0
    let mainPointer
    let leftPointer,rightPointer
    let leftValue,rightValue
    let remainingTarget

    let finalArray=[]

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
            // value left and right values should add up to get 0
            remainingTarget= - (nums[mainPointer]);

            // get the current left and right values
            [leftValue,rightValue]=[nums[leftPointer],nums[rightPointer]]
            

            // now checking if it satisfies or not else mmove the left or right pointer according to your need
            if(leftValue + rightValue === remainingTarget)
            {
                finalArray.push([nums[mainPointer],leftValue,rightValue])

                while(nums[leftPointer] === nums[leftPointer + 1])
                {
                    leftPointer++
                }
                while(nums[rightPointer] === nums[rightPointer-1])
                {
                    rightPointer--
                }

                leftPointer++
                rightPointer--

            }

            else if(leftValue + rightValue < remainingTarget)
            {
                leftPointer++
            }

            else 
            {
                rightPointer--
            }
        }

    }

    return finalArray
}

            
            


console.log(threeSum([-1,0,1,2,-1,-4]))