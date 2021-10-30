/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const hashMap = new Map();
    const res = [];
    const minLngth = Math.min(nums1.length, nums2.length);
    // 判断nums1和nums2那个数组长度更长
    let nums = [];
    let otherNums = [];
    if (nums1.length === minLngth) {
        nums = [...nums1];
        otherNums = [...nums2];
    };
    if (nums2.length === minLngth) {
        nums = [...nums2];
        otherNums = [...nums1];
    };
    nums.forEach(num => {
        if (hashMap.has(num)) {
            let count = hashMap.get(num);
            count++;
            hashMap.set(num, count);
        } else {
            hashMap.set(num, 1);
        }
    })
    otherNums.forEach(otherNum => {
        if (hashMap.has(otherNum) && hashMap.get(otherNum) !== 0) {
            let count = hashMap.get(otherNum);
            count--;
            hashMap.set(otherNum, count);
            res.push(otherNum);
        }
    })
    return res;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

