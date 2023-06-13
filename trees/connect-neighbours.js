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

	const queue = [root]

	while (queue.length) {
		const levelSize = queue.length
		const buf = []

		for (let i = 0; i < levelSize; i++) {
			const node = queue.shift()
			node.next = queue[0] || null

			if (node.left) {
				buf.push(node.left)
			}

			if (node.right) {
				buf.push(node.right)
			}
		}

		queue.push(...buf)
	}

	console.log(queue)
	debugger

	return root
}
connect(tree)
