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

function bfsShortestPath(nodes, edges, start, end) {
	const graph = getAdjList(nodes, edges)
	const q = [start]
	const paths = {}
	const visited = new Set()

	while (q) {
		const node = q.shift()
		if (node === end) break
		visited.add(node)

		if (graph[node]) {
			for (const neighbour of graph[node]) {
				if (!visited.has(neighbour)) {
					visited.add(neighbour)
					q.push(neighbour)
					paths[neighbour] = node
				}
			}
		}
	}

	let path = [end]
	let target = end
	while (target in paths) {
		path.push(paths[target])
		target = paths[target]
	}

	return path.reverse().join(' -> ')
}

console.log(bfsShortestPath(nodes, edges, 'a', 'g'))
