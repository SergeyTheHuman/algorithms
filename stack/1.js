/*
Есть строка, состоящая из разных скобок, проверить закрыты ли все.  
Пример строки: "())({}}{()][]["
*/

function isValid(str) {
	const map = {
		'(': ')',
		'[': ']',
		'{': '}',
	}
	const stack = []

	for (let i = 0; i < str.length; i++) {
		const bracket = str[i]
		if (bracket in map) {
			stack.push(bracket)
		} else {
			const top = stack.pop()
			if (map[top] !== bracket) return false
		}
	}

	return stack.length === 0
}

const str1 = '([{}])()'
const str2 = '[(])'
const str3 = '())({}}{()][]['
const str4 = '(((({{{{[[[[]]]]}}}}))))'
const str5 = '('
console.log(isValid(str1))
console.log(isValid(str2))
console.log(isValid(str3))
console.log(isValid(str4))
console.log(isValid(str5))
