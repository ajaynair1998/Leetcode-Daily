function candy(ratings)
{
    // array to store the candy distribution
    let candyArrayLeftSide=new Array(ratings.length).fill(1)
    let candyArrayRightSide=new Array(ratings.length).fill(1)



    

    // final minimum candies needed
    let finalValue=0


    // iterate from left to right and give extra candies to students having rating higher than left side student
    for(let i=1;i<ratings.length;i++)
    {
        if(ratings[i-1] < ratings[i])
        {
            candyArrayLeftSide[i]=candyArrayLeftSide[i-1] + 1
        }
    }

    // iterate from right to left and give extra candies to students having higher rating than the right side students
    for(let i=ratings.length-2;i>=0;i--)
    {
        if(ratings[i+1]< ratings[i])
        {
            candyArrayRightSide[i]=candyArrayRightSide[i+1] + 1
        }
    }

    // Now combine the two arrays to obtain the minimum number of candies needed

    for (let i=0;i<ratings.length;i++)
    {
        finalValue+=Math.max(candyArrayLeftSide[i],candyArrayRightSide[i])
    }
    // console.log(candyArrayRightSide)
    // console.log(candyArrayLeftSide)
    return finalValue
   
}


console.log(candy([1,2,2]))