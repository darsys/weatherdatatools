const Math = require('mathjs')

module.exports = class Condition {

  #config
  #observations = {}
  
  constructor(units = '', maxObservationAge = 86400, observations = {}) {
    this.#config = {
      units: units,
      maxObservationAge: maxObservationAge
    }
    // console.debug(observations)
    if (observations.length) {
      this.#observations = observations
      console.debug(this.#observations.length())
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

  getObservations = (timeSpan = 0) => {
    // console.log(`filter observations with timespan: ${timeSpan}`)
    if (timeSpan === 0) return Object.values(this.#observations)
    else {
      // var oldestDateTime = unixDT() - timeSpan
      // var filteredKeys = Object.keys(this.#observations).filter((key) => {
      //   return key >= oldestDateTime
      // })
      // // console.log(filteredKeys)
      return Object.keys(this.#observations).filter((key) => {
        return key >= unixDT() - timeSpan
      }).reduce((prevObj, key) => { 
        return Object.values(Object.assign(prevObj, { [key]: this.#observations[key] }))
      }, {})
    }
  }

  removeStaleObservations = () => {
    var oldestDateTime = unixDT() - this.config.maxObservationAge
    var dateTimes = Object.keys(this.#observations).filter( (key) => {
      key < oldestDateTime
    })
    dateTimes.forEach( (key) => {
      delete this.#observations[key]
    })
  }

  sum(timeSpan = 0) {
    return Math.sum(this.getObservations(timeSpan))
  }

  range(timeSpan = 0) {
    var obs = this.getObservations(timeSpan)
    return Math.max(obs)-Math.min(obs)
  }

  avg(timeSpan = 0) {
    return Math.mean(this.getObservations(timeSpan))
  }

  max(timeSpan = 0) {
    return Math.max(this.getObservations(timeSpan))
  }

  latest() {
    return this.#observations[this.maxKey]
  }

  oldest() {
    return this.#observations[this.minKey]
  }

  state() {
    return this.avg
  }

  observationsList() {
    return this.#observations
  }

  clear() {
    var val = this.state()
    this.#observations = []
    return val
  }

  minKey() {
    return Math.min(Object.keys(this.#observations))
  }

  maxKey() {
    return Math.max(Object.keys(this.#observations))
  }

}

function unixDT () {
  return Math.round(new Date().getTime() / 1000)
}
