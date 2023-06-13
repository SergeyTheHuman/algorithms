/*
function Book(name, author) {
    this.name = name;
    this.author = author;
    return this;
}

function Foo(Book, 'Учебник javascript', 'Петр Сергеев') {}

Реализовать Foo
*/

function Book(name, author) {
	this.name = name;
	this.author = author;
	return this;
}

function Foo(className, arg1, arg2) {
	debugger
	return new className(arg1, arg2)
}
let book = new Foo(Book, 'Учебник javascript', 'Петр Сергеев')
console.log(book);