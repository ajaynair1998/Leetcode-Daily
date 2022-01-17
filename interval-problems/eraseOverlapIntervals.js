function eraseOverlapIntervals(intervals) {
  // sort the array by the starting index
  intervals.sort((a, b) => a[0] - b[0]);

  let finalResult = 0;
  let i = intervals.length - 1;
  while (i > 0) {
    j = i - 1;

    while (j>=0 &&intervals[j][1] > intervals[i][0]) {
      finalResult++;
      j--;
    }
    i=j;
  }
  return finalResult;
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
