// PROSÍM NEUPRAVOVAT!

describe('04 Day part', () => {
	describe('Morning', () => {
		it('dayPart(5) should return "morning"', () => {
			chai.assert.equal(dayPart(5), 'morning')
		})
		it('dayPart(9) should return "morning"', () => {
			chai.assert.equal(dayPart(9), 'morning')
		})
		it('dayPart(12) should return "morning"', () => {
			chai.assert.equal(dayPart(12), 'morning')
		})
	})
	describe('Afternoon', () => {
		it('dayPart(13) should return "afternoon"', () => {
			chai.assert.equal(dayPart(13), 'afternoon')
		})
		it('dayPart(15) should return "afternoon"', () => {
			chai.assert.equal(dayPart(15), 'afternoon')
		})
		it('dayPart(17) should return "afternoon"', () => {
			chai.assert.equal(dayPart(17), 'afternoon')
		})
	})
	describe('Evening', () => {
		it('dayPart(18) should return "evening"', () => {
			chai.assert.equal(dayPart(18), 'evening')
		})
		it('dayPart(19) should return "evening"', () => {
			chai.assert.equal(dayPart(19), 'evening')
		})
	})
	describe('Night', () => {
		it('dayPart(20) should return "night"', () => {
			chai.assert.equal(dayPart(20), 'night')
		})
		it('dayPart(23) should return "night"', () => {
			chai.assert.equal(dayPart(23), 'night')
		})
		it('dayPart(0) should return "night"', () => {
			chai.assert.equal(dayPart(0), 'night')
		})
		it('dayPart(4) should return "night"', () => {
			chai.assert.equal(dayPart(4), 'night')
		})
	})
})
