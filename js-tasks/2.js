/*
Реализовать методы seven, plus, one, five, minus, two. 
seven(plus(one())) -> 8. five(minus(two())) -> 3
*/

function plus(operand) {
	if (!operand) throw new Error('Нельзя вызвать оператор без операнда')

	return {
		type: 'add',
		operand,
	}
}

function minus(operand) {
	if (!operand) throw new Error('Нельзя вызвать оператор без операнда')

	return {
		type: 'minus',
		operand,
	}
}

function seven(operator) {
	if (operator === undefined) return 7

	return operator.type === 'add' ? 7 + operator.operand : 7 - operator.operand
}

function one(operator) {
	if (operator === undefined) return 1

	return operator.type === 'add' ? 1 + operator.operand : 1 - operator.operand
}

function five(operator) {
	if (operator === undefined) return 5

	return operator.type === 'add' ? 5 + operator.operand : 5 - operator.operand
}

function two(operator) {
	if (operator === undefined) return 2

	return operator.type === 'add' ? 2 + operator.operand : 2 - operator.operand
}
let a = five(minus(two())) // 3
let b = seven(plus(one())) + two(plus(five(plus(seven(plus(two())))))) // 8 + 16 = 24
console.log(a, b)
