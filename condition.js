module.exports = class Condition {

  #observations = []
  #latest
  
  constructor(units = '', maxObservationAge = 300, observations = []) {
    this.config = {
      units: units,
      maxObservationAge: maxObservationAge
    }
    if (observations.length) {
      this.#observations = observations
      this.#latest = observations[getMaxKey(observations)]
    }
  }

  get config() {
    return this.config
  }

  addObservation(observationValue, unixDT = unixDT()) {
    this.#observations[unixDT] = observationValue
    this.#latest = observationValue
  }

  filterObservations_timeSpan(timeSpan = 0) {
    if (timeSpan === 0) return this.#observations
    else {
      return Object.keys(this.#observations).filter((key) => {
        return key < unixDT() - timeSpan
      }).reduce((cur, key) => { 
        return Object.assign(cur, { [key]: this.#observations[key] })
      }, {})
    }
  }

  sum(timeSpan = 0) {
    return Math.sum(this.filterObservations(timeSpan))
  }

  range(timeSpan = 0) {
    return Math.range(this.filterObservations(timeSpan))
  }

  avg(timeSpan = 0) {
    return Math.max(this.filterObservations(timeSpan))
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

  observations() {
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
  