const tree = {
	val: 3,
	left: {
		val: 9,
	},
	right: {
		val: 20,
		left: {
			val: 15,
		},
		right: {
			val: 7,
		},
	},
}

function averageOfLevels(root) {
	const q = [root]
	const res = [root.val]

	while (q.length) {
		const levelNodesQty = q.length
		const levelNodes = []

		for (let i = 0; i < levelNodesQty; i++) {
			const node = q.shift()

			if (node.left) levelNodes.push(node.left)
			if (node.right) levelNodes.push(node.right)
		}

		q.push(...levelNodes)
		if (levelNodes.length) {
			res.push(levelNodes.reduce((acc, n) => (acc = acc + n.val), 0) / levelNodes.length)
		}
	}

	return res
}

console.log(averageOfLevels(tree))
