const condition = require('./src/condition')
const temperature = require('./src/temperature')
const humidity = require('./src/humidity')
const pressure = require('./src/pressure')
const rain = require('./src/rain')
const wind_speed = require('./src/wind_speed')
const wind_direction = require('./src/wind_direction')
module.exports = { temperature, humidity, pressure, rain, wind_speed, wind_direction, condition }
