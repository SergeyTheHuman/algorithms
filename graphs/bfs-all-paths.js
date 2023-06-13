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

function bfsAllPaths(nodes, edges, start, end) {
	const adjList = getAdjList(nodes, edges)
	const q = [[start]]
	const paths = []

	while (q.length) {
		const currentPath = q.shift()
		const currentNode = currentPath.at(-1)

		if (currentNode === end) {
			paths.push(currentPath)
		} else {
			for (const neighbour of adjList[currentNode]) {
				if (!currentPath.includes(neighbour)) {
					q.push([...currentPath, neighbour])
				}
			}
		}
	}

	return paths
}

console.log(bfsAllPaths(nodes, edges, 'a', 'g'))
