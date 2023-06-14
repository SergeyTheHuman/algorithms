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
head2.addNext(new Node(2)).addNext(new Node(3)).addNext(new Node(5)).addNext(new Node(5))

const head3 = new Node(3)
head3.addNext(new Node(3)).addNext(new Node(3)).addNext(new Node(3))

const head4 = new Node(1)
head4
	.addNext(new Node(2))
	.addNext(new Node(3))
	.addNext(new Node(4))
	.addNext(new Node(5))
	.addNext(new Node(6))
	.addNext(new Node(7))

function removeElements(head, val) {
	if (!head) return null

	let curr = head
	let prev = null

	while (curr !== null) {
		if (curr.val === val && prev === null) {
			let tmp = curr.next
			curr.next = null
			curr = tmp
			head = tmp
		} else if (curr.val === val && curr.next === null) {
			prev.next = null
			curr = curr.next
		} else if (curr.val === val) {
			let tmp = curr.next
			curr.next = null
			prev.next = tmp
			curr = tmp
		} else {
			prev = curr
			curr = curr.next
		}
	}

	return head
}

// console.log(removeElements(head1, 1));
// console.log(removeElements(head2, 5));
// console.log(removeElements(head3, 3));
console.log(removeElements(head4, 4));