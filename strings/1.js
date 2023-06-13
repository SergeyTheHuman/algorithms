/* 
Проверка строки на палиндром

Напишите функцию, которая на вход принимает строку, состоящую из букв разного регистра, а на выход возвращает boolean, который отвечает, является ли данная строка палиндромом или нет.
Строка может содержать пробелы, знаки препинания и цифры. Они не учитываются.

Пример: А роза упала на лапу Азора! -> true
*/

function isNotLetter(char) {
	return char.toUpperCase() === char.toLowerCase()
}

// time O(n) || space O(1)
function isPalindrom(str) {
	let left = 0
	let right = str.length - 1

	while (left < right) {
		if (isNotLetter(str[left])) {
			left++
			continue
		}
		if (isNotLetter(str[right])) {
			right--
			continue
		}

		if (str[left].toLowerCase() === str[right].toLowerCase()) {
			left++
			right--
		} else {
			return false
		}
	}

	return true
}

const str = 'А роза упала на лапу Азора!'
console.log(isPalindrom(str))