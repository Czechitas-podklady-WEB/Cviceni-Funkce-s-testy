describe('05 Even only', () => {
	describe('Return type', () => {
		it('evenOnly([1, 2, 3]) should return array', () => {
			chai.assert.isArray(evenOnly([1, 2, 3]))
		})
		it('evenOnly([8, 20, 36, 90]) should return array', () => {
			chai.assert.isArray(evenOnly([8, 20, 36, 90]))
		})
	})
	describe('Basic', () => {
		it('evenOnly([1, 2, 3]) should return [2]', () => {
			chai.assert.deepEqual(evenOnly([1, 2, 3]), [2])
		})
		it('evenOnly([1, 2, 3, 4, 5, 6, 7, 8]) should return [2, 4, 6, 8]', () => {
			chai.assert.deepEqual(evenOnly([1, 2, 3, 4, 5, 6, 7, 8]), [2, 4, 6, 8])
		})
		it('evenOnly([15, 30, 420, 531]) should return [30, 420]', () => {
			chai.assert.deepEqual(evenOnly([15, 30, 420, 531]), [30, 420])
		})
	})
	describe('Advanced', () => {
		it('evenOnly([]) should return array', () => {
			chai.assert.isArray(evenOnly([]))
		})
		it('evenOnly([0]) should return [0]', () => {
			chai.assert.deepEqual(evenOnly([0]), [0])
		})
		it('evenOnly([0, 1, -2, 3, 8, -8, 15]) should return [0, -2, 8, -8]', () => {
			chai.assert.deepEqual(evenOnly([0, 1, -2, 3, 8, -8, 15]), [0, -2, 8, -8])
		})
		it('evenOnly([1, 2, "three", "four", 5, 6]) should return [2, 6]', () => {
			chai.assert.deepEqual(evenOnly([1, 2, 'three', 'four', 5, 6]), [2, 6])
		})
	})
})
