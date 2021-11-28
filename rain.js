const Condition_tracker = require("./condition_tracker")

module.exports = class Rain extends Condition_tracker {

  constructor(units = 'mm', maxObservationAge = 86400) {
    super(units, maxObservationAge)
  }

  state() {
    return super.range(300)
  }

  rain_5m() {
    return super.range(300)
  }

  rain_1h() {
    return super.range(3600)
  }

  rain_12h() {
    return super.range(43200)
  }

  rain_24h() {
    return super.range(86400)
  }

}