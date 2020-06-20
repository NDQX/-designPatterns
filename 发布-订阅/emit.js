function Glo () {
  this.eventInfo = {}
}

Glo.prototype.registerEvent = function (evevntStr,cb) {
  this.eventInfo[evevntStr] = cb
}

Glo.prototype.emit = function (eventStr, params) {
  this.eventInfo[eventStr](params)
}

Glo.prototype.on = function (eventStr, cb) {
  this.registerEvent(eventStr, cb)
}

export default Glo