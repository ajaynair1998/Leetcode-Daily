function findTheDuplicateNumber(nums)
{
    // since we cannot modify the array
    // we have to use cycle detection like in linked list \
    // by using two pointers

    let pointerOne=nums[0]
    let pointerTwo=nums[0]

    while (true)
    {
        pointerOne=nums[pointerOne]
        pointerTwo=nums[nums[pointerTwo]]

        if(pointerOne === pointerTwo)
            {
                break
            }
    }

    pointerOne=nums[0]
    while(pointerOne !== pointerTwo)
    {
        pointerOne=nums[pointerOne]
        pointerTwo=nums[pointerTwo]
    }

    return pointerTwo
}
;

console.log(findTheDuplicateNumber(nums = [1,3,4,2,2]))