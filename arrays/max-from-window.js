const arr = [1, 3, -1, -3, 5, 8, 6, 7]
// 3, 3, 5, 8, 8, 8 ||| k = 3

/* 
            window                  q before         q after        res after
1) [1]  3  -1 -3  5  8  6  7   |||  []         |||   [0]       |||  []
2) [1  3]  -1 -3  5  8  6  7   |||  [0]        |||   [1]       |||  []
3) [1  3  -1] -3  5  8  6  7   |||  [1]        |||   [1,2]     |||  [3]
3) 1  [3  -1 -3]  5  8  6  7   |||  [1,2]      |||   [1,2,3]   |||  [3,3]
4) 1  3  [-1 -3  5]  8  6  7   |||  [1,2,3]    |||   [4]       |||  [3,3,5]
5) 1  3  -1 [-3  5  8]  6  7   |||  [4]        |||   [5]       |||  [3,3,5,8]
5) 1  3  -1 -3  [5  8  6]  7   |||  [5]        |||   [5,6]     |||  [3,3,5,8,8]
5) 1  3  -1 -3  5  [8  6  7]   |||  [5,6]      |||   [5,7]     |||  [3,3,5,8,8,8]
*/

// function getMaxWindows(arr, k) {
// 	let res = []

// 	left = 0
// 	while (left + k <= arr.length) {
// 		res.push(Math.max(...arr.slice(left, left + k)))
// 		left++
// 	}

// 	return res
// }

// function getMaxWindowsUsingQueue(arr, k) {
// 	let res = []
// 	let q = []

// 	let left = 0
// 	let right = 0

// 	while (right < arr.length) {
// 		while (q && arr[q[q.length - 1]] < arr[right]) q.pop()
// 		q.push(right)

// 		if (left > q[0]) q.shift()

// 		if (right + 1 >= k) {
// 			res.push(arr[q[0]])
// 			left++
// 		}
// 		right++
// 	}

// 	return res
// }

// 6 2 3 7 0 1
function getMaxWindowsUsingDeque(arr, k) {
	let res = []
	let deq = []

	let left = 0
	let right = 0

	while (right < arr.length) {
		while (deq && arr[deq.at(-1)] < arr[right]) deq.pop()
		deq.push(right)

		if (left > deq[0]) deq.shift()

		if (right + 1 >= k) {
			res.push(arr[deq[0]])
			left++
		}
		right++
	}

	return res
}

// console.log(getMaxWindows(arr, 3))
// console.log(getMaxWindowsUsingQueue(arr, 3))
// console.log([3, 3, 5, 8, 8, 8])
console.log(getMaxWindowsUsingDeque([6, 2, 3, 7, 0, 1, 0], 3))
// console.log([6, 7, 7, 7, 1])
