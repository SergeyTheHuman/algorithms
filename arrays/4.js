/* 
Задача: «Расплющивание» массива.

flat([1, [2, [3, [4,5]]]]); // => [1, 2, 3, 4, 5]
*/

function flat(arr) {
	const result = []

	arr.forEach((item) => {
		Array.isArray(item) ? result.push(...flat(item)) : result.push(item)
	})

	return result
}

function flat2(arr) {
	const result = []
	const stack = [...arr]

	for (const item of stack) {
		Array.isArray(item) ? stack.push(...item) : result.push(item)
	}

	return result
}

const arr = [1, [2, [3, [4, 5]]]]

console.log(flat(arr))
console.log(flat2(arr))
console.log(arr.flat(Infinity))
