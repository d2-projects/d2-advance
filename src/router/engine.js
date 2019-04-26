import Router from 'vue-router'
import mm from 'micromatch'
import { isString } from 'lodash'

export const ROUTER_FEEDBACK = {
  NEED_RELOAD: 'need reload by window.location.reload()',
  RETUEN_NOW: 'need return now'
}

const defend = (to, from, next, rules) => {
  for (const { match, validator, handler } of rules) {
    if (mm.isMatch(to.path, match)) {
      if (validator({ to, from })) {
        const rst = isString(handler) ? handler : handler({ to, from })
        if (rst && isString(rst)) {
          next(rst)
          return ROUTER_FEEDBACK.RETUEN_NOW
        }
      }
    }
  }
}

export default ({ routes, rules, init, after, before }) => {
  const router = new Router({ routes })
  let initState = false
  router.beforeEach(async (...args) => {
    const next = args[2]
    if (!initState && init) {
      try {
        const feedback = await init(...args)
        if (feedback === ROUTER_FEEDBACK.NEED_RELOAD) {
          return window.location.reload()
        }
        initState = true
      } catch (error) {
        // eslint-disable-next-line
        console.error(error)
      }
    }
    if (before) await before()
    const feedback = await defend(...args, rules)
    if (feedback === ROUTER_FEEDBACK.RETUEN_NOW) {
      return
    }
    await next()
  })
  router.afterEach(async () => {
    if (after) await after()
  })
  return router
}
