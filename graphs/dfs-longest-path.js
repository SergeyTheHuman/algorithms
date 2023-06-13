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

function dfsLongestPath(nodes, edges, start, end) {
	const adjList = getAdjList(nodes, edges)
	const visited = new Set()
	const stack = []
	const paths = []

	function dfs(node) {
		visited.add(node)
		stack.push(node)

		if (node === end) paths.push([...stack])

		if (adjList[node]) {
			for (const neighbour of adjList[node]) {
				if (!visited.has(neighbour)) dfs(neighbour)
			}
		}

		visited.delete(node)
		stack.pop()
	}

	dfs(start)

	let longestPath = paths[0]
	for (const path of paths) {
		if (path.length > longestPath.length) longestPath = path
	}
	return longestPath
}

console.log(dfsLongestPath(nodes, edges, 'a', 'f'))
