const assert = require('assert').strict;
var Condition = require('../condition.js')

const rainTestObservations = [22, 22, 22.5, 22.75, 23, 23.5, 23.5, 24, 24.5, 25]
const observations = {}
// create test observation array
const udt = unixDT()
for ( let i = 0; i < rainTestObservations.length; i++ ) {
  observations[udt + i * 50] = rainTestObservations[i]
}

describe('condition object', function() {
  context('without arguments', function() {
    it('should return range of observations', function() {
      let condition = new Condition()
      for (const [key, value] of Object.entries(observations)) {
        condition.addObservation(value,key)
      }
            [
                { title: "run code", completed: false },
                { title: "test everything", completed: false }
            ]
        );
      expect(rain()).to.equal(0)
    })
  })
  
  // context('with number arguments', function() {
  //   it('should return sum of arguments', function() {
  //     expect(sum(1, 2, 3, 4, 5)).to.equal(15)
  //   })
    
  //   it('should return argument when only one argument is passed', function() {
  //     expect(sum(5)).to.equal(5)
  //   })
  // })
  
  // context('with non-number arguments', function() {
  //   it('should throw error', function() {
  //     expect(function() {
  //       sum(1, 2, '3', [4], 5)
  //     }).to.throw(TypeError, 'sum() expects only numbers.')
  //   })
  // })
  
})

function testConditionArray() {
  const TestObservations = [22, 22, 22.5, 22.75, 23, 23.5, 23.5, 24, 24.5, 25]
  const observations = {}
  // create test observation array
  const udt = unixDT()
  for ( let i = 0; i < rainTestObservations.length; i++ ) {
    observations[udt + i * 50] = rainTestObservations[i]
  }
  return observations
}

function unixDT () {
  return Math.round(new Date().getTime() / 1000)
}