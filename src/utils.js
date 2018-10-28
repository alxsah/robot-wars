const executeIfFunction = f =>
  typeof f === 'function' ? f() : f

const executeSwitchcase = cases => defaultCase => key =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase

// Alternative switch implementation
const switchcase = cases => defaultCase => key =>
  executeIfFunction(executeSwitchcase(cases)(defaultCase)(key))

module.exports = { switchcase };