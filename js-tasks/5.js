// Написать полифилл для Promise.

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('first resolve after 500')
// 		resolve('value')
// 	}, 500)
// })
// 	.then((value) => value)
// 	.then((value) => {
// 		setTimeout(() => {
// 			console.log(value)
// 		}, 300)
// 	})

// 'first resolve after 500' через 500ms
// 'value' через 300ms

function sleep(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, ms)
	})
}

class MyPromise {
	#thenCbs = []
	#status = 'pending'
	#value = null
	#error = null

	constructor(fn) {
		try {
			fn(this.#resolve, this.#reject)
		} catch (error) {
			this.#reject(error)
		}
	}

	#resolve = (value) => {
		if (typeof value === 'object' && 'then' in value && typeof value.then === 'function') {
			value.then(this.#resolve, this.#reject)
		} else {
			this.#status = 'fulfilled'
			this.#value = value

			this.#processNextTask()
		}
	}

	#reject = (error) => {
		this.#status = 'rejected'
		this.#error = error

		this.#processNextTask()
	}

	#processNextTask = () => {
		queueMicrotask(() => {
			if (this.#status === 'pending') {
				return
			}
			const thenCbs = this.#thenCbs
			this.#thenCbs = []

			thenCbs.forEach(([thenCb, catchCb, resolve, reject]) => {
				try {
					if (this.#status === 'fulfilled') {
						const value = thenCb ? thenCb(this.#value) : this.#value

						resolve(value)
					} else {
						catchCb ? resolve(catchCb(this.#error)) : reject(this.#error)
					}
				} catch (error) {
					reject(error)
				}
			})
		})
	}

	then = (thenCb, catchCb) => {
		const myPromise = new MyPromise((resolve, reject) => {
			this.#thenCbs.push([thenCb, catchCb, resolve, reject])
		})

		this.#processNextTask()

		return myPromise
	}
	
	catch = (catchCb) => {
		const myPromise = new MyPromise((resolve, reject) => {
			this.#thenCbs.push([undefined, catchCb, resolve, reject])
		})

		this.#processNextTask()

		return myPromise
	}

	static all(promises) {
		const result = Array(promises.length)
		let counter = 0

		return new MyPromise((resolve, reject) => {
			promises.forEach((p, index) => {
				MyPromise.resolve(p)
					.then((value) => {
						counter++
						result[index] = value

						if (counter === promises.length) resolve(result)
					})
					.catch((error) => {
						reject(error)
					})
			})
		})
	}

	static allSettled(promises) {
		const result = Array(promises.length)
		let counter = 0

		return new MyPromise((resolve, reject) => {
			promises.forEach((p, index) => {
				MyPromise.resolve(p)
					.then((value) => {
						counter++
						result[index] = value
						if (counter === promises.length) resolve(result)
					})
					.catch((error) => {
						counter++
						result[index] = error
						if (counter === promises.length) resolve(result)
					})
			})
		})
	}

	static race(promises) {
		return new MyPromise((resolve, reject) => {
			promises.forEach((p, index) => {
				MyPromise.resolve(p).then(resolve).catch(reject)
			})
		})
	}

	static resolve(value) {
		return new MyPromise((resolve, reject) => resolve(value))
	}

	static reject(error) {
		return new MyPromise((resolve, reject) => reject(error))
	}
}

const mypromise1 = new MyPromise((resolve, reject) => {
	setTimeout(() => resolve(1), 900)
})
const mypromise2 = new MyPromise((resolve, reject) => {
	setTimeout(() => resolve(2), 1300)
})
const mypromise3 = new MyPromise((resolve, reject) => {
	setTimeout(() => resolve(3), 800)
})
const mypromise4 = new MyPromise((resolve, reject) => {
	setTimeout(() => reject('Error'), 500)
})

// const all = MyPromise.all([mypromise1, mypromise2, mypromise3]).then(console.log).catch(console.log)
// const allSettled = MyPromise.allSettled([mypromise1, mypromise2, mypromise3, mypromise4]).then(console.log).catch(console.log)
// const race = MyPromise.race([mypromise1, mypromise2, mypromise3, mypromise4]).then(console.log).catch(console.log)

// const all = MyPromise.all([mypromise1, mypromise2, mypromise3]).then(console.log, console.log)
// const allSettled = MyPromise.allSettled([mypromise1, mypromise2, mypromise3, mypromise4]).then(console.log, console.log)
// const race = MyPromise.race([mypromise1, mypromise2, mypromise3, mypromise4]).then(console.log, console.log)

// const mypromise = new MyPromise((resolve) => {
// 	resolve(5)
// })
// 	.then((value) => {
// 		console.log(value)

// 		throw new Error('Error!')
// 	})
// 	.then(() => {
// 		console.log('asd')
// 	})
// 	.then(() => {
// 		console.log('dsa')
// 	})
// 	.catch((error) => {
// 		console.error('ERROOOOOR', error)
// 	})
// 	.then(() => {
// 		return new MyPromise((resolve, reject) => {
// 			resolve(6)
// 		})
// 	})
// 	.then(console.log)

// const mypromise = new MyPromise((resolve) => {
// 	resolve(5)
// })

// mypromise.then(console.log)

// setTimeout(() => {
// 	mypromise.then(console.log)
// }, 500)

// const mypromise = new MyPromise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('resolving after 500 ms')
// 		resolve('value')
// 	}, 500)
// }).then(
// 	(value) => console.log('then >>> ', value),
// 	(error) => console.log('error >>> ', error)
// )

// const mypromise = new MyPromise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('resolving after 500 ms');
// 		resolve('value')
// 	}, 500)
// })
// 	.then((value) => {
// 		console.log('then >>> ', value)
// 		return sleep(1500)
// 	})
// 	.then(() => console.log('then after sleep'))
// 	.catch((error) => console.log('catch >>> ', error))

// const mypromise = new MyPromise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('value')
// 	}, 500)
// })

// const mypromise2 = mypromise
// 	.then((value) => {
// 		console.log('then >>> ', value)
// 		return value
// 	})
// 	.then((value) => console.log('then 2 >>> ', value))
// 	.catch((error) => console.log('catch >>> ', error))

// const mypromise = new MyPromise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('first resolve after 500')
// 		resolve('value')
// 	}, 500)
// })
// 	.then((value) => value)
// 	.then((value) => {
// 		setTimeout(() => {
// 			console.log(value)
// 		}, 300)
// 	})

// const promise = new MyPromise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('first resolve after 500')
// 		resolve('value')
// 	}, 500)
// })
// 	.then((value) => value)
// 	.then((value) => {
// 		setTimeout(() => {
// 			console.log(value)
// 		}, 300)
// 	})
