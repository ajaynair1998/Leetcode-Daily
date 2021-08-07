# Solution 
# Time O(N ^ 2) | Space O(N)

def minArea(points):
    pointSet = set( [tuple(point) for point in points] )
    minArea = float('inf')
    for i in range(len(points)):
        x1, y1 = points[i]
        for j in range(i + 1, len(points)):
            x2, y2 = poinys[j]
            
            # if x1 == x2 then it becomes a triangle
            if x1 == x2 or y1 == y2:
                continue
                
            point3 = (x1, y2) in pointSet
            point4 = (x2, y1) in pointSet
            
            if point3 and point4:
                curArea = abs(x1 - x2) * abs(y1 - y2)
                minArea = min(minArea, curArea)
                
    return 0 if minArea == float('inf') else minArea
                   
