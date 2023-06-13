const nodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'x', 'h']
const edges = [
	['a', 'b', 1],
	['a', 'f', 7],
	['a', 'x', 11],
	['b', 'c', 2],
	['c', 'f', 1],
	['c', 'd', 3],
	['c', 'e', 1],
	['e', 'd', 1],
	['e', 'h', 2],
	['f', 'g', 2],
	['g', 'x', 3],
	['g', 'h', 2],
]

function getAdjList(nodes, edges) {
	let adjList = {}

	for (const [a, b, c] of edges) {
		if (!adjList[a]) adjList[a] = {}
		if (!adjList[b]) adjList[b] = {}
		adjList[a][b] = c
		adjList[b][a] = c
	}

	for (const node of nodes) {
		if (!(node in adjList)) adjList[node] = {}
	}

	return adjList
}

function findShortestPath(nodes, edges, start, end) {
	const graph = getAdjList(nodes, edges)
	const costs = {}
	const visited = new Set()
	const paths = {}

	Object.keys(graph).forEach((node) => {
		if (node === start) {
			costs[node] = 0
		} else {
			const value = graph[start][node]
			costs[node] = value || Infinity
		}
	})

	let node = findLowestCostNode(costs, visited)

	while (node) {
		const cost = costs[node]
		const neighbours = graph[node]

		Object.keys(neighbours).forEach((neighbour) => {
			const newCost = cost + neighbours[neighbour]

			if (newCost < costs[neighbour]) {
				paths[neighbour] = node
				costs[neighbour] = newCost
			}
		})

		visited.add(node)
		node = findLowestCostNode(costs, visited)
	}

	let path = ''
	let targetNode = end
	let prevCost = 0
	while (targetNode in costs) {
		prevCost = costs[targetNode] - (costs[paths[targetNode]] || 0)
		path += `${targetNode}>--${prevCost}--`
		targetNode = paths[targetNode]
	}
	path += start

	if (costs[end] && costs[end] !== Infinity) {
		return [path.split('').reverse().join(''), costs[end]]
	} else {
		return 'Данная точка недостижима'
	}
}

function findLowestCostNode(costs, visited) {
	let lowestCost = Infinity
	let lowestNode

	Object.keys(costs).forEach((node) => {
		if (!visited.has(node) && costs[node] < lowestCost) {
			lowestCost = costs[node]
			lowestNode = node
		}
	})

	return lowestNode
}

console.log(findShortestPath(nodes, edges, 'a', 'x'))
