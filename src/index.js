module.exports = function reverse (n) {
    if (n < 0) {
        n = -1 * n;
    }
    let str = new String(n).split("");
    let result = "";
    for (let i = str.length - 1; i >=0; i --) {
        result = result + str[i];
    }
    return result;
}
