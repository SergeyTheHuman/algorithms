const arr = [1, 1, 1, 1, 2, 3, 3, 4, 5, 5, 6, 6, 4, 7, 7, 8, 8]

function onlyUnique(arr) {
	const result = []

	const map = {}

	for (const item of arr) {
		map[item] === undefined ? (map[item] = 1) : (map[item] = map[item] + 1)
	}

	for (const key in map) {
		if (map[key] === 1) result.push(key)
	}

	return result
}

console.log(onlyUnique(arr))
