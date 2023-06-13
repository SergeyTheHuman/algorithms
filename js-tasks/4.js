/*
Напишите код, который сделает из массива объект
на входе массив
const arr = [
 {name: 'width', value: 10}, 
 {name: 'height', value: 20}
]

на выходе объект
{width: 10, height: 20}
*/

function toObject(arr) {
	// just reduce
	return arr.reduce((acc, item) => {
		acc[item.name] = item.value
		return acc
	}, {})

	// one liner
	return arr.reduce((acc, item) => Object.assign(acc, { [item.name]: item.value }), {})
}

const arr = [
	{ name: 'width', value: 10 },
	{ name: 'height', value: 20 },
	{ name: 'size', value: 'm' },
	{ name: 'color', value: 'red' },
]
console.log(toObject(arr))
