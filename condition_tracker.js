module.exports = class condition_tracker {

  #observations = []
  #latest
  
  constructor(units = '', maxObservationAge = 300) {
    this.config = {
      units: units,
      maxObservationAge: maxObservationAge
    }
  }

  addObservation(obs) {
    this.#observations[unixDT()] = obs
    this.#latest = obs

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
    return this.#latest
  }
}
  
  function unixDT () {
    return Math.round(new Date().getTime() / 1000)
  }
  