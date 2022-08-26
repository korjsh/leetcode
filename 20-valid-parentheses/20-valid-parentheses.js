/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = [...s]
    const stack = []
    for (const item of arr) {
        if(item === '(' || item === '{' || item === '[') {
            stack.push(item)
        } else if (item === ')') {
            if(stack.length === 0 || stack.pop() !== '(') return false
        } else if (item === '}') {
            if(stack.length === 0 || stack.pop() !== '{') return false
        } else if (item === ']') {
            if(stack.length === 0 || stack.pop() !== '[') return false
        }
    }
    return stack.length === 0
};