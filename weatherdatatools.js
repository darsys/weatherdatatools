// const math = require('mathjs')
const temperature = require('./condition_tracker.js')
const humidity = require('./temperature.js')
const rain = require('./rain.js')
const wind = require('./wind.js')

function twoDecimal (theNumber) {
    return Math.round(theNumber * 10) / 10
}
  
function unixDT () {
    return Math.round(new Date().getTime() / 1000)
}
  
module.exports = { temperature, humidity, rain, wind }
