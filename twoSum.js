function twoSum(nums,target)
{
    let lengthOfArray=nums.length

    // hashMap for storing the index of the read values
    map={}

    // variables for storing temporary values
    let currentValue
    let complement
    let currentIndex


    for (let i=0 ; i<lengthOfArray;i++)
        {
            currentValue=nums[i]
            complement=target-nums[i]
            currentIndex=i

            // if complement is found in hashmap
            // return the current index and the complement's index back
            if(map[complement] !== undefined && currentIndex !== map[complement])
            {
                return[currentIndex,map[complement]]
            }

            else
            {
                // if the complement is not in the array yet add the currentValue and its index to 
                // the hashmap
                map[currentValue]=currentIndex
            }


            
        }



}