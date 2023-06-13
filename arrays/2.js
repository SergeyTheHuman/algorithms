/* 
Преобразование массива в объект с группировкой и фильтрацией элементов

Напишите функцию, которая на вход принимает массив из студентов, где студент — это объект с полями «имя», «возраст» и «номер группы» {name: string, age: number, groupId: number}, а на выходе возвращает объект, где ключ — это номер группы, а значение — массив из студентов старше 17 лет.
*/

const students = [
	{ name: 'Andrey1', age: 18, groupId: 1 },
	{ name: 'Andrey2', age: 15, groupId: 2 },
	{ name: 'Andrey3', age: 19, groupId: 2 },
	{ name: 'Andrey4', age: 22, groupId: 3 },
	{ name: 'Andrey5', age: 16, groupId: 1 },
	{ name: 'Andrey6', age: 18, groupId: 3 },
	{ name: 'Andrey7', age: 19, groupId: 2 },
	{ name: 'Andrey8', age: 20, groupId: 1 },
	{ name: 'Andrey9', age: 17, groupId: 2 },
	{ name: 'Andrey10', age: 19, groupId: 4 },
	{ name: 'Andrey11', age: 16, groupId: 2 },
	{ name: 'Andrey12', age: 26, groupId: 4 },
	{ name: 'Andrey13', age: 17, groupId: 1 },
	{ name: 'Andrey14', age: 19, groupId: 3 },
]

// time O(n) || space O(n)
function splitByGroupsAndAge(students) {
	return students.reduce((acc, student) => {
		if (student.age < 18) return acc

		if (!acc[student.groupId]) acc[student.groupId] = []

		acc[student.groupId].push(student)
		return acc
	}, {})
}

console.log(splitByGroupsAndAge(students))
