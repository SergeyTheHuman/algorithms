

function asd(head) {
	if (!head) return null

	const newHead = new Node(head.val)
	const map = new Map()
	const q = [head]

	map.set(head.val, newHead)

	while (q.length) {
		const node = q.shift()

		if (node === null) return newHead

		const clonedNode = map.get(node.val)

		if (node.next /* && map.get(node.next.val)*/) {
			// clonedNode.next = map.get(node.next.val)
			clonedNode.next = new Node(node.next?.val | null)
		}

		if (map.get(node.random?.val)) {
			clonedNode.next = map.get(node.random.val)
		} else {
			clonedNode.random = new Node(node.random?.val | null)
		}

		if (node.next) map.set(node.next.val, clonedNode.next)

		q.push(node.next)
	}

	return newHead
}
