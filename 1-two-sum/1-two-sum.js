/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 1. brute-force: 2중 루프
 2. hashmap: 이미 봤던 값은 해쉬맵에 저장
 
 Input: nums = [2,7,11,15], target = 9
 Output: [0,1]
 
 */
var twoSum = function(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        if (map[target-current] !== undefined) {
            let result = new Array(2)
            result[0] = map[target-current]
            result[1] = i
            return result
        } else {
            map[current] = i
        }
    }
};