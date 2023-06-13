const arr = [8, 2, 6, 4, 3, 14, 7, 9, 11, 12, 10, 5]
//				[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14] | diff === 15

// function findTwoMissingNumbers(arr, n) {
// 	let ideal = 0
// 	let curr = 0
// 	for (let i = 0; i <= n; i++) ideal += i
// 	for (const item of arr) curr += item

// 	const diff = ideal - curr
// 	arr.sort((a, b) => a - b)

// 	for (let i = 0; i < n; i++) {
// 		if (arr[i] !== i + 1) return [i + 1, diff - (i + 1)]
// 	}
// }

// [6, 4, 2, 3]
// [_, 2, 3, 4, _, 6]
function findTwoMissingNumbers(arr, n) {
	let ideal = 0
	let curr = 0
	for (let i = 0; i <= n; i++) ideal += i
	for (const item of arr) curr += item

	const diff = ideal - curr

	const newArr = new Array(n)
	for (const item of arr) {
		newArr[item - 1] = item
	}

	for (let i = 0; i < newArr.length; i++) {
		if (!newArr[i]) return [i + 1, diff - (i + 1)]
	}
}

console.log(findTwoMissingNumbers([6, 5, 4, 3], 6))
// console.log(findTwoMissingNumbers(arr, 14))
