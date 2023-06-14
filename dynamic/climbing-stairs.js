function climbStairs(n) {
	const cache = new Map()

	function count(n) {
		if (cache.get(n)) return cache.get(n)
		if (n <= 0) return 0
		if (n === 1) return 1
		if (n === 2) return 2
		if (n === 3) return 4
		let result = count(n - 1) + count(n - 2) + count(n - 3)
		cache.set(n, result)
		return result
	}

	return count(n)
}

console.log(climbStairs(4))
