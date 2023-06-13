// Реализовать аналог Promise.race

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
	setTimeout(() => reject('Error'), 1500)
})

function promiseRace(promises) {
	return new Promise((resolve, reject) => {
		promises.forEach((promise) => promise.then(resolve).catch(reject))
	})
}
const all = promiseRace([mypromise1, mypromise2, mypromise3, mypromise4]).then(console.log).catch(console.log)
