import UIConstant from './UIConstant'
export default class Logger {
  constructor () {
    this.level = UIConstant.LOGGER_LEVEL.DEBUG
  }

  getLogger (scopeClass) {
    this._setScope = `[${scopeClass}]: `
    return this
  }

  _padStart (string, length, pad) {
    const s = String(string)
    if (!s || s.length >= length) return string
    return '' + Array(length + 1 - s.length).join(pad) + string
  }
  _getTimestamp () {
    const $d = new Date()
    this.$y = $d.getFullYear()
    this.$M = $d.getMonth()
    this.$D = $d.getDate()
    this.$W = $d.getDay()
    this.$H = $d.getHours()
    this.$m = $d.getMinutes()
    this.$s = $d.getSeconds()
    this.$ms = $d.getMilliseconds()

    const yearStr = this.$y
    const monthStr = this._padStart(this.$M + 1, 2, '0')
    const dayStr = this._padStart(this.$D, 2, '0')
    const HourStr = this._padStart(this.$H, 2, '0')
    const minuesStr = this._padStart(this.$m, 2, '0')
    const secondStr = this._padStart(this.$s, 2, '0')
    const millionSecond = this._padStart(this.$ms, 3, '0')
    return `${yearStr}-${monthStr}-${dayStr} ${HourStr}:${minuesStr}:${secondStr} ${millionSecond}`
  }
  isErrorEnabled = () => this.level >= UIConstant.LOGGER_LEVEL.ERROR;
  isWarnEnabled = () => this.level >= UIConstant.LOGGER_LEVEL.WARN;
  isInfoEnabled = () => this.level >= UIConstant.LOGGER_LEVEL.INFO;
  isDebugEnabled = () => this.level >= UIConstant.LOGGER_LEVEL.DEBUG;
  isLogEnabled = () => this.level >= UIConstant.LOGGER_LEVEL.LOG;

  debug (...message) {
    if (this.isDebugEnabled()) {
      console.debug(`%c [${this._getTimestamp()}] [DEBUG] ${this._setScope}`, 'background-color:#01B3B0;color:white;border-radius:3px', ...message)
    }
  }

  error (...message) {
    if (this.isErrorEnabled()) {
      console.error(`%c [${this._getTimestamp()}] [ERROR] ${this._setScope}`, 'background-color:#FE6C67;color:white;border-radius:3px', ...message)
    }
  }

  log (...message) {
    if (this.isLogEnabled()) {
      console.log(`%c [${this._getTimestamp()}] [LOG] ${this._setScope}`, 'background-color:#4BB915;color:white;border-radius:3px', ...message)
    }
  }

  info (...message) {
    if (this.isInfoEnabled()) {
      console.log(`%c [${this._getTimestamp()}] [INFO] ${this._setScope}`, 'background-color:#4BB915;color:white;border-radius:3px', ...message)
    }
  }

  warn (...message) {
    if (this.isWarnEnabled()) {
      console.warn(`%c [${this._getTimestamp()}] [WARN] ${this._setScope}`, 'background-color:#BBB900;color:white;border-radius:3px', ...message)
    }
  }
}
