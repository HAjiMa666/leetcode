
/**
 * 
 * @param {Number} n 汽车加满油能跑多远 
 * @param {Number} k 汽车到目的地之间有多少个加油站
 * @param {Array} x  每个加油站到下一个加油站(目的地)之间的距离
 */
function addOil(n, k, x) {
    let addCount = [];
    x.reduce((prev, distance, i, array) => {
        distance += prev;
        if (n - distance < array[i + 1]) {
            addCount.push(i + 1);
            distance = 0;
        }
        return distance
    })
    return addCount;
}

let v = addOil(7, 7, [1, 2, 3, 4, 5, 1, 6, 6]);
console.log(v);