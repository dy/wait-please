function time (n) {
  return new Promise(ok => setTimeout(ok, n))
}
export default time
