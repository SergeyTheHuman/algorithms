const arr = [-19, -15, -6, -6, -4, -2, 0, 1, 2, 4, 5, 8, 9, 12]
// const arr = [-14,0, 1, 2, 4, 5, 8, 9, 12]
// const arr = [-14, -10, -8, -3, -1]
// const arr = [-14]

function getSquares(arr) {
	const res = []

	let absMin = Infinity
	let absMinIndex

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] ** 2 < absMin) {
			absMin = res[0] = arr[i] ** 2
			absMinIndex = i
		}
	}

	let left = absMinIndex - 1
	let right = absMinIndex + 1

	while (true) {
		if (left === -1 && right === arr.length) break
		if (arr[left] ** 2 < arr[right] ** 2) {
			res.push(arr[left] ** 2)
			left--
		}
		if (arr[left] ** 2 >= arr[right] ** 2) {
			res.push(arr[right] ** 2)
			right++
		}
		if (left === -1 && right !== arr.length) {
			res.push(arr[right] ** 2)
			right++
		}
		if (right === arr.length && left !== -1) {
			res.push(arr[left] ** 2)
			left--
		}
	}

	return res
}

function getSquaresByMerge(arr) {
	if (arr[0] >= 0) return arr.map((i) => i ** 2)
	if (arr[arr.length - 1] < 0) return arr.map((i) => i ** 2).reverse()

	const res = []
	let absMinIndex = 0

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			absMinIndex = i
			break
		}
	}

	const left = arr.slice(0, absMinIndex).map((i) => i ** 2)

	const right = arr
		.slice(absMinIndex)
		.map((i) => i ** 2)
		.reverse()

	while (left.length || right.length) {
		if (!left.length) {
			res.push(right.pop())
			continue
		}
		if (!right.length) {
			res.push(left.pop())
			continue
		}
		if (left[left.length - 1] >= right[right.length - 1]) {
			res.push(right.pop())
		} else {
			res.push(left.pop())
		}
	}

	return res
}

function getSquaresByTwoPointers(arr) {
	if (arr[0] >= 0) return arr.map((i) => i ** 2)
	if (arr[arr.length - 1] < 0) return arr.map((i) => i ** 2).reverse()

	const res = []
	let left = 0
	let right = arr.length - 1

	while (true) {
		if (arr[left] ** 2 >= arr[right] ** 2) {
			res.push(arr[left] ** 2)
			left++
		} else {
			res.push(arr[right] ** 2)
			right--
		}
		if (arr[left] >= 0 || arr[right] < 0) {
			res.push(...arr.slice(left, right + 1).map(i => i**2).reverse())
			break
		}
	}

	return res.reverse()
}

console.log(arr)
console.log(getSquares(arr))
console.log(getSquaresByMerge(arr))
console.log(getSquaresByTwoPointers(arr))
