class Node {
	constructor(key, val) {
		this.key = key
		this.val = val
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(key, val) {
		const newNode = new Node(key, val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}
		this.length++
		return newNode
	}

	remove(node) {
		if (!node.next && !node.prev) {
			this.head = null
			this.tail = null
		} else if (!node.next) {
			this.tail = node.prev
			this.tail.next = null
		} else if (!node.prev) {
			this.head = node.next
			this.head.prev = null
		} else {
			const prev = node.prev
			const next = node.next
			prev.next = next
			next.prev = prev
		}
		this.length--
	}
}

class LRUCache {
	constructor(capacity) {
		this.DLL = new DoublyLinkedList()
		this.map = {}
		this.capacity = capacity
	}

	get(key) {
		if (!this.map[key]) return -1
		const value = this.map[key].val
		this.DLL.remove(this.map[key])
		this.map[key] = this.DLL.push(key, value)
		return value
	}

	put(key, value) {
		if (this.map[key]) this.DLL.remove(this.map[key])
		this.map[key] = this.DLL.push(key, value)
		if (this.DLL.length > this.capacity) {
			const currKey = this.DLL.head.key
			delete this.map[currKey]
			this.DLL.remove(this.DLL.head)
		}
	}
}
const lRUCache = new LRUCache(2)
debugger
lRUCache.put(2, 1) // cache is {1=1}
lRUCache.put(2, 2) // cache is {1=1}
lRUCache.get(2) // return 1
lRUCache.put(1, 1) // return 1
lRUCache.put(4, 1) // return 1
lRUCache.get(2) // return 1

// const lRUCache = new LRUCache(2)
// lRUCache.put(1, 1) // cache is {1=1}
// lRUCache.put(2, 2) // cache is {1=1, 2=2}
// lRUCache.get(1) // return 1
// lRUCache.put(3, 3) // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2) // returns -1 (not found)
// lRUCache.put(4, 4) // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1) // return -1 (not found)
// lRUCache.get(3) // return 3
// lRUCache.get(4) // return 4
