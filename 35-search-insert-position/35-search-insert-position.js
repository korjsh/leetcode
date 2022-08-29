/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const arr = nums
    const index = arr.indexOf(target)
    if(index === -1) {
        arr.push(target)
        arr.sort(function(a, b){
            return a - b;
        })
        return arr.indexOf(target)
    }
    return index
};