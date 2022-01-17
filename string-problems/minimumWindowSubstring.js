function minWindow(s, t) {
  // add the substring to hashmap to keep count
  let subString = {};
  for (let letter of t) {
    if (subString[letter] === undefined) {
      subString[letter] = 1;
    } else {
      subString[letter] = subString[letter] + 1;
    }
  }

  //   initialise variables
  let found = false;
  let left = 0;
  let minWindowLength = s.length;
  let leftOfMinimum, rightOfMinimum;

  for (let right = 0; right < s.length; right++) {
    //   keep incrementing right while we havent found the substring
    let currentLetter = s[right];
    if (subString[currentLetter] != undefined) {
      subString[currentLetter] = subString[currentLetter] - 1;
    }
    let count = Object.values(subString).reduce((acc, item) => {
      if (item > 0) {
        return acc + item;
      } else {
        return acc + 0;
      }
    }, 0);
    console.log(count, subString);
    while (count <= 0) {
      found = true;
      let currentWindow = right - left - 1;
      if (currentWindow < minWindowLength) {
        minWindowLength = currentWindow;
        leftOfMinimum = left;
        rightOfMinimum = right;
      }
      let currentLeft = s[left];
      if (subString[currentLeft] != undefined) {
        subString[currentLeft] = subString[currentLeft] + 1;
      }
      //   console.log(s.slice(left, right + 1));
      left++;
      count = Object.values(subString).reduce((acc, item) => {
        if (item > 0) {
          return acc + item;
        } else {
          return acc + 0;
        }
      }, 0);
    }
  }
  return found ? s.slice(leftOfMinimum, rightOfMinimum + 1) : "";
}

console.log(minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd"));
