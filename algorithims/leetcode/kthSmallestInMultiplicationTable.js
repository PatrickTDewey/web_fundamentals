/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
        let grid = []
        for (let i = 1, len = m; i <= len; i++) {
                let current = i
                grid[i - 1] = []
                for (let j = 1; j <= n; j++){
                        grid[i - 1].push(i * j)
                }
        }
        
        let flatSortMatrix = grid.flat().sort((a, b) => a-b)
        
        return flatSortMatrix[k-1];
};
console.log(findKthNumber(3, 3, 5))
console.log(findKthNumber(2, 3, 3))

