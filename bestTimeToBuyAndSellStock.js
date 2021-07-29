function maxProfit(prices) {
   let maxProfit=0
   let minimumPrice=Number.MAX_VALUE
   
//    for storing the current stock price

   let currentValue

   for(let i=0;i<prices.length;i++)
   {
        currentValue=prices[i]

        if(currentValue < minimumPrice)
        {
            minimumPrice = currentValue
        }

        else if(currentValue-minimumPrice > maxProfit)
        {
            maxProfit=currentValue-minimumPrice
        }

   }
   return maxProfit

    
};