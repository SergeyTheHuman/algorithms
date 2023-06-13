/*
Обход дерева

Дана структура данных в виде дерева:

const tree = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
};

Необходимо написать функцию, возвращающую значения всех вершин дерева:

getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]
*/

function getTreeValuesRecursion(root) {
	if (!root) return []
	const result = [root.value]

	if (root.children) {
		for (const child of root.children) {
			result.push(...getTreeValuesRecursion(child))
		}
	}

	return result
}

function getTreeValuesCycle(root) {
	const q = [root]
	const result = []

	while (q.length) {
		const node = q.shift()
		result.push(node.value)

		if (node.children) q.push(...node.children)
	}

	return result
}

const tree = {
	value: 1,
	children: [
		{
			value: 2,
			children: [{ value: 4 }, { value: 5 }],
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
				{ value: 8 },
				{
					value: 9,
					children: [
						{ value: 'a' },
						{ value: 's' },
						{ value: 'd' },
						{
							value: 'e',
							children: [
								{
									value: 111,
								},
								{
									value: 222,
								},
								{
									value: 333,
									children: [{ value: 'end' }],
								},
							],
						},
					],
				},
				{ value: 10 },
				{ value: 11 },
			],
		},
	],
}

console.log(getTreeValuesRecursion(tree)) // => [1, 2, 4, 5, 3, 6, 7, 8, 9, 'a', 's', 'd', 'e', 111, 222, 333, 'end', 10, 11]
console.log(getTreeValuesCycle(tree)) // => [1, 2, 4, 5, 3, 6, 7, 8, 9, 'a', 's', 'd', 'e', 111, 222, 333, 'end', 10, 11]
