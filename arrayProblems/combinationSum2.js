function combinationSum2(candidates, target) {
  let finalPaths = [];

  if (!candidates) return [];

  if (target === 0) return [[]];

  // sort the numbers
  let candidatesSorted = candidates.sort((a, b) => a - b);

  let find = (target, currentPath, index) => {
    if (target === 0) {
      finalPaths.push(currentPath);
      return;
    } else {
      while (
        index < candidatesSorted.length &&
        target - candidatesSorted[index] >= 0
      ) {
        
        find(
          target - candidatesSorted[index],
          [...currentPath, candidatesSorted[index]],
          index + 1
        );

        index++;

        // skip duplicates 
        while (candidatesSorted[index] === candidatesSorted[index - 1]) index++;
      }
    }
  };

  find(target, [], 0);
  return finalPaths;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
