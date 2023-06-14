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
	const paths = []
	const q = [[start]]
	const adjList = getAdjList(nodes, edges)

	while (q.length) {
		const path = q.shift()
		const node = path.at(-1)

		if (node === end) {
			paths.push(path)
		} else {
			if (adjList[node]) {
				for (const neighbour of adjList[node]) {
					if (!path.includes(neighbour)) q.push([...path, neighbour])
				}
			}
		}
	}

	return paths
}
console.log(bfsAllPaths(nodes, edges, 'a', 'g'))
