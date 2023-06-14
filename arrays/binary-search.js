const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// function binarySearch(arr, target) {
// 	let left = 0
// 	let right = arr.length - 1

// 	while (left <= right) {
// 		const middle = Math.floor((left + right) / 2)

// 		if (arr[middle] === target) return middle
// 		if (arr[middle] > target) right = middle - 1
// 		if (arr[middle] < target) left = middle + 1
// 	}

// 	return -1
// }
function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
	const middle = Math.floor((start + end) / 2)

	if (arr[middle] === target) return middle
	if (start === end) return -1
	if (arr[middle] > target) return binarySearchRecursive(arr, target, start, middle - 1)
	if (arr[middle] < target) return binarySearchRecursive(arr, target, middle + 1, end)
}


console.log(`index of target ${123} is >>> `, binarySearch(arr, 123))
console.log(`index of target ${11} is >>> `, binarySearch(arr, 11))
console.log(`index of target ${1} is >>> `, binarySearch(arr, 1))

console.log(`recursive index of target ${123} is >>> `, binarySearchRecursive(arr, 123))
console.log(`recursive index of target ${11} is >>> `, binarySearchRecursive(arr, 11))
console.log(`recursive index of target ${1} is >>> `, binarySearchRecursive(arr, 1))
