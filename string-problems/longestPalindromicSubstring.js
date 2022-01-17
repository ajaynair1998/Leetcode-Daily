function longestpalindrome(s) {
  let finalLongestString;
  s = s.split("");
  let currentMax = 0;
  if (s === null || s === "") return "";
  for (let centre = 0; centre < s.length; centre++) {
    let evenSizedpalindrome = expandAroundCentre(s, centre, centre + 1);
    let oddSizedPalindrome = expandAroundCentre(s, centre, centre);
    let maxInThisIteration = Math.max(evenSizedpalindrome, oddSizedPalindrome);

    if (maxInThisIteration > currentMax) {
      let leftIndex = centre - Math.floor((maxInThisIteration - 1) / 2);
      let rightIndex = centre + Math.floor(maxInThisIteration / 2);

      finalLongestString = s.slice(leftIndex, rightIndex + 1);
      currentMax = maxInThisIteration;
    }
  }
  return finalLongestString.join("");
}

function expandAroundCentre(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}

console.log(longestpalindrome("babad"));
