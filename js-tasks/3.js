/*
Обратная польская нотация.

Дана строчка 23+1-, начинаем двигаться по ней, как только доходим до первого арифметического знака, берем две цифры перед ним и на их место, записываем результат вычисления. Получится 51-. Начинаем все с начала.
*/
function count(str) {
	if (str.length === 1) return parseInt(str)

	const num1 = parseInt(str[0])
	const num2 = parseInt(str[1])
	const operator = str[2]

	let newStr
	let nextStr = str.substring(3) 


	operator === '+' ? (newStr = `${num1 + num2}${nextStr}`) : (newStr = `${num1 - num2}${nextStr}`)
	return count(newStr)
}
console.log(count('23+1-3+2-'))
// 23+1-3+2-
// 51-3+2-
// 43+2-
// 72-
// 5