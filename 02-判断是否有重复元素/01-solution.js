/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        nums.forEach(item => {
            if (item === nums[i]) {
                count++;
            }
        })
        if (count > 1) return true;
        count = 0;
    }
    return false;
};