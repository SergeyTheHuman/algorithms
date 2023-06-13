/* 
Уникализация значений в массиве

unique([1, 1, 2, 2, 4, 2, 3, 7, 3]); // => [1, 2, 4, 3, 7]
*/

function uniqueSet(arr) {
	return Array.from(new Set(arr))
}
function unique(arr) {
	const result = []

	for (const num of arr) {
		if (result.includes(num)) continue
		result.push(num)
	}

	return result
}
function uniqueSetCycle(arr) {
	const set = new Set()
	const result = []

	for (const num of arr) {
		if (set.has(num)) continue
		result.push(num)
		set.add(num)
	}

	return result
}
function uniqueObj(arr) {
	const res = {}

	arr.forEach(item => res[item] = '')

	return Object.keys(res).map(item => +item)
}

const arr = [1, 1, 2, 2, 4, 2, 3, 7, 3]

console.log(uniqueSet(arr));
console.log(unique(arr));
console.log(uniqueSetCycle(arr));
console.log(uniqueObj(arr));