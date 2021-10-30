/**
 * @param {number[]} nums
 * @return {number}
 */
// 我写的这个是暴力求解的方法 会超出时间限制
// 所以我看了答案 开始写下一种解法
var maxSubArray = function (nums) {
    const max = Math.pow(10, 5);
    const min = -max;
    // const maxLengh = 3 * Math.pow(10, 4);
    const minLenght = 1;
    let maxValue = nums[0];
    if (nums.length === minLenght && (nums[0] >= min && nums[0] <= max)) return nums[0];
    if (nums[0] < min || nums[0] > max) return -1;
    // if (nums.length <= minLenght || nums.length >= maxLengh) return -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min || nums[i] > max) return -1;
        let sum = nums[i];
        if (sum > maxValue) maxValue = sum
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < min || nums[j] > max) return -1;
            sum += nums[j];
            if (sum > maxValue) maxValue = sum;
        }
    }
    return maxValue;
};
