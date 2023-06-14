/* 
Найти ветку с максимальной суммой и вернуть эту сумму

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
				value: 12,
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
 -5	  12 

 53
*/

function getMostExpensiveOrCheapestBranch(root, cheap = false) {
	function dfs(node) {
		if (!node) return null

		const leftBranch = node.value + dfs(node.left)
		const rightBranch = node.value + dfs(node.right)

		return cheap ? Math.min(leftBranch, rightBranch) : Math.max(leftBranch, rightBranch)
	}

	return dfs(root)
}

console.log(getMostExpensiveOrCheapestBranch(tree, true))
console.log(getMostExpensiveOrCheapestBranch(tree))
