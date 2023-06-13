/*
Реализовать функцию, которая возвращает результаты

foo(1)(2)(3) -> 6
foo(1)(2)(3)(4) -> 10
foo(-1)(2)(3)(4)(7) -> 15
foo(1)(2)(3)...(n) вернет результатом сумму 1+2+3...+n
*/

// Версия, которая не требует в конце пустых скобок, но для получения значения нужно привести к строке, например, 
// либо использовать двойное равно (вызвав метод valueOf)
function foo1(a) {
	let acc = a

	function f(b) {
		acc += b
		return f
	}

	f.toString = function () {
		return acc
	}
	f.valueOf = function () {
		return acc
	}
	return f
}

// let a1 = foo1(1)(2)(3) // 6
// let s1 = foo1(-1)(2)(3)(4)(7) // 15
// let d1 = foo1(-1)(2)(3)(4)(7)(12)(1)(15) // 43
// console.log(a1.toString())
// console.log(s1.toString())
// console.log(d1.toString())
// console.log(a1 == 6)
// console.log(s1 == 15)
// console.log(d1 == 43)

// Версия, которая требует в конце пустые скобок и возвращает число
function foo2(a) {
	let acc = a

	function f(b) {
		if (b === undefined) return acc

		acc += b
		return f
	}
	return f
}

let a2 = foo2(1)(2)(3)() // 6
let s2 = foo2(-1)(2)(3)(4)(7)() // 15
let d2 = foo2(-1)(2)(3)(4)(7)(12)(1)(15)() // 43
console.log(a2)
console.log(s2)
console.log(d2)

