import macrotask from './macrotask.js'
import time from './time.js'

function idle (n = 1) {
  return new Promise(ok => {
    let count = 0
    f()
    async function f () {
      if (count === n) return ok()
      count++
      await time()
      macrotask(f)
    }
  })
}
export default idle
