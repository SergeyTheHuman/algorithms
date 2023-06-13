/* 
Сортировка нечётных.

Необходимо написать функцию, принимающую в аргументах массив и возвращающую новый массив, в котором отсортированы все нечетные числа по возрастанию, в то время как чётные остаются на своих местах.

Например:

oddSort([7, 3, 4, 9, 5, 2, 17]); // => [3, 5, 4, 7, 9, 2, 17]
*/

function oddSort(arr) {
	const evens = []
	const result = arr
		.filter((item, i) => {
			if (item % 2 !== 0) {
				return true
			} else {
				evens.push([item, i])
				return false
			}
		})
		.sort((a, b) => a - b)

	evens.forEach((even) => result.splice(even[1], 0, even[0]))

	return result
}

const arr = [7, 3, 4, 9, 5, 2, 17, 6, 8, 1, 11]
console.log(oddSort(arr)) // =>  [1, 3, 4, 5, 7, 2, 9, 6, 8, 11, 17]
