// QuickSort

let arr = [1, 43, 1, 43, -999, 1, 43, 1, 43, 45, 7, 87, 69, 23, 4, 6, 68, 0, 234, 364, 678, 52, 3, 67, 679, 24, 2]

function quickSort(arr) {
	if (arr.length < 2) return arr

	const pivotIndex = Math.floor(arr.length /2) 
	const pivot = arr[pivotIndex]

	const less = []
	const greater = []
	const equal = []

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === pivot) equal.push(arr[i])
		if (arr[i] > pivot) greater.push(arr[i])
		if (arr[i] < pivot) less.push(arr[i])
	}

	return [...quickSort(less), ...equal, ...quickSort(greater)]
}

console.log(quickSort(arr))
