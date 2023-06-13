var containsNearbyDuplicate = function (nums, k) {
	let left = 0
	let right = 1
	const set = new Set()
	set.add(nums[left])

	while (right <= nums.length) {
		if (set.has(nums[right]) && right - left <= k) return true
		if (!set.has(nums[right])) {
			set.add(nums[right])
			right++
		}
		if (right - left > k) {
			set.delete(nums[left])
			left++
		}
	}

	return false
}

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
console.log(containsNearbyDuplicate([99, 99], 2))
