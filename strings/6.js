function longestNiceSubstring(s) {
	const set = new Set()
	for(let char of s) set.add(char)

	for (let i = 0; i < s.length; i++) {
		if (s.length === 1) return ''
		
		if (!set.has(s[i].toUpperCase()) || !set.has(s[i].toLowerCase())) {
			let left = longestNiceSubstring(s.substring(0, i)) 
			let right = longestNiceSubstring(s.substring(i + 1)) 
			return left.length >= right.length ? left : right
		}
	}

	return s
};
console.log(longestNiceSubstring('YazaAay'));