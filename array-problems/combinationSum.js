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
      // the current combination is complete
      finalPaths.push(currentPath);
      return
    } else {
      while (index < candidates.length && target - candidates[index] >= 0) {
        //   since we can choose the same number multiple times, we can start recursively calling from the same index position itself
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
