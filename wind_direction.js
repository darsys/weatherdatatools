const Condition_tracker = require('./condition_tracker')
module.exports = class WindDirection extends Condition_tracker {
    
    constructor(units = 'mm', maxObservationAge = 3600) {
        super(units, maxObservationAge)
    }

    state() {
        return this.avg(60)
    }

    cardinalDir() {
        var val = Math.floor((this.state() / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }

}