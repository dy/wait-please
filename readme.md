# wait-please

Create a promise, waiting for the indicated interval. Useful for organizing tests.

```js
import { time, frame, time, idle } from 'wait-please'

// 3 microtask ticks (queueMicrotask, Promise.resolve ~ same as process.nextTick)
await tick(3)

// 3 animation frames (requestAnimationFrame)
await frame(3)

// 150 ms (setTimeout)
await time(150)

// 1 macrotask in task queue (idle, setImmediate)
await idle()
```

## Similar

* [queue-microtask](https://github.com/feross/queue-microtask)
* [macrotask](https://ghub.io/macrotask)
* [tic-tac](https://www.npmjs.com/package/tic-tac)

<p aligh="right">HK</p>
