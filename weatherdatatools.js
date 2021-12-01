const condition = require('./condition')
const temperature = require('./temperature.js')
const humidity = require('./humidity.js')
const pressure = require('./pressure.js')
const rain = require('./rain.js')
const wind = require('./wind_speed.js')

module.exports = { temperature, humidity, pressure, rain, wind, condition }
