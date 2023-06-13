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

// time O(log n) || space O(1)
function getClosestValueInTree(root, target) {
	if (target === root.value) return root.value

	let closest

	if (target > root.value) {
		closest = root.right ? getClosestValueInTree(root.right, target) : root.value
	} else {
		closest = root.left ? getClosestValueInTree(root.left, target) : root.value
	}

	const diffRoot = Math.abs(root.value - target)
	const diffClosest = Math.abs(closest - target)
	return diffRoot > diffClosest ? closest : root.value
}

console.log(getClosestValueInTree(tree, 0))
