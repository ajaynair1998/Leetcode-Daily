let jump = function (nums) {
  let l = 0;
  let r = 0;
  let finalSteps = 0;
  let farthest = 0;

  while (farthest < nums.length - 1) {
    while (l < r + 1) {
      farthest = Math.max(l + nums[l], farthest);
      l++;
    }
    l = r + 1;
    r = farthest;
    finalSteps++;
  }
  return finalSteps;
};

console.log(jump([2, 3, 1, 1, 4]));
