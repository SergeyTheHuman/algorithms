function validPalindrome(s) {
	function recursion(str, start, end, didDelete) {
		if (start >= end) return true
		if (str[start] !== str[end] && didDelete) return false
		if (str[start] !== str[end]) return recursion(str, start + 1, end, true) || recursion(str, start, end - 1, true)
		return recursion(str, start + 1, end - 1, didDelete)
	}

	return recursion(s, 0, s.length - 1, false)
}


console.log(validPalindrome('aabbcaa'))
console.log(validPalindrome('aabbccaa'))
console.log(validPalindrome('abc'))