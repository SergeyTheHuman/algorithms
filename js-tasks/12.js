/*
for (var i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i)
	}, 100)
}
 в консоль выведутся только 10. Как исправить?
*/

// вариант 1
// for (var i = 0; i < 10; i++) {
// 	;(function (i) {
// 		setTimeout(function () {
// 			console.log(i)
// 		}, 100)
// 	})(i)
// }
// Замкнуть переменную i в самовызывающейся функции

// вариант 2
// for (let i = 0; i < 10; i++) {
// 	setTimeout(function () {
// 		console.log(i)
// 	}, 100)
// }
// Заменить var на let

// вариант 3
for (var i = 0; i < 10; i++) {
	setTimeout(function (i) {
		console.log(i)
	}, 100, i)
}
// В SetTimeout и SetInterval можно передать 3-им агрументом параметры для коллбека 
