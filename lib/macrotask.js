const macrotask = typeof requestIdleCallback !== 'undefined' ? requestIdleCallback : setImmediate
export default macrotask
