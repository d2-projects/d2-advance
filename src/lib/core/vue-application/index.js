import Emitter from 'events'

export default class VueApplication extends Emitter {
  constructor() {
    super()
    this.router = null
    this.vm = null
    this.store = null
    this.state = {}
    this.ready = false
    this.waitSet = new Set()

    this.on('loadingChunkFailed', this.onLoadingChunkFailed)
  }

  start(starter) {
    try {
      this.beforeStart()
      this.emit('done:beforeStart', this)
      this.store = this.createStore()
      this.emit('done:createStore', this)
      this.router = this.createRouter()
      this.emit('done:createRouter', this)
      this.vm = this.createVM({ store: this.store, router: this.router })
      this.emit('done:createVM', this)

      this.router.onError(error => {
        if (/loading chunk \d* failed./i.test(error.message)) {
          this.emit('loadingChunkFailed', error)
        }
      })

      this.afterStart()
      this.emit('done:afterStart', this)
      this.checkWait(true)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Application start error!')
      starter.fail(error)
    }
  }

  onLoadingChunkFailed() {}
  createStore() {}
  createRouter() {}
  beforeStart() {}
  afterStart() {}
  createVM() {}

  waitFor(note) {
    if (typeof note !== 'string' || note.length < 1) {
      throw new Error('invalid string ' + note)
    }

    this.waitSet.add(note)
    this.emit('wait:add', note)

    return () => {
      this.waitSet.delete(note)
      this.emit('wait:delete', note)
      this.checkWait()
    }
  }

  checkWait(ready) {
    if (ready) {
      this.ready = true
    }
    if (this.ready && this.waitSet.size === 0) {
      this.mount(this.vm)
      this.emit('done:mount', this)
    }
  }

  firstRoutingMiddleware() {
    const done = this.waitFor('first routing')
    let called = false
    return async (_, next) => {
      await next()
      if (!called) {
        called = true
        done()
      }
    }
  }
}
