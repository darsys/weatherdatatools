const Condition_tracker = require('./condition_tracker')

module.exports = class Humidity extends Condition_tracker {
  constructor(units = '%', maxObservationAge = 3600) {
    super(units, maxObservationAge)
  }

  state() {
    return this.avg(60)
  }

}