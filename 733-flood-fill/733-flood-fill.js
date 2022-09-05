/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const dx = [-1,0,1,0]
const dy = [0,1,0,-1]
var floodFill = function(image, sr, sc, color) {
    const old = image[sr][sc]
    if(old === color) return image
    dfs(image, sr, sc, old, color)
    return image
};

function dfs(image, x, y, oldC, newC) {
    image[x][y] = newC
    const m = image.length
    const n = image[0].length

    for (let i=0; i<4; i++) {
        const nx = x + dx[i]
        const ny = y + dy[i]
        let cond = nx >= 0 && ny >= 0 && nx < m && ny < n && image[nx][ny] === oldC
        if(cond) dfs(image, nx, ny, oldC, newC)
    }
}