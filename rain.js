const Condition = require("./condition")

module.exports = class Rain extends Condition {

  constructor(units = 'mm', maxObservationAge = 86400) {
    super(units, maxObservationAge)
  }

  state() {
    return super.range(3600)
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