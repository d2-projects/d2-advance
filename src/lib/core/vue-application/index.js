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
  }

  start() {
    this.beforeStart()
    this.store = this.createStore()
    this.router = this.createRouter()
    this.vm = this.createVM({ store: this.store, router: this.router })
    this.afterStart()
    this.checkWait(true)
  }

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
