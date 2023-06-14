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

function dfsHasPath(nodes, edges, start, end) {
	const adjList = getAdjList(nodes, edges)
	const visited = new Set()

	function search(start) {
		if (start === end) return true
		if (!adjList[start] || visited.has(start)) return false
		visited.add(start)
		for (const node of adjList[start]) {
			if (search(node)) return true
		}
	}

	return search(start) || false
}

console.log(dfsHasPath(nodes, edges, 'a', 'q'))
