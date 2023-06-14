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

function bfsShortestPath(nodes, edges, start, end, longest = false) {
	const adjList = getAdjList(nodes, edges)
	const q = [[start]]
	const paths = {}

	while (q.length) {
		const path = q.pop()
		const node = path.at(-1)

		if (node === end) {
			if (!paths[path.length]) {
				paths[path.length] = [path]
			} else {
				paths[path.length].push(path)
			}
		} else {
			if (adjList[node]) {
				for (const neighbour of adjList[node]) {
					if (!path.includes(neighbour)) {
						q.push([...path, neighbour])
					}
				}
			}
		}
	}

	let pathLength
	Object.keys(paths).forEach(key => {
		if (!pathLength) pathLength = key
		if (longest) {
			if (+key > pathLength) pathLength = key
		} else {
			if (+key < pathLength) pathLength = key
		}
	})

	if (!paths[pathLength]) return 'That way is not exists'
	return paths[pathLength].map(path => path.join(' --> '))
}

console.log(bfsShortestPath(nodes, edges, 'a', 'h', true))
