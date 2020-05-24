describe('Teenager', () => {
	describe('Return type', () => {
		it('isTeenager(15) should return boolean', () => {
			chai.assert.equal(typeof isTeenager(15), 'boolean')
		})
		it('isTeenager(20) should return boolean', () => {
			chai.assert.equal(typeof isTeenager(20), 'boolean')
		})
	})
	describe('isTeenager(age <= 12)', () => {
		it('isTeenager(5) should return false', () => {
			chai.assert.isFalse(isTeenager(5))
		})
		it('isTeenager(12) should return false', () => {
			chai.assert.isFalse(isTeenager(12))
		})
	})
	describe('isTeenager(age >= 20)', () => {
		it('isTeenager(33) should return false', () => {
			chai.assert.isFalse(isTeenager(33))
		})
		it('isTeenager(20) should return false', () => {
			chai.assert.isFalse(isTeenager(20))
		})
	})
	describe('isTeenager(13 >= age <= 19)', () => {
		it('isTeenager(15) should return true', () => {
			chai.assert.isTrue(isTeenager(15))
		})
		it('isTeenager(17) should return true', () => {
			chai.assert.isTrue(isTeenager(17))
		})
		it('isTeenager(13) should return true', () => {
			chai.assert.isTrue(isTeenager(13))
		})
		it('isTeenager(19) should return true', () => {
			chai.assert.isTrue(isTeenager(19))
		})
	})
})
