function riverSizes(matrix) {
  let allRivers = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        let currentLength = expandFromCurrentStart(matrix, i, j, 0);
        allRivers.push(currentLength);
      }
    }
  }
  return allRivers;
}

function expandFromCurrentStart(matrix, x, y, count = 0) {
  console.log(matrix, x, y, count);
  if (0 > x || x >= matrix.length || 0 > y || y >= matrix[0].length)
    return count;
  if (matrix[x][y] === 0) return count;

  matrix[x][y] = 0;
  let afterTraversing =
    expandFromCurrentStart(matrix, x + 1, y,1) +
    expandFromCurrentStart(matrix, x, y + 1, 1) +
    expandFromCurrentStart(matrix, x - 1, y, 1) +
    expandFromCurrentStart(matrix, x, y - 1,1);

  return afterTraversing;
}

console.log(
  riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ])
);
