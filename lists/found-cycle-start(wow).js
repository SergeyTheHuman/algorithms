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

const head1 = new Node(1)
head1.addNext(new Node(2)).addNext(new Node(3)).addNext(new Node(4))

const head2 = new Node(1)
const node2 = new Node(3)
head2.addNext(new Node(2)).addNext(node2).addNext(new Node(4)).addNext(new Node(5)).addNext(node2)

const head3 = new Node(1)
head3.addNext(new Node(2)).addNext(new Node(3)).addNext(new Node(4)).addNext(head3)

const head4 = new Node(1)
const node3 = new Node(8)
head4
	.addNext(new Node(2))
	.addNext(new Node(3))
	.addNext(new Node(4))
	.addNext(new Node(5))
	.addNext(new Node(6))
	.addNext(new Node(7))
	.addNext(node3)
	.addNext(new Node(9))
	.addNext(node3)

// function getCycleStart(head) {
// 	const set = new Set()
// 	let node = head

// 	while (node !== null && !set.has(node)) {
// 		set.add(node)
// 		node = node.next
// 	}

// 	return node
// }

function getCycleStart(head) {
	if (!head) return 

	let fast = head
	let slow = head

	while (fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next

		if (fast === slow) break
	}

	if (fast === null || fast.next === null) return null

	slow = head

	while (fast !== slow) {
		fast = fast.next
		slow = slow.next
	}

	return slow
}

console.log(getCycleStart(head1))
console.log(getCycleStart(head2))
console.log(getCycleStart(head3))
console.log(getCycleStart(head4))
