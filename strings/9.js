/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
	let result = ''
	let counter = k

	function reverse(str, index) {
		let tmp = ''
		let counter = 0
		for (let i = index + k - 1; counter < k; i--) {
			counter++
			if (!str[i]) continue
			tmp += str[i]			
		}
		return tmp
	}

	for (let i = 0; i < s.length; i++) {
		debugger
		if (counter === k) {
			result += reverse(s, i)
			i += counter - 1
			counter = 0
		} else {
			result += s[i]
			counter++
		}
	}

	return result
}

console.log(reverseStr('a', 2))
console.log(reverseStr('abcdefg', 2))
console.log(reverseStr('abcd', 2))
