/*
Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.
*/

Number.prototype.plus = function (num) {
	return this + num
}

Number.prototype.minus = function (num) {
	return this - num
}

let num = (2).plus(3).minus(1)
console.log(num);
