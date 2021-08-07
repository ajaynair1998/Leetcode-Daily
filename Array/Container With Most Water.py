# Solution
# TIme O(N) | Space O(1)

def maxArea(heights):
    left, right = 0, len(heights) - 1
    area = 0
    while left < right:
        curArea = (right - left) * min(heights[left], heights[right])
        area = max(area, curArea)
        
        if heights[left] < heights[right]:
            left += 1
        else:
            right -= 1
            
    return area
