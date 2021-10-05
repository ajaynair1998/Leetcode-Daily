function combinationSum(candidates, target) {
  // store the final paths
  let finalPaths = [];

  if (!candidates) return [];

  if (target === 0) return [[]];

  candidates.sort((a, b) => a - b);

  //   recursive function to add each path to final path array
  let find = (target, currentPath, index) => {
    //   when we reach target in current recursion add it to the final path
    if (target === 0) {
      finalPaths.push(currentPath);
    } else {
      while (index < candidates.length && target - candidates[index] >= 0) {
        find(
          target - candidates[index],
          [...currentPath, candidates[index]],
          index
        );
        index++;
      }
    }
  };
  find(target, [], 0);
  return finalPaths;
}

console.log(combinationSum([2, 3, 6, 7], 7));
