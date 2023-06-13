class Node {
	val = null
	next = null

	constructor(val, next = null) {
		this.val = val
		this.next = next
	}

	addNext(next) {
		this.next = next
		return next
	}
}

const root1 = new Node(1)
root1.addNext(new Node(2)).addNext(new Node(3)).addNext(new Node(4)).addNext(new Node(5))

function reverseList(head) {
	let prev = null
	let curr = head

	while (curr !== null) {
		let tmp = curr.next
		curr.next = prev
		prev = curr
		curr = tmp
	}
	
	return prev
}

console.log(reverseList(root1))