function minAbsoluteSumDiff(nums1, nums2) {
  let mod = 1000000007;
  let setOfNumbers = new Set();
  let lengthOfArray = nums1.length;
  let initialAbsoluteSumDifference = 0;

  // add the numbers to a set and calculate the initial absolute sum difference
  for (let i = 0; i < lengthOfArray; i++) {
    setOfNumbers.add(nums1[i]);
    initialAbsoluteSumDifference += Math.abs(nums1[i] - nums2[i]);
  }
  // initialising the current minimum with the initial state
  let minimum = initialAbsoluteSumDifference;

  // Create a sorted array from the set
  let sortedUniqueNumbers = Array.from(setOfNumbers).sort((a, b) => a - b);

  // now loop through nums1 and nums2
  for (let i = 0; i < lengthOfArray; i++) {
    if (nums1[i] === nums2[i]) {
      continue;
    }

    let currentDifference = Math.abs(nums1[i] - nums2[i]);
    let closestNumber = findTheClosestNumber(sortedUniqueNumbers, nums2[i]);
    let currentSum =
      (initialAbsoluteSumDifference -
        currentDifference +
        Math.abs(nums2[i] - closestNumber)) %
      mod;
    minimum = Math.min(minimum, currentSum) % mod;
  }
  return minimum;
}

function findTheClosestNumber(sortedUniqueNumbers, target) {
  let left = 0;
  let right = sortedUniqueNumbers.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (sortedUniqueNumbers[mid] === target) {
      return target;
    }

    if (sortedUniqueNumbers[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let closest = sortedUniqueNumbers[left];

  if (
    left > 0 &&
    Math.abs(target - sortedUniqueNumbers[left - 1]) <
      Math.abs(target - closest)
  ) {
    console.log(sortedUniqueNumbers[left - 1]);
    return sortedUniqueNumbers[left - 1];
  }
  console.log(closest);
  return closest;
}

console.log(
  minAbsoluteSumDiff(
    [
      56,
      51,
      39,
      1,
      12,
      14,
      58,
      82,
      18,
      41,
      70,
      64,
      18,
      7,
      44,
      90,
      55,
      23,
      11,
      79,
      59,
      76,
      67,
      92,
      60,
      80,
      57,
      11,
      66,
      32,
      76,
      73,
      35,
      65,
      55,
      37,
      38,
      26,
      4,
      7,
      64,
      84,
      98,
      61,
      78,
      1,
      80,
      33,
      5,
      66,
      32,
      30,
      52,
      29,
      41,
      2,
      21,
      83,
      30,
      35,
      21,
      30,
      13,
      26,
      36,
      93,
      81,
      41,
      98,
      23,
      20,
      19,
      45,
      52,
      25,
      51,
      52,
      24,
      2,
      45,
      21,
      97,
      11,
      92,
      28,
      37,
      58,
      29,
      5,
      18,
      98,
      94,
      86,
      65,
      88,
      8,
      75,
      12,
      9,
      66,
    ],
    [
      64,
      32,
      98,
      65,
      67,
      40,
      71,
      93,
      74,
      24,
      49,
      80,
      98,
      35,
      86,
      52,
      99,
      65,
      15,
      92,
      83,
      84,
      80,
      71,
      46,
      11,
      26,
      70,
      80,
      2,
      81,
      57,
      97,
      12,
      68,
      10,
      49,
      80,
      24,
      18,
      45,
      72,
      33,
      94,
      60,
      5,
      94,
      99,
      14,
      41,
      25,
      83,
      77,
      67,
      49,
      70,
      94,
      83,
      55,
      17,
      61,
      44,
      50,
      62,
      3,
      36,
      67,
      10,
      2,
      39,
      53,
      62,
      44,
      72,
      66,
      7,
      3,
      6,
      80,
      38,
      43,
      100,
      17,
      25,
      24,
      78,
      8,
      4,
      36,
      86,
      9,
      68,
      99,
      64,
      65,
      15,
      42,
      59,
      79,
      66,
    ]
  )
);
