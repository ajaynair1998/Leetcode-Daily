# Solution
# Time O(N^2) | Space O(N)

def maxPoints(points):
    if len(points) <= 2:
        return len(points)
    
    maxCount = 2
    for i in range(len(points)):
        x1, y1 = points[i]
        slopes = {}
        for j in range(i + 1, len(points)):
            x2, y2 = points[j]
            slope = findSlope(x1 - x2, y1 - y2)
            
            if slope not in slopes:
                slopes[slope] = 2
            else:
                slopes[slope] += 1
                
            maxCount = max(maxCount, max(slopes.values()))
            
    return maxCount

def findSlope(dx, dy):
    return dy/dx if dx != 0 else 'Vertical Line'
                
