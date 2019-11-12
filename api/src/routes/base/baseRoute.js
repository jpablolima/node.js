class BaseRoute {
  static methods() {
    return Object.getOwnPropertyNames(this.prototype)
        .filter(method => method !== 'constructior' && !method.startsWith('_'))
  }
}

module.exports = BaseRoute