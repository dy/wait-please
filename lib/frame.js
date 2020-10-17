import raf from './raf.js'

function frame (n = 1) {
  return new Promise(ok => {
    let count = 0
    f()
    function f () {
      if (count === n) return ok()
      count++
      raf(f)
    }
  })
}
export default frame
