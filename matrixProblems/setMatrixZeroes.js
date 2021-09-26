function setZeroes(matrix) {
  let rowOrColoumnContainsZeroes = {};

  //   iterate through the whole matrix once to record where the zeroes are
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      let currentValue = matrix[row][column];

      if (currentValue === 0) {
        rowOrColoumnContainsZeroes[`R${row}`] = 0;
        rowOrColoumnContainsZeroes[`C${column}`] = 0;
      }
    }
  }

  //   Now iterate through the matrix to change the rows and columns according to the hashmap
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      let currentValue = matrix[row][column];

      //   changing is needed only if it is not a zero
      if (currentValue != 0) {
        if (
          rowOrColoumnContainsZeroes[`R${row}`] === 0 ||
          rowOrColoumnContainsZeroes[`C${column}`] === 0
        ) {
          matrix[row][column] = 0;
        }
      }
    }
  }

  return matrix;
}
