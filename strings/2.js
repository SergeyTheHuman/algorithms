/*
Идентичный алфавит

Необходимо написать функцию, принимающую в аргументах две строки и возвращающую true, если эти строки состоят из идентичных букв и false в противном случае.

isEqualSymbols('кот', 'ток'); // => true
isEqualSymbols('кот', 'тик'); // => false

*/

function isEqualSymbols(str1, str2) {
	if (str1.length !== str2.length) return false

	const set = new Set(str2.split(''))

	for (let i = 0; i < str1.length; i++) {
		if (!set.has(str1[i])) return false
	}

	return true
}

console.log(isEqualSymbols('кот', 'ток')) // => true
console.log(isEqualSymbols('кот', 'тик')) // => false
