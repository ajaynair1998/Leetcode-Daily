function isPalindrome(s) {
  s = s.toLowerCase();
  let finalString = "";
  for (symbol of s) {
    let charCodeOfCurrentSymbol = symbol.charCodeAt();

    if (
      (91 > charCodeOfCurrentSymbol && charCodeOfCurrentSymbol > 64) ||
      (123 > charCodeOfCurrentSymbol && charCodeOfCurrentSymbol > 96) ||
      (58 > charCodeOfCurrentSymbol && charCodeOfCurrentSymbol > 47)
    ) {
      finalString = finalString.concat(symbol);
    } else {
      continue;
    }
  }

  let reversedString = Array.from(finalString).reverse().join("");
  console.log(finalString, reversedString);
  if (finalString == reversedString) {
    return true;
  }
  return false;
}

console.log(isPalindrome("0P"));
