const gridWithOneIceland = [
	['1', '1', '1', '1', '0'],
	['1', '1', '0', '1', '0'],
	['1', '1', '0', '0', '0'],
	['0', '0', '0', '0', '0'],
]

const gridWithThreeIcelands = [
	['1', '1', '0', '0', '0'],
	['1', '1', '0', '0', '0'],
	['0', '0', '1', '0', '0'],
	['0', '0', '0', '1', '1'],
]

const gridWithSixIcelands = [
	['1', '1', '0', '1', '1'],
	['1', '1', '0', '0', '0'],
	['0', '0', '0', '1', '0'],
	['1', '0', '1', '0', '1'],
]

function numIslands(grid) {
	let icelandQty = 0
	const visited = new Set()

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[row].length; col++) {
			if (grid[row][col] === '1' && !visited.has(`${row}, ${col}`)) {
				bfs(row, col)
				icelandQty++
			}
		}
	}

	function bfs(row, col) {
		if (outOfBounds(row, col) || grid[row][col] === '0' || visited.has(`${row}, ${col}`)) return

		visited.add(`${row}, ${col}`)

		for (const [a,b] of [[0,1], [1,0], [0,-1], [-1,0]]) {
			bfs(row + a, col + b)
		}
	}

	function outOfBounds(row, col) {
		return row < 0 || row >= grid.length || col < 0 || col >= grid[row].length
	}

	return icelandQty
}

console.log(numIslands(gridWithOneIceland))
console.log(numIslands(gridWithThreeIcelands))
console.log(numIslands(gridWithSixIcelands))
