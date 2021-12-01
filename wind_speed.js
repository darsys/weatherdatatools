const Condition = require('./condition')

module.exports = class Wind extends Condition {

  constructor(units = 'm/s', maxObservationAge = 3600) {
    super(units, maxObservationAge)
  }

  state(timeSpan = 120) {
    return super.avg(timeSpan)
  }

  windAvg(timeSpan = 120) {
    return super.avg(timeSpan)
  }

  windGust(timeSpan = 120) {
    return Math.max(this.filterObservations(timeSpan))
  }

  static wind_mph_kph(windSpeedMPH) {
    return windSpeedMPH * 0.44704
  }

}