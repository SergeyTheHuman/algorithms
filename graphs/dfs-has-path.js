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

function dfsHasPath(nodes, edges, start, target) {
	const adjList = getAdjList(nodes, edges)
	const visited = new Set()

	function search(node, target) {
		if (node === target) return true
		if (visited.has(node)) return false
		visited.add(node)

		if (adjList[node]) {
			for (const neighbour of adjList[node]) {
				if (search(neighbour, target)) return true
			}
		}
	}

	return search(start, target) || false
}

console.log(dfsHasPath(nodes, edges, 'a', 'f'))
