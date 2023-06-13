/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (str, target) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === target[0] && checkIsValid(i)) return i
	}

	function checkIsValid(index) {
		for (let i = 0, j = index; i < target.length; i++, j++) {
			if (str[j] !== target[i]) return false
		}
		return true
	}

	return -1
}

console.log(strStr('mississippi', 'issip'))
