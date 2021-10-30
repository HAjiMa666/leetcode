// js排序 + 双指针解法
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    // 左指针 和 右指针
    let left = 0, right = 0;
    let res = [];
    while (left < nums1.length && right < nums2.length) {
        if (nums1[left] === nums2[right]) {
            res.push(nums1[left]);
            left++;
            right++;
        } else if (nums1[left] > nums2[right]) {
            right++;
        }
        else left++;
    }
    console.log(nums1, nums2);
    return res;
}
