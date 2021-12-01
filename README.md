# Weather data tools
A js library with utilities to work with weather data

## Classes

condition
: base class for tracking a condition using an array of observations filterable by timeSpan.  Class is designed around an array of observations stored by unix date time key. The class includes typical array functions like avg, min, max, span.

rain
: rain accumulation 5m,1h,12h,24h using a fixed weather station rain reading

wind_speed
: gust and avg speed

wind_dir
: avg, cardinal, static cardinalFromDegree 

temperature:
: avg

humidity
: avg


## Author

- [Damon Vincent](https://github.com/darsys "Damon Vincent")

## 🤝 Support

Contributions, issues, and feature requests are welcome!
