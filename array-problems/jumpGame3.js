function canReach(arr, start) {
  let solution = checkRecursively(arr, start);
  return solution ? true : false;
}

function checkRecursively(arr, position, memo = {}) {
  console.log(position);
  let toLeft, toRight;
  if (memo[position]) return;
  let jumpPossible = arr[position];
  // jump to left and check
  if (position - jumpPossible >= 0) {
    if (arr[position - jumpPossible] === 0) {
      return true;
    } else {
      memo[position] = true;
      toLeft = checkRecursively(arr, position - jumpPossible, memo);
    }
  }

  // jump to right and check
  if (position + jumpPossible <= arr.length - 1) {
    if (arr[position + jumpPossible] === 0) {
      return true;
    } else {
      memo[position] = true;
      toRight = checkRecursively(arr, position + jumpPossible, memo);
    }
  }

  return toLeft || toRight;
}

console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5));
