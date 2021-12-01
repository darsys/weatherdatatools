const Condition = require('./condition')
module.exports = class WindDirection extends Condition {

  constructor(units = 'deg', maxObservationAge = 300) {
    super(units, maxObservationAge)
  }

  state() {
    return this.avg(60)
  }

  cardinal() {
    return this.cardinalFromDegree(this.state())
  }

  static cardinalFromDegree(degrees) {
    var val = Math.floor((degrees / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }

}