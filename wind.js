module.exports = class wind {

  constructor(units = 'mi/h', maxObservationAge = 3600) {
    this.config = {
      units: units,
      maxObservationAge: maxObservationAge
    }
   this.accumulator = 0
   this.observations = []
  }

  addObservation(windSpeed) {
    this.observations[unixDT()] = windSpeed 
  }

  filterObservations(timeSpan = 0) {
    if (timeSpan === 0) return this.observations.filter()
    else {
      return Object.keys(this.observations).filter((key) => {
        return key < unixDT() - timeSpan
      }).reduce((cur, key) => { 
        return Object.assign(cur, { [key]: this.observations[key] })
      }, {})
    }
  }

  windAvg(timeSpan = 0) {
      return Math.max(this.filterObservations(timeSpan))
  }

  windGust(timeSpan = 0) {
    return Math.max(this.filterObservations(timeSpan))
  }

  
  updateWindspeeds() {

  }

  static wind_mph_kph(windSpeedMPH) {
    return windSpeedMPH * 0.44704
  }

}

function unixDT () {
  return Math.round(new Date().getTime() / 1000)
}


// original wind function
//
// function convertWind (speedK) {
//   // var speedK = twoDecimal(speedMPH * 0.44704)
//   windSpeeds.push(speedK)
//   if (speedK >= windGust) {
//     // console.log('update gust from', windGust, 'to', speedK)
//     windGust = speedK
//     currentConditions['wind_gust'] = windGust
//   }
//   var total = 0
//   windSpeeds.forEach(function (thisSpeed) {
//     total += thisSpeed
//   })
//   var avgSpeed = twoDecimal(total / windSpeeds.length)
//   // console.log('windspeed', speedK, 'avg', avgSpeed)
//   return avgSpeed
// }
