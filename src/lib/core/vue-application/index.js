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
      this.store = this.createStore()
      this.router = this.createRouter()
      this.vm = this.createVM({ store: this.store, router: this.router })

      this.router.onError(error => {
        if (/loading chunk \d* failed./i.test(error.message)) {
          this.emit('loadingChunkFailed', error)
        }
      })

      this.afterStart()
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

    return () => {
      this.waitSet.delete(note)
      this.checkWait()
    }
  }

  checkWait(ready) {
    if (ready) {
      this.ready = true
    }
    if (this.ready && this.waitSet.size === 0) {
      this.mount(this.vm)
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
