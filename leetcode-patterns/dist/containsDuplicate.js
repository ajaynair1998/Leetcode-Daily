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
