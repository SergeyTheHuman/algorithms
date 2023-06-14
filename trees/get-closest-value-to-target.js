/* 
Найти ближайшее значение в бинарном дереве

Напишите функцию, которая принимает два аргумента — бинарное дерево и значение в виде числа, а возвращает ближайшее значение, найденное в бинарном дереве.

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
*/

function getClosestValueInTree(root, target) {
	function dfs(node) {
		if (target === node.value) return node.value
		let nextClosest

		if (target > node.value) {
			nextClosest = node.right !== null ? dfs(node.right) : node.value
		} else {
			nextClosest = node.left !== null ? dfs(node.left) : node.value
		} 
		let currDiff = Math.abs(target - node.value)
		let newDiff = Math.abs(target - nextClosest)

		return currDiff < newDiff ? node.value : nextClosest
	}

	return dfs(root)
}

console.log(getClosestValueInTree(tree, 15))
