import Router from 'vue-router'
import mm from 'micromatch'
import { isString } from 'lodash'

export const defend = (to, from, next, rules) => {
  for (const { match, validator, handler } of rules) {
    if (mm.isMatch(to.path, match) && validator({ to, from })) {
      const rst = isString(handler) ? handler : handler({ to, from })
      if (rst && isString(rst)) return next(rst)
    }
  }
  next()
}

export default ({ routes, rules, init, after, before }) => {
  const router = new Router({ routes })
  let initState = false
  router.beforeEach(async (...args) => {
    if (!initState && init) {
      const needReload = await init(...args)
      if (needReload) return window.location.reload()
      initState = true
    }
    if (before) await before()
    await defend(...args, rules)
  })
  router.afterEach(async () => {
    if (after) await after()
  })
  return router
}
