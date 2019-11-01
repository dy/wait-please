let raf = require('raf')
let queueMicrotask = require('queue-microtask')

let macrotask = typeof requestIdleCallback !== 'undefined' ? requestIdleCallback : setImmediate

module.exports.idle = function task (n = 1) {
  return new Promise(ok => {
    let count = 0
    f()
    function f() {
      if (count === n) return ok()
      count++
      macrotask(f)
    }
  })
}

module.exports.time = function time (n) {
  return new Promise(ok => setTimeout(ok, n))
}

module.exports.frame = function frame (n = 1) {
  return new Promise(ok => {
    let count = 0
    f()
    function f() {
      if (count === n) return ok()
      count++
      raf(f)
    }
  })
}

module.exports.tick = function tick(n = 1) {
  return new Promise(ok => {
    let count = 0
    f()
    function f() {
      if (count === n) return ok()
      count++
      queueMicrotask(f)
    }
  })
}
