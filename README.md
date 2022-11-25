# Weather data tools
weatherdatatools is a js library to facilitate working with weather data. This library means to provide objects in which to push weather condition readings (ie temperature, rainfall, wind speed, wind direction) over time that can then provide processed meaningful weather conditions.

Examples:
average windspeed 5 minutes
rainfall 24 hours
average cardinal wind direction - SSW

## Key components

condition
: Base class for tracking a condition using an array of observations indexed by timestamps. The class includes typical array functions like avg, min, max, span, latest. A key feature of this class is the ability to filter observations by timeSpam which represents seconds before now. For example a timeSpan of 300 would be observations in the last 5 minutes (300 seconds)

rain
: rain accumulation 5m,1h,12h,24h using a static rain value

wind_speed
: windGust(tS=300), windAvg(tS=300), static wind_mph_kph(speedMPH)

wind_dir
: avg(), cardinal, static cardinalFromDegree 

temperature:
: avg

humidity
: avg

## Example
```javascript
const wdt = require('weatherdatatools')

const rain = 

```

## Author

- [Damon Vincent](https://github.com/darsys "Damon Vincent")

## 🤝 Support

Contributions, issues, and feature requests are welcome!
