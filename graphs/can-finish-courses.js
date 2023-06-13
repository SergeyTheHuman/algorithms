const prerequisites = [
	[1, 0],
	[2, 0],
	[3, 1],
	[3, 2],
]
const numCourses = 2

function canFinish(numCourses, prerequisites) {
	let graph = {}

	for (let [a, b] of prerequisites) {
		if (!graph[a]) graph[a] = []
		if (!graph[b]) graph[b] = []

		graph[a].push(b.toString())
	}

	let visiting = new Set()
	let visited = new Set()

	for (let node in graph) {
		if (visited.has(node)) continue
		if (hasCycle(node)) return false
	}

	return true

	function hasCycle(node) {
		if (visiting.has(node)) return true
		if (visited.has(node)) return false

		visiting.add(node)

		for (let next of graph[node]) {
			if (hasCycle(next)) return true
		}

		visiting.delete(node)
		visited.add(node)

		return false
	}
}

console.log(canFinish(4, prerequisites))
