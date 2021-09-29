function rotate(matrix) {
  let left = 0;
  let right = matrix.length - 1;

  while (left < right) {
    for (let pointer = 0; pointer < right - 1; pointer++) {
      let [top, bottom] = [left, right];

      // saving top left
      let topleft = matrix[top][left + pointer];

      // move bottom left to top left
      matrix[top][left + pointer] = matrix[bottom - pointer][left];

      // move bottom right into bottom left
      matrix[bottom - pointer][left] = matrix[bottom][right - pointer];

      // move top right to bottom right
      matrix[bottom][right - pointer] = matrix[top + pointer][right];

      // move top left to top right
      matrix[top + pointer][right] = topleft;
    }
    right--;
    left++;
  }
  return matrix;
}

function rotateByMatrixManipulation(matrix) {
  //first get the transpose of the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // now reverse each row
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.floor(matrix.length / 2); j++) {
      [matrix[i][j], matrix[i][j - 1]] = [matrix[i][j - 1], matrix[i][j]];
    }
  }
  return matrix;
}

console.log(
  rotateByMatrixManipulation([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
