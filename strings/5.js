var lengthOfLongestSubstring = function(s) {
	if (!s.length) return 0

	let left = 0
	let right = 0
	let result = 0
	const chars = new Set()

	while (right !== s.length) {
		// debugger
		 if (!chars.has(s[right])) {
			  chars.add(s[right])
			  right++
		 } else {
			 chars.delete(s[left])
			  left++
			  // right = left
		 }
		 result = Math.max(chars.size, result)
	}

	return result
};

console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("a"))
console.log(lengthOfLongestSubstring("dvdf"))