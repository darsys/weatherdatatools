const expect = require('chai').expect
const Wind = require('../wind_speed.js')
const math = require('mathjs')

// using a test data object to define test array creation
const observationsTestObject = {
  0: 2.5,
  100: 7.5,
  200: 7,
  300: 3,
  400: 2,
  500: 12,
  600: 2.5,
  700: 2,
  800: 22,
  3600: 0,
  3700: 1.5
}
const currentDT = unixDT()
const observations = {}
for (const [key, value] of Object.entries(observationsTestObject)) {
  observations[currentDT-key] = value
}
// console.log('Wind test observations object')
// console.log(observations)

describe('wind object test', function() {
  context(`created without constructor arguments (using default)`, function() {
    let wind = new Wind()
    for (const [key, value] of Object.entries(observations)) {
      wind.addObservation(value, key)
    }
    // console.log(rain.observationsList())
    it('state property should return 5 minute avg', function() {
      expect(wind.state()).to.equal(5)
    })
    it('windAvg property default 5 minute avg', function() {
      expect(wind.windAvg()).to.equal(5)
    })
    it('windGust property should return 5 minute max', function() {
      expect(wind.windGust()).to.equal(7.5)
    })
    it('windGust(600) property should return 10 minute max', function() {
      expect(wind.windGust(600)).to.equal(12)
    })
  })
})

function unixDT () {
  return Math.round(new Date().getTime() / 1000)
}
