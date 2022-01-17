function wordSearch(board, word) {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y<board[0].length; y++) {
      // if we find the first word we will start searching to the whole string
      if (board[x][y] === word[0]) {
        let foundWord = searchForNextLetter(board, x, y, word, 0);
        if (foundWord) return true;
      } else {
        continue;
      }
    }
  }
  return false;
}

function searchForNextLetter(board, x, y, word, index) {
  if (index === word.length) return true;
  

  if (x < 0 || y < 0 || x >= board.length || y >= board[0].length) {
    return false;
  }
  console.log(board,x,y,word,index)

  if (board[x][y] != word[index]) return false;
  if (board[x][y] === word[index]) {
      let changeTheLetterSoWeDontDoBack=board[x][y]
      board[x][y]=null
    let result =
      searchForNextLetter(board, x - 1, y, word, index + 1) ||
      searchForNextLetter(board, x, y - 1, word, index + 1) ||
      searchForNextLetter(board, x + 1, y, word, index + 1) ||
      searchForNextLetter(board, x, y + 1, word, index + 1);

      board[x][y]=changeTheLetterSoWeDontDoBack
    return result;
  }

  return
}

console.log(
  wordSearch(
   [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
    "ABCB"
  )
);
