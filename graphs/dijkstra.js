// Dijkstra algorithm

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

	for (const [a, b, weight] of edges) {
		if (!adjList[a]) adjList[a] = {}
		adjList[a][b] = weight

		// Эти строки позволяют сделать граф ненаправленным
		// if (!adjList[b]) adjList[b] = {}
		// adjList[b][a] = weight
	}

	// Нужно для того, чтобы в adjList попали даже "крайние" ноды
	for (const node of nodes) {
		if (adjList[node] === undefined) adjList[node] = {}
	}

	return adjList
}

function findShortestPath(nodes, edges, start, end) {
	const graph = getAdjList(nodes, edges)
	const costs = {}
	const visited = new Set()
	const paths = {}
	
	// Заполняем ближайшие веса соседей для стартовой точки
	Object.keys(graph).forEach((node) => {
		if (node === start) {
			costs[node] = 0
		} else {
			const value = graph[start][node]
			costs[node] = value || Infinity
		}
	})

	// Находим ноду с минимальным весом
	let node = findLowestCostNode(costs, visited)

	while (node) {
		const cost = costs[node]

		// Получаем соседей текущей ноды
		const neighbours = graph[node]

		// Бежим по соседям
		Object.keys(neighbours).forEach((neighbour) => {
			// Для каждого считаем новый вес
			const newCost = cost + neighbours[neighbour]

			// Если новый вес меньше записанного - меняем
			if (newCost < costs[neighbour]) {
				costs[neighbour] = newCost
				paths[neighbour] = node
			}
		})

		// Добавляем ноду в посещенные
		visited.add(node)

		// Снова находим находим ноду с минимальным весом
		node = findLowestCostNode(costs, visited)
	}

	const path = []

	// Формируем массив путей, возвращаясь по "истории" назад
	let currNode = end
	while (currNode in costs) {
		path.push(currNode)
		currNode = paths[currNode]
	}
	path.push(start)

	return [path.reverse().join(' -> '), costs[end]]
}

function findLowestCostNode(costs, visited) {
	let lowestCost = Infinity
	let lowestNode

	Object.keys(costs).forEach((neighbour) => {
		if (costs[neighbour] < lowestCost && !visited.has(neighbour)) {
			lowestCost = costs[neighbour]
			lowestNode = neighbour
		}
	})

	return lowestNode
}

console.log(findShortestPath(nodes, edges, 'a', 'h'))
