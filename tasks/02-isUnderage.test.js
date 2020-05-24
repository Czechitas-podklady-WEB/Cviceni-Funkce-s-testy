describe('02 Underage', () => {
	describe('Return type', () => {
		it('isUnderage(10) should return boolean', () => {
			chai.assert.equal(typeof isUnderage(10), 'boolean')
		})
		it('isUnderage(20) should return boolean', () => {
			chai.assert.equal(typeof isUnderage(20), 'boolean')
		})
	})
	describe('isUnderage(age < 18)', () => {
		it('isUnderage(10) should return true', () => {
			chai.assert.isTrue(isUnderage(10))
		})
		it('isUnderage(17) should return true', () => {
			chai.assert.isTrue(isUnderage(17))
		})
	})
	describe('isUnderage(age >= 18)', () => {
		it('isUnderage(54) should return false', () => {
			chai.assert.isFalse(isUnderage(54))
		})
		it('isUnderage(30) should return false', () => {
			chai.assert.isFalse(isUnderage(30))
		})
		it('isUnderage(18) should return false', () => {
			chai.assert.isFalse(isUnderage(18))
		})
	})
})
