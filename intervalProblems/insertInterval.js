function insert(intervals, newInterval) {
  let length, i;
  if (intervals.length === 0) {
    return [newInterval];
  }

  for (i = 0, length = intervals.length; i < intervals.length; i++) {
    // interval selected in the current iteration
    let currentInterval = intervals[i];

    if (
      currentInterval[0] < newInterval[0] &&
      newInterval[1] < currentInterval[1]
    ) {
      // means the interval is already contained
      return intervals;
    } else if (newInterval[0] > currentInterval[1]) {
      // reached the end
      if (i == length - 1) {
        intervals.push(newInterval);
        return intervals;
      } else {
        // might be other intervals
        continue;
      }
    }
    // less than the current but not merging with any other interval
    else if (newInterval[1] < currentInterval[0]) {
      intervals.splice(i, 0, newInterval);
      return intervals;
    }

    // merging to the right
    else if (
      newInterval[0] >= currentInterval[0] &&
      newInterval[1] >= currentInterval[1]
    ) {
      let old = intervals.splice(i, 1)[0];
      let afterMerging = merge(old, newInterval);

      //   recursively call the insert function with the current edited interval
      return insert(intervals, afterMerging);
    }

    // merging to the left
    else if (
      newInterval[0] <= currentInterval[0] &&
      newInterval[1] <= currentInterval[1]
    ) {
      let old = intervals.splice(i, 1)[0];
      let afterMerging = merge(old, newInterval);

      // recursively call the insert function with the current merged interval
      return insert(intervals, afterMerging);
    } else if (
      newInterval[0] <= currentInterval[0] &&
      newInterval[1] >= currentInterval[1]
    ) {
      intervals.splice(i, 1);

      //   recursively call insert
      return insert(intervals, newInterval);
    } else {
      console.log(intervals);
      console.log("BROKE");
    }
  }
}

function merge(intervalOne, intervalTwo) {
  let newStart = Math.min(intervalOne[0], intervalTwo[0]);
  let newEnd = Math.max(intervalOne[1], intervalTwo[1]);
  return [newStart, newEnd];
}

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
