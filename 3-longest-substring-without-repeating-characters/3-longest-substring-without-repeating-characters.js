/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hashmap = new Map()
    let start = 0
    let longest = 0
    const len = s.length
    for (i=0; i<len; i++) {
        if(hashmap.get(s[i])) {
            start = Math.max(start, hashmap.get(s[i]))
        }
        hashmap.set(s[i], i+1)
        longest = Math.max(longest, i+1-start)
    }
    return longest
};