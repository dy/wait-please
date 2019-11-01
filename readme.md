# wait-please [![Build Status](https://travis-ci.org/dy/wait-please.svg?branch=master)](https://travis-ci.org/dy/wait-please) [![unstable](https://img.shields.io/badge/stability-experimental-yellow.svg)](http://github.com/badges/stability-badges)

Create a promise, waiting for the indicated interval. Useful for organizing tests.

[![NPM](https://nodei.co/npm/wait-please.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/wait-please/)

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

###

<p align="right">HK</p>
