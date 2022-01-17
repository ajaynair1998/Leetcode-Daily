function climbStairs(n) {
  if (n < 3) return n;

  let first = 1;
  let second = 2;

  for (let i = 3; i < n; i++) {
    let current = first + second;
    first = second;
    second = current;
  }
  return second;
}

function climbStairsrecursive(n, memo = {}) {
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }

  if (memo[n] !== undefined) {
    return memo[n];
  }

  let result =
    climbStairsrecursive(n - 1, memo) + climbStairsrecursive(n - 2, demo);
  memo[n] = result;
  return result;
}

console.log(climbStairsrecursive(2));
