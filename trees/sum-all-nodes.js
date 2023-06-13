/* 
Сумма вершин дерева

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

Необходимо написать функцию, возвращающую сумму всех вершин дерева:

getTreeValues(tree); // => 28
*/

function sumTreeValues(root) {
	if (!root) return null

	let res = root.value

	if (root.children) {
		root.children.forEach((node) => {
			node.children ? (res += sumTreeValues(node)) : (res += node.value)
		})
	}

	return res
}

const tree = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{
					value: 4,
				},
				{
					value: 5,
					children: [
						{
							value: 1,
						},
						{
							value: 1,
						},
						{
							value: 1,
							children: [
								{
									value: 2,
								},
								{
									value: 2,
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
		{
			value: 3,
			children: [{ value: 6 }, { value: 7 }],
		},
	],
}

console.log(sumTreeValues(tree)) // => 37
