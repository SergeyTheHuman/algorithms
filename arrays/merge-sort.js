let arr = [1, 43, 1, 43, -999, 1, 43, 1, 43, 45, 7, 87, 69, 23, 4, 6, 68, 0, 234, 364, 678, 52, 3, 67, 679, 24, 2]

function mergeSort(arr) {
	if (arr.length < 2) return arr

	const middle = Math.floor(arr.length / 2)
	const left = mergeSort(arr.slice(0, middle))
	const right = mergeSort(arr.slice(middle))

	return merge(left, right)
}

function merge(left, right) {
	const res = []

	while (left.length && right.length) {
		left[0] > right[0] ? res.push(right.shift()) : res.push(left.shift())
	}

	return res.concat(left, right)
}

console.log(mergeSort(arr))
