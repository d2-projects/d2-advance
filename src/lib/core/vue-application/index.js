import Emitter from 'events'

export const EventNames = {
  beforeDone: 'beforeDone',
  storeReady: 'storeReady',
  routerReady: 'routerReady',
  vmReady: 'vmReady',
  afterDone: 'afterDone',
  waitFor: 'waitFor',
  waitDone: 'waitDone',
  allReady: 'allReady',
  mounted: 'mounted'
}

export class VueApplication extends Emitter {
  constructor() {
    super()
    this.store = null
    this.router = null
    this.vm = null

    this.readyState = false
    this.waitSet = new Set()

    this.state = {}
  }

  ready(starter) {
    try {
      this.before()
      this.life(EventNames.beforeDone)

      this.store = this.createStore()
      this.life(EventNames.storeReady)

      this.router = this.createRouter()
      this.life(EventNames.routerReady)

      this.vm = this.createVM({ store: this.store, router: this.router })
      this.life(EventNames.vmReady)

      this.after()
      this.life(EventNames.afterDone)

      this.checkWait(true)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Application start error!', error)
      if (starter && starter.fail) {
        starter.fail(error)
      }
    }
  }

  before() {}
  createStore() {}
  createRouter() {}
  createVM() {}
  after() {}

  waitFor(note) {
    if (typeof note !== 'string' || note.length < 1) {
      throw new Error('invalid string ' + note)
    }

    this.waitSet.add(note)
    this.life(EventNames.waitFor, note)

    return () => {
      this.waitSet.delete(note)
      this.life(EventNames.waitDone, note)
      this.checkWait()
    }
  }

  checkWait(readyState) {
    if (readyState) {
      this.readyState = true
    }
    if (this.readyState && this.waitSet.size === 0) {
      this.mount(this.vm)
      this.life(EventNames.mounted)
    }
  }

  life(eventName, ...args) {
    this.emit(eventName, this, ...args)
  }
}
