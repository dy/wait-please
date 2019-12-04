import { tick, idle, time, frame } from './index.js'
import assert from 'assert'
import t from 'tape'

let log = []

t('basic', async t => {
  tick().then(() => log.push('tick'))
  idle().then(() => log.push('idle'))
  time(0).then(() => log.push('time'))
  frame().then(() => log.push('frame'))

  t.deepEqual(log, [], 'none')

  await idle()
  t.deepEqual(log, ['tick', 'time', 'frame', 'idle'], 'idle')

  t.end()
})
