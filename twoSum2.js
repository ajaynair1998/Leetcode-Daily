function twoSum2(numbers,target)
{
     let leftPointer = 0
     let rightPointer = numbers.length -1

    //  temporary variable to store the current sum of
    // left and right array values
    let currentSum
     while(leftPointer < rightPointer)
     {
         currentSum=numbers[leftPointer] + numbers[rightPointer]

         if(currentSum === target)
         {
             return [leftPointer + 1,rightPointer + 1 ]
         }

         else if(currentSum < target)
         {
             leftPointer++
         }

         else if(currentSum > target)
         {
             rightPointer--
         }
     }

     
}