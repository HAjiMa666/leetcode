/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxValue = nums[0];
    let sum = 0;
    for (const num of nums) {
        // sum>0的情况下 可以加num 万一是正的 对于sum是有益的
        if (sum > 0) {
            sum += num;
        } else {
            //sum<0的情况下 就直接把num给sum即可 拿到正数 又可以进行累加了
            sum = num;
        }
        //比较maxValue和sum的大小 如果sum大的话 替换maxValue
        maxValue = Math.max(maxValue, sum);
    }
    return maxValue;
};