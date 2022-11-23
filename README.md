# Weather data tools
A js library with utilities to facilitate working with weather data. The objective of this library is to provide an object to push weather conditions (ie temperature, rainfall, wind speed, wind direction) into an object that can massage and (time) filter the data to provide more meaningfull weather conditions.

Examples:
average windspeed 5 minutes
rainfall 24 hours
average cardinal wind direction - SSW

## Key components

condition
: base class for tracking a condition using an array of observations indexed by timeSpan (tS in seconds before now).  Class is designed around an array of observations stored by unix date time index. The class includes typical array functions like avg, min, max, span, latest.

timeSpan
: timeSpan represents seconds before now. For example timeSpan=300 is observations in the last 5 minutes (300 seconds)

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


## Author

- [Damon Vincent](https://github.com/darsys "Damon Vincent")

## 🤝 Support

Contributions, issues, and feature requests are welcome!
