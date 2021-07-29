function productOfArrayExceptItself(nums)
{

    // We have to create two partitions
    
    // Left -> to keep track of the product of all elements on left
    let leftProducts=new Array(nums.length)
    // Right -> To keep track of product of  all elements on left
    let rightProducts=new Array(nums.length)


    // now iterate the array from left to right and store the left and right products
    // create a right pointer and left pointer
    let rightPointer
    let leftpointer
    for (leftpointer=0;leftpointer<nums.length;leftpointer++)
    {
        rightPointer=(nums.length-1)-leftpointer

        // edge case on (left end of leftProducts and right end of rightProducts)
        if(leftpointer==0)
        {
            leftProducts[leftpointer]=1
            rightProducts[rightPointer]=1
        }

        // normal cases except on both ends of array
        else
        {
        leftProducts[leftpointer] = nums[leftpointer-1] * leftProducts[leftpointer-1]
        rightProducts[rightPointer]=nums[rightPointer+1] * rightProducts[rightPointer+1]
        } 
    }


    // Now create an output array and combine the left and right products from the current index
    let outputArray=new Array(nums.length)

    for( pointer=0;pointer<nums.length;pointer++)
    {
        
        // edge cases on left and right side
        if (pointer===0 )
        {
            outputArray[pointer]=rightProducts[pointer]
            

        }

        // since we reached the end
        if (pointer=== nums.length-1)
        {
            outputArray[pointer]=leftProducts[pointer]
        }
        
        else
        {
            outputArray[pointer]=leftProducts[pointer] * rightProducts[pointer]
        }

        
    }

    return outputArray
    
    



}

console.log(productOfArrayExceptItself([1,2,3,4]))