const tree = {
	value: 12,
	children: [
		{
			value: 2,
			children: [
				{
					value: 3,
					children: [
						{
							value: 5,
						},
						{
							value: 6,
						},
						{
							value: 92,
						},
					],
				},
				{
					value: 11,
				},
				{
					value: 6,
				},
			],
		},
		{
			value: 2,
			children: [
				{
					value: 5,
				},
				{
					value: 17,
				},
				{
					value: 2,
					children: [
						{
							value: -2,
						},
						{
							value: 4,
							children: [
								{
									value: 5,
								},
								{
									value: 1,
									children: [
										{
											value: 22,
											children: [
												{
													value: 1,
												},
												{
													value: 4,
												},
												{
													value: 2,
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
}

function sumAllNodesCycle(root) {
	const q = [root]
	const result = []
	let level = 1

	while (q.length) {
		const levelQty = q.length
		const levelNodes = []
		let levelResult = 0

		for (let i = 0; i < levelQty; i++) {
			const node = q.shift()
			levelResult += node.value

			if (node.children) {
				for (const child of node.children) {
					levelNodes.push(child)
				}
			}
		}

		q.push(...levelNodes)
		result.push({[level]: levelResult})
		level++
	}

	return result
}

console.log(sumAllNodesCycle(tree))
