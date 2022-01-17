function spiralOrder(matrix) {
  let leftEdge = 0;
  let topEdge = 0;
  let rightEdge = matrix[0].length;
  let bottomEdge = matrix.length;

  let finalChangedMatrix = [];

  while (topEdge < bottomEdge && leftEdge < rightEdge) {
    // print the top most edge in the current iteration
    for (let pointer = leftEdge; pointer < rightEdge; pointer++) {
      finalChangedMatrix.push(matrix[topEdge][pointer]);
    }
    topEdge++;

    // print the right most edge
    for (let pointer = topEdge; pointer < bottomEdge; pointer++) {
      finalChangedMatrix.push(matrix[pointer][rightEdge - 1]);
    }
    rightEdge--;

    // print the  bottom edge but the pointer must go to the left side
    for (let pointer = rightEdge - 1; pointer >= leftEdge; pointer--) {
      if (topEdge != bottomEdge) {
        finalChangedMatrix.push(matrix[bottomEdge - 1][pointer]);
      }
    }
    bottomEdge--;

    // print the left edge but the pointer must go up
    for (let pointer = bottomEdge - 1; pointer >= topEdge; pointer--) {
      if (rightEdge != leftEdge) {
        finalChangedMatrix.push(matrix[pointer][leftEdge]);
      }
    }
    leftEdge++;
  }
  return finalChangedMatrix;
}

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
