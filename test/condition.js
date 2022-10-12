// const assert = require('assert').strict;
const expect = require('chai').expect
const Condition = require('../condition.js')
const math = require('mathjs')

const testObservations = [22, 22, 22.5, 22.75, 23, 23.5, 23.5, 24, 24.5, 25]
const observations = {}
// create test observation array
const testObservationTimespan = 100
const udt = unixDT()
for ( let i = 0; i < testObservations.length; i++ ) {
  observations[udt - i * testObservationTimespan] = testObservations[i]
}
// console.log(observations)

describe('condition object test', function() {
  context('default constructor arguments', function() {
    let condition = new Condition()
    for (const [key, value] of Object.entries(observations)) {
      condition.addObservation(value, key)
    }
    it('observations array object created correctly', function() {
      // console.log(condition.observationsList())
      expect(condition.observationsList()).to.eql(observations)
    })
    it('getObservations() returns observation values', function() {
      // console.log(condition.observationsList())
      expect(condition.getObservations()).to.eql(Object.values(observations))
    })
    it('getObservations(timeSpan=400) returns only filtered values', function() {
      expect(condition.getObservations(400)).to.eql(Object.values(observations).slice(-5))
    })
    it('avg of observations', function() {
      expect(condition.avg()).to.equal(math.mean(testObservations))
    })
    it('max of observations', function() {
      expect(condition.max()).to.equal(math.max(testObservations))
    })
    it('range of observations', function() {
      expect(condition.range()).to.equal(arrayRange(testObservations))
    })
  })
})

function arrayRange(arr) {
  return math.max(arr)-math.min(arr)
}
function unixDT () {
  return Math.round(new Date().getTime() / 1000)
}
