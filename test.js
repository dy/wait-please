import { tick, idle, time, frame } from 'wait-please'
import justTick from 'wait-please/tick'
import justIdle from 'wait-please/idle'
import justTime from 'wait-please/time'
import justFrame from 'wait-please/frame'
import t from 'tst'

let log = []

t('exports', t => {
  t.is(justTick, tick)
  t.is(justIdle, idle)
  t.is(justTime, time)
  t.is(justFrame, frame)
})

t('basic', async t => {
  tick().then(() => log.push('tick'))
  idle().then(() => log.push('idle'))
  frame().then(() => log.push('frame'))
  time(0).then(() => log.push('time'))

  t.is(log, [], 'none')

  await idle()
  t.is(log, ['tick', 'frame', 'time', 'idle'], 'idle')

  t.end()
})
