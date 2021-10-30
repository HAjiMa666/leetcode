/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    let a, sum = 0, max = Math.pow(2, 31) - 1, min = -max - 1
    if (x > max || x < min) return 0
    while (x !== 0) {
        a = x % 10
        x = parseInt(x / 10)
        sum = sum * 10 + a
    }
    if (sum > max || sum < min) return 0
    return sum
}