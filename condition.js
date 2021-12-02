const Math = require('mathjs')

module.exports = class Condition {

  #config
  #observations = {}
  #latest
  
  constructor(units = '', maxObservationAge = 300, observations = {}) {
    this.#config = {
      units: units,
      maxObservationAge: maxObservationAge
    }
    // console.debug(observations)
    if (observations.length) {
      this.#observations = observations
      this.#latest = observations[getMaxKey(observations)]
      // console.debug(this.#observations.length())
    }
  }

  get config() {
    return this.#config
  }

  addObservation(observationValue, key) {
    // var key = new Date().getTime() / 1000
    this.#observations[key] = observationValue
    // this.#latest = observationValue
  }

  filterObservations= (timeSpan = 0) => {
    // console.log(this)
    if (timeSpan === 0) return Object.values(this.#observations)
    else {
      return Object.keys(this.#observations).filter((key) => {
        return key < unixDT() - timeSpan
      }).reduce((cur, key) => { 
        return Object.values(Object.assign(cur, { [key]: this.#observations[key] }))
      }, {})
    }
  }

  sum(timeSpan = 0) {
    return Math.sum(this.filterObservations(timeSpan))
  }

  range(timeSpan = 0) {
    var obs = this.filterObservations(timeSpan)
    return Math.max(obs)-Math.min(obs)
  }

  avg(timeSpan = 0) {
    return Math.mean(this.filterObservations(timeSpan))
  }

  max(timeSpan = 0) {
    return Math.max(this.filterObservations(timeSpan))
  }

  latest() {
    return this.#latest
  }

  state() {
    return this.avg
  }

  observationList() {
    return this.#observations
  }

  clear() {
    var val = this.state()
    this.#observations = []
    return val
  }

}

function getMaxKey(obj) {
  return Math.max.apply(null,Object.keys(obj));
}

function getMinKey(obj) {
  return Math.min.apply(null,Object.keys(obj));
}

function unixDT () {
  return Math.round(new Date().getTime() / 1000)
}
