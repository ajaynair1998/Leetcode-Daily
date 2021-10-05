function combinationSum3(k, n) {
  let finalPaths = [];

  if (k == 0 || n == 0) return [[]];

  let find = (timesLeft, target, currentPath, index) => {
    if (timesLeft == 0 && target == 0) {
      finalPaths.push(currentPath);
      return;
    }
    if (timesLeft == 0) {
      return;
    }
    if (index == 10) {
      return;
    } else {
      for (let i = index; i < 10; i++) {
        if (timesLeft > 0 && target - i >= 0) {
          find(timesLeft - 1, target - i, [...currentPath, i],i+1);
        }
      }
    }
  };

  find(k, n, [], 1);
  return finalPaths;
}

console.log(combinationSum3(3, 7));
