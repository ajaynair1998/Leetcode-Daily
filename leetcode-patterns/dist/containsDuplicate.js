"use strict";
function containsDuplicate(nums) {
    let hashMap = {};
    for (let num of nums) {
        if (hashMap[num] === undefined) {
            hashMap[num] = 1;
        }
        else {
            return true;
        }
    }
    return false;
}
let data = containsDuplicate([1, 2, 3, 1]);
console.log(data);
