function tick (n = 1) {
  return new Promise(ok => {
    let count = 0
    f()
    function f () {
      if (count === n) return ok()
      count++
      Promise.resolve().then(f)
    }
  })
}
export default tick
