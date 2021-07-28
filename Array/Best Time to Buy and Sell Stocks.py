# Solution
# Time O(n) | Space O(1)

# This is a basic DP problem
def maxProfit(prices):
    buy, profit = float('inf'), float('-inf')
    for price in prices:
        buy = min(buy, price)
        profit = max(profit, price - buy)
        
    return profit
  
