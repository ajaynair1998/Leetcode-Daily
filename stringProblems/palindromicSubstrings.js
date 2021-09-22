function countSubstrings(s) {
  let numberOfSubstrings = 0;

  for (let centre = 0; centre < s.length; centre++) {
    let evenSubstrings = expandFromCentre(s, centre, centre + 1);
    let oddSubstrings = expandFromCentre(s, centre - 1, centre + 1);
    console.log(evenSubstrings, oddSubstrings);
    numberOfSubstrings = numberOfSubstrings + evenSubstrings + oddSubstrings;
  }
  return numberOfSubstrings + s.length;
}

function expandFromCentre(s, left, right) {
  let numberOfSubstrings = 0;

  for (let centre = 0; centre < s.length; centre++) {
    let evenSubstrings = expandFromCentre(s, centre, centre + 1);
    let oddSubstrings = expandFromCentre(s, centre - 1, centre + 1);
    console.log(evenSubstrings, oddSubstrings);
    numberOfSubstrings = numberOfSubstrings + evenSubstrings + oddSubstrings;
  }
  return numberOfSubstrings + s.length;
}
