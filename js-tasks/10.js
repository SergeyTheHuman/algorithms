/*
Бомба

Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и некоторый «звук взрыва» (строку, которую вернет через заданное время). С фантазией задача.
*/

function Bomb(timer) {
	this.timer = setTimeout(() => console.log('BOOOM ' + timer), timer)
}

let bomb700 = new Bomb(700)
let bomb200 = new Bomb(200)
let bomb1700 = new Bomb(1700)
