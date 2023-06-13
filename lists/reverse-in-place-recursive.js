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

function reverseList(head) {
	if (!head || !head.next) return head

	let reversedList = reverseList(head.next)
	head.next.next = head
	head.next = null

	return reversedList
}

const root1 = new Node(1)
root1.addNext(new Node(2)).addNext(new Node(3))

console.log(reverseList(root1));