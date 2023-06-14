/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const tree = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 4,
			left: null,
			right: null,
		},
		right: {
			val: 5,
			left: null,
			right: null,
		},
	},
	right: {
		val: 3,
		left: {
			val: 6,
			left: null,
			right: null,
		},
		right: {
			val: 7,
			left: null,
			right: null,
		},
	},
}

/* 
		1
	 /   \
	2     3
  / \   / \
 4  5  6  7 	
*/

function connect(root) {
	if (!root) return null

	const q = [root]

	while (q.length) {
		const levelSize = q.length
		const levelNodes = []

		for (let i = 0; i < levelSize; i++) {
			const node = q.shift()
			node.next = q[0] || null

			if (node.left) levelNodes.push(node.left)
			if (node.right) levelNodes.push(node.right)
		}

		q.push(...levelNodes)
	}

	console.log(q)

	return root
}
connect(tree)
