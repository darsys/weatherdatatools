const expect = require('chai').expect
const Rain = require('../rain.js')
const math = require('mathjs')

// using a test data object to define test array creation
const observationsTestObject = {
  0: 4,
  300: 3,
  3600: 2,
  43200: 1,
  86400: 0
}
const currentDT = unixDT()
const observations = {}
for (const [key, value] of Object.entries(observationsTestObject)) {
  observations[currentDT-key] = value
}
// console.log('Rain test observations object')
// console.log(observations)

describe('rain object test', function() {
  context(`created without constructor arguments (using default)`, function() {
    let rain = new Rain()
    for (const [key, value] of Object.entries(observations)) {
      rain.addObservation(value, key)
    }
    // console.log(rain.observationsList())
    it('state property should return 1 hour rain accumulation', function() {
      expect(rain.state()).to.eql(2)
    })
    it('rain_5m', function() {
      expect(rain.rain_5m()).to.equal(1)
    })
    it('rain_1h', function() {
      expect(rain.rain_1h()).to.equal(2)
    })
    it('rain_12h', function() {
      expect(rain.rain_12h()).to.equal(3)
    })
    it('rain_24h', function() {
      expect(rain.rain_24h()).to.equal(4)
    })
  })
})

function unixDT () {
  return Math.round(new Date().getTime() / 1000)
}


function arrayRange(arr) {
  return math.max(arr)-math.min(arr)
}

// module.exports = class Rain extends Condition {

//   constructor(units = 'mm', maxObservationAge = 86400) {
//     super(units, maxObservationAge)
//   }

//   state() {
//     return super.range(3600)
//   }

//   rain_5m() {
//     return super.range(300)
//   }

//   rain_1h() {
//     return super.range(3600)
//   }

//   rain_12h() {
//     return super.range(43200)
//   }

//   rain_24h() {
//     return super.range(86400)
//   }

// }