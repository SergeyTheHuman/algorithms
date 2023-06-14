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
	const adjList = {}

	for (const [a, b, weight] of edges) {
		if (!adjList[a]) adjList[a] = {}
		if (!adjList[b]) adjList[b] = {}
		adjList[a][b] = weight
		adjList[b][a] = weight
	}

	for (const node of nodes) {
		if (!adjList[node]) adjList[node] = {}
	}

	return adjList
}

function findShortestPath(nodes, edges, start, end) {
	const costs = {}
	const graph = getAdjList(nodes, edges)
	const visited = new Set()
	const paths = {}

	Object.keys(graph).forEach((node) => {
		if (node === start) {
			costs[node] = 0
			return
		}
		const value = graph[start][node]
		costs[node] = value || Infinity
	})

	let node = findLowestCostNode(costs, visited)

	while (node) {
		const cost = costs[node]
		const neighbours = graph[node]

		Object.keys(neighbours).forEach((neighbour) => {
			const newCost = cost + neighbours[neighbour]

			if (newCost < costs[neighbour]) {
				costs[neighbour] = newCost
				paths[neighbour] = node
			}
		})

		visited.add(node)
		node = findLowestCostNode(costs, visited)
	}

	if (end === undefined) {
		const shortestPaths = {}
		for (const node of nodes) shortestPaths[node] = getPath(node, paths, costs, start)

		return shortestPaths
	} else {
		return getPath(end, paths, costs, start)
	}
}

function getPath(node, paths, costs, startNode) {
	if (costs[node] === undefined) return `Path from "${startNode}" to "${node}" does not exist`

	let path = ''
	let target = node
	while (target in costs) {
		path += `${target} >—${costs[target] - (costs[paths[target]] || 0)}— `
		target = paths[target]
	}
	path += startNode
	return [path.split('').reverse().join(''), costs[node]]
}

function findLowestCostNode(costs, visited) {
	let lowestCost = Infinity
	let lowestCostNode

	Object.keys(costs).forEach((node) => {
		if (!visited.has(node) && costs[node] < lowestCost) {
			lowestCost = costs[node]
			lowestCostNode = node
		}
	})

	return lowestCostNode
}

console.log(findShortestPath(nodes, edges, 'a'))
