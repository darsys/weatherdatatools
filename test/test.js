var assert = require('assert')
describe('Testing', function() {
  describe('123', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })
  })
})