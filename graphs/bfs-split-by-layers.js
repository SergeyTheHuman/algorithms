const nodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'x']
const edges = [
	['a', 'b'],
	['a', 'f'],
	['a', 'x'],
	['b', 'c'],
	['c', 'f'],
	['c', 'd'],
	['c', 'e'],
	['e', 'd'],
	['e', 'h'],
	['f', 'g'],
	['g', 'x'],
	['g', 'h'],
]

function getAdjList(nodes, edges) {
	const adjList = {}

	for (const [a, b] of edges) {
		if (!adjList[a]) adjList[a] = []
		if (!adjList[b]) adjList[b] = []
		adjList[a].push(b)
		adjList[b].push(a)
	}

	return adjList
}

function bfsSplitByLayers(nodes, edges, start) {
	const adjList = getAdjList(nodes, edges)
	const q = [start]
	const visited = new Set()
	const res = [[start]]

	while (q.length) {
		const depth = q.length
		const levelNodes = []

		for (let i = 0; i < depth; i++) {
			const node = q.shift()
			visited.add(node)

			if (adjList[node]) {
				for (const neighbour of adjList[node]) {
					if (!visited.has(neighbour)) {
						visited.add(neighbour)
						levelNodes.push(neighbour)
					}
				}
			}
		}

		if (levelNodes.length) res.push(levelNodes)
		q.push(...levelNodes)
	}

	return res
}

console.log(bfsSplitByLayers(nodes, edges, 'a'))
