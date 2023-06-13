// Реализовать аналог Function.prototype.bind.

const obj = {
	name: 'Sergey',
}

function logName(prefix, postfix) {
	console.log(prefix, this.name, postfix)
	return this.name
}

Function.prototype.myBind = function (ctx, ...args) {
	return () => this.apply(ctx, args)
}
function bindd(fn, ctx, ...args) {
	return () => fn.apply(ctx, args)
}

let binded1 = logName.bind(obj, 'pre', 'post')
let binded2 = logName.myBind(obj, 'pre', 'post')
let binded3 = bindd(logName, obj, 'pre', 'post')

binded1()
binded2()
binded3()
