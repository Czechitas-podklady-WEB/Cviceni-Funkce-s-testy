describe('Your name', () => {
	describe('yourName()', () => {
		it('should return string', () => {
			chai.assert.equal(typeof yourName(), 'string')
		})
		it('should return at least one character', () => {
			chai.assert.isAtLeast(yourName().length, 1)
		})
	})
})
