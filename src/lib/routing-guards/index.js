import Emitter from 'events'
import compose from './compose'

export default class RoutingGuards extends Emitter {
  constructor() {
    super()
    this.middleare = []
    this.context = {
      onerror: console.error
    }
  }

  use(fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('middleware must be function!')
    }
    this.middleare.push(fn)
    return this
  }

  callback() {
    const fn = compose(this.middleare)
    return async (to, from, pureNext = () => {}) => {
      let nextCalled = false
      const next = (...args) =>
        !nextCalled ? ((nextCalled = true), pureNext(...args)) : 0

      const routing = { to, from, next }

      const ctx = this.createContext(routing)
      try {
        await fn(ctx)
        next()
      } catch (err) {
        return ctx.onerror(err)
      }
    }
  }

  createContext(routing) {
    const context = { ...this.context }
    context.app = this
    context.routing = routing

    // * ctx.done === ctx.routing.next
    context.done = routing.next

    context.from = routing.from
    context.to = routing.to

    context.state = {}
    return context
  }
}
