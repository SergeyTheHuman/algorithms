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

// sum all nodes - dfs

function sumAllNodes(node) {
	let result = node.value

	if (node.children) {
		for (const child of node.children) {
			result += sumAllNodes(child)
		}
	}

	return result
}

console.log(sumAllNodes(tree))
