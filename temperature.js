const Condition_tracker = require('./condition_tracker')
module.exports = class Temperature extends Condition_tracker {
    state() {
        return this.avg(60)
    }
}