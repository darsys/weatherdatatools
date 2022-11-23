const Condition = require('./condition')
module.exports = class WindDirection extends Condition {

  constructor(units = 'deg', maxObservationAge = 300) {
    super(units, maxObservationAge)
  }

  /**
   * Returns current wind direction in degrees
   * @return {Number}  The current wind direction in degrees from 0 (North)
   */
  state() {
    return this.avg(300)
  }

  /**
   * Returns current cardinal wind direction. examples: N, SE
   * @return {String}  The current cardinal wind direction
   */
   cardinal() {
    return this.cardinalFromDegree(this.state())
  }

  /**
   * Returns the cardinal direction from degrees
   * @param  {Number} degrees  The direction in degrees from 0 (North)
   * @return {String} One of the 16 cardinal directions. examples: N, SSE, NW
   */
  static cardinalFromDegree(degrees) {
    var val = Math.floor((degrees / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }

}