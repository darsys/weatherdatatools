const Condition_tracker = require('./condition_tracker')

module.exports = class Temperature extends Condition_tracker {
  
  constructor(units = 'C', maxObservationAge = 3600) {
    super(units, maxObservationAge)
  }

  state() {
    return this.avg(60)
  }

}