/*
«Сжатие строк»

Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку, в которой повторяющиеся буквы заменены количеством повторений.

Например:

duplicatesToQty('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3
*/

function duplicatesToQty(str) {
	let res = ''
	let count = 0
	let prevChar = str[0]

	for (let i = 0; i <= str.length; i++) {
		if (str[i] !== prevChar) {
			res += `${prevChar}${count > 1 ? count : ''}`
			count = 0
			prevChar = str[i]
		}
		count++
	}

	return res
}

console.log(duplicatesToQty('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD')) // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3'
console.log(duplicatesToQty('aaffAAAAAAAAAAAAAAAAAAAA')) // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3'