const condition = require('./condition')
const temperature = require('./temperature')
const humidity = require('./humidity')
const pressure = require('./pressure')
const rain = require('./rain')
const wind_speed = require('./wind_speed')
const wind_direction = require('./wind_direction')
module.exports = { temperature, humidity, pressure, rain, wind_speed, wind_direction, condition }
