function containsDuplicate(nums)
{
   // hashmap to keep track if there is any duplicate number
   let map={}

   let pointer=0
   let currentNumber

   while(pointer < nums.length)
   {
       currentNumber=nums[pointer]
       
       if(map[currentNumber]=== undefined)
       {
           map[currentNumber]=1
           pointer++   
       }
       else
       {
           return true
       }

   }
   return false
}