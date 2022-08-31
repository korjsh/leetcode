/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 0 하나 맨뒤로 옮기기
var moveZeroes = function(nums) {
    const length = nums.length
    let count = 0
    for (let i = 0; i < length; i++) {
        if(nums[i] !== 0) {
            nums[count] = nums[i]
            count += 1
        }
    }
    for (let i = 0; i < length-count; i++) {
        nums[count + i] = 0
    }
};