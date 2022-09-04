/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const arr = nums.map(item => item*item)
    return arr.sort((a,b) => {
        return a-b
    })
    
};
// var sortedSquares = function(nums) {
    
    
// };