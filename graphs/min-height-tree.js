const qty = 4
// const edges = [
// 	[1, 0],
// 	[1, 2],
// 	[1, 3],
// ]
const edges = [
	[2,0],
	[2,1],
	[2,6],
	[2,3],
	[4,3],
	[5,3],
]
// const edges = [
// 	[3, 0],
// 	[3, 1],
// 	[3, 2],
// 	[3, 4],
// 	[5, 4],
// ]

// const edges = [
// 	[0, 1],
// 	[0, 2],
// 	[0, 3],
// 	[3, 4],
// 	[4, 5],
// ]

function findMinHeightTrees(n, edges) {
	if (!edges || n < 2) return [0]

	let graph = []

	for (const [a, b] of edges) {
		graph[a] = graph[a] || []
		graph[b] = graph[b] || []
		graph[a].push(b)
		graph[b].push(a)
	}

	let leaves = []
	graph.forEach((pts, i) => pts.length === 1 && leaves.push(i))

	while (n > 2) {
		n = n - leaves.length
		let next_leaves = []

		for (let leave of leaves) {
			let tmp = graph[leave].pop()
			graph[tmp].splice(graph[tmp].indexOf(leave), 1)

			graph[tmp].length === 1 && next_leaves.push(tmp)
		}

		leaves = next_leaves
	}
	
	return leaves
}
findMinHeightTrees(qty, edges)
