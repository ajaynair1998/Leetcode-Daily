"use strict";
function findDuplicate(nums) {
    let map = {};
    for (let num of nums) {
        if (map[num] !== undefined) {
            return num;
        }
        else {
            map[num] = 1;
        }
    }
    return 1;
}
