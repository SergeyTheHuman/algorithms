function countGoodSubstrings(s) {
	let result = 0
	let left = 0
	let right = 3

	const map = {}
	for (let i = 0; i < 3; i++) {
		!map[s[i]] ? (map[s[i]] = 1) : (map[s[i]] = map[s[i]] + 1)
	}
	if (Object.keys(map).length === 3) result++

	while (right < s.length) {
		map[s[left]] === 1 ? delete map[s[left]] : map[s[left]]--
		!map[s[right]] ? (map[s[right]] = 1) : map[s[right]]++
		left++
		if (Object.keys(map).length === 3) result++
		right++
	}

	return result
}
// function countGoodSubstrings(s) {
// 	let result = 0
// 	let left = 0
// 	let right = 3

// 	while (right < s.length) {
// 		if (isGood(s.substring(left, right))) result++
// 		left++
// 		right++
// 	}

// 	function isGood(s) {
// 		return new Set(s.split('')).size === s.length
// 	}

// 	return result
// }

console.log(countGoodSubstrings('aababcabc'))
console.log(countGoodSubstrings('xyzzaz'))
