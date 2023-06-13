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

var reverseBetween = function (head, left, right) {
	if (!head) return null
	if (!head.next) return head
	if (left === right) return head

	let curr = head
	let prev = null

	let toConnectStart = null

	function reverse(startNode, end) {
		let prev = null
		let curr = startNode
		let counter = 1
		let endNode

		while (counter < end) {
			if (counter === end - 1) endNode = curr.next
			let tmp = curr.next
			curr.next = prev
			prev = curr
			curr = tmp
			counter++
		}

		startNode.next = endNode

		return [startNode, prev]
	}

	let end, start

	for (let i = 1; ; i++) {
		if (i === left) {
			;[end, start] = reverse(curr, right)
			toConnectStart = prev
		}
		if (i === right + 1) {
			if (toConnectStart) toConnectStart.next = start
			if (left === 1) return prev
			break
		}
		if (i < left && i <= right) {
		} else {
			prev = curr
			curr = curr.next
		}
	}

	return head
}

const root1 = new Node(1)
root1.addNext(new Node(2)).addNext(new Node(3)).addNext(new Node(4)).addNext(new Node(5))
const root2 = new Node(1)
root2.addNext(new Node(2)).addNext(new Node(3))

console.log(reverseBetween(root1, 2, 4))
