function isAnagramNotOptimized(s, t) {
  let tArray = Array.from(t);

  for (let letter of s) {
    tArray.indexOf(letter);
    if (tArray.indexOf(letter) > -1) {
      tArray.splice(tArray.indexOf(letter), 1);
    } else {
      return false;
    }
  }

  if (tArray.length === 0) return true;
  return false;
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let hashMap = new Map();

  for (let letter of s) {
    if (!hashMap[letter]) hashMap[letter] = 1;
    else {
      hashMap[letter] = hashMap[letter] + 1;
    }
  }

  for (let letter of t) {
    if (!hashMap[letter]) return false;
    else {
      hashMap[letter] = hashMap[letter] - 1;
    }
  }

  for (let value of hashMap.values()) {
    if (value != 0) return false;
  }
  return true;
}
