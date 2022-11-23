const Condition = require('./condition')
module.exports = class Pressure extends Condition {

  constructor(units = 'deg', maxObservationAge = 300) {
    super(units, maxObservationAge)
  }

  state() {
    return this.avg(3600)
  }

}