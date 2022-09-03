/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" ")
    arr = arr.map(item => [...item].reverse().join(""))
    return arr.join(" ")
};