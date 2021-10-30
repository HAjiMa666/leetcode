/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let sum = 0;
    let sumArr = [];
    for (let i = 0; i < nums.length; i++) {
        sum = nums[i];
        sumArr.push(i);
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            sumArr.push(j);
            if (sum === target) return sumArr
            sum = nums[i];
            sumArr.pop(j);
        }
        sumArr.shift(i);
    }
};

twoSum([3, 2, 3], 6);