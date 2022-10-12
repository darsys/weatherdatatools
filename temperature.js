const Condition = require('./condition')

module.exports = class Temperature extends Condition {
  
  constructor(units = 'C', maxObservationAge = 3600) {
    super(units, maxObservationAge)
  }

  state() {
    return this.avg(60)
  }

}