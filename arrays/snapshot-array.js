class SnapshotArray {
	constructor() {
		this.snaps = {}
		this.currSnap = {}
		this.index = 0
	}
	set(index, val) {
		this.currSnap[index] = val
	}
	snap() {
		this.snaps[this.index] = this.currSnap
		this.currSnap = {}

		this.index++
		return this.index - 1
	}
	get(index, snap_id) {
		for (let i = snap_id; i >= 0; i--) {
			const lastSnap = this.snaps[i]
			if (!(index in lastSnap)) continue
			return lastSnap[index]
		}

		return 0
	}
}

const snapshotArr = new SnapshotArray(2)

const a1 = snapshotArr.set(0, 12)
const a2 = snapshotArr.snap()
const a3 = snapshotArr.snap()
const a4 = snapshotArr.get(1, 0)
const a5 = snapshotArr.get(0, 0)
const a6 = snapshotArr.snap()
const a7 = snapshotArr.snap()
debugger
