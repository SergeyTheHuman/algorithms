/* 
Сумма двух чисел

Напишите функцию, которая принимает два аргумента: массив из уникальных целых чисел и сумму в виде целого числа. 
Если сумма двух любых чисел массива из аргумента равна числу, которое приходит вторым аргументом, функция должна вернуть новый массив из этих двух чисел в любом порядке. Если решения нет, вернуть пустой массив. Текущее число само с собой складывать нельзя.

Пример: 
array = [3, 5, -4, 8, 11, 1, -1, 6, 99] 
target = 10

Результат: [11, -1]
*/

// time O(n log n) || space O(1)
function sum1(arr, target) {
	arr.sort((a, b) => a - b)

	let min = 0
	let max = arr.length - 1

	while (min < max) {
		const sum = arr[min] + arr[max]
		if (sum === target) return [arr[min], arr[max]]

		if (sum < target) min++
		if (sum > target) max--
	}

	return []
}

// time O(n) || space O(n)
function sum2(arr, target) {
	const remainders = {}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] in remainders) return [arr[i], remainders[arr[i]]]

		const remainder = target - arr[i]
		remainders[remainder] = arr[i]
	}

	return []
}

const array = [3, 5, -4, 8, 11, 1, -1, 6, 99]
const targetSum = 105
console.log(sum1(array, targetSum))
console.log(sum2(array, targetSum))
