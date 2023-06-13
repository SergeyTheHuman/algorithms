const tree = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 4,
			left: {
				val: 'a',
				left: null,
				right: null,
			},
			right: {
				val: 'b',
				left: null,
				right: null,
			},
		},
		right: {
			val: 5,
			left: null,
			right: {
				val: 'c',
				left: {
					val: 'z',
					left: null,
					right: null,
				},
				right: {
					val: 'x',
					left: null,
					right: null,
				},
			},
		},
	},
	right: {
		val: 3,
		left: null,
		right: {
			val: 7,
			left: {
				val: 'd',
				left: null,
				right: null,
			},
			right: {
				val: 'e',
				left: null,
				right: {
					val: 'c',
					left: null,
					right: null,
				},
			},
		},
	},
}

/* 
		  1
	   /  \
     2    3
    / \    \
   4  5     7 
  / \  \   / \
 a  b   c d   e 
       / \     \
		z   x     c 
*/
function zigzagLevelOrder(root) {
	if (!root) return []

	const result = []
	const q = [[root, true, 0]]

	while (q.length) {
		const [node, flip, level] = q.shift()
		if (!node) continue

		if (result[level] === undefined) result[level] = []

		if (!flip) {
			result[level].push(node.val)
		} else {
			result[level].unshift(node.val)
		}

		q.push([node.right, !flip, level + 1])
		q.push([node.left, !flip, level + 1])
	}

	return result
}

console.log(zigzagLevelOrder(tree))
