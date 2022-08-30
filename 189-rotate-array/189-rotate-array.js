/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var arr = nums
    var Iteration = k % arr.length
    var temp = new Array(arr.length)
    nums.reverse();
    rotateSubArray(0, Iteration-1, arr)
    rotateSubArray(Iteration, arr.length-1, arr)
  
};

const rotateSubArray = (start, end, arr) => {
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start += 1
        end -= 1
    }
}