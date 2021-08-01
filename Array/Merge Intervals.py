# Solution 
# Time O(n) | Space O(n)

def MergeIntervals(intervals):
    # By default it is sorted with first element
    intervals.sort()
    mergedIntervals = [intervals[0]]
    for i in range(1, len(intervals)):
        currentStart, currentEnd = mergedIntervals[-1]
        newStart, newEnd = intervals[i]
        
        if currentEnd >= newStart:
            mergedIntervals[-1][1] = max(currentEnd, newEnd)
        else:
            mergedIntervals.append(intervals[i])
            
    return mergedIntervals
  
