/* 
Найти и вернуть две ближайшие ноды друг к другу по значению

Node = { value: number | null, left: Node | null, right: Node | null }
*/

const tree = {
	value: 10,
	left: {
		value: 5,
		left: {
			value: 2,
			left: {
				value: -5,
				left: null,
				right: null,
			},
			right: null,
		},
		right: {
			value: 7,
			left: null,
			right: null,
		},
	},
	right: {
		value: 17,
		left: {
			value: 14,
			left: {
				value: 13,
				left: null,
				right: null,
			},
			right: null,
		},
		right: {
			value: 22,
			left: null,
			right: null,
		},
	},
}

/* 
			10
		 /    \
	   5     17
	  / \   /  \
	 2  7  14  22
	/		/
 -5	  13 

 12 14
*/

function getClosestNodes(root, cheap = false) {
	let nodes = []

	function dfs(node) {
		if (!node) return null

		if (node.left) dfs(node.left)
		nodes.push(node.value)
		if (node.right) dfs(node.right)
	}
	dfs(root)

	let currDiff = Math.abs(nodes[0] - nodes[1])

	for (let i = 1; i < nodes.length - 1; i++) {
		if (Math.abs(nodes[i] - nodes[i + 1]) < currDiff) {
			currDiff = Math.abs(nodes[i] - nodes[i + 1])
		}
	}

	return currDiff
}

console.log(getClosestNodes(tree))
