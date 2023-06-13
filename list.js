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
root1
	.addNext(new Node(2))
	.addNext(new Node(3))
	.addNext(new Node(4))

const root2 = new Node(1)
const node2 = new Node(3)
root2
	.addNext(new Node(2))
	.addNext(node2)
	.addNext(new Node(4))
	.addNext(new Node(5))
	.addNext(node2)

const root3 = new Node(1)
root3
	.addNext(new Node(2))
	.addNext(new Node(3))
	.addNext(new Node(4))
	.addNext(root3)