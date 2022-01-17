function moveZeroes(nums)
{
    // to iterate the array
    let numberOfTimesLeft=nums.length
    let mainPointer = 0

    // since we are moving zeroes to the end we have stop after we have moved nums.length times
    // otherwise we well not know if we have shifted all elements or not
    while(numberOfTimesLeft > 0)
    {
        // if its a zero shift it to the end
        if(nums[mainPointer] === 0)
        {
            // delete the zero
            nums.splice(mainPointer,1)
            // then add it to the end
            nums.push(0)
            // times we have to do the operation again
            numberOfTimesLeft--
        }
        else 
        {
            mainPointer++
            numberOfTimesLeft--

        }

    }
    return nums
}

console.log(moveZeroes([0,1,0,3,12]))