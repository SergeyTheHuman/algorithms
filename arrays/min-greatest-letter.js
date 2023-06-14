function nextGreatestLetter(lts, target) {
	let left = 0
	let right = lts.length - 1
	const targetCode = target.charCodeAt()

	let less = false
	while (left < right) {
		debugger
		const middle = Math.floor((left + right) / 2)

		if (lts[middle].charCodeAt() > targetCode) {
			right = middle - 1
		}
		if (lts[middle].charCodeAt() < targetCode) {
			left = middle + 1
		}
	}

	return lts[left + 1]
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'))
