// Реализовать аналог Promise.allSettled

const mypromise1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 900)
})
const mypromise2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(2), 1300)
})
const mypromise3 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(3), 800)
})
const mypromise4 = new Promise((resolve, reject) => {
	setTimeout(() => reject('Error'), 500)
})

function promiseAllSettled(promises) {
	let counter = 0
	const result = Array(promises.length)

	return new Promise((resolve, reject) => {
		promises.forEach((promise, i) => {
			promise.then((value) => {
				counter++
				result[i] = value

				if (counter === promises.length) resolve(result)
			}).catch(error => {
				counter++
				result[i] = error

				if (counter === promises.length) resolve(result)
			})
		})
	})
}
const all = promiseAllSettled([mypromise1, mypromise2, mypromise3, mypromise4]).then(console.log).catch(console.log)
