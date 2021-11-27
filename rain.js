const Condition_tracker = require("./condition_tracker")

module.exports = class Rain extends Condition_tracker {

  constructor(units = 'mm', maxObservationAge = 86400) {
    super(units, maxObservationAge)
  }
    
  state() {
    return super.range(300)
  }
}
    // addObservation (rainAmount) {
    //     var dt = unixDT()
    //     // var rainMm = rainAmount // twoDecimal(rainIn * 25.4)
    //     this.observations[dt] = rainAmount
    //     console.debug(`adding rain observation: ${rainAmount}`)
    //     var oldestObservation = dt
    //     var observationNumber = 0
    //     Object.keys(observationNumber).sort(function (a, b) { return b - a }).forEach(function (key) {
    //       observationNumber += 1
    //       // if observation is outDated, remove it
    //       if (key < (dt - this.maxObservationAge)) {
    //         console.debug(`remove outdated observations: ${key}`)
    //         delete observationNumber[key]
    //       } else {
    //         // if reading is the oldest keep the key
    //         if (key < oldestObservation) oldestObservation = key
    //       }
    //     })
    //     console.debug(`datetime: ${dt}    oldest: ${oldestObservation}    age: ${dt - oldestObservation}`)
    //     this.accumulator = rainAmount - observationNumber[oldestObservation]
    //     console.log(`observationNumber added: ${rainAmount}  accumulation: ${this.accumulator} total observations: ${observationNumber}`)
    //     return this.accumulator
    // }
      
  // }

// original wind function
//
// function convertRain (rainIn) {
//   var dt = unixDT()
//   var rainMm = twoDecimal(rainIn * 25.4)
//   rainReadings[dt] = rainMm
//   console.log('dt ', dt)
//   var oldestReading = dt
//   var readings = 0
//   Object.keys(rainReadings).sort(function (a, b) { return b - a }).forEach(function (key) {
//     readings += 1
//     // if reading is over an hour old, remove it
//     if (key < (dt - 3600)) {
//       console.log('delete ', key)
//       delete rainReadings[key]
//     } else {
//       // if reading is the oldest keep the key
//       if (key < oldestReading) oldestReading = key
//     }
//   })
//   console.log('dt ', dt, 'oldest', oldestReading, 'age', dt - oldestReading)
//   var accumulator = rainMm - rainReadings[oldestReading]
//   console.log('rain_current', rainMm, 'rain last hour', accumulator, 'reading count', readings)
//   return accumulator
// }