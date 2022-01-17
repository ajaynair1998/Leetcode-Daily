function isValid(s) {
  let stack = [];
  let complement = { "}": "{", ")": "(", "]": "[" };
  for (let symbol of s) {
    if (Object.values(complement).includes(symbol)) {
      stack.push(symbol);
    } else {
      let complementOfCurrent = complement[symbol];
      let topOfStack = stack.pop();
      if (complementOfCurrent === topOfStack) continue;
      else {
        return false;
      }
    }
  }

  if (stack.length === 0) return true;
  return false;
}

console.log(isValid("()"));
