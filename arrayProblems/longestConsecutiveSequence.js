function longestConsecutiveSequence(nums)
{
    // If the array is empty
    if(nums.length === 0 )
    {
        return 0
    }

    // to Find the length of sequences we have to Find the start of every sequence
    // IMPORTANT -> START OF A SEQUENCE MEANS THERE IS NO (VALUE PREVIOUS FOR THAT NUMBER) BUT THERE IS A VALUE GREATER THAN THAT NUMBER

    // we will create a set of the values given
    let allNumbers=new Set(nums)
    // variable to store length of longest sequence
    let longestSequence=Number.MIN_SAFE_INTEGER

    // Now iterate through the whole array and check if each number is the start of a sequence
    for(let value of nums)
    {
        longestSequence=Math.max(longestSequence,checkIfStartOfSequenceAndReturnLengthOfSequence(allNumbers,value))
    }

    // return the final longest sequence
    return longestSequence

    

}

function checkIfStartOfSequenceAndReturnLengthOfSequence(setOfNumbers,number)
{
    // First check if the value is the start of a sequence , if not return some negative value since we dont have to calculate that
    if(setOfNumbers.has(number-1))
    {
        return Number.MIN_SAFE_INTEGER
    }

    // If it is the start of a sequence find the length of the sequence it makes
    let lengthOfCurrentSequence=1

    while(setOfNumbers.has(number + 1))
    {
        lengthOfCurrentSequence++
        number++
    }

    return lengthOfCurrentSequence

}

console.log(longestConsecutiveSequence([100,4,200,1,3,2]))