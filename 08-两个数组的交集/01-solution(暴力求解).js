/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 给定两个数组，编写一个函数来计算它们的交集。

var intersect = function (nums1, nums2) {
    let res = [];
    let index = 0;
    if (nums1.length > nums2.length) {
        nums2.forEach(num2 => {
            const result = nums1.find((num1, indey) => {
                if (num1 === num2) {
                    res.push(num2);
                    index = indey;
                }
                return num1 === num2;
            })
            if (result > -1)
                nums1[index] = -999;
        })

    } else {
        nums1.forEach(num1 => {
            const result = nums2.find((num2, indey) => {
                if (num1 === num2) {
                    res.push(num1);
                    index = indey;
                }
                return num1 === num2;
            })
            if (result > -1)
                nums2[index] = -999;
        })
    }
    return res;
};




// intersect([1, 2, 2, 1], [2, 2]);
// console.log(intersect([3, 1, 2], [1, 1]));

