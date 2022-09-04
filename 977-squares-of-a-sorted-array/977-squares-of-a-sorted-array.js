/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//     const arr = nums.map(item => item*item)
//     return arr.sort((a,b) => {
//         return a-b
//     })
    
// };
var sortedSquares = function(nums) {
    const len = nums.length
    let st = 1
    let en = len
    let arr = []
    
    while(en-st >= 0) {
        if(Math.abs(nums[en-1]) > Math.abs(nums[st-1])) {
            arr.push(nums[en-1]**2)
            en--
        } else {
            arr.push(nums[st-1]**2)
            st++
        }
    }
    return arr.reverse()
};