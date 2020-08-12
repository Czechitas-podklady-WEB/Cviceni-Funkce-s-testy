describe('01 Your name', () => {
	describe('yourName()', () => {
		it('should return string', () => {
			chai.assert.isString(yourName())
		})
		it('should return at least one character', () => {
			chai.assert.isAtLeast(yourName().length, 1)
		})
	})
})
