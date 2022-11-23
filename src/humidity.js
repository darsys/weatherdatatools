const Condition = require('./conditionf')

module.exports = class Humidity extends Condition {
  constructor(units = '%', maxObservationAge = 3600) {
    super(units, maxObservationAge)
  }

  state() {
    return this.avg(300)
  }

}