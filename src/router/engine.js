import Router from 'vue-router'
import { isMatch } from 'micromatch'
import { isString, isFunction } from 'lodash'

export const Defender = rules => (to, from, next) => {
  for (const { match, interceptor, action } of rules) {
    if (isMatch(to.path, match) && interceptor({ to, from })) {
      const rst = isString(action) ? action : action({ to, from })
      if (rst && isString(rst)) return next(rst)
    }
  }
  next()
}

export const Wrapper = ({ init, after, before, reload, defender }) => {
  let initState = false

  const beforeWrapper = async (...args) => {
    if (!initState && isFunction(init)) {
      const success = await init(...args)
      if (!success) {
        return isFunction(reload) && reload()
      }
      initState = true
    }
    if (isFunction(before)) {
      await before()
    }
    await defender(...args)
  }

  const afterWrapper = async () => {
    if (isFunction(after)) {
      await after()
    }
  }

  return [beforeWrapper, afterWrapper]
}

export default ({ routes, rules, init, after, before }) => {
  const router = new Router({ routes })

  const reload = window.location.reload
  const defender = Defender(rules)

  const [beforeWrapper, afterWrapper] = Wrapper({
    rules,
    init,
    before,
    after,
    reload,
    defender
  })

  router.beforeEach(beforeWrapper)
  router.afterEach(afterWrapper)

  return router
}
