// QuickSort

let arr = [1, 43, 1, 43, -999, 1, 43, 1, 43, 45, 7, 87, 69, 23, 4, 6, 68, 0, 234, 364, 678, 52, 3, 67, 679, 24, 2]

function quickSort(arr) {
	if (arr.length <= 1) return arr

	let pivotIndex = Math.floor(arr.length / 2)
	let pivot = arr[pivotIndex]

	const less = []
	const greater = []
	const equal = []

	for (let i = 0; i < arr.length; i++) {
		if (pivot === arr[i]) equal.push(arr[i])
		if (pivot > arr[i]) less.push(arr[i])
		if (pivot < arr[i]) greater.push(arr[i])
	}

	return [].concat(quickSort(less), equal, quickSort(greater))
}

console.log(quickSort(arr))
